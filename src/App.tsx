import React from "react";
import logo from "./logo.svg";
import { Container, Image } from "./Components";

function App() {
  return (
    <Container>
      <Image src={logo} className="App-logo" alt="logo" />
    </Container>
  );
}

export default App;
