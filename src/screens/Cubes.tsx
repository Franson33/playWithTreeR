import { StyledCanvas } from "../Components";
import Cube from "../components/Cube";

function Cubes(): JSX.Element {
  return (
    <StyledCanvas>
      <ambientLight />
      <pointLight position={[50, 50, 50]} />
      <Cube position={[1.5, 1.5, 0]} />
      <Cube position={[-1.5, -1.5, 0]} />
      <Cube position={[1.5, -1.5, 0]} />
      <Cube position={[-1.5, 1.5, 0]} />
    </StyledCanvas>
  );
}

export default Cubes;
