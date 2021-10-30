import { useState } from "react";
import { useSpring, a } from "@react-spring/three";

interface CubeControlledPropsInterface {
  cubeColor?: string;
  cubeHoverColor?: string;
}

function CubeControlled({
  cubeColor,
  cubeHoverColor,
}: CubeControlledPropsInterface): JSX.Element {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const spring = useSpring({
    scale: active ? 1.5 : 1,
    color: hover ? cubeHoverColor ?? "#ee8a8a" : cubeColor ?? "#a9f2af",
  });

  return (
    <a.mesh
      scale={spring.scale}
      onClick={(evt) => setActive(!active)}
      onPointerOver={(evt) => setHover(true)}
      onPointerOut={(evt) => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <a.meshPhysicalMaterial color={spring.color} />
    </a.mesh>
  );
}

export default CubeControlled;
