import * as THREE from "three";
import { useState, useRef, useEffect } from "react";
import { useFrame, Vector3 } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";

interface CubePropsInterface {
  position?: Vector3;
  rotate?: boolean;
  clockwise?: boolean;
}

function Cube({
  position,
  rotate,
  clockwise,
}: CubePropsInterface): JSX.Element {
  const rotationValue = 0.009;
  const [direction, setDirection] = useState(rotationValue);
  const ref = useRef<THREE.Mesh>(null!);
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (clockwise) {
      setDirection(-rotationValue);
    }
  }, [clockwise]);

  useFrame((state, delta) => {
    if (rotate) {
      ref.current.rotation.y += direction;
    }
  });

  const spring = useSpring({
    scale: active ? 2 : 1,
    color: hover ? "#ee8a8a" : "#a9f2af",
  });

  return (
    <a.mesh
      position={position}
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
