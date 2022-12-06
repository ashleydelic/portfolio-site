import React from 'react';
import { SiJavascript, SiGit, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiFigma, SiNodedotjs, SiVisualstudiocode, SiActigraph } from 'react-icons/si';

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
            <SiHtml5 size={40} />
            <p>HTML5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolkit
