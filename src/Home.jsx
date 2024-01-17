import { Canvas } from '@react-three/fiber'
import {useEffect, useState} from 'react'
import HomeInfo from './components/HomeInfo'
import Island from './models/island'
import Man from './models/Man'
import ManIdle from './models/ManIdle'
import Sky from './models/Sky'

const Home = () => {

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(null)
    const [direction, setDirection] = useState('right');

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [1,-15.5,-41];
        let rotation = [0.3, 2.5, 0];

        if(window.innerWidth < 768){
            screenScale = [35,35,35];
        } else {
            screenScale = [43,43,43]
        }
        return [screenScale, screenPosition, rotation]
    }

    const adjustCarForScreenSize = () => {
        let screenScale;
        let screenPosition;
        // let rotation = [0.3, 6.7, 0];

        if(window.innerWidth < 768){
            screenScale = [0.4, 0.4, 0.4];
            screenPosition=[0,-2.2, 0]
        } else {
            screenScale = [1,1,1]
            screenPosition=[-1, -4.5, -3.7]
        }
        // console.log(screenScale, screenPosition)
        return [screenScale, screenPosition]
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [carScale, carPosition] = adjustCarForScreenSize();

    const [showDrag, setShowDrag] = useState(true);
    useEffect(() => {
        setShowDrag(true);
    }, [])

    // console.log(direction);

  return (
    <div className='w-full h-screen relative'>

        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentStage && <HomeInfo currentStage={currentStage}/>}
            {showDrag && <h1 className='text-md sm:text-xl font-semibold bg-white border-4 border-gray-500 rounded-2xl px-4 py-6 text-black'>Drag or Use Arrow keys to Explore...</h1>}

        </div>

        <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}
        >
            <directionalLight position={[1,1,1]} intensity={2}/>
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor="#b1e1ff" groundColor='#000000' intensity={1}/>

            <Sky isRotating={isRotating}/>
            <Island position={islandPosition} scale={islandScale} rotation={islandRotation} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} setDirection={setDirection} setShowDrag={setShowDrag}/>
            
            {/* <Car scale={carScale} position={carPosition} rotation={[0.2, 20.35, 0.1]}/> */}

            {!isRotating ?  <ManIdle scale={carScale} position={carPosition} rotation={[0.2, 13.35, 0.1]}/> : //[.., 21.35, ..]
            <Man scale={carScale} position={carPosition} rotation={direction === 'right' ? [0.2, 20.35, 0.1] : [0.2, 17.15, 0.1]} isRotating={isRotating}/>
            }
            {/* <Birds /> */}
           
        </Canvas>
    </div>
  )
}

export default Home