'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows, Text, Html } from '@react-three/drei';
import * as THREE from 'three';

interface ComputerModelProps {
  position?: [number, number, number];
}

function ComputerModel(props: ComputerModelProps) {
  const ref = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [time, setTime] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Animated text content
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Hello World! 👋\nWelcome to my portfolio';
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => prev + 0.01);
    }, 16);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Reset after 3 seconds
      setTimeout(() => {
        setDisplayText('');
        setTextIndex(0);
      }, 3000);
    }
  }, [textIndex, fullText]);

  useFrame((state) => {
    if (ref.current) {
      // Smooth rotation and hover animation
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        hovered ? Math.PI / 6 : 0,
        0.05
      );
      ref.current.position.y = THREE.MathUtils.lerp(
        ref.current.position.y,
        hovered ? 0.3 : 0,
        0.05
      );

      // Gentle floating animation
      ref.current.position.y += Math.sin(time * 2) * 0.01;
    }

    // Screen glow effect
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.2 + Math.sin(time * 3) * 0.1;
    }
  });

  return (
    <group
      ref={ref}
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Monitor Screen with Glow */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 1.4, 0.1]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.1} 
          roughness={0.8}
          emissive="#000000"
        />
      </mesh>

      {/* Monitor Frame with Better Material */}
      <mesh castShadow receiveShadow position={[0, 0, 0.06]}>
        <boxGeometry args={[2.4, 1.6, 0.05]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.3} 
          roughness={0.4}
          emissive="#111111"
        />
      </mesh>

      {/* Screen Display with Glow Effect */}
      <mesh ref={screenRef} position={[0, 0, 0.06]}>
        <planeGeometry args={[2, 1.2]} />
        <meshStandardMaterial 
          color="#000000" 
          emissive="#0066ff"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Screen Content */}
      <Html position={[0, 0, 0.07]} center>
        <div className="w-80 h-48 bg-black/80 rounded-lg p-4 font-mono text-green-400 text-sm leading-relaxed">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-xs">portfolio.js</span>
          </div>
          <div className="whitespace-pre-line font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
        </div>
      </Html>

      {/* Monitor Stand with Glow */}
      <mesh castShadow receiveShadow position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.4} 
          roughness={0.3}
          emissive="#111111"
        />
      </mesh>

      {/* Monitor Base with LED Ring */}
      <mesh castShadow receiveShadow position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 8]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.4} 
          roughness={0.3}
          emissive="#111111"
        />
      </mesh>

      {/* LED Ring around base */}
      <mesh position={[0, -1.15, 0]}>
        <ringGeometry args={[0.35, 0.45, 32]} />
        <meshStandardMaterial 
          color="#0066ff" 
          emissive="#0066ff"
          emissiveIntensity={0.3 + Math.sin(time * 4) * 0.2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Keyboard with Glowing Keys */}
      <mesh castShadow receiveShadow position={[0, -1.8, 0.5]}>
        <boxGeometry args={[2.8, 0.1, 0.8]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.2} 
          roughness={0.6}
          emissive="#111111"
        />
      </mesh>

      {/* Keyboard Keys */}
      {Array.from({ length: 8 }, (_, i) => (
        <mesh key={i} castShadow position={[-1.2 + i * 0.3, -1.75, 0.5]}>
          <boxGeometry args={[0.2, 0.05, 0.2]} />
          <meshStandardMaterial 
            color="#333333" 
            emissive="#0066ff"
            emissiveIntensity={hovered ? 0.1 : 0}
          />
        </mesh>
      ))}

      {/* Mouse with Glow */}
      <mesh castShadow receiveShadow position={[1.2, -1.8, 0.5]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.2} 
          roughness={0.6}
          emissive="#111111"
        />
      </mesh>

      {/* Mouse LED */}
      <mesh position={[1.2, -1.8, 0.65]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial 
          color="#ff0066" 
          emissive="#ff0066"
          emissiveIntensity={0.5 + Math.sin(time * 5) * 0.3}
        />
      </mesh>

      {/* Desk with Subtle Glow */}
      <mesh castShadow receiveShadow position={[0, -2.2, 0]}>
        <boxGeometry args={[4, 0.2, 2]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          metalness={0.2} 
          roughness={0.8}
          emissive="#111111"
        />
      </mesh>

      {/* Desk Edge Glow */}
      <mesh position={[0, -2.1, 0]}>
        <boxGeometry args={[4.2, 0.02, 2.2]} />
        <meshStandardMaterial 
          color="#0066ff" 
          emissive="#0066ff"
          emissiveIntensity={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Floating Particles */}
      {Array.from({ length: 20 }, (_, i) => (
        <mesh key={i} position={[
          Math.sin(time + i) * 3,
          Math.cos(time * 0.5 + i) * 2 + 1,
          Math.sin(time * 0.3 + i) * 2
        ]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial 
            color="#0066ff" 
            emissive="#0066ff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Computer() {
  return (
    <div className="h-screen w-full">
      <Canvas
        shadows
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <color attach="background" args={['#0a0a0a']} />

        {/* Enhanced Lighting */}
        <ambientLight intensity={0.2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={[2048, 2048]}
          color="#ffffff"
        />
        <pointLight 
          position={[-10, -10, -10]} 
          intensity={0.3}
          color="#0066ff"
        />
        <pointLight 
          position={[10, -10, -10]} 
          intensity={0.2}
          color="#ff0066"
        />

        <ComputerModel position={[0, 0, 0]} />

        {/* Enhanced Contact Shadows */}
        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.6}
          scale={12}
          blur={4}
          far={3}
          color="#0066ff"
        />

        <Environment preset="city" />

        {/* Enhanced Orbit Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}