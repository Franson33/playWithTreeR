import { StyledCanvas } from "../Components";
import CubeControlled from "../components/CubeControlled";
import Controls from "../components/Controls";

function ControlledCube(): JSX.Element {
  return (
    <StyledCanvas>
      <ambientLight />
      <pointLight position={[50, 0, 10]} />
      <Controls />
      <CubeControlled />
    </StyledCanvas>
  );
}

export default ControlledCube;
