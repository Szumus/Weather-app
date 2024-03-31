import React, { useState } from 'react';
import rain from '../assets/rain.png';
import clowdy from '../assets/clowdy.png';
import snowy from '../assets/snowy.png';
import drizzle from '../assets/drizzle.png';
import humadity from '../assets/humadity.png';
import wind from '../assets/wind.png';
import { IoSearchCircleSharp } from "react-icons/io5";

function WeatherApp() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const search = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        
            const response = await fetch(url);
            const data = await response.json();

            setWeatherData({
                temperature: data.main.temp,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                weatherIcon: data.weather[0].main
            });

       
    }

    return (
        <div className='shadow-2xl w-[500px] h-[660px] m-auto mt-5 rounded-2xl bg-gradient-to-r from-purple-900 to-purple-700'>
            <div className='flex justify-center gap-[14px] pt-10'>
                <input type="text" className='rounded-3xl px-11 pt-5 pb-5 text-gray-700 border-none outline-none' placeholder='Szukaj' value={city} onChange={e => setCity(e.target.value)} />
                <div className='bg-white rounded-[50%]'>
                    <IoSearchCircleSharp className='cursor-pointer size-16 hover:scale-125 duration-500 transition' onClick={search} />
                </div>
            </div>
            <div className='mt-[9px] flex justify-center'>
                <img src={weatherData?.weatherIcon === 'Rain' ? rain : weatherData?.weatherIcon === 'Snow' ? snowy : drizzle} alt="" className='w-48 h-48' />
            </div>
            <div className='flex justify-center text-white text-[80px] font-normal'>
                {weatherData ? `${weatherData.temperature}°C` : '---'}
            </div>
            <div className='flex justify-center text-white text-[60px] font-normal'>
                <h1>{city}</h1>
            </div>
            <div className='mt-5 flex justify-center'>
                <div className='m-auto flex items-center gap-[12px] ml-12 text-white'>
                    <img src={humadity} alt="icon" className='w-8 h-8' />
                    <div className='text-xl font-normal'>
                        <h3>{weatherData ? `${weatherData.humidity}%` : '---'}</h3>
                        <div>
                            <h2>Wilgotność</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='m-auto flex items-center gap-[12px] mr-12 text-white'>
                        <img src={wind} alt="icon" className='w-10 h-9' />
                        <div className='text-xl font-normal'>
                            <h3>{weatherData ? `${weatherData.windSpeed} km/h` : '---'}</h3>
                            <div>
                                <h2>Szybkość wiatru</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;