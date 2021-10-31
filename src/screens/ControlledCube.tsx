import * as THREE from "three";
import { StyledCanvas } from "../Components";
import CubeControlled from "../components/CubeControlled";
import Controls from "../components/Controls";
import Plane from "../components/Plane";

function ControlledCube(): JSX.Element {
  return (
    <StyledCanvas
      backColor={"#f0f0f0"}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <ambientLight />
      <spotLight intensity={5} position={[5, 5, 5]} penumbra={1} castShadow />
      <Controls />
      <CubeControlled cubeColor={"#000"} />
      <Plane />
    </StyledCanvas>
  );
}

export default ControlledCube;
