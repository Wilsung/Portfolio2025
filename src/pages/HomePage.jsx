import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { React3D } from "../models/React3D";
import { Island } from "../models/Island";
import { Suspense, useState } from "react";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";

export default function HomePage() {
  const [isRotating, setIsRotating] = useState(false)

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition=[0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition=[0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43.4];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [planeScale, planePosition] =
    adjustPlaneForScreenSize();

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.3} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Plane planeScale={planeScale} planePosition={planePosition} isRotating={isRotating} rotation={[0, 20, 0]}/>
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>
      <div>
        <p className="text-slate-300">Hi, my name is</p>
        <h1 className="py-1 md:py-4 text-4xl md:text-6xl title">Wilson Ung</h1>
        <h1 className="text-slate-300 font-bold">Front-End Web Developer.</h1>
        <p className="py-1">
          I enjoy coding engaging digital experiences. Based in California.
        </p>
      </div>
    </section>
  );
}
