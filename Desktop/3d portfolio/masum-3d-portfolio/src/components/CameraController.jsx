import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const cameraTargets = {
  "/": [0, 0, 7],
  "/experience": [3, 0, 7],
  "/projects": [-3, 0, 7],
  "/skills": [0, -2, 7],
  "/education": [0, 2, 7],
  "/certifications": [2, 2, 7],
};

export default function CameraController({ route }) {
  const { camera } = useThree();
  const target = useRef(camera.position.clone());

  useFrame(() => {
    const desired = cameraTargets[route] || [0, 0, 7];
    target.current.set(...desired);
    camera.position.lerp(target.current, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
