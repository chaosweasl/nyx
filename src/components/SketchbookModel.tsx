import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const SketchbookModel: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group>
      <Icosahedron ref={meshRef} args={[1, 1]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#1C1917"
          wireframe={true}
          transparent={true}
          opacity={0.15}
        />
      </Icosahedron>

      {/* Outer subtle wireframe for depth */}
      <Icosahedron args={[1.5, 2]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#C85F38"
          wireframe={true}
          transparent={true}
          opacity={0.05}
        />
      </Icosahedron>
    </group>
  );
};

export default SketchbookModel;
