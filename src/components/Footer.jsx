import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0b3d2b 0%, #071912 100%)',
      color: 'white',
      padding: '5rem 0 0', /* Removed bottom padding to fit large text */
      marginTop: 'auto',
      position: 'relative',
      zIndex: 2,
      overflow: 'hidden'
    }}>
      <div className="container">
        
        {/* Massive Call-to-Action for Premium Feel */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: 'clamp(2rem, 5vw, 4rem)',
          textAlign: 'center',
          marginBottom: 'clamp(3rem, 8vw, 5rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: 'white'
          }}>
            Ready to shape the future?
          </h2>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.7)', 
            fontSize: 'clamp(1rem, 2vw, 1.1rem)', 
            maxWidth: '600px'
          }}>
            Join the Greenovators Hackathon to access parallel networking, incubation resources, and premium sustainable toolkits.
          </p>
          <Link to="/contact" className="btn-primary" style={{
            backgroundColor: 'var(--accent)',
            color: 'var(--primary)',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            marginTop: '1rem',
            borderRadius: '12px',
            textDecoration: 'none',
            whiteSpace: 'nowrap'
          }}>
            Get In Touch
          </Link>
        </div>

        <div className="footer-grid">
          
          {/* Brand column */}
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.35rem', color: 'white', fontFamily: 'var(--font-heading)', textDecoration: 'none' }}>
              <Leaf size={28} style={{ color: 'var(--accent)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span>GREENOVATORS</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)' }}>HACKATHON 2026</span>
              </div>
            </Link>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.6)', 
              fontSize: '0.85rem', 
              lineHeight: '1.5', 
              maxWidth: '340px'
            }}>
              Empowering the future generation of clean-technology innovators in waste streams, climate resilience, and smart logistics.
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {["#WasteToWealth", "#SmartInfrastructure", "#NetZeroAI"].map((tag, i) => (
                <span key={i} style={{ fontSize: '0.65rem', color: 'var(--accent)', background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.5rem', borderRadius: '100px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Platform
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }} className="footer-links">
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
              <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link>
              <Link to="/problem-statement" style={{ color: 'inherit', textDecoration: 'none', whiteSpace: 'nowrap' }}>Themes</Link>
              <Link to="/contributors" style={{ color: 'inherit', textDecoration: 'none' }}>Organizing Committee</Link>
              <Link to="/faqs" style={{ color: 'inherit', textDecoration: 'none' }}>FAQs</Link>
            </div>
          </div>

          {/* Address */}
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Organising Host
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              <strong style={{ color: 'white' }}>Amity University Uttar Pradesh Noida</strong>
              <p>Sector-125, Amity University Uttar Pradesh</p>
              <div style={{ marginTop: '0.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <span>📧 Email: <a href="mailto:greenovators2026@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>greenovators2026@gmail.com</a></span>
                <span>📞 Support: <a href="tel:9882314580" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>9882314580</a> / <a href="tel:9410893552" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>9410893552</a></span>
                <span>🌐 Portal: amity.edu</span>
                <span>💼 Sponsorship & Collaboration: Jashn Kulshrestha (<a href="tel:+919410893552" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>+91 9410893552</a>) | <a href="mailto:rdhupper@amity.edu" style={{ color: 'inherit', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>rdhupper@amity.edu</a></span>
              </div>
            </div>
          </div>

        </div>

        <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', marginBottom: '1.5rem' }} />

        {/* Credits */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.4)',
        }} className="footer-bottom">
          <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>© 2026 Amity University Uttar Pradesh Noida. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none', whiteSpace: 'nowrap' }}>Contact Us</Link>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', whiteSpace: 'nowrap' }}>Terms of Sprint</a>
          </div>
        </div>

      </div>

      {/* Huge GREENOVATORS at the bottom */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: '2rem',
        paddingTop: '2rem',
        overflow: 'hidden'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 7.6vw, 12rem)',
          fontWeight: 900,
          fontFamily: 'var(--font-heading)',
          color: 'rgba(255, 255, 255, 0.03)',
          margin: 0,
          lineHeight: 0.75,
          letterSpacing: '-0.02em',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          position: 'relative',
          bottom: '-10px',
          textAlign: 'center'
        }}>
          GREENOVATORS
        </h1>
      </div>
    </footer>
  );
}

