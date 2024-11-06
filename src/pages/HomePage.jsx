import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { React3D } from "../models/React3D";
import { Suspense, useState } from "react";
import { OrbitControls, Stars, PerspectiveCamera } from "@react-three/drei";
import Rocket from "../models/Rocket";

export default function HomePage() {
  const [isRotating, setIsRotating] = useState(false);


  const adjustRocketForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = 6.3;
      screenPosition = [0, -10, 0];
    } else {
      screenScale = 6.9;
      screenPosition = [0, -12, 0];
    }

    return [screenScale, screenPosition];
  };


  const [rocketScale, rocketPosition] = adjustRocketForScreenSize();

  return (
    <section className="w-full h-screen bg">
      <div className="homepage sm:px-16 px-8 py-4">
        <p>Hi, my name is</p>
        <h1 className="py-1 md:py-2 text-4xl md:text-6xl title">Wilson Ung</h1>
        <h2 className="text-slate-300 font-bold">Front-End Web Developer.</h2>
        <p className="text-base sm:text-lg md:text-xl py-1">
          I enjoy coding engaging digital experiences.
        </p>
      </div>
      <Canvas
        linear
        shadows
      >
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[10, 0, 16]} fov={60}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-bias={-0.0001}
          />
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={2}
          />
        </PerspectiveCamera>
        <Suspense fallback={<Loader />}>
          <Rocket scale={rocketScale} position={rocketPosition} />
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotateSpeed={0.7}
        />
        <Stars radius={900} depth={80} count={1000} factor={25} />
      </Canvas>
      <div className="layer" />
    </section>
  );
}
