import React from 'react';
import FigmaIcon from '../assets/icons/figma-icon.png';
import GitHubIcon from '../assets/icons/github-icon.png';
import CssIcon from '../assets/icons/css-icon.png';
import HTML5 from '../assets/icons/html-icon.png';
import JsIcon from '../assets/icons/js-icon.png';
import NodeIcon from '../assets/icons/node-icon.png';
import ReactIcon from '../assets/icons/react-icon.png';
import TailwindIcon from '../assets/icons/tailwind-icon.png';
import VscIcon from '../assets/icons/vsc-icon.png';


const Toolkit = () => {

  const icons = [
   {
     id: 1,
     src: HTML5,
     title: "HTML5"
   },
   {
     id: 2,
     src: CssIcon,
     title: "CSS"
   },
   {
     id: 3,
     src: JsIcon,
     title: "JavaScript"
   },
   {
     id: 4,
     src: ReactIcon,
     title: "React"
   },
   {
     id: 5,
     src: TailwindIcon,
     title: "Tailwind CSS"
   },
   {
     id: 6,
     src: GitHubIcon,
     title: "GitHub"
   },
   {
     id: 7,
     src: FigmaIcon,
     title: "Figma"
   },
   {
     id: 8,
     src: NodeIcon,
     title: "Nodejs"
   }
  ]
  return (
    <div id="toolkit" className=' bg-gradient-to-b from-white to-slate-100 w-full h-screen'>
      <div>
        <div>
          <p>My Toolkit</p>
          <p>These are the technologies I have worked with so far...</p>
        </div>

        <div>
          <div>
            <img src={HTML5} />
            <p>HTML5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolkit
