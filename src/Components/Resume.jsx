import React from 'react'

const Resume = () => {

  const downloadButton = () => {
    window.location.href = "https://drive.google.com/file/d/1kXEj9rY4ceJuA4temChJ-qZVIxgcPlzu/view?usp=sharing"
  }

  return (
    <button onClick={downloadButton}>Resume</button>
  )
}

export default Resume