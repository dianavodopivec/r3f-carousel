import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const image = "./images/carousel-images.png";

export const Geometry = () => {
  const geometryTarget = useRef<THREE.Mesh | null>(null)
  const texture = useTexture(image);
  const accumulatedTime = useRef(0)

  //✨useFrame receive state + clock delta
  useFrame((_, delta) => {
    if(geometryTarget.current) {
      accumulatedTime.current += delta

      geometryTarget.current.rotation.y += delta;

      const zAxis = 0.2 * 1.5 * Math.sin(accumulatedTime.current * 0.3)
      geometryTarget.current.rotation.z = zAxis
    }
  })

  return (
    <group>
      <mesh ref={geometryTarget} rotation={[0, 1.2, 0.4]}>
        <cylinderGeometry args={[2, 2, 2.5, 100, 30, true]} />
        <meshStandardMaterial transparent map={texture} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};
