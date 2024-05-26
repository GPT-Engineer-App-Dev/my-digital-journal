import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, tags: tags.split(",").map(tag => tag.trim()) };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));
    navigate("/");
  };

  return (
    <Container maxW="container.md" mt={8}>
      <Box as="form" onSubmit={handleSubmit} p={4} borderWidth="1px" borderRadius="lg" shadow="md">
        <VStack spacing={4}>
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl id="content" isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
          </FormControl>
          <FormControl id="tags">
            <FormLabel>Tags (comma separated)</FormLabel>
            <Input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">Add Post</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default AddPost;