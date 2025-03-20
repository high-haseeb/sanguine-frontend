import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floorMaterial = new THREE.MeshBasicMaterial({ color: '#FF0000' });
const obstacleMaterial = new THREE.MeshStandardMaterial({
  color: '#ee6055',
  metalness: 0.25,
  roughness: 0.12,
});

export function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh geometry={boxGeometry} position={[0, -0.1, 0]} scale={[4, 0.2, 4]} material={floorMaterial} />
      <CuboidCollider restitution={0.5} args={[6, 0.1, 0.06]} position={[-2.5, 2.2, -5]} />
      <CuboidCollider restitution={0.5} args={[6, 0.1, 0.06]} position={[2.5, 2.2, -5]} />
    </group>
  );
}

export function BlockSpinner({ position = [0, 0, 0], text = '' }) {
  const obstacle = useRef();
  const speed = useRef((Math.random() + 0.3) * (Math.random() < 0.5 ? -1 : 1));

  useFrame(() => {
    const time = Date.now() / 1000;
    const rotation = new THREE.Quaternion();
    rotation.setFromEuler(new THREE.Euler(0, time * speed.current, 0));
    obstacle.current.setNextKinematicRotation(rotation);
  });

  return (
    <group position={position}>
      <mesh geometry={boxGeometry} material={floorMaterial} position={[0, -0.1, 0]} scale={[1000, 0.2, 4]} />
      <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
        <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[3.5, 0.3, 0.3]} />
        <Text 
          position={[0, 0, 0.19]}
          fontSize={0.1} 
          color="white"
          anchorX="center" 
          anchorY="middle"
        >
          {text}
        </Text>
      </RigidBody>
    </group>
  );
}

export function BlockAxe({ position = [0, 0, 0], text = '' }) {
  const obstacle = useRef();
  const timeOffset = useRef(Math.random() * Math.PI * 2);

  useFrame(() => {
    const time = Date.now() / 1000;
    const x = Math.sin(time + timeOffset.current) * 1.25;
    obstacle.current.setNextKinematicTranslation({ x: position[0] + x, y: position[1] + 0.75, z: position[2] });
  });

  return (
    <group position={position}>
      <mesh geometry={boxGeometry} material={floorMaterial} position={[0, -0.1, 0]} scale={[1000, 0.2, 4]} />
      <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
        <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[1.5, 1.5, 0.3]} />
        <Text 
          position={[0, 0, 0.2]}
          fontSize={0.1} 
          color="white"
          anchorX="center" 
          anchorY="middle"
        >
          {text}
        </Text>
      </RigidBody>
    </group>
  );
}

function Bounds({ length = 1 }) {
  return (
    <RigidBody type="fixed" restitution={0.2} friction={0}>
      <CuboidCollider args={[1000, 0.1, 2 * length]} position={[0, -0.1, -(length * 2) + 2]} />
    </RigidBody>
  );
}

export function Level({ count = 5, types = [BlockSpinner, BlockAxe] }) {
  const blocks = Array.from({ length: count }, () => types[Math.floor(Math.random() * types.length)]);
  
    /*const obstacleTexts = [
        "Misaligned stakeholders",
        "Low customer retention",
        "Mistrustful consumers",
        "Skeptical market",
        "Disinterested investors",
        "Aggressive competition",
        "Unmemorable branding",
        "Stubborn audience",
        "Misinformed market",
        "Sensitive customers",
        "Overcomplicated pitch",
        "Weak media coverage",
        "Vague selling point",
        "Low industry cred",
        "Unclear communications",
        "Slow growth"
    ];*/

  return (
        <>
            <BlockStart position={[0, 0, 0]} />
            {blocks.map((Block, i) => (
                <Block 
                    key={i}
                    position={[0, 0, -(i + 1) * 4]}
                    /*text={obstacleTexts[i % obstacleTexts.length]} */
                    text={""}
                />
            ))}
            <Bounds length={count + 2} />
        </>
  );
}
