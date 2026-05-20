import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import RegistrationModal from './RegistrationModal';
import Lenis from 'lenis';

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onRegisterClick={openModal} />
      <main style={{ flexGrow: 1 }}>
        <Outlet context={{ openModal }} />
      </main>
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
