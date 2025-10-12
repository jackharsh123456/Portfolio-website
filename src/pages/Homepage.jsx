import React from 'react'
import Body from '../components/Body'
import { usePageTitle } from '../Usepagetitle'

const Homepage = () => {
  usePageTitle('Harshyyy');

  return (
    <div>
        {<Body title='Harshit Tiwari' desc="I'm a tech enthusiast and a seasoned developer specializing in Python Java and JavaScript Passionate about building innovative solutions, I have a keen interest in web development
                and Telegram bot creation, consistently aiming to expand my knowledge and expertise in the ever-evolving
                tech landscape."/>}
    </div>
  )
}

export default Homepage