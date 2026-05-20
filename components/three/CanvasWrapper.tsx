'use client';

import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';

export function CanvasWrapper() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="absolute inset-8 border border-amber-500/30 bg-asphalt-800/70 p-8">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Static truck fallback</p>
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [4, 2.2, 5], fov: 38 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 6, 4]} intensity={2.4} color="#FDCB6B" />
        <Float speed={1.35} rotationIntensity={0.35} floatIntensity={0.8}>
          <TruckModel />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} />
      </Canvas>
    </div>
  );
}

function TruckModel() {
  return (
    <group rotation={[0, -0.45, 0]} scale={0.85}>
      <mesh position={[-0.9, 0, 0]}>
        <boxGeometry args={[2.8, 1.05, 1.15]} />
        <meshStandardMaterial color="#F8F8F5" metalness={0.25} roughness={0.35} />
      </mesh>
      <mesh position={[1.05, 0.18, 0]}>
        <boxGeometry args={[1.1, 1.4, 1.2]} />
        <meshStandardMaterial color="#F5A524" metalness={0.2} roughness={0.32} />
      </mesh>
      <mesh position={[1.1, 0.72, 0.02]}>
        <boxGeometry args={[0.78, 0.44, 1.23]} />
        <meshStandardMaterial color="#8A93A3" metalness={0.5} roughness={0.18} />
      </mesh>
      {[-1.7, -0.35, 0.78, 1.55].map((x) => (
        <mesh key={x} position={[x, -0.68, 0.68]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.18, 32]} />
          <meshStandardMaterial color="#0A0E14" metalness={0.25} roughness={0.35} />
        </mesh>
      ))}
      {[-1.7, -0.35, 0.78, 1.55].map((x) => (
        <mesh key={`${x}-rear`} position={[x, -0.68, -0.68]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.18, 32]} />
          <meshStandardMaterial color="#0A0E14" metalness={0.25} roughness={0.35} />
        </mesh>
      ))}
    </group>
  );
}
