import React from "react";
import styled from "styled-components";

type Props = {
  temperature: string;
  feelsLikeTemp: string;
  weatherDescription: string;
  weatherIcon: string;
  currentLocation: string;
};

const StyledCard = styled.div`
  width: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  border: solid;
  margin: 30px auto 0 auto;
`;

const CurrentWeatherCard: React.FC<Props> = ({
  temperature,
  feelsLikeTemp,
  weatherDescription,
  weatherIcon,
  currentLocation,
}) => (
  <StyledCard>
    <p>WeatherCard</p>
  </StyledCard>
);
export default CurrentWeatherCard;
