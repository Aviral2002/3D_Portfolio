import React, { useEffect, useRef } from 'react';
import UFOScene from '../assets/3d/ufO1.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const UFO = ({isRotating,
    pointLightPosition, // Add this prop
    pointLightIntensity, // Add this prop
    setPointLightPosition, // Add setPointLightPosition prop
    setPointLightIntensity, // Add setPointLightIntensity prop
     ...props }) => {
    const ref = useRef();
    const pointLightRef = useRef(); // Add a ref for the point light
    const {scene, animations} = useGLTF(UFOScene);
    const { actions } = useAnimations(animations, ref);

useEffect(() => {
  // console.log(animations); // Check if 'Take 001' is present
  //     console.log(actions); // Check the structure of actions
    if(isRotating){
        actions['Hovering'].play();
    }else{
        actions['Hovering'].stop();
    }
}, [actions, isRotating])



useFrame(() =>{
    if(isRotating){
        
    ref.current.rotation.y += 0.010 * Math.PI;
      if (pointLightRef.current) {
        const x = Math.sin(ref.current.rotation.y) * 3;
        const z = Math.cos(ref.current.rotation.y) * -20;
        const y = Math.cos(ref.current.rotation.y) * 1;
        const intensity = Math.abs(Math.sin(ref.current.rotation.y)) * 30;

        // Update the point light position and intensity using the setters
        setPointLightPosition([x, y, z]);
        setPointLightIntensity(intensity);

        

      } 
    }
  })

  return (
    <mesh {...props} ref = {ref}>
        <primitive object={scene} />
        <pointLight
        ref={pointLightRef}
        position={pointLightPosition} // Use the prop here
        intensity={pointLightIntensity} // Use the prop here
        color="#FFFFFF"
      />
    </mesh>
  )
}

export default UFO