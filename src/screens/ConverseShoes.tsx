import * as THREE from "three";
import { StyledCanvas } from "../Components";
import Converse from "../components/Converse";
import Controls from "../components/Controls";
import Plane from "../components/Plane";

interface shadowMapPropsInterface {
  gl: THREE.WebGLRenderer;
}

function ConverseShoes(): JSX.Element {
  const shadowMap = ({ gl }: shadowMapPropsInterface) => {
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;
  };

  return (
    <StyledCanvas backColor={"#f0f0f0"} onCreated={shadowMap}>
      <ambientLight />
      <spotLight intensity={5} position={[10, 5, 5]} penumbra={1} castShadow />
      <Controls />
      <Converse />
      <Plane />
    </StyledCanvas>
  );
}

export default ConverseShoes;
