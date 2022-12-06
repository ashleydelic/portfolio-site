import React from 'react';
import WeatherApp from '../assets/weather-app.png';
import CounterApp from '../assets/counter-app.png';
import PortfolioApp from '../assets/portfolio-app.png';
import QuoteApp from '../assets/quote-app.png';
import BlackJackApp from '../assets/blackjack-app.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
              <p className='py-6'>Check out some of my projects:</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
              <div className='shadow-md shadow-green-300 rounded-lg'>
                  <img src={WeatherApp} alt="weather app" className='rounded-md duration-200 hover:scale-105' />
                  <div className='flex items-center justify-center'>
                      <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>View Live</button>
                      <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Codebase</button>
                  </div>
                  
              </div>
          </div>
      </div>
    </div>
  )
}

export default Projects
