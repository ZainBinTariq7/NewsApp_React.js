# React News App

This ReactJS project is a simple news application that fetches news data from the [NewsAPI](https://newsapi.org/) service. It utilizes Bootstrap for styling and incorporates JavaScript functions to enhance functionalities and features.

## Features

- **Responsive Design**: Utilizes Bootstrap CSS for a mobile-friendly and responsive user interface.
- **Loading Bar**: Implements the `react-top-loading-bar` library to display a loading bar indicating the progress of data fetching.
- **News Categories**: Allows users to browse news in different categories such as business, entertainment, sports, health, technology, and science.
- **API Integration**: Fetches news data from the [NewsAPI](https://newsapi.org/) service using a provided API key.

## Project Structure

- **App Component**: The main component (`App.js`) sets up the React Router and renders the Navbar and News components.
- **Navbar Component**: Contains navigation links to different news categories.
- **News Component**: Fetches and displays news based on the selected category.

## Getting Started

1. Clone the repository: `git clone [repository_url]`
2. Install dependencies: `npm install`
3. Create a `.env` file in the project root and add your NewsAPI key: `REACT_APP_NEWS_API=your_api_key`
4. Start the development server: `npm start`

## Usage

- Access the application in your browser at `http://localhost:3000`.
- Navigate through different news categories using the Navbar links.
- Observe the loading bar indicating the progress of news data fetching.

## API

- The application uses the [NewsAPI](https://newsapi.org/) service. Refer to their [website](https://newsapi.org/) for more information on available endpoints and documentation.

## Dependencies

- React
- React Router
- Bootstrap
- react-top-loading-bar

## Notes

- Ensure you have a valid NewsAPI key to fetch news data.

Feel free to customize and enhance the application as needed!
