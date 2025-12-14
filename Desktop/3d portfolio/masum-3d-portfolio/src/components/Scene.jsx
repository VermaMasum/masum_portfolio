import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import HeroModel from "./HeroModel";
import ParticleField from "./ParticleField";

export default function Scene() {
  return (
    <Canvas
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      {/* Strong base light */}
      <ambientLight intensity={1.5} />

      {/* Key lights */}
      <directionalLight position={[5, 5, 5]} intensity={2.5} />
      <directionalLight position={[-5, -3, 5]} intensity={1.5} />

      {/* Reflection source (CRITICAL for crystal) */}
      <Environment preset="sunset" />

      <ParticleField />

      {/* ONLY the crystal */}
      <HeroModel />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}
