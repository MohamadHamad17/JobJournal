# JobJournal

A job tracking application designed to help users manage their job search process effectively. Built with React, Vite, and Node.js, it provides a CRUD (Create, Read, Update, Delete) functionality for job entries and offers a seamless user experience for tracking applications, viewing statistics, and managing profiles. 

I wanted to create an application for individuals actively seeking employment, enabling them to stay organized and keep track of their job applications. JobJournal allows users to monitor which jobs they have applied to in the past six months through the stats page. Additionally, users can customize their profiles on the profile page to maintain a personalized experience.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Admin Features](#admin-features)
- [Images](#images)
- [Technologies Used](#technologies-used)
- [Future Development](#future-development)
- [Live Application](#live-application)
- [Contributing](#contributing)

## Overview

JobJournal is your ultimate job application tracker, designed to help you stay organized and focused. With JobJournal, you can easily log and manage the jobs you've applied to, track application statuses, monitor your stats, and create a personalized profile. Stay on top of your job search, track your progress, and take charge of your career journey like never before!

## Features

- User registration and login
- Add, edit, and delete job entries
- View job application statistics
- Responsive design for all devices
- Dashboard for easy navigation
- Light and dark themes
-  Explore without registration: Users can explore the app without creating an account. However, creating, editing, or deleting entries requires registration.


## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/jobjournal.git
   cd jobjournal
   ```

2. Install dependencies for both the client and server:
   ```bash
   npm run setup-project
   ```

3. Create a `.env` file in the root directory. The application uses environmental variables to manage sensitive information such as database connection strings and JWT secrets.

4. Start the development server:
   ```bash
   npm run dev
   ```

The app will be running at [http://localhost:5173](http://localhost:5173).

## Usage

1. Register an account or log in using existing credentials.
2. Navigate to the dashboard to view your job statistics.
3. Use the navigation bar to add, edit, or delete job entries.
4. Explore the stats page for insights into your job search progress.
5. Create a personalized profile!

## How It Works

### Frontend
The frontend is built with React and Vite. It uses React Router for navigation and Styled Components for CSS-in-JS styling.

- **Landing Page:** The first page users see, featuring an introduction to the app and navigation links to register or log in.
- **Register Page:** Allows users to create a new account by entering their details.
- **Dashboard:** Displays statistics and provides access to other pages like adding or editing jobs.

### Backend
The backend is built with Node.js and Express, using MongoDB for data storage.

- **User Authentication:** Passwords are hashed using bcrypt, and authentication is managed with JWT.
- **API Routes:** Includes CRUD operations for managing job entries.
- **Validation:** Data validation is handled using Express Validator.

### Data Flow
1. Users interact with the frontend to input or view data.
2. API calls are made to the backend to fetch or manipulate data.
3. The backend processes the requests, interacts with MongoDB, and returns responses.
4. The frontend updates the UI based on the responses.

## Admin Features

JobJournal provides additional functionality for administrators to manage the platform effectively:

- **View Total Users:** Administrators can see the total number of registered users on the platform.
- **View Active Jobs:** Administrators can monitor the total number of active job entries available within the system.

These features enable admins to maintain an overview of platform activity and ensure its smooth operation.

## Images

### Landing Page
<img width="1425" alt="landing page" src="https://github.com/user-attachments/assets/c3236d3f-2cfb-4654-88ca-6b8e99ee37f9" />

### Register Page
<img width="1425" alt="Register page" src="https://github.com/user-attachments/assets/a5423896-53b3-410c-9573-0654502b18f8" />

### Dashboard
<img width="1425" alt="Screenshot 2025-01-10 at 10 20 23 PM" src="https://github.com/user-attachments/assets/296db4fc-ce4f-4686-9de1-e7418f534356" />

### All Jobs
<img width="1425" alt="Screenshot 2025-01-10 at 10 21 09 PM" src="https://github.com/user-attachments/assets/60701812-cf9b-4f48-b328-a91b1b1f9196" />

### Stats
<img width="1425" alt="Screenshot 2025-01-10 at 10 21 27 PM" src="https://github.com/user-attachments/assets/8d31fd52-3c1b-4d8d-ab6c-881aff75894f" />

### Profile
<img width="1425" alt="Screenshot 2025-01-10 at 10 21 55 PM" src="https://github.com/user-attachments/assets/7202fba9-b9fa-4776-8024-dd53a5015d9e" />

## Technologies Used

### Frontend
- React
- Vite
- Styled Components
- React Router

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt.js

### Additional Libraries
- react-icons
- react-toastify
- dayjs

## Future Development

Additional features are still being integrated within the system, with potential plans to utilize OpenAI's API for enhanced user interaction and dynamic functionality. These updates aim to provide an even more personalized and efficient experience for users while exploring innovative AI-powered solutions.

## Live Application

The JobJournal application is deployed on Render and available for public use. Users can register, log in, and fully utilize the application as designed.

Additionally, users can explore the app without creating an account to get a feel for its features. However, they cannot create, edit, or delete job entries until they register. The demo page is pre-populated with "fake" job entries for exploration purposes.

[Visit JobJournal](https://jobjournal.onrender.com)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.
