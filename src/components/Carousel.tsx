import { Canvas } from "@react-three/fiber";
import { Geometry } from "./Geometry";
import { OrbitControls } from "@react-three/drei";

export const Carousel = () => {
  return (
    <Canvas camera={{fov: 70}}>
      <ambientLight/>
      <OrbitControls/>
      <Geometry/>
    </Canvas>
  );
};
