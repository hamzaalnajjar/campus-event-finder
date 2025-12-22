Live Deployment (Vercel):
https://campus-event-finder-taupe.vercel.app


Campus Event Finder
Project Description

Campus Event Finder is a web application that helps students find upcoming campus events in one place. The application stores event information in a database and allows users to view events by category and date. This project was built to practice full-stack web development, including frontend design, backend APIs, and database integration.

The backend uses a Node.js and Express server connected to a Supabase database. The frontend communicates with the backend using the Fetch API to retrieve event data.

Target Browsers

This application is designed to run on modern browsers, including:

Google Chrome (desktop)

Mozilla Firefox (desktop)

Safari (desktop)

Developer Manual

This section is intended for future developers who want to run or extend this project.

Project Structure
campus-event-finder/
│
├── server/
│   ├── server/
│   │   └── index.js
│   └── supabaseClient.js
│
├── package.json
├── .gitignore

Installation Instructions

Clone the repository:

git clone https://github.com/hamzaalnajjar/campus-event-finder.git


Navigate into the project folder:

cd campus-event-finder


Install dependencies:

npm install


Create a .env file in the root directory with the following variables:

SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_publishable_key

Running the Application

To start the backend server:

node server/server/index.js


The server will run locally and listen for API requests.

API Endpoints
GET /events

Retrieves all events from the Supabase database

Returns event title, category, and date

Used by the frontend to display events

POST /events

Adds a new event to the database

Accepts title, category, and date in the request body

Can be extended for event creation features

Database

The application uses Supabase as an external data source.
The main table is called events and includes:

id

created_at

title

category

date

Known Issues

The frontend is minimal and could be improved with better styling

No user authentication is implemented

Error handling can be expanded

Future Improvements

Add user accounts and authentication

Add filters for event categories and dates

Improve frontend layout and accessibility

Add editing and deleting of events

Deploy frontend and backend with full production configuration

Deployment

The project is intended to be deployed using Vercel for the frontend and Supabase for the backend database. Environment variables must be configured in the deployment platform for the application to function correctly.

Contributor:

Hamza Alnajjar
