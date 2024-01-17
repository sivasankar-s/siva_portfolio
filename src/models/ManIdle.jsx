import React, { useEffect, useRef } from 'react'

import manIdleScene from '../assets/3d/male_idle.glb';
import { useAnimations, useGLTF } from '@react-three/drei';


const ManIdle = ({ ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(manIdleScene);
    const {actions} = useAnimations(animations, ref);

    useEffect(() => {
        // if(isRotating) {
            actions['Take 001'].play();
        // } else {
            // actions['Take 001'].stop();
        // }
    }, [actions])


  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default ManIdle