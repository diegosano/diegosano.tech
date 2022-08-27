import * as THREE from 'three'
import { useState, useEffect, useRef, useCallback } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { loadGLTFModel } from '../lib/model'
import { ComputerContainer } from './ComputerContainer'
import { ComputerSpinner } from './ComputerSpinner'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

export const Computer = () => {
  const containerRef = useRef()
  const rendererRef = useRef()
  const [isLoading, setIsLoading] = useState(true)

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = rendererRef
    const { current: container } = containerRef

    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = containerRef

    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })

      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding

      container.appendChild(renderer.domElement)

      rendererRef.current = renderer

      const scene = new THREE.Scene()
      const target = new THREE.Vector3(-0.5, 0.5, 0)
      const initialCameraPosition = new THREE.Vector3(
        60 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI),
      )

      const camera = new THREE.PerspectiveCamera(10, scW / scH, 1, 1000)

      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      loadGLTFModel(scene, '/computer.glb', {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate()
        setIsLoading(false)
      })

      let req = null
      let frame = 0

      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => window.removeEventListener('resize', handleWindowResize, false)
  }, [handleWindowResize])

  return (
    <ComputerContainer ref={containerRef}>
      {isLoading && <ComputerSpinner />}
    </ComputerContainer>
  )
}
