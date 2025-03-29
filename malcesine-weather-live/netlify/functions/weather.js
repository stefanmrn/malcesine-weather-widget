
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const apiKey = "575dd4ffaedd8785a54cb6b63cd270f0";
  const city = "Malcesine";
  const country = "IT";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch weather data" })
    };
  }
};
