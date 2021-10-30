import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  extend,
  useThree,
  ReactThreeFiber,
  useFrame,
} from "@react-three/fiber";

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

export default function Controls() {
  const ref = useRef<any>();
  const { camera, gl } = useThree();

  useFrame(() => {
    ref.current.update();
  });

  return <orbitControls autoRotate ref={ref} args={[camera, gl.domElement]} />;
}
