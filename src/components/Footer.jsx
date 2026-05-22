import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0b3d2b 0%, #071912 100%)',
      color: 'white',
      padding: '5rem 0 3rem',
      marginTop: 'auto',
      position: 'relative',
      zIndex: 2
    }}>
      <div className="container">
        
        {/* Massive Call-to-Action for Premium Feel */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '4rem',
          textAlign: 'center',
          marginBottom: '5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: 'white'
          }}>
            Ready to shape the future?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '600px' }}>
            Join the Greenovators Hackathon to access parallel networking, incubation resources, and premium sustainable toolkits.
          </p>
          <Link to="/contact" className="btn-primary" style={{
            backgroundColor: 'var(--accent)',
            color: 'var(--primary)',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            marginTop: '1rem',
            borderRadius: '12px',
            textDecoration: 'none'
          }}>
            Get In Touch
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: '4rem',
          textAlign: 'left',
          marginBottom: '4rem'
        }} className="footer-grid">
          
          {/* Brand column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.35rem', color: 'white', fontFamily: 'var(--font-heading)', textDecoration: 'none' }}>
              <Leaf size={28} style={{ color: 'var(--accent)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span>GREENOVATORS</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)' }}>HACKATHON 2026</span>
              </div>
            </Link>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', lineHeight: '1.5', maxWidth: '340px' }}>
              Empowering the future generation of clean-technology innovators in waste streams, climate resilience, and smart logistics.
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {["#WasteToWealth", "#SmartInfrastructure", "#NetZeroAI"].map((tag, i) => (
                <span key={i} style={{ fontSize: '0.65rem', color: 'var(--accent)', background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.5rem', borderRadius: '100px', fontWeight: 600 }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Platform
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }} className="footer-links">
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
              <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link>
              <Link to="/problem-statement" style={{ color: 'inherit', textDecoration: 'none' }}>Problem Statement</Link>
              <Link to="/contributors" style={{ color: 'inherit', textDecoration: 'none' }}>Contributors</Link>
              <Link to="/faqs" style={{ color: 'inherit', textDecoration: 'none' }}>FAQs</Link>
            </div>
          </div>

          {/* Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Organising Host
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              <strong style={{ color: 'white' }}>Amity Institute of Environmental Sciences</strong>
              <p>Amity University Uttar Pradesh, Sector-125, Noida, India.</p>
              <div style={{ marginTop: '0.25rem', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                <span>📧 Email: aies@amity.edu</span>
                <span>🌐 Portal: amity.edu/aies</span>
              </div>
            </div>
          </div>

        </div>

        <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', marginBottom: '2rem' }} />

        {/* Credits */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.4)',
        }} className="footer-bottom">
          <span>© 2026 Amity Institute of Environmental Sciences. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Sprint</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
