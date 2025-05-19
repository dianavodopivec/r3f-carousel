import { Canvas } from "@react-three/fiber";
import { Geometry } from "./Geometry";
import { OrbitControls } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

export const Carousel = () => {
  return (
    <Canvas camera={{ fov: 70 }} flat>
      <directionalLight intensity={4} position={[0, 1, 2.5]}/>
      <Geometry />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={0.2}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.1}
        />
      </EffectComposer>
      <ToneMapping adaptive/>
      <ambientLight />
      <OrbitControls enableZoom={false}  minAzimuthAngle={1} maxAzimuthAngle={0}/>
    </Canvas>
  );
};
