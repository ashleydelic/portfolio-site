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
  return (
    <div id="toolkit" className=' bg-gradient-to-b from-white to-slate-100'>
      <div>
        <div>
          <p>My Toolkit</p>
          <p>These are the technologies I have worked with so far...</p>
        </div>

        <div>
          <div>
            <HTML5 size={40} />
            <p>HTML5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolkit
