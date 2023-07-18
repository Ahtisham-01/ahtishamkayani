import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      className="flex justify-center items-center flex-col"
    
    >
      <span className="canvas-loader"></span>
      <p
      className="text-sm font-extrabold mt-[40px] text-white"
        
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
