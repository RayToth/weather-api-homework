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

const StyledInput = styled.input`
  font-size: 18px;
  font-size: max(18px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid var(--input-border);
  border-radius: 4px;
  margin: 10px 10px 10px 10px;
  line-height: 2;
`;

const StyledSearchButton = styled.input`
  display: block;
  margin: auto;
  border: 2px solid rgb(55, 196, 187);
  color: rgb(55, 196, 187);
  width: 110px;
  height: 40px;
  outline: none;
  cursor: pointer;
  background: none;
  transition: 0.5s;
  font-size: 24px;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
  &:hover {
    background-color: rgb(55, 196, 187);
    transition: all 0.3s ease-in-out;
    border: none;
    color: white;
    font-size: 26px;
    transform: scale(1.1);
  }
`;

const StyledFlexBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
`;

const StyledTemperature = styled.div`
  font-size: 36px;
  padding: 10px;
`;

const StyledWeatherDescription = styled.div`
  font-size: 24px;
  padding: 10px 0px 0px 0px;
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
`;

function CurrentWeatherCard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const KELVIN = 272.15;

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city).then((response) => {
      if (response) {
        const allData = response.data;
        const weatherData = allData.weather[0];
        const temperatureData = allData.main;

        setErrorMessage(null);
        setWeather(weatherData.main);
        setIcon(`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`);
        setTemperature(Math.round(temperatureData.temp - KELVIN));
        setFeelsLike(Math.round(temperatureData.feels_like - KELVIN));
      } else {
        setErrorMessage("Please enter a valid city.");
        setWeather(null);
        setIcon(null);
        setTemperature(null);
        setFeelsLike(null);
      }
    });
  };

  return (
    <StyledCard>
      {temperature && (
        <StyledFlexBox>
          <StyledTemperature>Temperature: {temperature} ℃</StyledTemperature>
          <StyledTemperature>Feels like: {feelsLike} ℃</StyledTemperature>
          <StyledWeatherDescription>{weather}</StyledWeatherDescription>
          <StyledImage src={icon} alt="weatherIcon" />
        </StyledFlexBox>
      )}
      {errorMessage && <h1>{errorMessage}</h1>}
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        <StyledSearchButton type="submit" value="Search" />
      </form>
    </StyledCard>
  );
}

export default CurrentWeatherCard;
