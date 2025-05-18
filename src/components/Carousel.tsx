import { Canvas } from "@react-three/fiber";
import { Geometry } from "../scene/Geometry";
import { OrbitControls } from "@react-three/drei";

export const Carousel = () => {
  return (
    <Canvas>
      <OrbitControls/>
      <Geometry/>
    </Canvas>
  );
};
