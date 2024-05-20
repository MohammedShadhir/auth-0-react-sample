import React from "react";
import { Container } from "@mui/material";
import NavBar from "./NavBar";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <header className="App-header">
          <Profile />
        </header>
      </Container>
    </div>
  );
}

export default App;
