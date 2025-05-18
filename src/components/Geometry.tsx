import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const image = "src/assets/images/carousel-images.png";

export const Geometry = () => {
  const geometryTarget = useRef<THREE.Mesh>(null)
  const texture = useTexture(image);

  //✨useFrame receive state + clock delta
  useFrame((state, delta) => {
    if(geometryTarget.current) {
    geometryTarget.current.rotation.y += delta;
    }
  })

  return (
    <group>
      <mesh ref={geometryTarget} rotation={[0, 1.2, 0.2]}>
        <cylinderGeometry args={[2, 2, 2.5, 100, 30, true]} />
        <meshStandardMaterial transparent map={texture} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};
