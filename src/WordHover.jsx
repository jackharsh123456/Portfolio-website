// src/WordHover.js
import React from 'react';
import './WordHover.css';

const WordHover = ({ text }) => {
  return (
    <div className="word-hover-container">
      {text.split(/\s+/).map((word, index) => (
        <span key={index} className="word">
          {word}
        </span>
      ))}
    </div>
  );
};

export default WordHover;
