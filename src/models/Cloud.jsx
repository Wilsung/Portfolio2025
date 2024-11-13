import cloudScene from "../assets/3d/cloud.glb";
import { useGLTF } from "@react-three/drei";

import { a } from "@react-spring/three";
import { useRef } from "react";

export default function Cloud({...props}) {

  const cloudRef = useRef();

  let screenScale = 6.3;
  let screenPosition = [0, -7, 0];

  // If screen width is less than 768px, adjust the scale and position
  if (window.innerWidth > 768) {
    screenScale = 6.9;
    screenPosition = [0, -8.2, 0];
  }


  const { nodes, materials, animations } = useGLTF(cloudScene);
  return (
    <a.group
      rotation={[-Math.PI / 4, 0, 0]}
      // scale={screenScale}
      // position={screenPosition}
      ref={cloudRef}
      {...props}
    >
      <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Cloud_GN001_2">
                  <mesh
                    name="Object_4"
                    geometry={nodes.Object_4.geometry}
                    material={materials.Cloud}
                  />
                </group>
                <group name="Cloud_GN002_3" rotation={[0, 0, 0]}>
                  <mesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials.Cloud}
                  />
                </group>
                <group name="Cloud_GN003_4" rotation={[0, 0, 0]}>
                  <mesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Cloud}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
    </a.group>
  );
}
