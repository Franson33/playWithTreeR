import * as THREE from "three";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Cube(props: JSX.IntrinsicElements["mesh"]): JSX.Element {
  const ref = useRef<THREE.Mesh>(null!);
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 2 : 1}
      onClick={(evt) => setActive(!active)}
      onPointerOver={(evt) => setHover(true)}
      onPointerOut={(evt) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hover ? "#ee8a8a" : "#a9f2af"} />
    </mesh>
  );
}

export default Cube;
