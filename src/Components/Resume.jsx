import React from 'react';
import {useNavigate} from 'react-router-dom'

const Resume = () => {
 

  return (
    <div>
 <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <Link
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/file/d/1kXEj9rY4ceJuA4temChJ-qZVIxgcPlzu/view?usp=sharing"
                target={"_blank"}
              >
                My Resume
              </Link>
            </Button>
    </div>
  )
}

export default Resume