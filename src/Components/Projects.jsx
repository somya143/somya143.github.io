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
      {/* <Heading as="h1" textTransform={"capitalize"}>
        My projects
      </Heading> */}
      {/* <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        > */}
          {/* <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          > */}
            {/* <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              target="_blank"
              href={"https://candid-ganache-399b55.netlify.app/"}
            >
              <Image
              className="zoom"
                borderRadius="lg"
                src={
                  "https://i.postimg.cc/MThSq0H8/Annotation-2022-09-08-203636.jpg"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link> */}
          {/* </Box> */}
          {/* <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Collaborative", "Hackathon"]} />
          <br />
          <TechStackTags
            tags={[
              "React",
              "Redux",
              "Chakra-Ui",
              "Axios",
              "NodeJs",
              "Express",
              "MongoDB",
              "Mongoose",
              "Slack-Bot",
              "Slack-API",
            ]}
          />
          <Heading size={"lg"} marginTop="1">
            <Link
              textDecoration="none"
              target="_blank"
              _hover={{ textDecoration: "none" }}
            >
              Buzzy - Speak & Compete on slack workspaces
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="md"
          >
            A three membered collaborative project made withing <strong>48 hours</strong> with
            the problem statement of improving communication among your peers.
            Now the student can speak and by converting their voices in text,
            It'll be posted on slack workspaces with weekly leaderboards.
          </Text>
          <BlogAuthor name="Prajwal Jaiswal" date={new Date("2022-01-08")} />
          <Stack direction={"row"} pt={5}>
            <Button
              bg={"blue.400"}
              size={"sm"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              rightIcon={<BsGithub />}
            >
              <Link
                _hover={{ textDecoration: "none" }}
                target="_blank"
                href={"https://github.com/J-Prajwal/ketto-cw--true-mine-3269"}
              >
                Github
              </Link>
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              size={"sm"}
              rounded={"full"}
              _hover={{ bg: "whiteAlpha.500" }}
              rightIcon={<BsLink45Deg />}
            >
              <Link
                _hover={{ textDecoration: "none" }}
                target="_blank"
                href={"https://classy-druid-0cbd3c.netlify.app/"}
              >
                Deployment
              </Link>
            </Button>
          </Stack>
        </Box>
      </Box> */}
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