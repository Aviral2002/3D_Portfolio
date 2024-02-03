import { Canvas, useFrame } from '@react-three/fiber'
import Loader from '../components/Loader'
// import { useRef } from 'react'
import {useState, Suspense, useEffect, useRef, useLayoutEffect} from 'react';
import  Island   from '../models/Island';
import Sky from '../models/Sky';
import Astro from '../models/Astro';
import UFO  from '../models/UFO';
import Popup from '../components/Popup';
import Onebigfatsound from '../assets/Onebigfatsound.mp3';
import { soundoff, soundon } from '../assets/icons';
import dragHandIcon from '../assets/drag.png';
import "./Home.css"


// sound credit https://youtu.be/sW-RWCNhcFU?si=HSUlomEMhDHHeQS9
const OnebigfatsoundAudio = new Audio(Onebigfatsound);

const Home = () => {
  const audioref = useRef(OnebigfatsoundAudio);
  audioref.current.volume = 0.4;
  audioref.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1)
  const [pointLightPosition, setPointLightPosition] = useState([0, 2, 0]);
  const [pointLightIntensity, setPointLightIntensity] = useState(26);
  const [showHint, setShowHint] = useState(true);
  const isSmallDevice = window.innerWidth < 768; // Adjust the threshold as needed
  
  

  const [isPlayingSound, setIsPlayingSound] = useState(false)
  useEffect(() =>{
    if(isPlayingSound){
      audioref.current.play();
    }
    return() => {
      audioref.current.pause();
    }
  },[isPlayingSound])

  

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition;
    let rotation = [0.1, 4.7, 0]
     if(window.innerWidth < 768){
      screenScale = [0.10, 0.10, 0.10];
      screenPosition = [0, -1.25, -2];
     }else{
      screenScale = [0.15, 0.15, 0.15];
      screenPosition = [0, -1.25, -3];
     }
    return [screenScale, screenPosition, rotation]
  }
  
  const adjustUFOForScreenSize = () => {
    let screenScale;
    let screenPosition; 
    let rotation;
     if(window.innerWidth < 768){
      screenScale = [0.25, 0.25, 0.25];
      screenPosition = [0, -1.3, 1.9]
      
     }else{
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [0, -1.2, 2.4]
     }
    return [screenScale, screenPosition]
  }
  const [islandScale, islandPosition, islandRotation] =
   adjustIslandForScreenSize();

  const [ufoScale, ufoPosition] =
   adjustUFOForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <Popup currentStage = {currentStage}/>}
      </div>

    
    

      {showHint && (
          <>
             <div className={`hint-text ${isSmallDevice ? 'small-device' : 'large-device'}`}>
          {isSmallDevice
            ? 'Click and Drag to Navigate'
            : 'Click, Drag, or Use Arrow Keys (L/R) to Navigate'}
            </div>
            <div className="hand-icon-outer-container">
              <div className="hand-icon-container">
                <img
                  src={dragHandIcon}
                  alt="Drag to explore"
                  className="hand-icon"
                />
                <div className="circle"></div>
              </div>
            </div>
          </>
        )}

    <Canvas
      className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={{ near: 0.1, far: 1000 }}
      gl={{ pixelRatio: isSmallDevice ? 0.5 : 1 }} // Set pixelRatio using the gl prop
      >


          <Suspense fallback={<Loader />}>

          <directionalLight position={[10, 2, 100]} intensity={2} color="#445588" castShadow={false}/>


          <hemisphereLight skycolor="#020203" groundColor="#070e1f" intensity={0.1} castShadow={false}/>
                    
          <pointLight 
          position={pointLightPosition}
           intensity={pointLightIntensity}
            color="#fff"
            castShadow={false} />

            <Astro />
            <Sky
             isRotating={isRotating} />
             <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            pointLightPosition={pointLightPosition} // Pass the state variable here
            pointLightIntensity={pointLightIntensity} // Pass the state variable here
            setPointLightPosition={setPointLightPosition} // Pass the point light position setter
            setPointLightIntensity={setPointLightIntensity} // Pass the point light intensity setter
            
       
          />
          <UFO 
          isRotating={isRotating}
          position = {ufoPosition}
          scale = {ufoScale}
          rotation = {[0, 26, 0]}
          pointLightPosition={pointLightPosition} // Pass the state variable here
          pointLightIntensity={pointLightIntensity} // Pass the state variable here
          setPointLightPosition={setPointLightPosition} // Pass the point light position setter
          setPointLightIntensity={setPointLightIntensity} // Pass the point light intensity setter
          />
          
          </Suspense>

      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
        src={!isPlayingSound ? soundoff:soundon}
        alt="sound"
        className='w-10 h-10 cursor-pointer object-contain'
        onClick={() => setIsPlayingSound(!isPlayingSound)}
        />
      </div>


    </section>
  )
}

export default Home