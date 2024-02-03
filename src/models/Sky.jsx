// "Night Sky Visible Spectrum Monochromatic"
//  (https://skfb.ly/osLuS) by commonfactory is licensed under Creative Commons Attribution
//   (http://creativecommons.org/licenses/by/4.0/).



import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import Skyscene from '../assets/3d/Sky3.glb'
import { useFrame } from '@react-three/fiber'

const Sky = ({isRotating}) => {
    const sky = useGLTF(Skyscene)
    const skyref = useRef();

    useFrame((_,delta) =>{
      if(isRotating){
        skyref.current.rotation. z+= 0.4 * delta
        skyref.current.rotation. x+= 0.5 * delta
        skyref.current.rotation. y+= 0.6 * delta
      }
    })
  return (
    <mesh ref={skyref}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky