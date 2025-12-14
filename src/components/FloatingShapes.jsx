import { Float } from "@react-three/drei";
import { useMemo } from "react";
import { randomInRange } from "../utils/random";

export default function FloatingShapes() {
  const shapes = useMemo(() => {
    return Array.from({ length: 6 }, () => ({
      position: [
        randomInRange(-3, 3),
        randomInRange(-2, 2),
        randomInRange(-2, 2),
      ],
    }));
  }, []);

  return (
    <>
      {shapes.map((shape, i) => (
        <Float key={i} speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={shape.position}>
            <icosahedronGeometry args={[0.6, 1]} />
            <meshStandardMaterial
              color="#38bdf8"
              roughness={0.3}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}
