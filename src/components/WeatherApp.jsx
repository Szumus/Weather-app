import React from 'react'
import rain from '../assets/rain.png'
import clowdy from '../assets/clowdy.png'
import snowy from '../assets/snowy.png'
import drizzle from '../assets/drizzle.png'
import humadity from '../assets/humadity.png'
import wind from '../assets/wind.png'
import { IoSearchCircleSharp } from "react-icons/io5";

function WeatherApp() {
  return (
    <div className=' shadow-2xl w-[500px] h-[660px] m-auto mt-5 rounded-2xl bg-gradient-to-r from-purple-900 to-purple-700'>
        <div className='flex justify-center gap-[14px] pt-10'>
            <input type="text" className='rounded-3xl px-11 pt-5 pb-5  text-gray-700 border-none outline-none' placeholder='Szukaj'  />
            <div>
            <IoSearchCircleSharp className='cursor-pointer size-16 hover:scale-125 duration-500 transition'/>
            </div>

        </div>
        <div className='mt-[9px] flex justify-center'>
            <img src={clowdy} alt="" className='w-48 h-48 ' />
        </div>
        <div className='flex justify-center text-white text-[80px] font-normal'>
            24℃
        </div>
        <div className='flex justify-center text-white text-[60px] font-normal'>
            <h1>London</h1>
        </div>
        <div className='mt-5 flex justify-center'>
            <div className='m-auto flex items-center gap-[12px] ml-12 text-white' >
                <img src={humadity} alt="icon" className='w-8 h-8' />
                <div className='text-xl font-normal'>
                        <h3>63%</h3>
                    <div>
                    <h2>Wilgotność</h2>
                    </div>
                </div>
            </div>
            <div>
            <div className='m-auto flex items-center gap-[12px] mr-12 text-white'>
                <img src={wind} alt="icon"  className='w-10 h-9'/>
                <div className='text-xl font-normal
            '>
                        <h3>18 km/h</h3>
                    <div >
                    <h2>Szybkość wiatru</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WeatherApp