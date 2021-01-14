import React, { useState } from "react";
import styled from "styled-components";
import { fetchWeatherData } from "../API";

const StyledCard = styled.div`
  width: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  border: solid;
  margin: 30px auto 0 auto;
  padding: 20px;
`;

function CurrentWeatherCard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState("");
  const [feelsLike, setFeelsLike] = useState("");

  const fetchIcon = (icon) => {};

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city).then((response) => {
      const allData = response.data;
      const weatherData = allData.weather[0];
      const temperatureData = allData.main;

      setWeather(weatherData.main);
      setIcon(weatherData.icon);
      setTemperature(temperatureData.temp);
      setFeelsLike(temperatureData.feels_like);
      console.log(weather, icon, temperature, feelsLike);
    });
  };

  return (
    <StyledCard>
      {temperature && (
        <div>
          <div>Temperature: {temperature}</div>
          <div>Feels like: {feelsLike}</div>
          <div>Weather: {weather}</div>
          <div>{icon}</div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="city-search-bar"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    </StyledCard>
  );
}

export default CurrentWeatherCard;
