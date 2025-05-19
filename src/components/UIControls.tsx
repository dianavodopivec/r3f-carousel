import { useControls } from "leva";

export const useCarouselControls = () => {
  return useControls({
    rotationSpeed: { value: 1, min: 0, max: 5, step: 0.1 },
    directionalLightIntensity: { value: 6, min: 0, max: 10, step: 0.1 },
    bloomIntensity: { value: 0.5, min: 0, max: 0.5, step: 0.01 },
    luminanceThreshold: { value: 0.2, min: 0, max: 1, step: 0.01 },
    luminanceSmoothing: { value: 0.1, min: 0, max: 1, step: 0.01 },
        texture: {
      options: {
        Palladium: "/images/carousel-image-1.png",
        Orange: "/images/carousel-image-2.png",
        Abstract: "/images/carousel-image-3.png"
      },
      value: "/images/carousel-image-3.png",
      label: "Texture",
    },
  });
};
