import * as THREE from "three";
import { useState, useRef } from "react";
import Cube from "./components/Cube";
import { ContainerCanvas } from "./Components";

function App(): JSX.Element {
  return (
    <ContainerCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube position={[2, 0, 0]} />
      <Cube position={[-2, 0, 0]} />
    </ContainerCanvas>
  );
}

export default App;
