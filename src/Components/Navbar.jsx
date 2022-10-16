import React from 'react'
import About from './About';
import TechStack from './Tech-Stack';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Resume from "./Resume";
import { Flex , VStack, Heading, IconButton, useColorMode, Spacer } from '@chakra-ui/react';
import { Icon } from "@chakra-ui/icons";
import {FaSun,FaMoon} from "react-icons/fa";
import { Routes , Route } from "react-router-dom";

const Navbar = () => {

    const { colorMode , toggleColorMode} = useColorMode();
    const isLight = colorMode === "light"

  return (
<>
    <VStack p={5}>
        <Flex w="100%">
         
         <Heading ml="8" size="md" fontSize="2xl" color="cyan.400">
          Somya Ranjan Singh
         </Heading>

       <Spacer></Spacer>
        
         <IconButton ml={8}><About /></IconButton>
         <IconButton ml={8}><TechStack /></IconButton>
         <IconButton ml={8}><Skills /></IconButton>
         <IconButton ml={8}><Projects /></IconButton>
         <IconButton ml={8}><Contact /></IconButton>
         <IconButton ml={8}><Resume /></IconButton>
        <IconButton ml={8} icon={isLight ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        </Flex>
    </VStack>
   
   <Routes>
    <Route></Route>
    <Route></Route>
    <Route></Route>
    <Route></Route>
    <Route></Route>
    <Route></Route>
   </Routes>

   </>
  )
}

export default Navbar