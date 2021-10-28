import * as THREE from "three";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";

function Cube(props: JSX.IntrinsicElements["mesh"]): JSX.Element {
  const ref = useRef<THREE.Mesh>(null!);
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.01;
  });

  const spring = useSpring({
    scale: active ? 2 : 1,
    color: hover ? "#ee8a8a" : "#a9f2af",
  });

  return (
    <a.mesh
      {...props}
      ref={ref}
      scale={spring.scale}
      onClick={(evt) => setActive(!active)}
      onPointerOver={(evt) => setHover(true)}
      onPointerOut={(evt) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <a.meshStandardMaterial color={spring.color} />
    </a.mesh>
  );
}

export default Cube;
