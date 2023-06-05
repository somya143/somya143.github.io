import React from "react";
import {Button} from "@chakra-ui/react"

export default function Resume(){
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1FHVSltYmkSymlZNpNeo6tDHvgC3J1zHv/view?usp=sharing"
    );
  };
  return (
    <a
                href="Somya_Ranjan_Singh_Resume.pdf"
                target="_blank"
                download="Somya_Ranjan_Singh_Resume"
                rel="noreferrer"
              >
                <Button
                  backgroundColor="#343e47"
                  color="#ffffff"
                  fontSize={18}
                  borderRadius={10}
                  _hover={{ backgroundColor: "#4299E1" }}
                  onClick={handleClick}
                >
                  Get Resume
                </Button>
              </a>
  )
}