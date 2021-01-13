import React from 'react';

type Props = {
    temperature: string;
    feelsLikeTemp: string;
    weatherDescription: string;
    weatherIcon:string;
    currentLocation:string;
}

const CurrentWeatherCard: React.FC<Props> = () => (
    <div>
        Card
    </div>
)
export default CurrentWeatherCard;