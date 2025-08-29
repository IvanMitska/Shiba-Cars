import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { motion } from 'framer-motion'
import { Group } from 'three'
import { useFrame } from '@react-three/fiber'

function AnimatedPorsche() {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/models/free_porsche_911_carrera_4s/scene.gltf')
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
    }
  })
  
  return (
    <group ref={groupRef} scale={1.2} position={[0, -0.8, 0]}>
      <primitive object={scene.clone()} />
    </group>
  )
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-black">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-orange-400/70">Загрузка 3D модели...</p>
      </div>
    </div>
  )
}

export function CarShowcase3D() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative py-20 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Передовые 
              <span className="gradient-text">
                {' '}технологии
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Мы используем современные 3D технологии для того, чтобы вы могли 
              детально рассмотреть наши автомобили еще до аренды.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300">Интерактивный просмотр</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-gray-300">Детализация высочайшего качества</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass-effect shadow-2xl border border-dark-800/50">
              <Suspense fallback={<LoadingFallback />}>
                <Canvas
                  camera={{ position: [4, 2, 6], fov: 45 }}
                  style={{ width: '100%', height: '100%' }}
                  gl={{ antialias: true, alpha: true }}
                  dpr={[1, 2]}
                >
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
                  <pointLight position={[-10, -10, -10]} intensity={0.5} />
                  <spotLight position={[0, 10, 0]} intensity={0.8} />
                  
                  <AnimatedPorsche />
                  
                  <OrbitControls 
                    enablePan={false}
                    enableZoom={true}
                    enableRotate={true}
                    minDistance={2}
                    maxDistance={8}
                    autoRotate
                    autoRotateSpeed={1}
                    dampingFactor={0.1}
                    enableDamping
                  />
                  
                  <Environment preset="studio" />
                </Canvas>
              </Suspense>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

// Предзагрузка модели
useGLTF.preload('/models/free_porsche_911_carrera_4s/scene.gltf')