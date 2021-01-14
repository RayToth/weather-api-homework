import React, { useState, useEffect } from "react";
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

/*const getValue = (e) => {
  setCity(e.target.value);
};

function getInput() {
  fetchWeatherData().then((data) => console.log(data));
}*/

function CurrentWeatherCard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState("");
  const [feelsLike, setFeelsLike] = useState("");

  function fetchData(city) {
    fetchWeatherData(city).then((response) => {
      const allData = response.data;
      setWeather(allData.weather[0].main);
      setIcon(allData.weather[0].icon);
      setTemperature(allData.main.temp);
      setFeelsLike(allData.main.feels_like);
      return allData;
    });
  }

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(city);
  };

  return (
    <StyledCard>
      <p>WeatherCard</p>
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
