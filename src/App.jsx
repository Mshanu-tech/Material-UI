// src/App.js
import React from "react";
import { Button, Typography, Container } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import image1 from "./assets/boat.webp";
function App() {
  return (
    <Container>
      <Typography variant="h3" component="div" gutterBottom>
        Hello, Material-UI!
      </Typography>
      <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://imgs.search.brave.com/G5BKg0c-gB_e2bXym1MSQ3K8TZvuZK_rvWbARpC2TdI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9icmlnaHQtZ3Jl/ZW4tbWVhZG93LXdp/dGgtZ3Jhc3NfMTI0/NTA3LTEzODUwLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn" />
      <Avatar alt="Travis Howard" src={image1} />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
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
