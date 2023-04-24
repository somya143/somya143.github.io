import React from "react";
import resume from "../Assets/Somya_Ranjan_Singh_Resume.pdf"

export default function Resume(){
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/119HM9qhLh58m_phDrulMujisbgc9x7CR/view?usp=sharing"
    );
  };
  return (
    <a
                href={resume}
                target="_blank"
                download="Somya_Ranjan_Singh_Resume"
                rel="noreferrer"
              >
                <Button
                  backgroundColor="#343e47"
                  color="#ffffff"
                  fontSize={18}
                  borderRadius={10}
                  _hover={{ backgroundColor: "#5b84b1ff" }}
                  onClick={handleClick}
                >
                  Get Resume
                </Button>
              </a>
  )
}