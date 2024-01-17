import React from 'react'

import carScene from '../assets/3d/car.glb';
import { useGLTF } from '@react-three/drei';

const Car = (props) => {
    const {scene} = useGLTF(carScene);
  return (
    <mesh {...props}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Car