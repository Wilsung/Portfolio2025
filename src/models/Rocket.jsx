import rocketScene from "../assets/3d/rocket.glb";
import { useGLTF } from "@react-three/drei";

import { a } from "@react-spring/three";
import { useRef } from "react";


export default function Rocket({...props}) {

  const rocketRef = useRef();

  let screenScale = 6.3;
  let screenPosition = [0, -7, 0];

  // If screen width is less than 768px, adjust the scale and position
  if (window.innerWidth > 768) {
    screenScale = 6.9;
    screenPosition = [0, -8.2, 0];
  }


  const { nodes } = useGLTF(rocketScene);
  return (
    <a.group
      rotation={[-Math.PI / 2, 0, 0]}
      // scale={screenScale}
      // position={screenPosition}
      ref={rocketRef}
      {...props}
    >
      <group rotation={[Math.PI / 12.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.planet002.geometry}
          material={nodes.planet002.material}
        />
        <mesh
          geometry={nodes.planet003.geometry}
          material={nodes.planet003.material}
        />
      </group>
    </a.group>
  );
}
