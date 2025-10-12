import React from 'react'
import "./navbar.css"
import { assets } from '../assets/Assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="logo">Harshyyy</div>
            <div className="menubar">
                <ul>
                    <NavLink to={'/'}><li><img title="Home" src={assets.home}/></li></NavLink>
                    <NavLink to={'/links'}><li><img title="Links" src={assets.links}/></li></NavLink>
                    <NavLink to={'/projects'}><li><img title="Projects" src={assets.projects}/></li></NavLink>
                    <NavLink to={'/skills'}><li><img title="Skills" src={assets.skills}/></li></NavLink>
                    <NavLink to={'/message'}><li><img title="Message" src={assets.message}/></li></NavLink>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar