import React, { useState } from "react";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import { fetchWeatherData } from "../API";

export const Home: React.FC = () => {
  const [temperature, setTemperature] = useState("");
  const [feelsLikeTemp, setFeelsLikeTemp] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  console.log(fetchWeatherData("Sopron"));

  return (
    <div>
      {
        <CurrentWeatherCard
          temperature={temperature}
          feelsLikeTemp={feelsLikeTemp}
          weatherDescription={weatherDescription}
          weatherIcon={weatherIcon}
          currentLocation={currentLocation}
        />
      }
    </div>
  );
};

export default Home;
