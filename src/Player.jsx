import { useFrame } from '@react-three/fiber';
import { RigidBody, useRapier } from '@react-three/rapier';
import { useKeyboardControls } from '@react-three/drei';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import useGame from './useGame.jsx';
import { useTexture } from '@react-three/drei';

const Player = () => {
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const body = useRef();
  const { rapier, world } = useRapier();
  const rapierWorld = world;
  const [smoothedCameraPosition] = useState(() => new THREE.Vector3(-10, -10, -10));
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());
  const start = useGame((state) => state.start);
  const end = useGame((state) => state.end);
  const restart = useGame((state) => state.restart);
  const blocksCount = useGame((state) => state.blocksCount);

  const [quality, setQuality] = useState('low'); // Default quality setting
  const [delay, setDelay] = useState('fale'); // Default delay setting
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 1, z: 0 });
  const toggleQuality = () => {
    setQuality((prevQuality) => (prevQuality === 'high' ? 'low' : 'high'));
  };

  // Dynamic resolution scaling based on quality setting
  const pixelRatio = quality === 'high' ? window.devicePixelRatio || 1 : 0.5;
  useEffect(() =>{


    if(document.querySelector('.jump-button')){

      document.querySelector('.jump-button').addEventListener('click', () =>{
 
        jump()
    
      })

      document.querySelector('.left-move').addEventListener('click', () =>{
        moveLeft();

    
      })

      document.querySelector('.right-move').addEventListener('click', () =>{
        moveRight();

    
      })

    }
    return () => {
      document.querySelector('.right-move').removeEventListener('click')
    }
   
  },[])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(false);
    }, 2000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const jump = () => {
    const ray = new rapier.Ray(new THREE.Vector3(), new THREE.Vector3(0, -1, 0));
    const origin = body.current.translation();
    ray.origin.copy(origin);
    const hit = rapierWorld.castRay(ray, 10, true);
    
    if (hit.toi < 0.15) {
      body.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
    }
  };

  const moveLeft = useCallback(() => {
    const impulse = { x: -0.15, y: 0, z: 0 };
    body.current.applyImpulse(impulse);
  });

  const moveRight = useCallback(() => {
    const impulse = { x: 0.15, y: 0, z: 0 };
    body.current.applyImpulse(impulse);
  });

  const reset = () => {
    body.current.setTranslation({ x: 0, y: 1, z: 0 });
    body.current.setLinvel({ x: 0, y: 0, z: 0 });
    body.current.setAngvel({ x: 0, y: 0, z: 0 });
  };

  useEffect(() => {
    const unsubscribeReset = useGame.subscribe(
      (state) => state.phase,
      (value) => {
        if (value === 'ready') {
          reset();
        }
      }
    );

    const unsubscribeJump = subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) {
          jump();
        }
      }
    );

    const unsubscribeAny = subscribeKeys(() => {
      start();
    });

    return () => {
      unsubscribeReset();
      unsubscribeJump();
      unsubscribeAny();
    };
  }, []);

  useFrame((state, delta) => {
    const bodyPosition = body.current.translation();
    

     // Update camera position smoothly
     smoothedCameraPosition.lerp(
      new THREE.Vector3(bodyPosition.x, bodyPosition.y + 0.65, bodyPosition.z + 2.25),
      0.05 // Adjust lerp factor for smoother transition (lower values for smoother)
    );

     // Update camera target smoothly
     smoothedCameraTarget.lerp(
      new THREE.Vector3(bodyPosition.x, bodyPosition.y + 0.25, bodyPosition.z),
      0.05 // Adjust lerp factor for smoother transition (lower values for smoother)
    );

    state.camera.position.copy(smoothedCameraPosition);
    state.camera.lookAt(smoothedCameraTarget);

    const maxDisplacementX = 0.1; // Adjust as needed
    const deltaX = Math.abs(bodyPosition.x - initialPosition.x);

    if (deltaX > maxDisplacementX) {
      // Calculate impulse to move back towards initial position
      const impulseStrength = 0.4 * delta;
      const impulse = {
        x: -(bodyPosition.x - initialPosition.x - Math.sign(bodyPosition.x - initialPosition.x) * maxDisplacementX) * impulseStrength,
        y: 0,
        z: 0
      };
      body.current.applyImpulse(impulse);
    }

    
    if (bodyPosition.z < -(blocksCount * 4 + 2)) {
      end();
    }

    if (bodyPosition.y < -4) {
      restart();
    }

    const { left, right } = getKeys();
    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.4 * delta;
    const torqueStrength = 0.1 * delta;
    
    impulse.z -= impulseStrength / 2;
    torque.x -= torqueStrength / 2;

    if (left) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }
    if (right) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }

    body.current.applyImpulse(impulse);
    body.current.applyTorqueImpulse(torque);

  });

 

  return (
    <>
      <RigidBody
        ref={body}
        position={[0, 1, 0]}
        colliders="ball"
        restitution={0.2}
        friction={1}
        angularDamping={0.5}
        linearDamping={0.5}
      >
        <mesh >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color={'white'}  roughness={0} metalness={0.08}/>
        </mesh>
      </RigidBody>
    </>
  );
};

export default Player;
