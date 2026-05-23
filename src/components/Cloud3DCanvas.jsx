import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Cloud3DCanvas({ scale = 1, opacity = 0.8, size = 120 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    
    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);
    
    // Main directional light
    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // Sun Point (Punctual Light)
    const sunPointLight = new THREE.PointLight(0xffeeba, 5, 50);
    sunPointLight.position.set(-5, 5, 5);
    scene.add(sunPointLight);

    // Fill Light (Punctual Light)
    const fillLight = new THREE.PointLight(0xaaccff, 3, 50);
    fillLight.position.set(5, -2, -5);
    scene.add(fillLight);

    let model = null;
    let mixer = null;
    const loader = new GLTFLoader();

    // Load cloud.glb
    loader.load(
      '/cloud.glb',
      (gltf) => {
        model = gltf.scene;
        
        // Scale and center
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = (3.5 * scale) / maxDim;
        model.scale.setScalar(scaleFactor);
        
        const center = box.getCenter(new THREE.Vector3());
        model.position.set(
          -center.x * scaleFactor,
          -center.y * scaleFactor,
          -center.z * scaleFactor
        );

        // Adjust materials to match cloud look
        model.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.transparent = true;
            child.material.opacity = opacity;
            child.material.color = new THREE.Color(0xffffff);
            child.material.roughness = 0.9;
          }
        });

        // Play animations if any
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
        }

        scene.add(model);
      },
      undefined,
      (error) => console.log('Waiting for cloud.glb to be added', error)
    );

    // Animation Loop
    const clock = new THREE.Clock();
    let animationId = null;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      if (model) {
        // Soft floating animation
        model.position.y += Math.sin(time * 2) * 0.005;
        model.rotation.y = time * 0.2;
      }
      
      if (mixer) {
        mixer.update(delta);
      }
      
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, [scale, opacity]);

  return <div ref={mountRef} style={{ width: '120px', height: '120px' }} />;
}
