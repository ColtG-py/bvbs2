'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Box, Float, ScrollControls, Scroll, useScroll, useVideoTexture, Html } from '@react-three/drei';
import * as THREE from 'three'


const competitors = [
  { id: 1, name: 'Competitor 1', photo: '/images/competitor1.jpg' },
  { id: 2, name: 'Competitor 2', photo: '/images/competitor2.jpg' },
  { id: 3, name: 'Competitor 3', photo: '/images/competitor3.jpg' },
  { id: 4, name: 'Competitor 4', photo: '/images/competitor4.jpg' },
  { id: 5, name: 'Competitor 5', photo: '/images/competitor5.jpg' },
  { id: 6, name: 'Competitor 6', photo: '/images/competitor6.jpg' },
  { id: 7, name: 'Competitor 7', photo: '/images/competitor7.jpg' },
  { id: 8, name: 'Competitor 8', photo: '/images/competitor8.jpg' },
];

const tournaments = [
  { id: 1, name: 'Elden Ring RTFB', startDate: '2025-02-01' },
  { id: 2, name: 'Valorant 1v1', startDate: '2025-02-01' },
  { id: 3, name: 'Pokemon Tournament', startDate: '2025-02-04' },
  { id: 4, name: 'Rocket League', startDate: '2025-02-04' },
  { id: 5, name: 'Fortnite Ramp Race', startDate: '2025-02-08' },
  { id: 6, name: "Jojo's 1v1", startDate: '2025-02-08' },
  { id: 7, name: 'Arcanists', startDate: '2025-02-11' },
  { id: 8, name: 'GWYF Forest', startDate: '2025-02-11' },
  { id: 9, name: 'Song Trivia', startDate: '2025-02-15' },
  { id: 10, name: 'Buckshot Roulette', startDate: '2025-02-15' },
];

const CountdownHtml = ({ countdown }) => {
  return (
    <Html
      position={[0, 1, 0]} // Position the HTML element on the table
      transform // Ensures the HTML element scales with the scene
      occlude // Ensures the HTML element is occluded by 3D objects
      style={{
        color: 'white',
        fontSize: '2rem',
        fontFamily: 'Arial, sans-serif',
        whiteSpace: 'nowrap',
      }}
    >
      <div>{countdown}</div>
    </Html>
  );
};

export function MonitorModel(props) {
  const { nodes, materials } = useGLTF('/monitor.glb');
  const videoTexture = useVideoTexture('/videos/video1.mp4');
  return (
    <group {...props} dispose={null}>
      <group scale={[12.8, 7.2, 4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Material} // Frame material remains unchanged
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
        >
          <meshBasicMaterial map={videoTexture} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

export function Backdrop(props) {
  const { nodes, materials } = useGLTF('/library.glb')
  return (
    <group {...props} dispose={null} rotation={[Math.PI / 32,-Math.PI / 4, 0]} scale={[15, 15, 15]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor.geometry}
        material={materials['Material.009']}
        position={[0.359, 0.553, 0.386]}
        scale={-21.375}
      />
      <group position={[-2.594, 3.814, 0.348]} scale={[0.378, 2.946, 2.864]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_5.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_6.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_7.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group
        position={[0.43, 3.827, -2.519]}
        rotation={[0, -1.571, 0]}
        scale={[0.378, 2.946, 2.647]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_3.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_4.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_5.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_6.geometry}
          material={materials['Material.007']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.014']}
        position={[-0.998, 1.966, 0.679]}
        rotation={[0, 0, -2.677]}
        scale={[-0.042, -1.038, -0.033]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.013']}
        position={[-0.454, 0.866, -0.248]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={materials['Material.012']}
        position={[-1.71, 1.727, 2.839]}
        rotation={[0.206, 0.155, 0.114]}
        scale={[0.057, 0.122, 0.052]}
      />
      <group position={[0, 3.823, 0]} scale={3.234}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials['Material.008']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room001.geometry}
        material={materials['Material.011']}
        position={[0, 3.823, 0]}
        scale={3.234}
      />
    </group>
  )
}

export function Table(props) {
  const { nodes, materials } = useGLTF('/table.glb');

  // Assign textures to the table's face materials
  const textures = competitors.map((competitor) => {
    const loader = new THREE.TextureLoader();
    return loader.load(competitor.photo);
  });

  // Map competitor images to corresponding faces
  const faceMaterials = [
    { material: materials.face7, texture: textures[0], position: [18.319, 0.647, 0.113], rotation: [0, 0.407, 0] },
    { material: materials.face5, texture: textures[1], position: [17.324, 0.647, 0.113], rotation: [0, -0.166, 0] },
    { material: materials.face6, texture: textures[2], position: [17.828, 1.178, 0.113], rotation: [0, 0.128, 0] },
    { material: materials.face4, texture: textures[3], position: [16.226, 0.633, 1.29], rotation: [0, 0.408, 0] },
    { material: materials.face3, texture: textures[4], position: [15.447, 0.633, 1.29], rotation: [0, 0.23, 0] },
    { material: materials.face2, texture: textures[5], position: [15.801, 1.171, 1.29], rotation: [0, 0.393, 0] },
    { material: materials.face8, texture: textures[6], position: [19.438, 0.647, 0.836], rotation: [0, -0.042, 0] },
    { material: materials.face1, texture: textures[7], position: [19.438, 1.178, 0.836], rotation: [0, 0.45, 0] },
  ];

  faceMaterials.forEach(({ material, texture }) => {
    if (texture) {
      material.map = texture;
      material.needsUpdate = true;
    }
  });

  return (
    <group {...props} dispose={null} scale={[1, 1, 1]} rotation={[Math.PI / 32, -Math.PI / 4, 0]}>
      <group scale={[20, 0.33, 8]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.Clockface}
        />
      </group>
      {faceMaterials.map(({ material, position, rotation }, index) => (
        <group
          key={index}
          position={position}
          rotation={rotation}
          scale={[0.354, 0.266, 0.266]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes[`Cube00${index + 1}_1`]?.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes[`Cube00${index + 1}_2`]?.geometry}
            material={material}
          />
        </group>
      ))}
    </group>
  );
}
const ConnectedBox = ({ position, texture }) => {
  const ref = useRef();
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Box ref={ref} position={position} args={[1, 1, 1]} castShadow receiveShadow>
          <meshStandardMaterial map={texture} />
        </Box>
      </Float>
    </>
  );
};

const Scene = ({ countdown }) => {
  const centralRef = useRef();
  const tableRef = useRef();
  const scroll = useScroll();
  const positions = [
    [5, -23, 9],
    [-5, -23, 10],
    [0, -21, 11],
    [0, -25, 10],
    [5, -21, 11],
    [-5, -25, 9],
    [5, -25, 11],
    [-5, -21, 10],
  ];

  const textures = competitors.map((competitor) => {
    const loader = new THREE.TextureLoader();
    return loader.load(competitor.photo);
  });

  useFrame(({ camera }) => {
    const zoom = THREE.MathUtils.lerp(5, 20, scroll.offset);
    camera.position.set(0, 0, zoom);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <Backdrop position={[-10, -55, -10]} />
      <Table ref={tableRef} position={[2, -13, -4]} />
      <MonitorModel position={[0, -3, 0]} />
      {positions.map((pos, index) => (
        <ConnectedBox key={index} position={pos} centralRef={centralRef} texture={textures[index]} />
      ))}
     < CountdownHtml countdown={countdown} />
    </>
  );
};

const ScrollableScene = ({ countdown }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ overflow: 'hidden', display: 'block', width: '100vw', height: '100vh' }}
    >
      <ScrollControls pages={1.5} damping={0.1}>
        <Scroll>
          <Scene countdown={countdown} />
        </Scroll>
      </ScrollControls>
      <ambientLight intensity={.5} />
      <directionalLight
        color="#f4ae9b"
        position={[1000, 1000, 500]}
        intensity={.8}
        castShadow
        shadow-mapSize-width={4024}
        shadow-mapSize-height={4024}
        shadow-camera-far={500}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <directionalLight
        color="#a2cafe"
        position={[-1000, -1000, 1500]}
        intensity={.8}
        castShadow
        shadow-mapSize-width={4024}
        shadow-mapSize-height={4024}
        shadow-camera-far={500}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <directionalLight
        color="#FFFFFF"
        position={[0, 0, 1000]}
        intensity={1}
        castShadow
        shadow-mapSize-width={4024}
        shadow-mapSize-height={4024}
        shadow-camera-far={500}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <pointLight color="#a2cafe" position={[15, 15, -15]} intensity={599} />
      <pointLight position={[0, -10, 0]} intensity={5.5} />
    </Canvas>
  );
};

const HomePage = () => {
  const [generalCountdown, setGeneralCountdown] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const tournamentStartDate = new Date('2025-01-30'); // General tournament start date
      const now = new Date();
      const timeLeft = tournamentStartDate - now;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        setGeneralCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setGeneralCountdown('The tournament has started!');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section style={{ position: 'relative', overflow: 'hidden', height: '100vh', background: 'black' }}>
        <ScrollableScene countdown={generalCountdown} />
      </section>

      <main style={{ padding: '20px' }}>
        <section>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', color: 'white' }}>
            {tournaments.map((tournament) => (
              <div key={tournament.id} style={{ border: '1px solid white', padding: '16px', textAlign: 'center', width: '200px' }}>
                <h3>{tournament.name}</h3>
                <p>Starts on: {tournament.startDate}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
