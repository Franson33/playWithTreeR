import { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Converse() {
  const [model, setModel] = useState<any>();

  useEffect(() => {}, []);
  new GLTFLoader().load("scene.gltf", setModel);

  return model ? <primitive object={model.scene} scale={30} /> : null;
}

export default Converse;
