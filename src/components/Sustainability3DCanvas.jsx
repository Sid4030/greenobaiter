import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Sustainability3DCanvas({ modelPath = '/3dModel.glb', scaleMultiplier = 1.0, tiltX = 0 }) {
  const mountRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.3, 7.5);

    const isMobile = window.innerWidth < 768;

    // Renderer — optimized for performance
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = !isMobile;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Model group for transformations
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // ── LIGHTING ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xe5e7eb, 2.2);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.8);
    dirLight.position.set(6, 8, 6);
    if (!isMobile) {
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 1024;
      dirLight.shadow.mapSize.height = 1024;
      dirLight.shadow.bias = -0.001;
    }
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x0f9f6e, 2.5, 15);
    pointLight.position.set(-3, -2, -3);
    scene.add(pointLight);

    // ── LOAD MODEL ──
    let gltfModel = null;
    let mixer = null;
    const loader = new GLTFLoader();
    const targetScale = (isMobile ? 4.0 : 5.5) * scaleMultiplier;

    loader.load(
      modelPath,
      (gltf) => {
        gltfModel = gltf.scene;

        // Auto-scale and center the model
        const box = new THREE.Box3().setFromObject(gltfModel);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = targetScale / maxDim;
        gltfModel.scale.setScalar(scaleFactor);

        const center = box.getCenter(new THREE.Vector3());
        gltfModel.position.set(
          -center.x * scaleFactor,
          -center.y * scaleFactor,
          -center.z * scaleFactor
        );

        // Traverse & polish materials
        gltfModel.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child.material) {
              child.material.roughness = 0.55;
              child.material.metalness = 0.15;
            }
          }
        });

        // ── PLAY ALL ANIMATIONS ──
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(gltfModel);
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
        }

        modelGroup.add(gltfModel);

        // Initial offset and scale up entry transition
        modelGroup.position.set(0, 0, 0); 
        modelGroup.scale.set(0.1, 0.1, 0.1);

        setIsLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          setLoadingProgress(Math.floor((xhr.loaded / xhr.total) * 100));
        }
      },
      (error) => {
        console.error('Error loading 3D model:', error);
        setHasError(true);
        setIsLoading(false);
      }
    );

    // Resize observer to ensure responsive layout
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = entry.contentRect.width || width;
        height = entry.contentRect.height || height;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(container);

    // ── ANIMATION LOOP ──
    let animationId = null;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      if (gltfModel) {
        // Entry animation (lerp to full size)
        if (modelGroup.scale.x < 0.99) {
          const s = modelGroup.scale.x + (1.0 - modelGroup.scale.x) * 0.05;
          modelGroup.scale.set(s, s, s);
        }

        // Apply tilt and idle rotation on the Y-axis
        modelGroup.rotation.x = tiltX;
        modelGroup.rotation.y = time * 0.12;
      }

      // Update animations
      if (mixer) {
        mixer.update(delta);
      }

      renderer.render(scene, camera);
    };

    animate();

    // ── CLEANUP ──
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>

      {/* 3D Render Canvas Container */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
          overflow: 'visible'
        }}
      />


      {/* Error Fallback */}
      {hasError && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(250,250,249,0.85)',
          zIndex: 4,
          borderRadius: '24px',
          border: '1px solid rgba(6, 47, 33, 0.08)',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800 }}>
            Sustainability Model
          </strong>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
