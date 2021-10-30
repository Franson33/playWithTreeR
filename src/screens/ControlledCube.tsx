import { StyledCanvas } from "../Components";
import CubeControlled from "../components/CubeControlled";
import Controls from "../components/Controls";
import Plane from "../components/Plane";

function ControlledCube(): JSX.Element {
  return (
    <StyledCanvas backColor={"#f0f0f0"}>
      <ambientLight />
      <spotLight intensity={5} position={[0, 5, 10]} penumbra={1} />
      <Controls />
      <CubeControlled cubeColor={"#000"} />
      <Plane />
    </StyledCanvas>
  );
}

export default ControlledCube;
