import React from 'react'
import Body from '../components/Body'
import { usePageTitle } from '../Usepagetitle'

const Skillspage = () => {
  usePageTitle('Skills - Harshyyy');

  return (
    <div>
        <Body title='Skills' desc="Proficient in TailwindCSS for fast, responsive design, Flask for building Python-based web applications, and Svelte for creating efficient, reactive front-end interfaces. Strong experience in Python for backend development, JavaScript for dynamic client-side functionality, and Java for building robust, object-oriented applications across various platforms. Skilled in creating full-stack solutions with a focus on performance, scalability, and maintainability."/>
    </div>
  )
}

export default Skillspage