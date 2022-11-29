import React from 'react'

const Resume = () => {

  const downloadResume = () => {
    fetch('Somya Ranjan Singh.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Somya Ranjan Singh.pdf';
          alink.click();
      })
  })
  }
  
  return (
    <Button
    rounded={"full"}
    bg={"blue.400"}
    color={"white"}
    _hover={{
      bg: "blue.500",
    }}
    onClick={downloadResume}
  >
    My Resume
  </Button>
  )
}

export default Resume