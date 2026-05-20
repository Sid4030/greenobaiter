import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Leaf, Award, Menu, X, HelpCircle, PhoneCall, Users, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onRegisterClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
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

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Determine colors based on scroll state
  const themeColor = 'var(--primary)';
  const mutedThemeColor = 'var(--text-muted)';
  const navBg = isScrolled ? 'rgba(251, 251, 249, 0.98)' : 'rgba(251, 251, 249, 0.5)';
  const borderBg = isScrolled ? 'rgba(11, 61, 43, 0.08)' : 'transparent';

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
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 3vw, 1.5rem)' }}>
            {/* Amity Logo */}
            <img src="/amity_logo.png" alt="Amity University Logo" style={{ height: 'clamp(28px, 6vw, 46px)', width: 'auto' }} />
            
            {/* Greenovators Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.4rem, 1.5vw, 0.75rem)', fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: themeColor, fontFamily: 'var(--font-heading)', textDecoration: 'none' }}>
              <motion.div
                animate={{ rotate: [0, 8, 0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <Leaf size={24} style={{ color: 'var(--secondary)' }} className="nav-leaf-icon" />
              </motion.div>
              <div className="nav-logo-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span>GREENOVATORS</span>
                <span style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.65rem)', fontWeight: 500, letterSpacing: '0.15em', color: mutedThemeColor }}>HACKATHON 2026</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <Link to="/" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor, textDecoration: 'none' }}>Home</Link>
            <Link to="/about" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor, textDecoration: 'none' }}>About</Link>
            <Link to="/problem-statement" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor, textDecoration: 'none' }}>Problem Statement</Link>
            <Link to="/contributors" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor, textDecoration: 'none' }}>Contributors</Link>
            <Link to="/faqs" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor, textDecoration: 'none' }}>FAQs</Link>
            <Link to="/contact" className="nav-link" style={{ fontWeight: 600, fontSize: '0.95rem', color: themeColor, textDecoration: 'none' }}>Contact</Link>
          </div>

          {/* Action Button - Desktop */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            
            <button 
              className="btn-primary" 
              onClick={onRegisterClick}
              style={{ 
                padding: '0.55rem 1.4rem', 
                fontSize: '0.85rem',
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                boxShadow: 'none',
                cursor: 'pointer'
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
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>About</Link>
        <Link to="/problem-statement" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>Problem Statement</Link>
        <Link to="/contributors" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>Contributors</Link>
        <Link to="/faqs" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>FAQs</Link>
        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>Contact</Link>
        <button 
          className="btn-primary" 
          onClick={() => {
            setIsMobileMenuOpen(false);
            onRegisterClick();
          }}
          style={{ width: '80%', textAlign: 'center', justifyContent: 'center', backgroundColor: 'var(--accent)', color: 'var(--primary)', cursor: 'pointer' }}
        >
          Register Now
        </button>
      </motion.div>

      {/* Embedded CSS for hover states & responsive adjustments */}
      <style dangerouslySetInnerHTML={{__html: `
        .nav-link {
          position: relative;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
          display: inline-block;
        }
        .nav-link:hover {
          transform: translateY(-4px);
          color: var(--secondary) !important;
        }
        @media (max-width: 1150px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 440px) {
          .nav-logo-text {
            display: none !important;
          }
        }
      `}} />
    </>
  );
}
