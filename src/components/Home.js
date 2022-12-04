import React from 'react';
import HeroImage from '../assets/portrait.jpeg';
import {BiArrowFromLeft, BiArrowFromTop} from 'react-icons/bi';

const Home = () => {
  return (
    <div>
     <div>
         <div>
             <h2>Hello! I'm Ashley.</h2>
             <p>As a self-taught software developer, my joy comes from building robust, intuitive and user-friendly interfaces.</p>
         </div>
         <div>
             <button>
                 Portfolio <BiArrowFromLeft />
             </button>
         </div>
     </div>
    </div>
  )
}

export default Home
