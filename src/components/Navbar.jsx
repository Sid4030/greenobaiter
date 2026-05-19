import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Leaf, Award, Menu, X } from 'lucide-react';

export default function Navbar({ onRegisterClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Track scroll position to change background transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeColor = isScrolled ? 'var(--primary)' : '#ffffff';
  const mutedThemeColor = isScrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.65)';
  const navBg = isScrolled ? 'rgba(251, 251, 249, 0.92)' : 'rgba(5, 26, 18, 0.3)';
  const borderBg = isScrolled ? 'rgba(11, 61, 43, 0.08)' : 'rgba(255, 255, 255, 0.06)';

  return (
    <>
      <motion.nav 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderBottom: `1px solid ${borderBg}`,
          background: navBg,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Scroll Progress Bar */}
        <motion.div 
          style={{ 
            scaleX: scrollYProgress,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            backgroundColor: 'var(--secondary)',
            transformOrigin: '0%',
            zIndex: 101,
          }} 
        />

        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          height: '75px' 
        }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.25rem', color: themeColor, fontFamily: 'var(--font-heading)' }}>
            <motion.div
              animate={{ rotate: [0, 8, 0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Leaf size={28} style={{ color: 'var(--secondary)' }} />
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span>GREENOVATORS</span>
              <span style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.15em', color: mutedThemeColor }}>HACKATHON 2026</span>
            </div>
          </a>

          {/* Navigation Links - Desktop */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <a href="#about" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor }}>About</a>
            <a href="#themes" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor }}>Themes</a>
            <a href="#objectives" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor }}>Objectives</a>
            <a href="#timeline" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor }}>Timeline</a>
            <a href="#prizes" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.25rem', color: themeColor }}>
              <Award size={16} style={{ color: 'var(--secondary)' }} /> Prizes
            </a>
          </div>

          {/* Action Button - Desktop */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              className="btn-primary" 
              onClick={onRegisterClick}
              style={{ 
                padding: '0.55rem 1.4rem', 
                fontSize: '0.85rem',
                backgroundColor: isScrolled ? 'var(--primary)' : 'var(--accent)',
                color: isScrolled ? '#ffffff' : 'var(--primary)',
                boxShadow: 'none'
              }}
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="mobile-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              display: 'none', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              color: themeColor 
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <motion.div
        className="mobile-drawer"
        style={{
          position: 'fixed',
          top: '75px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(5, 26, 18, 0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 99,
          display: isMobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          padding: '2rem',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff' }}>About</a>
        <a href="#themes" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff' }}>Themes</a>
        <a href="#objectives" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff' }}>Objectives</a>
        <a href="#timeline" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff' }}>Timeline</a>
        <a href="#prizes" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff' }}>
          <Award size={20} style={{ color: 'var(--secondary)' }} /> Prizes
        </a>
        <button 
          className="btn-primary" 
          onClick={() => {
            setIsMobileMenuOpen(false);
            onRegisterClick();
          }}
          style={{ width: '80%', textAlign: 'center', justifyContent: 'center', backgroundColor: 'var(--accent)', color: 'var(--primary)' }}
        >
          Register Now
        </button>
      </motion.div>

      {/* Embedded CSS for hover states & responsive adjustments */}
      <style dangerouslySetInnerHTML={{__html: `
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--secondary);
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}} />
    </>
  );
}
