import React from 'react'
import "./Body.css"
import WordHover from '../WordHover'

const Body = (props) => {
  return (
    <div>
        <div className="body">
            <h1>{props.title}</h1>
            <p><WordHover text={props.desc}/></p>
        </div>
    </div>
  )
}

export default Body