import {useRef, useEffect} from 'react'

import birdScene from '../assets/3d/birds.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Birds = () => {
    const birdRef = useRef();
    const {scene, animations} = useGLTF(birdScene);
    const {actions} = useAnimations(animations, birdRef)

    useEffect(() => {
        actions['Scene'].play();
    }, [])

    useFrame(({clock, camera}) => {
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

        if(birdRef.current.position.x > camera.position.x + 10){
            birdRef.current.position.y = Math.PI;
        } else if(birdRef.current.position.x < camera.position.x - 10){
            birdRef.current.rotation.y = 0;
        }

        if(birdRef.current.rotation.y === 0) {
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    })

  return (
    <mesh position={[-7,3.5,-8]} scale={[2, 2, 2]} rotation={[0.7,11.35,0.5]} ref={birdRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Birds