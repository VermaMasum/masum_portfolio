import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTheme } from "../theme/useTheme";

export default function HeroModel() {
  const ref = useRef();
  const baseRotation = useRef(0); // ✅ separate base rotation
  const theme = useTheme();
  const { mouse } = useThree();

  const { scene } = useGLTF("/models/crystal_orb/scene.gltf");

  // Apply theme color
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.color.set(theme.primary);
        child.material.emissive?.set(theme.primary);
        child.material.emissiveIntensity = 0.35;
      }
    });
  }, [scene, theme]);

  useFrame(() => {
    if (!ref.current) return;

    // 1️⃣ Continuous base rotation (never stops)
    baseRotation.current += 0.002;

    // 2️⃣ Mouse parallax (small offsets)
    const parallaxX = mouse.y * 0.4;
    const parallaxY = mouse.x * 0.4;

    // 3️⃣ Final rotation = base + parallax
    ref.current.rotation.x = parallaxX * 0.5;

    ref.current.rotation.y = baseRotation.current + parallaxY * 0.5;
  });

  return (
    <primitive ref={ref} object={scene} scale={2.4} position={[0, 0, 0]} />
  );
}
