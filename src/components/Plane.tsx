import React from "react";
import { useFrame } from "@react-three/fiber";

function Plane(): JSX.Element {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
      <planeBufferGeometry args={[50, 50]} />
      <meshPhysicalMaterial color={"#9d9d9d"} />
    </mesh>
  );
}

export default Plane;
