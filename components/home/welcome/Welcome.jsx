import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
import { useRouter } from "expo-router";

const jobsType = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter();
  const [ActiveJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Sehan</Text>
        <Text style={styles.welcomeMessage}>Find Your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          {/* <Image source={icons.search} style={styles.searchIcon} /> */}
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
          source={icons.search} 
          resizeMode="contain"
          style={styles.searchBtnImage} 
          />
        </TouchableOpacity>
      </View>

<View style={styles.tabsContainer}>
  <FlatList
  data = {jobsType}
  renderItem={({item}) => (
    <TouchableOpacity 
    style={styles.tab(ActiveJobType, item)} 
    onPress={() => {
      setActiveJobType(item);
      router.push(`/search/${item}`)
    }}
    >
        <Text style={styles.tabText(ActiveJobType,item)} >{item}</Text>
    </TouchableOpacity>
  )}
  keyExtractor={item => item}
  contentContainerStyle = {{columnGap : SIZES.small}}
  horizontal
  />
</View>

    </View>
  );
};

export default Welcome;
