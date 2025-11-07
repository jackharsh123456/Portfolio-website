import React, { useEffect } from 'react';
import "./linkspage.css";
import { usePageTitle } from '../Usepagetitle';
import { assets } from '../assets/Assets';

const Linkspage = () => {
  usePageTitle('Links - Harshyyy');

  return (
    <div className='links-body'>
        <div className="body">
          <h1>Links</h1>
          <div className="links-container">
            <a href='www.github.com' target='-blank'><div className="links"><img src={assets.github} /></div></a>
            <a href='https//www.instagram.com' target='-blank'><div className="links"><img src={assets.instagram} /></div></a>
            <a href='https//www.youtube.com' target='-blank'><div className="links"><img src={assets.youtube} /></div></a>
            <a href='https//www.linkedin.com' target='-blank'><div className="links"><img src={assets.linkedin} /></div></a>
          </div>
        </div>
    </div>
  );
};
export default Linkspage;