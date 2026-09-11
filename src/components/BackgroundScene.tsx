import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function BackgroundScene() {
  const pointsRef = useRef<THREE.Points>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to [-1, 1]
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    
    // Only track if user has not requested reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random points in a sphere
  const [positions] = useState(() => {
    const count = window.innerWidth < 768 ? 150 : 400; // Less particles on mobile
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 8;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  });

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      // Base rotation
      pointsRef.current.rotation.y -= delta * 0.02;
      pointsRef.current.rotation.x -= delta * 0.01;

      // Mouse subtle response
      const targetRotationY = mousePos.x * 0.1;
      const targetRotationX = mousePos.y * 0.1;

      pointsRef.current.rotation.y += (targetRotationY - pointsRef.current.rotation.y) * 0.05 * delta;
      pointsRef.current.rotation.x += (targetRotationX - pointsRef.current.rotation.x) * 0.05 * delta;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={true}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}
