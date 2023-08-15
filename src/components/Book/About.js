import { Box, Typography, Container } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={5}
        p={3}
        bgcolor="white"
        boxShadow={3}
        borderRadius={8}
      >
        <Typography variant="h2" color="primary" gutterBottom>
          Welcome to Our Book Store
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Discover a world of knowledge and imagination at our book store. We are proud to present you a CRUD application developed using the MERN (MongoDB, Express, React, Node.js) stack.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Our goal is to provide a seamless and user-friendly experience for browsing, adding, updating, and deleting books. Whether you're an avid reader or just starting your reading journey, we have a diverse collection of books to cater to your interests.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Books are not just words on pages; they are gateways to new worlds, sources of knowledge, and companions in solitude. With our platform, you can explore a wide range of genres and authors, finding your next adventure or learning something new.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Join us in celebrating the joy of reading and the power of technology in bringing books closer to you. Feel free to explore our catalog, update your reading list, and immerse yourself in the world of books.
        </Typography>
        <Typography variant="h4" color="secondary" gutterBottom>
          Happy Reading!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
