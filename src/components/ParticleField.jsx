import { Points } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function ParticleField() {
  const pointsRef = useRef();

  // Create particles ONCE
  const positions = useMemo(() => {
    const arr = new Float32Array(600 * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 30;
    }
    return arr;
  }, []);

  // Slow drift
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0003;
      pointsRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <pointsMaterial size={0.12} color="#C39BD3" transparent opacity={1} />

      {/* <pointsMaterial
        size={0.04}
        color="#ffffff"
        transparent
        opacity={0.25}
        depthWrite={false}
      /> */}
    </Points>
  );
}
