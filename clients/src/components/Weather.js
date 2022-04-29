import React from 'react';
import { Card } from 'semantic-ui-react'
import moment from 'moment';
import '../App.css';

const CardExampleCard = ({weatherData}) => (
    <div className='box'>
        <div className='head'>
            <h1 className="header">{weatherData.name}</h1>
        </div>
        <div className='info'>
            <p className='temp'>Temprature: {weatherData.main.temp} &deg;C</p>
            <p className='sunrise'>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p className='sunset'>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            <p className='description'> {weatherData.weather[0].main}</p>
            <p className='humidity'>Humidity: {weatherData.main.humidity} %</p>
            <p className="time">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        </div>
    </div>
)

export default CardExampleCard;