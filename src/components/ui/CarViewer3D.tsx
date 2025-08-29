import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { PorscheModel } from './PorscheModel'

interface CarViewer3DProps {
  className?: string
}

export function CarViewer3D({ className }: CarViewer3DProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [5, 3, 8], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <PorscheModel scale={2} position={[0, -1, 0]} />
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={20}
        />
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}