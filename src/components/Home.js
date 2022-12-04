import React from 'react';
import HeroImage from '../assets/portrait.jpeg';
import {BiArrowFromLeft, BiArrowFromTop} from 'react-icons/bi';

const Home = () => {
  return (
    <div name='home' className=' h-screen w-full'>
     <div className=' max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
         <div className='flex flex-col justify-center h-full'>
             <h1 className='text-4xl sm:text-4xl font-bold font-effect-fire-animation'>Hello! I'm Ashley 👋🏽.</h1>
             <p>As a self-taught front-end developer, my joy comes from building fun, intuitive and user-friendly interfaces.</p>
         </div>
         <div>
             <button>
                 Portfolio 
                 <span>
                 <BiArrowFromLeft />
                 </span>
             </button>
         </div>
         <div>
             <img src={HeroImage} alt='my illustration' className=' rounded-2xl mx-auto w-2/3 md:w-full' />
         </div>
     </div>
    </div>
  )
}

export default Home
