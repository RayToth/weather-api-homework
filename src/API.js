import axios from "axios";

/*export const fetchWeatherData = async (city: string) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
};*/

export const fetchWeatherData = async (city) => {
  return await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    )
    .catch((error) => console.error(`Error: ${error}`));
};
