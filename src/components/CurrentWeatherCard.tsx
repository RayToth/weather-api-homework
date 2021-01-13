import React from "react";

type Props = {
  temperature: string;
  feelsLikeTemp: string;
  weatherDescription: string;
  weatherIcon: string;
  currentLocation: string;
};

const CurrentWeatherCard: React.FC<Props> = ({
  temperature,
  feelsLikeTemp,
  weatherDescription,
  weatherIcon,
  currentLocation,
}) => (
  <div>
    <p>WeatherCard</p>
  </div>
);
export default CurrentWeatherCard;
