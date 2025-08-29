import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { Group } from 'three'

interface PorscheModelProps {
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
}

export function PorscheModel({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: PorscheModelProps) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/models/free_porsche_911_carrera_4s/scene.gltf')
  
  return (
    <group ref={groupRef} scale={scale} position={position} rotation={rotation}>
      <primitive object={scene.clone()} />
    </group>
  )
}

useGLTF.preload('/models/free_porsche_911_carrera_4s/scene.gltf')