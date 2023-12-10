// src/App.js
import React from "react";
import { Button, Typography, Container } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

function App() {
  return (
    <Container>
      <Typography variant="h1" component="div" gutterBottom>
        Hello, Material-UI!
      </Typography>
      <Button variant="contained" color="primary">
        Click me
      </Button>
      <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
      </Badge>
    </Container>
  );
}

export default App;
