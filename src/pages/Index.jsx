import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider, Stack, Button, Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = ({ colorMode, toggleColorMode }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);
  return (
    <Container maxW="container.xl" p={0} bg={colorMode === "dark" ? "gray.800" : "white"} color={colorMode === "dark" ? "white" : "black"}>
      <Flex as="nav" bg={colorMode === "dark" ? "gray.900" : "gray.800"} color="white" p={4} justify="space-between" align="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white">Home</Link>
          <Link as={RouterLink} to="/about" color="white">About</Link>
          <Link as={RouterLink} to="/blog" color="white">Blog</Link>
          <Link as={RouterLink} to="/contact" color="white">Contact</Link>
        <Switch color="white" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Welcome to My Blog</Heading>
          <Text fontSize="lg" mb={4}>
            This is a personal blog where I share my thoughts, experiences, and knowledge on various topics.
          </Text>
          <Button as={RouterLink} to="/add-post" colorScheme="blue" mb={4}>Add New Post</Button>
          <Divider mb={4} />
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={4} shadow="md" borderWidth="1px" bg={colorMode === "dark" ? "gray.700" : "white"}>
                <Heading as="h3" size="md">{post.title}</Heading>
                <Text mt={2}>{post.content}</Text>
                <Text mt={2} fontSize="sm" color="gray.500">Tags: {post.tags.join(", ")}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" p={4} bg={colorMode === "dark" ? "gray.700" : "gray.50"}>
          <Heading as="h3" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            {posts.slice(0, 3).map((post, index) => (
              <Link key={index} href="#">{post.title}</Link>
            ))}
          </VStack>
          <Divider my={4} />
          <Heading as="h3" size="lg" mb={4}>Categories</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#">Category 1</Link>
            <Link href="#">Category 2</Link>
            <Link href="#">Category 3</Link>
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" bg={colorMode === "dark" ? "gray.900" : "gray.800"} color="white" p={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 My Blog. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;