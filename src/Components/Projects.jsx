import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  Grid,
  GridItem,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";
import Card from "./Card";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop} cursor="pointer">
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="blue"
            _hover={{ bgColor: "blue.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const TechStackTags = (props) => {
  return (
    <Flex flexWrap={"wrap"} gap={2} marginTop={props.marginTop} cursor="pointer">
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="teal"
            _hover={{ bgColor: "teal.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://i.postimg.cc/vmndQTJG/Whats-App-Image-2022-08-06-at-2-52-05-PM-removebg-preview-1.png"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Projects = () => {
  return (
    <Container maxW={"7xl"} p="12" id="Projects">
     
      <Heading as="h2" marginTop="5">
        My Projects
      </Heading>
      <Divider marginTop="5" />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={"2"}
      >
        <GridItem>
          <Card
            img={"https://i.postimg.cc/fbMsDHgn/milaap.jpg"}
            tag={["Collaborative", "E-Commerce"]}
            tsTags={["HTML", "CSS", "JavaScript", "ES-6", "LocalStorage"]}
            heading={"Milaap crowdfunding clone"}
            content={
              "A clone of India's most trusted Crowd-Funding platform Milaap.org"
            }
            deploy={"https://candid-ganache-399b55.netlify.app/"}
            git={"https://github.com/akshay-puranik/unkempt-meal-6720"}
          />
        </GridItem>
        <GridItem>
          <Card
            img={
              "https://i.postimg.cc/9fBnvQYP/zee11.png"
            }
            tag={["Collaborative", "Crowd-Funding"]}
            tsTags={[
              "HTML", "CSS", "JavaScript", "ES-6", "LocalStorage"
            ]}
            heading={"ZEE5 clone"}
            content={
              "A clone of  an Indian subscription video on-demand and over-the-top streaming service, run by Zee Entertainment Enterprises."
            }
            deploy={"https://legendary-brigadeiros-fb6721.netlify.app/"}
            git={"https://github.com/somya143/chemical-rake-3857"}
          />
        </GridItem>
        <GridItem>
          {/* <Card
            img={"https://i.postimg.cc/RhfJYj1d/ie.jpg"}
            tag={["Collaborative", "News"]}
            tsTags={["React", "CSS", "REST-API"]}
            heading={"Indian Express Clone"}
            content={
              "First collaborative project on React-Js, which came with a lot of challenges."
            }
            deploy={"https://indianexpressclone.netlify.app/"}
            git={"https://github.com/J-Prajwal/indianExpress"}
          /> */}
        </GridItem>
        <GridItem>
          {/* <Card
            img={"https://i.postimg.cc/Rhcqdw9b/mb.jpg"}
            tag={["Solo", "E-Commerce"]}
            tsTags={["HTML", "CSS", "JavaScript", "ES-6"]}
            heading={"Movie Booking Application"}
            content={
              "Simple yet one of the Solo project that has a lot of logics included."
            }
            deploy={"https://j-prajwal.github.io/movieBookingApp/"}
            git={"https://github.com/J-Prajwal/movieBookingApp"}
          /> */}
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Projects;