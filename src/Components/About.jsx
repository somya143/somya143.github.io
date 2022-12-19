import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Link,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import Typed from "react-typed";



export default function About() {
  const { colorMode, toggleColorMode } = useColorMode();

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
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      pt={10}
      id="About"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"xl"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Hi, I Am
            </Text>
            <br />
            <Text color={"blue.400"} as={"span"}>
              <Typed
                strings={[
                  "Somya",
                  "A Full-Stack Developer",
                  "A Tech-Enthusiast",
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
              ></Typed>
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            An Analytical and detail-oriented Full Stack Web Developer capable of writing production 
            ready code. Passionate about coding and learning new technologies. Looking for a challenging
            role in a growth oriented organisation.
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Collaborated in more than 6+ projects and has made 5 individual project and several mini 
            projects.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
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
            
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button>
              <Link
                href="https://www.linkedin.com/in/somyaranjansingh96/"
                target={"_blank"}
              >
                <BsLinkedin />
              </Link>
            </Button>
           
            <Button>
              <Link href="https://github.com/somya143" target={"_blank"}>
                <BsGithub />
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent={"center"}>
        {colorMode == "dark" ? (
          <Image
            objectFit={"cover"}
            rounded={"full"}
            className="zoom"
            width={["xs", "lg"]}
            height={["xs", "lg"]}
            src={
              "https://i.postimg.cc/28kTFtQs/IMG-20221006-142820.jpg"
            }
          />
        ) : (
          <Image
            alt={"Login Image"}
            rounded={"full"}
            className="zoom"
            objectFit={"cover"}
            width={["xs", "lg"]}
            height={["xs", "lg"]}
            src={
              "https://i.postimg.cc/28kTFtQs/IMG-20221006-142820.jpg"
            }
          />
        )}
      </Flex>
    </Stack>
  );
}