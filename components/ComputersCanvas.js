import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useInView } from "react-intersection-observer";

import CanvasLoader from "./Loader";


const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/gaming_desktop_pc.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.9}
        position={isMobile ? [0, -1, -2.2] : [0, -1.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      className="w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]"

    >
      <div className='w-full max-w-[1280px] mx-auto pt-24'>
        <h1 className='text-[40px] font-bold leading-[150%]'>Hi, i'm <span className='text-[#A020F0] text-[3rem] leading-5 font-extrabold'>Ahtisham kiani</span> </h1>
        <p className='pt-4 font-medium text-[18px] w-full max-w-[450px] leading-6'>
          Software Developer | Mastering React.js | Next.js | React3Fiber | Three.js | 3D Modaeling
        </p>
      </div>
      <Canvas
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
      </Canvas>

    </div>
  );
};

export default ComputersCanvas;
