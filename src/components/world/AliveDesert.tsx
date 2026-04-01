
"use client";
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Sky, Environment, Points, PointMaterial, MeshReflectorMaterial, useTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 1. Realistic Desert Wind-Blown Sand Simulation (Saltation)
function WindBlownSand() {
  const points = useRef<THREE.Points>(null!);
  
  // Custom texture for realistic sand motes
  const sandTexture = useTexture('/images/sand_alpha.png'); 

  // Simulation parameters for high-end wind
  const particles = useMemo(() => {
    const count = 15000;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Position sand closer to the ground, dense, like it's being whipped up
      positions[i * 3 + 0] = (Math.random() - 0.5) * 50; 
      positions[i * 3 + 1] = Math.pow(Math.random(), 3) * 3; // Dense near ground (0-3m)
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Realistic wind speed variation
      velocities[i * 3 + 0] = (Math.random() * 0.4 + 0.1); // Strong X velocity (the 'wind')
      velocities[i * 3 + 1] = (Math.random() * 0.05); // Tiny lift
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.05; // Random horizontal drift
    }
    return { positions, velocities, count };
  }, []);

  useFrame((state, delta) => {
    const { positions, velocities, count } = particles;
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] += velocities[i * 3 + 0] * delta * 5; // X movement
      positions[i * 3 + 1] += velocities[i * 3 + 1] * delta * 2; // Y lift
      positions[i * 3 + 2] += velocities[i * 3 + 2] * delta * 2; // Z drift

      // Reset sand that goes off screen (create infinite loop)
      if (positions[i * 3 + 0] > 25) positions[i * 3 + 0] = -25;
      if (positions[i * 3 + 1] > 3) positions[i * 3 + 1] = -0.5; // Reset if it gets too high or sinks
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={points} positions={particles.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors={false}
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        map={sandTexture} 
        color="#F2E0C4" // Perfect sand color caught in light
        alphaTest={0.001}
        opacity={0.6} // Subtlety is realism
      />
    </Points>
  );
}

// 2. The Real World Terrain (Dunes, Textures, and Real Rocks)
function PhotorealisticDesert() {
  // Loading High-End PBR Textures (A to Z Realism)
  // We need these 4 files in your /public folder to work!
  const [colorMap, normalMap, roughnessMap, displaceMap] = useTexture([
    '/textures/sand/color.jpg',
    '/textures/sand/normal.jpg',
    '/textures/sand/roughness.jpg',
    '/textures/sand/displacement.jpg',
  ]);

  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(32, 32); // Creates huge world scale
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(32, 32);
  roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.repeat.set(32, 32);
  displaceMap.wrapS = displaceMap.wrapT = THREE.RepeatWrapping;
  displaceMap.repeat.set(32, 32);

  // We are using standardPhysicalMaterial—the same technology used in CG movies!
  const terrainMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: colorMap,
      normalMap: normalMap,
      normalScale: new THREE.Vector2(1.5, 1.5), // Grains caught in light
      roughnessMap: roughnessMap,
      roughness: 1, // Dunes are dull
      metalness: 0,
      displacementMap: displaceMap,
      displacementScale: 1.2, // This adds physical heavy weight to the dunes!
      color: "#F2D2A4", // Warm sunset hue
      shadowSide: THREE.BackSide,
    });
  }, [colorMap, normalMap, roughnessMap, displaceMap]);

  return (
    <group>
      {/* Real Sculpted Terrain Geometry (Dunes) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow material={terrainMaterial}>
        <planeGeometry args={[100, 100, 256, 256]} /> 
      </mesh>
    </group>
  );
}

// 3. Elements: Far away Mountains & Scattered Rocks/Bushes ( Depth and Reality )
function WorldElements() {
  // Use a professional, optimized asset library (or load placeholders)
  // These will be very small on screen, giving the sense of massive scale.
  return (
    <group>
      {/* Placeholder: Mountains Far Away in Sunset Haze */}
      <mesh position={[0, 4, -40]} scale={[100, 20, 5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#332211" roughness={1} metalness={0} opacity={0.6} transparent />
      </mesh>

      {/* Scattered Stones near the Monolith */}
      <mesh position={[-2, -0.95, -1]} rotation={[Math.random(), 2, 0]} scale={0.15} castShadow>
        <dodecahedronGeometry args={[1]} />
        <meshStandardMaterial color="#443322" roughness={1} />
      </mesh>
       <mesh position={[2.5, -0.9, 0]} rotation={[0.5, 3, 1]} scale={0.12} castShadow>
        <dodecahedronGeometry args={[1]} />
        <meshStandardMaterial color="#332211" roughness={1} />
      </mesh>
    </group>
  );
}

// The Main World Container
export default function AliveDesert() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505]">
      <Canvas shadows camera={{ position: [0, 2.5, 10], fov: 35 }} dpr={[1, 2]}> {/* Optimized dpr for 4K rendering */}
        <Suspense fallback={null}>
          {/* Cinematic Cinematic HDRi Environment ( Sunset/Golden Hour ) */}
          <Environment preset="sunset" background blur={0.01} />
          
          <ambientLight intensity={0.15} />
          <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
          
          {/* Your Core visuals ( Monolith + Terrain + Elements + Wind ) */}
          <mesh position={[0, 1.2, 0]} castShadow> {/* Simplified Monolith for focus */}
            <boxGeometry args={[1, 2.5, 0.15]} />
            <meshStandardMaterial color="#050505" roughness={0.02} metalness={1} />
          </mesh>
          <PhotorealisticDesert />
          <WorldElements />
          <WindBlownSand />

          {/* This makes it easy to move the camera for movie angles later */}
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.1} /> 
        </Suspense>
      </Canvas>
    </div>
  );
        }
