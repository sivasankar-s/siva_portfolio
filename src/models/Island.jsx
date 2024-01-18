import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three'

import islandScene from '../assets/3d/home9_compressed.glb'

const Island = ({isRotating, setIsRotating, setCurrentStage, setDirection, setShowDrag, ...props}) => { //setRunning props
    const islandRef = useRef();

    const {gl, viewport} = useThree();

  const { nodes, materials } = useGLTF(islandScene);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
        setShowDrag(false);

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;

        

        lastX.current = clientX;
    }

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);

        
    }

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if(isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            if(lastX.current>clientX) setDirection('right');
             if(lastX.current<clientX) setDirection('left');

        const delta = (clientX - lastX.current)/viewport.width;

        islandRef.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft') {
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.y += 0.01 * Math.PI;
            setDirection('left');
            setShowDrag(false);
            
        } else if(e.key === 'ArrowRight') {
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.y -= 0.01 * Math.PI;
            setDirection('right');
            setShowDrag(false);
        }
    }

    const handleKeyUp = (e) => {
        if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
            setIsRotating(false)
        }
    }

    // let prevRotation = 0;

    useFrame(() => {
        if(!isRotating) {
            rotationSpeed.current *= dampingFactor;

            if(Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current=0;
            }

            islandRef.current.rotation.y += rotationSpeed.current

            ////////////

            const rotation = islandRef.current.rotation.y;

                const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        // prevRotation = normalizedRotation


        // console.log("Previous rotation" + prevRotation.toFixed(1))
        // console.log("Normalized rotation" + normalizedRotation.toFixed(1))
        // if(normalizedRotation.toFixed(1) != prevRotation) {
        //   setRunning(true)
        // }
        // prevRotation = normalizedRotation

        switch (true) {
          case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            setCurrentStage(3);
            break;
          case normalizedRotation >= 0.94 && normalizedRotation <= 1.35:
            setCurrentStage(2);
            break;
          case normalizedRotation >= 1.8 && normalizedRotation <= 2.3:
            setCurrentStage(1);
            break;
          case normalizedRotation >= 4.15 && normalizedRotation <= 4.5:
            setCurrentStage(4);
            break;
          default:
            setCurrentStage(null);
        }

            

            
        }else {
                const rotation = islandRef.current.rotation.y;

                const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        // prevRotation = normalizedRotation;


        // console.log(normalizedRotation)

      // Set the current stage based on the island's orientation
      // switch (true) {
      //   case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
      //     setCurrentStage(4);
      //     break;
      //   case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
      //     setCurrentStage(3);
      //     break;
      //   case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
      //     setCurrentStage(2);
      //     break;
      //   case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
      //     setCurrentStage(1);
      //     break;
      //   default:
      //     setCurrentStage(null);
      // }

      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 0.94 && normalizedRotation <= 1.35:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 1.8 && normalizedRotation <= 2.3:
          setCurrentStage(1);
          break;
        case normalizedRotation >= 4.15 && normalizedRotation <= 4.5:
          setCurrentStage(4);
          break;
        default:
          setCurrentStage(null);
      }

            }
        
    })

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.026, 0.441, -0.371]}
        scale={0.039}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.114, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry
        }
        material={materials.retro_computer_setup_Mat}
        position={[-0.462, 0.427, 0.164]}
        rotation={[-1.646, 0.098, -1.35]}
        scale={0.002}
      />
      <group
        position={[0.218, 0.461, 0.446]}
        rotation={[0.201, 0.61, -0.085]}
        scale={0.011}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube11_lumirere_0_1.geometry}
          material={materials.PaletteMaterial002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube11_lumirere_0_2.geometry}
          material={materials.ecrran}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube11_lumirere_0_3.geometry}
          material={materials.Corps}
        />
      </group>
      <group
        position={[0.505, 0.473, -0.119]}
        rotation={[-2.741, 1.44, 3.036]}
        scale={[0.005, 0.016, 0.004]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials.PaletteMaterial003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001_1.geometry}
          material={materials.PaletteMaterial004}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_68.geometry}
        material={materials.house1}
        position={[-0.077, 0.47, 0.163]}
        rotation={[-Math.PI, -0.796, Math.PI]}
        scale={0.062}
      />
    </a.group>
  );
}

// useGLTF.preload("/home_stone_comp.glb");

export default Island