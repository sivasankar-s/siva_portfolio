import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three'

import islandScene from '../assets/3d/home6.glb'

const Island = ({isRotating, setIsRotating, setCurrentStage, setDirection, setShowDrag, ...props}) => {
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

    useFrame(() => {
        if(!isRotating) {
            rotationSpeed.current *= dampingFactor;

            if(Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current=0;
            }

            islandRef.current.rotation.y += rotationSpeed.current

            
        }else {
                const rotation = islandRef.current.rotation.y;

                const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
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
      <group
        position={[-0.421, 0.482, 0.201]}
        rotation={[-1.725, 0.295, -1.16]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry
          }
          material={materials.retro_computer_setup_Mat}
          position={[-26.83, -3.035, -30.307]}
          rotation={[0.212, -0.006, -0.174]}
        />
      </group>
      <group
        position={[0.218, 0.461, 0.446]}
        rotation={[-1.418, 0.07, 0.611]}
        scale={1.061}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube10_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0, 0.81, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={-1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube11_lumirere_0_1.geometry}
            material={materials.lumirere}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube11_lumirere_0_2.geometry}
            material={materials.Corps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube11_lumirere_0_3.geometry}
            material={materials["Corps.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube11_lumirere_0_4.geometry}
            material={materials.Inox}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube11_lumirere_0_5.geometry}
            material={materials.ecrran}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube12_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0, 0.81, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube13_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0, 0.81, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={-1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube5_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0, 0.81, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube8_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0, 0.81, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube9_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0, 0.81, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={-1}
          />
        </group>
      </group>
      <group
        position={[0.502, 0.479, -0.169]}
        rotation={[-1.495, 0.08, 1.485]}
        scale={0.035}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-1.41, -0.049, 0.226]}
            rotation={[-0.124, 0.209, 0.233]}
            scale={[0.149, 0.448, 0.121]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2001.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2001_1.geometry}
              material={materials["Material.007"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2001_2.geometry}
              material={materials["Material.008"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2001_3.geometry}
              material={materials["Material.006"]}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.002"]}
        position={[-0.026, 0.441, -0.371]}
        scale={0.039}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={materials["Material.009"]}
        position={[-0.008, 0.521, -0.408]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={materials["Material.010"]}
        position={[-0.057, 0.541, -0.467]}
        rotation={[-1.949, -0.743, 2.365]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003.geometry}
        material={materials["Material.011"]}
        position={[-0.056, 0.596, -0.413]}
        scale={-0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004.geometry}
        material={materials["Material.012"]}
        position={[-0.088, 0.598, -0.352]}
        scale={-0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere005.geometry}
        material={materials["Material.013"]}
        position={[-0.056, 0.576, -0.392]}
        rotation={[-0.053, -0.814, -1.663]}
        scale={-0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
        position={[0.05, 0.514, -0.292]}
        scale={0.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere006.geometry}
        material={materials["Material.009"]}
        position={[0.061, 0.563, -0.315]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere007.geometry}
        material={materials["Material.010"]}
        position={[0.032, 0.575, -0.351]}
        rotation={[-1.949, -0.743, 2.365]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere008.geometry}
        material={materials["Material.011"]}
        position={[0.032, 0.609, -0.318]}
        scale={-0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere009.geometry}
        material={materials["Material.012"]}
        position={[0.012, 0.611, -0.28]}
        scale={-0.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere010.geometry}
        material={materials["Material.013"]}
        position={[0.032, 0.597, -0.305]}
        rotation={[-0.053, -0.814, -1.663]}
        scale={-0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.002"]}
        position={[0.265, 0.474, -0.168]}
        rotation={[0.337, -0.715, -0.084]}
        scale={0.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere011.geometry}
        material={materials["Material.009"]}
        position={[0.291, 0.522, -0.159]}
        rotation={[0.337, -0.715, -0.084]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere012.geometry}
        material={materials["Material.010"]}
        position={[0.293, 0.551, -0.198]}
        rotation={[-1.924, -0.292, 1.706]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere013.geometry}
        material={materials["Material.011"]}
        position={[0.274, 0.574, -0.161]}
        rotation={[0.337, -0.715, -0.084]}
        scale={-0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere014.geometry}
        material={materials["Material.012"]}
        position={[0.234, 0.571, -0.146]}
        rotation={[0.337, -0.715, -0.084]}
        scale={-0.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere015.geometry}
        material={materials["Material.013"]}
        position={[0.264, 0.559, -0.157]}
        rotation={[-0.802, -1.464, -2.819]}
        scale={-0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.002"]}
        position={[-0.356, 0.436, -0.079]}
        rotation={[0.337, -0.715, -0.084]}
        scale={0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere016.geometry}
        material={materials["Material.009"]}
        position={[-0.319, 0.502, -0.066]}
        rotation={[0.337, -0.715, -0.084]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere017.geometry}
        material={materials["Material.010"]}
        position={[-0.316, 0.542, -0.12]}
        rotation={[-1.924, -0.292, 1.706]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere018.geometry}
        material={materials["Material.011"]}
        position={[-0.343, 0.575, -0.069]}
        rotation={[0.337, -0.715, -0.084]}
        scale={-0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere019.geometry}
        material={materials["Material.012"]}
        position={[-0.398, 0.571, -0.047]}
        rotation={[0.337, -0.715, -0.084]}
        scale={-0.031}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere020.geometry}
        material={materials["Material.013"]}
        position={[-0.356, 0.554, -0.063]}
        rotation={[-0.802, -1.464, -2.819]}
        scale={-0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.002"]}
        position={[-0.17, 0.516, 0.102]}
        rotation={[0.337, -0.715, -0.084]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere021.geometry}
        material={materials["Material.009"]}
        position={[-0.149, 0.553, 0.109]}
        rotation={[0.337, -0.715, -0.084]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere022.geometry}
        material={materials["Material.010"]}
        position={[-0.148, 0.576, 0.079]}
        rotation={[-1.924, -0.292, 1.706]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere023.geometry}
        material={materials["Material.011"]}
        position={[-0.163, 0.594, 0.108]}
        rotation={[0.337, -0.715, -0.084]}
        scale={-0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere024.geometry}
        material={materials["Material.012"]}
        position={[-0.193, 0.592, 0.12]}
        rotation={[0.337, -0.715, -0.084]}
        scale={-0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere025.geometry}
        material={materials["Material.013"]}
        position={[-0.17, 0.582, 0.111]}
        rotation={[-0.802, -1.464, -2.819]}
        scale={-0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.002"]}
        position={[-0.157, 0.489, 0.181]}
        rotation={[0.936, 0.971, -1.357]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere026.geometry}
        material={materials["Material.009"]}
        position={[-0.149, 0.523, 0.156]}
        rotation={[0.936, 0.971, -1.357]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere027.geometry}
        material={materials["Material.010"]}
        position={[-0.17, 0.553, 0.164]}
        rotation={[-1.265, 0.072, -2.579]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere028.geometry}
        material={materials["Material.011"]}
        position={[-0.134, 0.562, 0.164]}
        rotation={[0.936, 0.971, -1.357]}
        scale={-0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere029.geometry}
        material={materials["Material.012"]}
        position={[-0.111, 0.556, 0.188]}
        rotation={[0.936, 0.971, -1.357]}
        scale={-0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere030.geometry}
        material={materials["Material.013"]}
        position={[-0.131, 0.55, 0.171]}
        rotation={[-0.041, 0.523, -2.288]}
        scale={-0.015}
      />
      <group
        position={[0.23, 0.548, 0.256]}
        rotation={[0.449, 0.54, -0.687]}
        scale={0.026}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere031_1.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere031_2.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere031_3.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere031_4.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere031_5.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere031_6.geometry}
          material={materials["Material.017"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.014"]}
        position={[0.407, 0.452, -0.114]}
        rotation={[0.465, 0.725, -0.833]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere036.geometry}
        material={materials["Material.015"]}
        position={[0.435, 0.52, -0.161]}
        rotation={[0.465, 0.725, -0.833]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere037.geometry}
        material={materials["Material.016"]}
        position={[0.384, 0.576, -0.168]}
        rotation={[-1.348, -0.142, -2.941]}
        scale={0.041}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere038.geometry}
        material={materials["Material.017"]}
        position={[0.449, 0.603, -0.141]}
        rotation={[0.465, 0.725, -0.833]}
        scale={-0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere039.geometry}
        material={materials["Material.018"]}
        position={[0.473, 0.599, -0.078]}
        rotation={[0.465, 0.725, -0.833]}
        scale={-0.035}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere040.geometry}
        material={materials["Material.019"]}
        position={[0.451, 0.58, -0.124]}
        rotation={[-0.136, 0.109, -2.211]}
        scale={-0.031}
      />
      <group
        position={[0.269, 0.558, -0.04]}
        rotation={[2.975, -0.357, 3.089]}
        scale={0.019}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere047.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere047_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere047_2.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere047_3.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere047_4.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere047_5.geometry}
          material={materials["Material.017"]}
        />
      </group>
      <group
        position={[0.021, 0.595, 0.1]}
        rotation={[2.975, -0.357, 3.089]}
        scale={0.012}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere048.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere048_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere048_2.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere048_3.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere048_4.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere048_5.geometry}
          material={materials["Material.017"]}
        />
      </group>
      <group
        position={[0.026, 0.492, 0.406]}
        rotation={[2.961, 0.531, -3.043]}
        scale={0.012}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere049.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere049_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere049_2.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere049_3.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere049_4.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere049_5.geometry}
          material={materials["Material.017"]}
        />
      </group>
      <group position={[0, 0.114, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere034.geometry}
        material={materials["Material.020"]}
        position={[-0.178, 0.471, 0.317]}
        rotation={[0.926, 0.355, 0.946]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere032.geometry}
        material={materials["Material.020"]}
        position={[0.388, 0.469, 0.157]}
        rotation={[0.969, -0.042, -0.047]}
        scale={0.006}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere033.geometry}
        material={materials["Material.004"]}
        position={[0.071, 0.492, -0.355]}
        rotation={[-2.911, -0.212, -2.299]}
        scale={0.006}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere035.geometry}
        material={materials["Material.020"]}
        position={[0.272, 0.469, -0.287]}
        rotation={[0.969, -0.042, -0.047]}
        scale={0.016}
      />
      <group
        position={[-0.301, 0.402, -0.245]}
        rotation={[-Math.PI / 2, 0, -2.346]}
        scale={0.062}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_68.geometry}
            material={materials.house1}
            position={[2.175, 1.103, -7.207]}
          />
        </group>
      </group>
    </a.group>
  );
}

// useGLTF.preload("/home_decimated_all.glb");

export default Island