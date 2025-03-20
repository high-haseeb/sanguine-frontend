import { Environment } from '@react-three/drei';
import { Level } from './Level.jsx';
import { Physics } from '@react-three/rapier';
import Player from './Player.jsx';
import useGame from './useGame.jsx';
import {  useFrame } from "@react-three/fiber"
import { EffectComposer, HueSaturation, SMAA } from "@react-three/postprocessing"
import { useRef } from 'react';

export default function Experience(){
    const blocksCount = useGame((state) => state.blocksCount);
    const blocksSeed = useGame((state) => state.blocksSeed);
    const light = useRef();

    useFrame((state) => {
        light.current.position.z = state.camera.position.z + 1 - 4;
        light.current.target.position.z = state.camera.position.z - 4;
        light.current.target.updateMatrixWorld();
    });

    return(
        <>
            <ambientLight intensity={0.5} />
            <directionalLight  
                position={[4, 4, 1]}
                ref={light}
                intensity={1}
            />
            <Physics >
                <Level count={blocksCount} seed={blocksSeed} />
                <Player />
            </Physics>

            <Environment files="/adamsbridge.jpg" />
            <EffectComposer disableNormalPass multisampling={0}>
                <SMAA />
                <HueSaturation hue={0} saturation={0.5} />
            </EffectComposer>
        </>
    )
}
