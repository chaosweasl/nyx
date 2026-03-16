import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  PresentationControls,
  Icosahedron,
} from "@react-three/drei";
import * as THREE from "three";

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;

      // Smooth scale on hover
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1,
      );
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <Icosahedron
        ref={meshRef}
        args={[1.4, 0]}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <meshPhysicalMaterial
          color="#D9531E"
          metalness={0.2}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
        />
      </Icosahedron>
      {/* Outer wireframe for a cool techy look */}
      <Icosahedron args={[1.6, 0]}>
        <meshBasicMaterial
          color="#8BAF7C"
          wireframe
          transparent
          opacity={0.2}
        />
      </Icosahedron>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center relative rounded-[2rem] overflow-hidden bg-text-ink/5 border border-text-ink/10 shadow-inner group">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        className="w-full h-full cursor-grab active:cursor-grabbing absolute inset-0"
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <PresentationControls
          global={false}
          cursor={true}
          snap={true}
          speed={1.5}
          zoom={1}
          polar={[-0.2, 0.2]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <AnimatedShape />
        </PresentationControls>

        <Environment preset="city" />

        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4}
        />
      </Canvas>
      <div className="absolute bottom-4 left-0 w-full flex justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-xs font-mono text-text-ink/50 bg-bg-cream/80 backdrop-blur-sm px-3 py-1 rounded-full">
          Interact with me
        </p>
      </div>
    </div>
  );
};

export default Hero3D;
