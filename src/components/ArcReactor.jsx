import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function ReactorCore() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={2}>
      <mesh ref={mesh}>
        <torusGeometry args={[1.5, 0.15, 32, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={2}
        />
      </mesh>
    </Float>
  );
}

export default function ArcReactor() {
  return (
    <div
      style={{
       width: "500px",
height: "500px",
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={2} />
        <pointLight position={[5, 5, 5]} intensity={5} />
        <ReactorCore />
      </Canvas>
    </div>
  );
}