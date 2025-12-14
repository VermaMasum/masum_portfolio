import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import { useTheme } from "../theme/useTheme";

export default function EnergyCore() {
  const mesh = useRef();
  const theme = useTheme();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = t * 0.15;
    mesh.current.rotation.y = t * 0.25;
    mesh.current.scale.setScalar(1 + Math.sin(t) * 0.03);
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <torusKnotGeometry args={[1.4, 0.45, 220, 32]} />
      <MeshTransmissionMaterial
        thickness={0.7}
        roughness={0.15}
        transmission={1}
        ior={1.15}
        chromaticAberration={0.04}
        anisotropicBlur={0.2}
        color={theme.primary}
      />
    </mesh>
  );
}
