import * as THREE from "three";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";

function CubeControlled(): JSX.Element {
  const ref = useRef<THREE.Mesh>(null!);
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {});

  const spring = useSpring({
    scale: active ? 1.5 : 1,
    color: hover ? "#ee8a8a" : "#a9f2af",
  });

  return (
    <a.mesh
      ref={ref}
      scale={spring.scale}
      onClick={(evt) => setActive(!active)}
      onPointerOver={(evt) => setHover(true)}
      onPointerOut={(evt) => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <a.meshStandardMaterial color={spring.color} />
    </a.mesh>
  );
}

export default CubeControlled;
