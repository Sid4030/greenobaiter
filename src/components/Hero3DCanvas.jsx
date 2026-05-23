import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 7.5);

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
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xe5e7eb, 2.0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
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
    const cloudsMesh = [];
    let cylinderMesh = null;
    let cylinder001Mesh = null;

    // Store original local positions of plane parts
    let planeOriginalPos = null;
    let propOriginalPos = null;

    const loader = new GLTFLoader();
    const targetScale = isMobile ? 4.5 : 6.0;

    loader.load(
      'assets/3dModel.glb',
      (gltf) => {
        gltfModel = gltf.scene;

        // Auto-scale and center
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
              child.material.roughness = 0.5;
              child.material.metalness = 0.1;

              if (child.name.toLowerCase().includes('cloud')) {
                child.material.transparent = true;
                child.material.opacity = 0.9;
                cloudsMesh.push(child);
              }

              if (child.name === 'Cylinder') {
                cylinderMesh = child;
                child.visible = false;
              }
              if (child.name === 'Cylinder.001') {
                cylinder001Mesh = child;
                child.visible = false;
              }
            }
          }
        });

        // Store original local positions of plane parts for orbit offset
        if (cylinderMesh) {
          planeOriginalPos = cylinderMesh.position.clone();
        }
        if (cylinder001Mesh) {
          propOriginalPos = cylinder001Mesh.position.clone();
        }

        modelGroup.add(gltfModel);

        // ── OFFSET ──
        // Center the earth perfectly behind the text, shifted slightly left as requested
        modelGroup.position.set(-0.5, 0, 0); 
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

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = entry.contentRect.width || width;
        height = entry.contentRect.height || height;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
    });
    resizeObserver.observe(container);

    // ── ANIMATION LOOP ──
    let animationId = null;
    const clock = new THREE.Clock();

    // Orbit parameters for the plane
    const orbitRadius = 0.65; // wider orbit for the larger globe
    const orbitSpeed = 0.55; 
    const orbitTilt = 0.25; 

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      if (gltfModel) {
        // ── ENTRY LERP ──
        if (modelGroup.position.y < -0.05 || modelGroup.scale.x < 0.99) {
          modelGroup.position.y += (0 - modelGroup.position.y) * 0.04;
          modelGroup.position.z += (0 - modelGroup.position.z) * 0.04;
          const s = modelGroup.scale.x + (1.0 - modelGroup.scale.x) * 0.04;
          modelGroup.scale.set(s, s, s);
        }

        // ── IDLE ROTATION ──
        modelGroup.rotation.y = time * 0.07;

        // ── GENTLE FLOAT ──
        modelGroup.position.y += Math.sin(time * 1.1) * 0.001;

        // ── CLOUDS ──
        cloudsMesh.forEach((cloud, index) => {
          cloud.rotation.y = time * 0.015 * (index % 2 === 0 ? 1 : -1) + index;
          cloud.position.y += Math.sin(time * 0.7 + index * 1.6) * 0.00015;
        });

        // ── PLANE CIRCULAR ORBIT ──
        if (cylinderMesh && planeOriginalPos) {
          const angle = time * orbitSpeed;
          cylinderMesh.position.x = planeOriginalPos.x + Math.cos(angle) * orbitRadius;
          cylinderMesh.position.z = planeOriginalPos.z + Math.sin(angle) * orbitRadius;
          cylinderMesh.position.y = planeOriginalPos.y + Math.sin(time * 1.7) * orbitTilt;
          cylinderMesh.rotation.z = Math.sin(angle) * 0.16;
          cylinderMesh.rotation.y = -angle + Math.PI; 
        }

        // ── PROPELLER SPIN ──
        if (cylinder001Mesh && propOriginalPos) {
          const angle = time * orbitSpeed;
          cylinder001Mesh.position.x = propOriginalPos.x + Math.cos(angle) * orbitRadius;
          cylinder001Mesh.position.z = propOriginalPos.z + Math.sin(angle) * orbitRadius;
          cylinder001Mesh.position.y = propOriginalPos.y + Math.sin(time * 1.7) * orbitTilt;
          cylinder001Mesh.rotation.z = Math.sin(angle) * 0.16;
          cylinder001Mesh.rotation.y = -angle + Math.PI;
          cylinder001Mesh.rotation.x = time * 28.0;
        }
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

      {/* Loading Overlay */}
      {isLoading && !hasError && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle, rgba(250,250,249,0.4) 0%, rgba(250,250,249,0.92) 100%)',
          zIndex: 5,
          borderRadius: '24px',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(0, 0, 0, 0.04)'
        }}>
          <svg width="60" height="60" viewBox="0 0 50 50" style={{ animation: 'spin 1.5s linear infinite' }}>
            <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(15, 159, 110, 0.1)" strokeWidth="4" />
            <circle cx="25" cy="25" r="20" fill="none" stroke="#0f9f6e" strokeWidth="4"
              strokeDasharray="80 200" strokeDashoffset="0" strokeLinecap="round" />
          </svg>
          <span style={{
            marginTop: '1.25rem',
            color: '#062f17',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            Initializing eco-island {loadingProgress}%
          </span>
        </div>
      )}

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
          <div style={{
            width: '180px', height: '180px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(15, 159, 110, 0.1) 0%, rgba(15, 159, 110, 0.02) 75%)',
            border: '2px dashed rgba(15, 159, 110, 0.3)',
            animation: 'spin 12s linear infinite',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '1.5rem',
            boxShadow: '0 0 40px rgba(15, 159, 110, 0.05)'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 8.5C17 15 15 20 11 20z" />
              <path d="M19 2c-2.26 4.33-5.27 7.14-8 10" />
            </svg>
          </div>
          <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800 }}>
            Circular Eco-Sphere
          </strong>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem', maxWidth: '300px' }}>
            National Grand Finale Roadmap &amp; Smart Incubation Platform
          </span>
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
