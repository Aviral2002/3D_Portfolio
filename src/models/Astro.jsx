import React, { useEffect, useRef } from 'react'
import astroScene from '../assets/3d/astro1.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Astro = () => {
    const {scene, animations} = useGLTF(astroScene);
    const astroref = useRef();
    const {actions} = useAnimations(animations, astroref)
    useEffect(()=>{
      actions['mixamo.com'].play();
    },[])

    useFrame(({ clock, camera }) => {
      astroref.current.position.y = Math.sin(clock.elapsedTime) * 0.1 + 2;
      
      if(astroref.current.position.x > camera.position.x + 10){
        astroref.current.rotation.y = Math.PI;
      } else if (astroref.current.position.x < camera.position.x - 10){
        astroref.current.rotation.y = 0;
      }
        
      if(astroref.current.rotation.y === 0){
        astroref.current.position.x += 0.01;
        astroref.current.position.z -= 0.01;
      } else {
        astroref.current.position.x -= 0.01;
        astroref.current.position.z += 0.01;
      }
      astroref.current.rotation.x += 0.005; // Adjust the rotation speed as needed
      astroref.current.rotation.z += 0.005; // Adjust the rotation speed as needed

    });
    
  return (
    <mesh position={[-5, 2, 1]} 
    scale={[0.3, 0.3, 0.3]}
    ref={astroref}
    >
        <primitive object={scene} />
    </mesh>
  )
}

export default Astro