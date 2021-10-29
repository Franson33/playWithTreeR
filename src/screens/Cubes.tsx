import { StyledCanvas } from "../Components";
import Cube from "../components/Cube";

function Cubes(): JSX.Element {
  return (
    <StyledCanvas>
      <ambientLight />
      <pointLight position={[50, 50, 50]} />
      <Cube position={[1.5, 1.5, 0]} rotate clockwise />
      <Cube position={[-1.5, -1.5, 0]} rotate clockwise />
      <Cube position={[1.5, -1.5, 0]} rotate />
      <Cube position={[-1.5, 1.5, 0]} rotate />
    </StyledCanvas>
  );
}

export default Cubes;
