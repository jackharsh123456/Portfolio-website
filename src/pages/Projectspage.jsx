import React from 'react'
import "./projects.css"
import WordHover from '../WordHover'
import { usePageTitle } from '../Usepagetitle'

const mypara = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae pariatur dolorum voluptatem ad iste doloremque esse quibusdam magnam"
const Projectspage = () => {
  usePageTitle('Projects - Harshyyy')

  return (
    <div>
      <div class="projects-body">
            <h1>Projects</h1>
            <div class="projects">
                <div class="projectsbox" id="box1">
                   <WordHover text={mypara}/>
                </div>
                <div class="projectsbox">
                    <WordHover text={mypara}/>
                </div>
                <div class="projectsbox">
                    <WordHover text={mypara}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projectspage