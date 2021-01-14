export const fetchWeatherData = async (city: string) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
  console.log(process.env);
};
