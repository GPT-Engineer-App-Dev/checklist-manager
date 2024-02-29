import React from "react";
import { ChakraProvider, Box, Text, Heading, Flex, Button, Image, VStack, HStack, Icon, Spacer } from "@chakra-ui/react";
import { FaHome, FaUserAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh" p={5}>
        <Flex direction="column" maxW="1200px" mx="auto">
          <Header />
          <Hero />
          <About />
          <Contact />
          <Footer />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

const Header = () => {
  return (
    <Flex as="header" py={4} justifyContent="space-between" alignItems="center">
      <Heading as="h1" size="lg" letterSpacing="tighter">
        MyPortfolio
      </Heading>
      <HStack as="nav" spacing={4}>
        <Button leftIcon={<FaHome />} variant="ghost">
          Home
        </Button>
        <Button leftIcon={<FaUserAlt />} variant="ghost">
          About
        </Button>
        <Button leftIcon={<FaEnvelope />} variant="ghost">
          Contact
        </Button>
      </HStack>
    </Flex>
  );
};

const Hero = () => {
  return (
    <VStack spacing={8} py={20} textAlign="center">
      <Heading as="h2" size="2xl">
        Hello, I'm a Web Developer
      </Heading>
      <Text fontSize="xl">I create beautiful and functional websites</Text>
      <Button size="lg" colorScheme="blue">
        Hire Me
      </Button>
    </VStack>
  );
};

const About = () => {
  return (
    <Box as="section" py={20}>
      <VStack spacing={8} alignItems="flex-start">
        <Heading as="h3" size="xl">
          About Me
        </Heading>
        <Text fontSize="lg">I'm a professional web developer with a passion for creating intuitive and dynamic user experiences. With a focus on front-end development, I specialize in React and have a keen eye for design.</Text>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1573496130141-209d200cebd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDkyMTIyOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer Portrait" />
      </VStack>
    </Box>
  );
};

const Contact = () => {
  return (
    <Box as="section" py={20}>
      <VStack spacing={4} alignItems="flex-start">
        <Heading as="h3" size="xl">
          Get In Touch
        </Heading>
        <HStack spacing={4}>
          <Icon as={FaGithub} w={6} h={6} />
          <Icon as={FaLinkedin} w={6} h={6} />
        </HStack>
      </VStack>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box as="footer" py={10} textAlign="center">
      <Text>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</Text>
    </Box>
  );
};

export default Index;
