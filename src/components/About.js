import React from 'react';
import AboutPic from '../assets/my-pic.jpeg';

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-white to-slate-300' >
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div>
              <p>About Me</p>
          </div>
          <p className=' '>
          Excited is an understatement! 😄 Hi again, I'm Ashley Delić, a
          Front-end developer based out of Kentucky, USA but born and raised in
          South Africa . From traveling the world as a cruise ship spa therapist
          ⛴, to finding my passion in writing self-taught lines of code 👩🏾‍💻.
          <br></br>
        </p>

        <p>
          I am proficient in HTML, CSS, and JavaScript, as well as the React framework, still learning others as well. I have
          been implementing my knowledge and keeping track of my personal projects by storing them with Git and GitHub. <br></br>
          I am thrilled to take the leap and kickstart my career and learn among professionals, diversity and inclusion are the real grounds for creativity.
        </p>

        <div>
            <img src={AboutPic} alt='ashley' className=' rounded-full px-3 w-1/3 py-4 mx-1.5' />
        </div>

      </div>
    </div>
  )
}

export default About
