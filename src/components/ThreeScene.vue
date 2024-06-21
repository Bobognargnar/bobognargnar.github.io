<template>
<div ref="threeContainer" class="three-container"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'ThreeScene',
  mounted () {
    this.initThree()
  },
  methods: {
    initThree () {
      // Set up the scene
      const scene = new THREE.Scene()

      // Set up the camera
      const camera = new THREE.PerspectiveCamera(75, this.$refs.threeContainer.clientWidth / this.$refs.threeContainer.clientHeight, 0.1, 1000)
      camera.position.z = 5

      // Set up the renderer
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(this.$refs.threeContainer.clientWidth, this.$refs.threeContainer.clientHeight)
      this.$refs.threeContainer.appendChild(renderer.domElement)

      // Add a cube
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate)

        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        renderer.render(scene, camera)
      }

      animate()
    }
  }
}
</script>

<style scoped>
.three-container {
width: 100%;
height: 500px
}
</style>
