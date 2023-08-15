import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600";

  const containerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <Button
        LinkComponent={Link}
        to="/books"
        sx={{ marginTop: 15, background: "orangered" }}
        variant="contained"
      >
        <Typography variant="h3">View All Products</Typography>
      </Button>
    </div>
  );
};

export default Home;
