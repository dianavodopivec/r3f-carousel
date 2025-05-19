import { Canvas } from "@react-three/fiber";
import { Geometry } from "./Geometry";
import { OrbitControls } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { useCarouselControls } from "./UIControls";

export const Carousel = () => {
  const {
    directionalLightIntensity,
    bloomIntensity,
    luminanceThreshold,
    luminanceSmoothing,
  } = useCarouselControls();

  return (
    <Canvas camera={{ fov: 70 }} flat>
      <directionalLight intensity={directionalLightIntensity} position={[0, 1, 2.5]} />
      <Geometry />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={bloomIntensity}
          luminanceThreshold={luminanceThreshold}
          luminanceSmoothing={luminanceSmoothing}
        />
      </EffectComposer>
      <ToneMapping adaptive />
      <ambientLight />
      <OrbitControls
        enableZoom={false}
        minAzimuthAngle={1}
        maxAzimuthAngle={0}
      />
    </Canvas>
  );
};
