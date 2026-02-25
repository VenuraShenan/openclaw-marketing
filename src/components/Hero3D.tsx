'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

function Robot({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const [scene, setScene] = useState<THREE.Object3D | null>(null);
  
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/openclaw-marketing/robot.glb',
      (gltf) => {
        gltf.scene.scale.set(1.8, 1.8, 1.8);
        gltf.scene.position.set(0, -0.5, 0);
        setScene(gltf.scene);
        console.log('Robot loaded!');
      },
      undefined,
      (err) => console.error('Error loading robot:', err)
    );
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePosition.x * 0.5,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mousePosition.y * 0.3,
        0.05
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      {scene && <primitive ref={groupRef} object={scene} />}
    </Float>
  );
}

function Particles() {
  const count = 200;
  const mesh = useRef<THREE.Points>(null);
  
  const particles = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 15;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 15;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 15;
  }

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0003;
      mesh.current.rotation.x += 0.0001;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#8b5cf6" transparent opacity={0.6} />
    </points>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 7]} intensity={1} color="#fff" />
      <pointLight position={[-4, 2, 3]} intensity={1.5} color="#8b5cf6" distance={15} />
      <pointLight position={[4, -1, 3]} intensity={1.2} color="#06b6d4" distance={15} />
      <pointLight position={[0, 3, -3]} intensity={0.8} color="#a855f7" distance={12} />
    </>
  );
}

export default function Hero3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0.5, 5], fov: 45 }}>
        <Lights />
        <Particles />
        <Robot mousePosition={mousePosition} />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
