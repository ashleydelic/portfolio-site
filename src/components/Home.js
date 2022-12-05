import React from 'react';
import HeroImage from '../assets/portrait.jpeg';


const Home = () => {
  return (
    <div name='home' className=' h-screen w-full'>
     <div className=' max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
         <div className='flex flex-col justify-center h-full'>
             <h1 className='text-4xl sm:text-4xl font-bold font-effect-fire-animation'>Hello! I'm Ashley 👋🏽.</h1>
             <p className=' py-3 text-lg'>As a front-end developer, my joy ignites from building and seeing fun, intuitive and user-friendly interfaces come to life!</p>
         </div>
         <div>
             
         </div>
         <div>
             <img src={HeroImage} alt='my illustration' className=' rounded-3xl mx-auto px-3 w-2/3 md:w-2/3' />
         </div>

     </div>
    </div>
  )
}

export default Home
