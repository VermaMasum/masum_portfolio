import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import { useTheme } from "../theme/useTheme";

export default function HeroObject() {
  const mesh = useRef();
  const theme = useTheme();

  useFrame((state) => {
    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.8, 1]} />
      <MeshTransmissionMaterial
        thickness={0.6}
        roughness={0.2}
        transmission={1}
        ior={1.2}
        chromaticAberration={0.05}
        color={theme.primary}
      />
    </mesh>
  );
}
