import React from 'react';
import {useNavigate} from 'react-router-dom'

const Resume = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("https://drive.google.com/file/d/1kXEj9rY4ceJuA4temChJ-qZVIxgcPlzu/view?usp=share_link")
  }

  return (
    <div onClick={handleClick}>
    Resume
    </div>
  )
}

export default Resume