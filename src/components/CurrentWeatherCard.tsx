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
  padding: 20px;
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
    <form>
      <input type="text" id="city-search-bar" placeholder="City" />
      <input type="submit" value="Search" />
    </form>
  </StyledCard>
);
export default CurrentWeatherCard;
