# Weather App

A simple weather app that fetches weather data from an external API and displays it to the user. The app is built using Node.js, Express, JavaScript, and Pug for rendering the UI.

## Getting Started

### Prerequisites

- Node.js (https://nodejs.org)
- OpenWeatherMap API Key (https://openweathermap.org/appid)

### Installation

1. Clone the repository:

```
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

2. Install the dependencies:

```npm install```


3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```OPENWEATHERMAP_API_KEY=your-api-key```


4. Start the application:

```npm start```


The app should now be running on http://localhost:3000.

## Usage

1. Open your web browser and navigate to http://localhost:3000.

2. Enter the name of a city in the input field and click the "Get Weather" button.

3. The app will fetch weather data for the entered city from the OpenWeatherMap API and display it on the page.

## Features

- Fetches real-time weather data using the OpenWeatherMap API.
- Displays the temperature in Celsius with two decimal places.
- Provides information about temperature, weather description, humidity, wind speed, and pressure.

## Technologies Used

- Node.js
- Express
- JavaScript
- Pug (for rendering the UI)
- Axios (for making HTTP requests)

## Screenshots

![Weather App Screenshot](https://github.com/adarsh-2425/weather_notifier/blob/main/webpage%20screenshot.png)


## Contributing

Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

