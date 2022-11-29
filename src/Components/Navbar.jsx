import {
  Heading,
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

const Links = ["About", "Skills","Projects","Resume","Contact"];

const NavLink = ({ children }) => (
  <Link
    style={{ cursor: "pointer" }}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    activeClass="active"
    to={children}
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        w={"100%"}
        position={"fixed"}
        style={{ zIndex: "999" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading size={"lg"}>
                <Link
                  style={{ cursor: "pointer" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  activeClass="active"
                  to={"About"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {" "}
                  Somya Ranjan Singh{" "}
                </Link>
              </Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={5}>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <Link
                style={{ cursor: "pointer" }}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                activeClass="active"
                to={"Contact"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://i.postimg.cc/28kTFtQs/IMG-20221006-142820.jpg"}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/somyaranjansingh96/"
                  >
                    Linkedin
                  </a>
                </MenuItem>
                
                <MenuDivider />
                <MenuItem>
                  <a target="_blank" href="https://github.com/somya143">
                    Github
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}