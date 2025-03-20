import { Html, useProgress } from '@react-three/drei'
import { useState,useRef, Suspense } from 'react';
import { Canvas } from "@react-three/fiber"
import { KeyboardControls } from '@react-three/drei';
import Experience from './Experience.jsx';
import Interface from './Interface.jsx';

export default function MyCanvas(){
    const playerRef = useRef(null);
    return(
        <KeyboardControls
            map={[
                { name: 'forward', keys: ['KeyW', 'ArrowUp'] }, 
                { name: 'backward', keys: ['KeyS', 'ArrowDown'] }, 
                { name: 'left', keys: ['KeyA', 'ArrowLeft'] }, 
                { name: 'right', keys: ['KeyD', 'ArrowRight'] },
                { name: 'jump', keys: ['Space','KeyJ'] },
            ]}
        >
            <Canvas className="canvas-section"  shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [2.5, 4, 9],
                }}>
                <Suspense fallback={<Loader />}>
                    <Experience />
                </Suspense>
            </Canvas>
            <Interface/>
        </KeyboardControls>
    )
}

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}
