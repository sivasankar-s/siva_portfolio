import React, { useEffect, useRef } from 'react'

import manScene from '../assets/3d/male.glb';
import { useAnimations, useGLTF } from '@react-three/drei';


const Man = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(manScene);
    const {actions} = useAnimations(animations, ref);

    useEffect(() => {
        if(isRotating) {
            actions['Take 001'].play();
        } else {
            actions['Take 001'].stop();
        }
    }, [actions, isRotating])


  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Man