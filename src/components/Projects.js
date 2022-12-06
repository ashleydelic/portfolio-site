import React from 'react';
import WeatherApp from '../assets/weather-app.png';
import CounterApp from '../assets/counter-app.png';
import PortfolioApp from '../assets/portfolio-app.png';
import QuoteApp from '../assets/quote-app.png';
import BlackJackApp from '../assets/blackjack-app.png';
import DoughApp from '../assets/dough-app.png';



const Projects = () => {

    const portfolio = [
        {
            id: 1,
            title: "Playtime Weather",
            body: "This is a simple kids weather app, built with Reactjs and CSS using the OpenWeatherMap API. The user can input their local city's name and it will return whether its a good day to play outside or its best to have indoor fun instead (based on the description from when they start the app). Deployed with Netlify",
            src: WeatherApp,
            liveLink: "https://playtimeweather.netlify.app/",
            codeLink: "https://github.com/ashleydelic/play-weather-app"
        },
        {
            id: 2,
            title: "CountHydrants",
            body: "Fire hydrant interactive counting app inspired by my toddler. Built with HTML, CSS and Javascript. It's purpose is mainly for fun. Every time we spot a fire hydrant, we made a mental count. This is app will make it easier to keep track of the number of fire hydrants. Using an increment and decrement feature, also deployed with Netlify",
            src: CounterApp,
            liveLink: "https://firehydrantcounter.netlify.app/",
            codeLink: "https://github.com/ashleydelic/fire-hydrant-counter"

        },
        {
            id: 3,
            title: "This page",
            body: "I enjoyed building this site so i felt that it deserved a place in this section. It was built with React and Tailwind CSS from scratch, Tailwind has been a bit challenging as i kept referencing from the Tailwind site, but eventually got the hang of it. Mobile development has also been kept in mind although it still needs a few more fixes. To be updated... ",
            src: PortfolioApp,
            liveLink: "",
            codeLink: "https://github.com/ashleydelic/portfolio-site"
        },
        {
            id: 4,
            src: QuoteApp
        },
        {
            id: 5,
            src: BlackJackApp
        },
        {
            id: 6,
            src: DoughApp
        }
    ]

  return (
    <div id='projects' className='w-full md:h-full'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8 '>
              <p className='md:text-3xl text-2xl mb-4 font-medium'>Projects</p>
              <p className='py-6 text-gray-500 '>Check out some of my projects:</p>
          </div>


<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

{
              portfolio.map(({id, title, src, body, liveLink, codeLink}) => (
                <div key={id} className='shadow-md shadow-green-300 rounded-lg'>
                    {title}
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                {body}
                <div className='flex items-center justify-center'>
                    <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={liveLink} target="_blank">View Live</a></button>
                    <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={codeLink} target="_blank">Codebase</a></button>
                </div>
                
            </div>
              ))
          }
               
            </div>

      </div>
    </div>
  )
}

export default Projects
