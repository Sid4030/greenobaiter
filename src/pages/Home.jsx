import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Clock,
  Building,
  Trash2
} from 'lucide-react';
import { Link, useOutletContext } from 'react-router-dom';

import Hero3DCanvas from '../components/Hero3DCanvas';
import Timeline from '../components/Timeline';

export default function Home() {
  const { openModal } = useOutletContext();

  const stats = [
    { number: "₹1,00,000", label: "Cash Prize Pool", desc: "For top sustainable breakthroughs" },
    { number: "3 Tracks", label: "Specialized Pillars", desc: "Circular waste, smart cities & Net Zero AI" },
    { number: "30+ Prototypes", label: "Incubations", desc: "Scaling lab projects into startups" },
    { number: "250+", label: "Youth Leaders", desc: "Joining from nationwide universities" }
  ];

  const partners = [
    { name: "Ministry of Environment", role: "Strategic partner", icon: "🏛️" },
    { name: "Ministry of Housing & Urban Affairs", role: "Smart cities advisory", icon: "🏛️" },
    { name: "UNEP & UNDP", role: "Sustainability targets", icon: "🌍" },
    { name: "Amity Incubation Center", role: "Seed incubation & scale", icon: "🎓" }
  ];

  const dates = [
    { date: "May 30, 2026", event: "Last Date of Registration", status: "Closing soon", color: "#ef4444" },
    { date: "Aug 15, 2026", event: "Selected Teams Announcement", status: "Evaluation phase", color: "#eab308" },
    { date: "Sep 17 - 19, 2026", event: "National Grand Finale (3 Days)", status: "Sprint event", color: "var(--secondary)" }
  ];

  return (
    <div style={{ background: '#fbfbfa', overflow: 'hidden' }}>
      
      {/* ================= HERO SECTION (Clean Light Theme) ================= */}
      <section id="hero" style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '75px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at center, var(--bg-light) 0%, rgba(245, 245, 244, 0.4) 100%)'
      }}>
        
        {/* Massive Background 3D Canvas */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'auto'
        }}>
          <Hero3DCanvas />
        </div>

        {/* Foreground Content */}
        <div className="container" style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '2.5rem',
            maxWidth: '900px',
            margin: '0 auto',
            pointerEvents: 'auto'
          }} className="hero-content-wrapper">
            
            {/* Organized Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="badge" style={{ 
                fontSize: '0.75rem', 
                fontWeight: 800, 
                padding: '0.5rem 1.2rem',
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(6, 47, 33, 0.15)'
              }}>
                AMITY INSTITUTE OF ENVIRONMENTAL SCIENCES
              </span>
            </motion.div>

            {/* Dynamic Typography */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              
              {/* Line 1: WASTE TO WEALTH */}
              <div style={{ overflow: 'hidden' }}>
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontSize: 'clamp(3rem, 7vw + 1rem, 5.5rem)',
                    lineHeight: '1.05',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    color: 'var(--primary)',
                    textShadow: '0 4px 40px rgba(255, 255, 255, 0.9), 0 0 15px rgba(255, 255, 255, 0.9)'
                  }}
                  className="hero-heading"
                >
                  RE-ENGINEERING<br/>
                  CIRCULAR<br/>
                  WASTE TO <span style={{ color: 'var(--secondary)' }}>WEALTH</span>
                </motion.div>
              </div>

              {/* Line 2: & NET ZERO AI */}
              <div style={{ overflow: 'hidden', marginTop: '1rem' }}>
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw + 0.5rem, 1.75rem)',
                    lineHeight: '1.05',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    letterSpacing: '0.02em',
                    color: 'var(--secondary)',
                    textTransform: 'uppercase',
                    textShadow: '0 4px 40px rgba(255, 255, 255, 0.9), 0 0 15px rgba(255, 255, 255, 0.9)'
                  }}
                >
                  — & NET ZERO AI ARCHITECTURES —
                </motion.div>
              </div>

            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}
            >
              <button 
                onClick={openModal} 
                className="btn-primary" 
                style={{ 
                  padding: '1rem 2.5rem',
                  backgroundColor: 'var(--secondary)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  boxShadow: '0 8px 25px rgba(15, 159, 110, 0.3)',
                  cursor: 'pointer'
                }}
              >
                Register Team Proposal <ArrowRight size={20} />
              </button>
              
              <Link 
                to="/problem-statement" 
                className="btn-secondary" 
                style={{ 
                  padding: '1rem 2.5rem',
                  borderColor: 'rgba(6, 47, 33, 0.15)',
                  color: 'var(--primary)',
                  textDecoration: 'none',
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                }}
              >
                Explore Themes
              </Link>
            </motion.div>

            {/* Quick Info Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                display: 'flex',
                gap: '2rem',
                padding: '1.25rem 2.5rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(6, 47, 33, 0.08)',
                marginTop: '1.5rem',
                boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
              className="hero-quick-info"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Calendar size={24} style={{ color: 'var(--secondary)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Event Dates</span>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--primary)' }}>17–19 Sept 2026</strong>
                </div>
              </div>

              <div style={{ width: '1px', background: 'rgba(6, 47, 33, 0.15)', height: '35px' }} className="divider-line" />

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Award size={24} style={{ color: 'var(--secondary)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Awards</span>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--primary)' }}>₹ 1,00,000 Cash</strong>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= INFINITE SCROLLING TAGLINE MARQUEE ================= */}
      <div style={{
        background: '#bef264',
        borderTop: '1px solid rgba(11, 61, 43, 0.1)',
        borderBottom: '1px solid rgba(11, 61, 43, 0.1)',
        padding: '1.25rem 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 4,
        display: 'flex',
        whiteSpace: 'nowrap'
      }} className="tagline-marquee-strip">
        <div style={{
          display: 'inline-flex',
          gap: '4rem',
          animation: 'marquee 28s linear infinite',
          willChange: 'transform'
        }} className="marquee-content">
          {Array(4).fill("Innovate Green. Build Smart. Impact Tomorrow. •").map((text, idx) => (
            <span key={idx} style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: '#041710',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              {text}
            </span>
          ))}
        </div>
        <div style={{
          display: 'inline-flex',
          gap: '4rem',
          animation: 'marquee 28s linear infinite',
          willChange: 'transform'
        }} className="marquee-content" aria-hidden="true">
          {Array(4).fill("Innovate Green. Build Smart. Impact Tomorrow. •").map((text, idx) => (
            <span key={idx} style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: '#041710',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ================= STATS SECTION ================= */}
      <section style={{ padding: '3.5rem 0', background: 'var(--primary)', color: 'var(--bg-light)', position: 'relative', zIndex: 5 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
          }} className="stats-grid">
            {stats.map((st, i) => (
              <div
                key={i}
                style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
              >
                <strong style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--accent)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: '1' }}>
                  {st.number}
                </strong>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {st.label}
                </span>
                <p style={{ fontSize: '0.8rem', color: 'rgba(241, 245, 249, 0.65)', maxWidth: '220px', margin: '0 auto' }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT VISION SECTION ================= */}
      <section id="about" style={{ padding: '7rem 0', position: 'relative', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '950px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center', alignItems: 'center' }}>
            <span className="badge badge-outline" style={{ fontSize: '0.75rem' }}>
              National Sustainability Initiative
            </span>

            <h2 style={{ 
              fontSize: '2.75rem', 
              color: 'var(--primary)', 
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              maxWidth: '800px'
            }} className="section-heading">
              Aligning Technology with UN Sustainable Goals
            </h2>

            <p style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-muted)', 
              lineHeight: '1.55', 
              maxWidth: '800px' 
            }}>
              Organised by the prestigious <strong>Amity Institute of Environmental Sciences</strong>, the Greenovators Hackathon 2026 inspires young researchers and entrepreneurs to provide scalable prototypes for carbon pathways, urban logistics, and circular models.
            </p>

            <div style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '0.5rem'
            }}>
              {["SDG 7: Affordable Clean Energy", "SDG 9: Industry & Infrastructure", "SDG 11: Sustainable Cities", "SDG 12: Circular Economy", "SDG 13: Climate Action"].map((sdg, idx) => (
                <span key={idx} className="badge" style={{
                  backgroundColor: 'rgba(11, 61, 43, 0.04)',
                  color: 'var(--primary)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  border: '1px solid rgba(11, 61, 43, 0.08)'
                }}>
                  {sdg}
                </span>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/about" className="btn-primary" style={{ padding: '0.75rem 2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Read About Initiative <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HACKATHON THEMES SECTION ================= */}
      <section id="themes" style={{ padding: '6rem 0', background: 'var(--bg-light)', borderTop: '1px solid rgba(11, 61, 43, 0.05)', borderBottom: '1px solid rgba(11, 61, 43, 0.05)' }}>
        <div className="container">
          
          {/* Section Header */}
          <div style={{ position: 'relative', textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            
            {/* Decorative CSS Clouds */}
            <div className="css-cloud css-cloud-1" style={{ top: '-10px', left: '15%', opacity: 0.8 }}></div>
            <div className="css-cloud css-cloud-2" style={{ top: '30px', right: '10%', opacity: 0.6 }}></div>

            <span className="badge badge-outline" style={{ position: 'relative', zIndex: 2, background: 'rgba(255,255,255,0.8)' }}>
              Hackathon Themes
            </span>
            <h2 style={{ 
              fontSize: '2.75rem', 
              color: 'var(--primary)', 
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              position: 'relative',
              zIndex: 2
            }} className="section-heading">
              Three Pillars of Ecological Innovation
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '0.95rem' }}>
              Select a specialized theme below to review the specific environmental focus areas and targets.
            </p>
          </div>

          {/* Bento Grid Themes Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Card 1 */}
            <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1px solid rgba(11, 61, 43, 0.05)', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)', display: 'grid', placeItems: 'center', marginBottom: '1rem' }}>
                <Trash2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>Waste to Wealth</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>Fostering national models for resource circularity, recycling technology, and plastic substitutes.</p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(11, 61, 43, 0.05)' }}>
                <strong style={{ display: 'block', fontSize: '1.5rem', color: 'var(--secondary)' }}>60%+</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Landfill Pressure Reduction</span>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1px solid rgba(11, 61, 43, 0.05)', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7', display: 'grid', placeItems: 'center', marginBottom: '1rem' }}>
                <Building size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>Smart Infrastructure</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>Designing climate-resilient, energy-efficient, and socially inclusive urban systems.</p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(11, 61, 43, 0.05)' }}>
                <strong style={{ display: 'block', fontSize: '1.5rem', color: '#0284c7' }}>40%</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Energy Efficiency</span>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1px solid rgba(11, 61, 43, 0.05)', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', display: 'grid', placeItems: 'center', marginBottom: '1rem' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>Net Zero AI</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>Harnessing predictive neural systems, sensors, and modeling to absolute-zero emissions.</p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(11, 61, 43, 0.05)' }}>
                <strong style={{ display: 'block', fontSize: '1.5rem', color: '#8b5cf6' }}>Zero</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Net Carbon Pathway</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/problem-statement" className="btn-secondary" style={{ padding: '0.75rem 2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View Detailed Themes &amp; Rules <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>



      {/* ================= TIMELINE SECTION ================= */}
      <section id="timeline" style={{ padding: '6rem 0', background: 'var(--bg-light)', borderTop: '1px solid rgba(11, 61, 43, 0.05)', borderBottom: '1px solid rgba(11, 61, 43, 0.05)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-outline">
              Hackathon Roadmap
            </span>
            <h2 style={{ 
              fontSize: '2.75rem', 
              color: 'var(--primary)', 
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
            }} className="section-heading">
              Sprinting from Idea to Incubation
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '0.95rem' }}>
              How our structured program takes initial proposals and leads them directly to technical lab scaling.
            </p>
          </div>

          <Timeline />

        </div>
      </section>

      {/* ================= DATES & PRIZES SECTION ================= */}
      <section id="prizes" style={{ padding: '7rem 0', background: '#ffffff' }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '4rem',
            alignItems: 'center'
          }} className="dashboard-grid">
            
            {/* Left Prize Panel */}
            <div style={{ 
              textAlign: 'left', 
              background: 'linear-gradient(135deg, #0b3d2b 0%, #071912 100%)',
              color: 'white',
              padding: '2.75rem',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 12px 30px rgba(7, 25, 18, 0.06)'
            }} className="prize-panel">
              
              <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--accent)', border: '1px solid rgba(255,255,255,0.12)', marginBottom: '1.25rem', fontSize: '0.65rem' }}>
                EXCELLENCE AWARD
              </span>

              <h3 style={{
                fontSize: '2.25rem',
                color: 'white',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '0.75rem'
              }}>
                Attractive cash award pool
              </h3>

              <strong style={{
                fontSize: '4rem',
                color: 'var(--accent)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                display: 'block',
                marginBottom: '1.25rem'
              }}>
                ₹ 1,00,000
              </strong>

              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                Winner prizes, incubation budgets, and laboratory pilot support will be presented directly by organizing partners.
              </p>

              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                padding: '0.85rem 1.25rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.75rem'
              }}>
                <span style={{ fontSize: '1.25rem' }}>📣</span>
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.95rem' }}>
                  Open for all teams with <span style={{ color: 'white' }}>0 Registration Fees!</span>
                </span>
              </div>

              <button onClick={openModal} className="btn-primary" style={{ backgroundColor: 'var(--accent)', color: 'var(--primary)', border: 'none', boxShadow: 'none', cursor: 'pointer' }}>
                Register For Prize <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Dates Timeline Dashboard */}
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div>
                <span className="badge badge-outline" style={{ marginBottom: '0.5rem' }}>
                  Important Milestones
                </span>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
                  Mark Your Calendar
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {dates.map((dt, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.25rem 1.75rem',
                      borderRadius: '16px',
                      border: '1px solid rgba(11, 61, 43, 0.06)',
                      background: 'var(--bg-light)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    className="milestone-row"
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: dt.color }}>
                        {dt.status}
                      </span>
                      <strong style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: 800 }}>
                        {dt.event}
                      </strong>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
                      <Clock size={15} style={{ color: 'var(--secondary)' }} />
                      <strong style={{ fontSize: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                        {dt.date}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= INSTITUTIONAL PARTNERS ================= */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-light)', borderTop: '1px solid rgba(11, 61, 43, 0.05)', borderBottom: '1px solid rgba(11, 61, 43, 0.05)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-outline">
              National Network
            </span>
            <h2 style={{ 
              fontSize: '2.75rem', 
              color: 'var(--primary)', 
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
            }} className="section-heading">
              Our Institutional Ecosystem
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem'
          }} className="partners-grid">
            {partners.map((pt, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(11, 61, 43, 0.05)',
                  background: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2rem' }}>
                  {pt.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 800, lineHeight: '1.2' }}>
                    {pt.name}
                  </h4>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginTop: '0.25rem' }}>
                    {pt.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Embedded CSS for marquee keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatBg {
          0% {
            transform: translate3d(0, 0, 0) scale(1.06);
          }
          25% {
            transform: translate3d(-10px, 8px, 0) scale(1.06);
          }
          50% {
            transform: translate3d(8px, -12px, 0) scale(1.06);
          }
          75% {
            transform: translate3d(-6px, -6px, 0) scale(1.06);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1.06);
          }
        }

        .floating-bg {
          animation: floatBg 28s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }

        @media (max-width: 992px) {
          .hero-heading {
            font-size: 2.75rem !important;
          }
          .hero-quick-info {
            flex-direction: column !important;
            gap: 1rem !important;
            width: 100% !important;
            align-items: flex-start !important;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem !important;
          }
          .objectives-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .objectives-cards {
            grid-template-columns: 1fr !important;
          }
          .dashboard-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .partners-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        
        @media (max-width: 576px) {
          .partners-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

    </div>
  );
}