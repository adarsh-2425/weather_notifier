const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const port = process.env.port || 3000;
const apiKey = process.env.apiKey;

//pug middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//home
app.get('/', (req, res) => {
  res.render('weather', {weatherData: null});
});

//weather main
app.get('/weather', async(req, res) => {
  const { city } = req.query;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    weatherData.main.tempCelsius = weatherData.main.temp - 273.15;

    res.render('weather', { weatherData })
  } catch (err)  {
    console.error(err.message);
    res.render('weather', {weatherData: null});
  }
});

app.listen(port, () => {
  console.log('server running on port' + port);
});