# Job-in

**Job-in** is a React Native mobile application that helps users find real-time job vacancies. It utilizes the Jsearch API from RapidAPI to provide up-to-date job listings.

## Features

- **Real-time Job Search**: Search for job vacancies based on different criteria.
- **Job Categories**: Browse job opportunities by various types such as Full-time, Part-time, and Contractor.
- **Pagination**: Navigate through job listings with pagination controls.
- **Responsive Design**: Optimized for Android devices.

## Installation

To get started with the **Job-in** app, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager, which comes with Node.js.

### Clone the Repository

   
    git clone https://github.com/SDP-1/job-in.git
    cd job-in

### Run the following command to install all the necessary dependencies:

    npm install

### Set Up API Key
- Obtain an API key from 'Jsearch' API.
- Add your API key to the 'handleSearch' function in 'JobSearch.js'. Update the 'X-RapidAPI-Key' header in the request options.

### Start the Application
    
    npm run start

### Directory Structure

- `components/:` Contains reusable components such as `ScreenHeaderBtn`, `NearbyJobCard`, and `Welcome`.
-`constants/:` Stores constants like color schemes, icons, and sizes.
-`styles/:` Contains style sheets used across the application.
-`pages/:` Includes the main pages of the application, such as `Home` and `JobSearch`.

### Directory Structure

- `Home:` Displays the welcome screen, job categories, and a search bar.
- `JobSearch:` Handles the job search functionality and displays search results.
- `Welcome:` Provides the UI for the search bar and job type tabs.

### Contact
For any inquiries or issues, please contact Your `sehandevinda1@gmail.com`.

###Sample Video & Screen shots

![sdadasd 00_00_00-00_00_30](https://github.com/user-attachments/assets/b9e0ed2b-b8e1-4f66-94c5-36b2aecfc79f)

![Screenshot 2024-07-26 100229](https://github.com/user-attachments/assets/46af8a4f-8dd6-4030-8d29-0c34badf0a1d)
![Screenshot 2024-07-26 100014](https://github.com/user-attachments/assets/84521985-8f9c-4456-9260-05ffe958d437)
![Screenshot 2024-07-26 095933](https://github.com/user-attachments/assets/2feefd68-b74b-440d-b842-74585a5c6c34)
