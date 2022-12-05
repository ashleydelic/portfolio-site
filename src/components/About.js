import React from "react";
import AboutPic from "../assets/motion-back.gif";

const About = () => {
  return (
    <div
      name="about"
      className="about-page flex md:flex-row flex-row justify-evenly lg:px-16 px-6 pt-36 md:pb-24 sm:pb-28 pb-36 from-white to-slate-300"
    >
      <div className=" p-4 md:w-1/2 w-1/1 md:mx-4 md:mb-0 mb-6">
        <div>
          <h1 className="md:text-3xl text-2xl mb-4 font-medium">About Me</h1>
        </div>
        <p className="md:text-lg text-base tracking-wider leading-relaxed">
          Excited is an understatement! 😄 Hi again, I'm Ashley Delić, a
          Front-end developer based out of Kentucky, USA but born and raised in
          South Africa . From traveling the world as a cruise ship spa therapist
          ⛴, to finding my passion in writing self-taught lines of code 👩🏾‍💻.
        <br></br>
          I am proficient in HTML, CSS, and JavaScript, as well as the React
          framework, still learning others as well. I have been implementing my
          knowledge and keeping track of my personal projects by storing them
          with Git and GitHub.
        <br></br>
          I am thrilled to take the leap and kickstart my career and learn among
          professionals, diversity and inclusion are the real grounds for
          creativity.
        </p>
      </div>

      <div>
          <div>
              <img src={AboutPic} alt="computer gif" width={500} />
          </div>
          
      </div>
    </div>
  );
};

export default About;
