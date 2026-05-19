import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { 
  Leaf, 
  Award, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  ChevronDown, 
  Clock,
  Compass,
  Building,
  TrendingUp
} from 'lucide-react';

import Navbar from './components/Navbar';
import GreenovatorCircle from './components/GreenovatorCircle';
import ThemesShowcase from './components/ThemesShowcase';
import Timeline from './components/Timeline';
import RegistrationModal from './components/RegistrationModal';
import heroSphere from './assets/hero_sustainability_sphere.png';
import heroBg from './assets/hero_topographic_background.png';
import './App.css';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const stats = [
    { number: "₹1,00,000", label: "Cash Prize Pool", desc: "For top sustainable breakthroughs" },
    { number: "3 Tracks", label: "Specialized Pillars", desc: "Circular waste, smart cities & Net Zero AI" },
    { number: "30+ Prototypes", label: "Incubations", desc: "Scaling lab projects into startups" },
    { number: "250+", label: "Youth Leaders", desc: "Joining from nationwide universities" }
  ];

  const objectives = [
    {
      title: "Circular waste recovery models",
      desc: "Foster deep-tech solutions for municipal, electronic, and agricultural waste recovery.",
      icon: <TrendingUp size={20} />,
      color: "var(--secondary)"
    },
    {
      title: "Smart climate-resilient cities",
      desc: "Deploy IoT grids for energy-efficient public spaces and ecological balances.",
      icon: <Building size={20} />,
      color: "#0284c7"
    },
    {
      title: "Net Zero AI architectures",
      desc: "Leverage machine learning grids to analyze, monitor, and model absolute carbon pathways.",
      icon: <Sparkles size={20} />,
      color: "#8b5cf6"
    },
    {
      title: "Collaborative national forum",
      desc: "Bridge academic research directly to industrial partners and green investment grants.",
      icon: <Compass size={20} />,
      color: "var(--primary)"
    }
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

  const faqs = [
    {
      q: "Who is eligible to participate?",
      a: "University students, academic scholars, early-stage startups, and multidisciplinary teams (combining engineering, environmental science, architecture, and business management) are welcome."
    },
    {
      q: "What is the maximum team size?",
      a: "Teams can consist of 2 to 5 members. Cross-institutional teams are allowed, but a single team leader must be nominated for communications."
    },
    {
      q: "Is there an entry fee to register?",
      a: "No, registration for the national Greenovators Hackathon 2026 is completely free of charge. Selected teams will receive full boarding and laboratory access during the 3-day sprint."
    },
    {
      q: "How will the project intellectual property (IP) be handled?",
      a: "All intellectual property developed during the hackathon remains 100% with the participating innovators. Our incubator helps with patent filings and startup licensing."
    }
  ];

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navigation Header */}
      <Navbar onRegisterClick={openModal} />

      {/* ================= HERO SECTION (Luxury Dark Theme) ================= */}
      <section id="hero" style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '110px',
        paddingBottom: '80px',
        background: '#041710', // Luxury deep green base
        overflow: 'hidden',
        zIndex: 2
      }}>
        
        {/* Topographic glow wave backdrop (Hardware-Accelerated Slow Float Loop) */}
        <div 
          className="floating-bg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.18, // Breathtaking elegant detail
            mixBlendMode: 'screen',
            pointerEvents: 'none',
            zIndex: 1
          }} 
        />

        {/* Dynamic, low-performance-impact shifting gradient mesh */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(220deg, rgba(16, 185, 129, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Minimal dot overlay for fine-grain texture */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          opacity: 0.6,
          pointerEvents: 'none',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }} className="hero-grid">
            
            {/* Left Content Column */}
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Organized Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span className="badge badge-accent" style={{ 
                  fontSize: '0.7rem', 
                  fontWeight: 800, 
                  padding: '0.4rem 0.95rem',
                  backgroundColor: 'rgba(190, 242, 100, 0.12)',
                  borderColor: 'rgba(190, 242, 100, 0.3)',
                  color: '#bef264'
                }}>
                  AMITY INSTITUTE OF ENVIRONMENTAL SCIENCES
                </span>
              </motion.div>

              {/* Dynamic Typography Mask Reveals */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                
                {/* Line 1: WASTE TO WEALTH */}
                <div style={{ overflow: 'hidden' }}>
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontSize: '4.25rem',
                      lineHeight: '1.05',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 900,
                      letterSpacing: '-0.04em',
                      color: '#ffffff'
                    }}
                    className="hero-line"
                  >
                    WASTE TO <span style={{ color: '#bef264' }}>WEALTH</span>
                  </motion.div>
                </div>

                {/* Line 2: & NET ZERO AI */}
                <div style={{ overflow: 'hidden' }}>
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontSize: '4.25rem',
                      lineHeight: '1.05',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 900,
                      letterSpacing: '-0.04em',
                      color: '#ffffff'
                    }}
                    className="hero-line"
                  >
                    & NET ZERO AI
                  </motion.div>
                </div>

              </div>

              {/* Sub-paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                style={{
                  fontSize: '1.15rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.55',
                  maxWidth: '520px',
                }}
              >
                Pioneering clean technology through circular science, climate-resilient cities, and machine learning architectures. Fusing academic models with real-world scale.
              </motion.p>

              {/* Action Buttons with glowing accents */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}
              >
                <button 
                  onClick={openModal} 
                  className="btn-primary" 
                  style={{ 
                    padding: '0.85rem 2rem',
                    backgroundColor: '#bef264',
                    color: '#041710',
                    fontWeight: 700,
                    boxShadow: '0 4px 20px rgba(190, 242, 100, 0.25)'
                  }}
                >
                  Register Team Proposal <ArrowRight size={16} />
                </button>
                
                <a 
                  href="#themes" 
                  className="btn-secondary" 
                  style={{ 
                    padding: '0.85rem 2rem',
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    color: '#ffffff',
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.06)'}
                  onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  Explore Tracks
                </a>
              </motion.div>

              {/* Translucent Quick Info Badges (Highly Optimized, No Backdrop Blurs for Paint Efficiency) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  padding: '1.25rem 1.75rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)', // Increased solid alpha for rich glass feel without layout repaint
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginTop: '0.5rem',
                  maxWidth: '520px',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.15)'
                }}
                className="hero-quick-info"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Calendar size={18} style={{ color: '#bef264' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Event Dates</span>
                    <strong style={{ fontSize: '0.9rem', color: '#ffffff' }}>17–19 Sept 2026</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Award size={18} style={{ color: '#bef264' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Awards</span>
                    <strong style={{ fontSize: '0.9rem', color: '#ffffff' }}>₹ 1,00,000 Cash</strong>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Graphic Column: 3D Sustainability Sphere (Removed Expensive Particles for Smooth Frame Rates) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}
              className="hero-graphic-col"
            >
              
              {/* Subtle background glow surrounding the 3D sphere */}
              <div style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.08)',
                filter: 'blur(70px)',
                zIndex: 0,
                pointerEvents: 'none'
              }} />

              {/* High-Fidelity Sphere Graphic Wrapper */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                zIndex: 1
              }} className="hero-image-wrapper">
                <img 
                  src={heroSphere} 
                  alt="Greenovators Sustainability Sphere" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }} 
                />
              </div>

            </motion.div>

          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

      {/* ================= HACKATHON PILLARS SECTION ================= */}
      <section id="themes" style={{ padding: '6rem 0', background: 'var(--bg-light)', borderTop: '1px solid rgba(11, 61, 43, 0.05)', borderBottom: '1px solid rgba(11, 61, 43, 0.05)' }}>
        <div className="container">
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-outline">
              Hackathon Tracks
            </span>
            <h2 style={{ 
              fontSize: '2.75rem', 
              color: 'var(--primary)', 
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
            }} className="section-heading">
              Three Pillars of Ecological Innovation
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '0.95rem' }}>
              Select a specialized track below to review the specific environmental focus areas and targets.
            </p>
          </div>

          {/* New Tabbed Pillars Segment */}
          <GreenovatorCircle />

          {/* Expected Outcomes Flat Cards Showcase */}
          <div style={{ marginTop: '6rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                Target Outputs & Scale blue-prints
              </h3>
            </div>
            <ThemesShowcase />
          </div>

        </div>
      </section>

      {/* ================= ECOSYSTEM OF IMPACT (OBJECTIVES) ================= */}
      <section id="objectives" style={{ padding: '7rem 0', background: '#ffffff' }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: '4rem',
            alignItems: 'center'
          }} className="objectives-grid">
            
            {/* Left Description Column */}
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <span className="badge badge-outline" style={{ alignSelf: 'flex-start' }}>
                Core Mission
              </span>
              <h2 style={{
                fontSize: '2.5rem',
                color: 'var(--primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.15
              }} className="section-heading">
                Fostering an Ecosystem of Impact
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.5' }}>
                We bridge the gap between academic innovation and scalable clean technology, building models that turn waste streams into commercial resources.
              </p>
              <div>
                <button onClick={openModal} className="btn-primary" style={{ padding: '0.75rem 1.75rem' }}>
                  Submit Team Proposal
                </button>
              </div>
            </div>

            {/* Right Column: Clean Grid of Objectives */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem'
            }} className="objectives-cards">
              {objectives.map((obj, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1.75rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(11, 61, 43, 0.06)',
                    background: 'var(--bg-light)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    textAlign: 'left'
                  }}
                  className="objective-card"
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: `${obj.color}08`,
                    color: obj.color,
                    display: 'grid',
                    placeItems: 'center'
                  }}>
                    {obj.icon}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: 800 }}>
                    {obj.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
                    {obj.desc}
                  </p>
                </div>
              ))}
            </div>

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

              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1.75rem' }}>
                Winner prizes, incubation budgets, and laboratory pilot support will be presented directly by organizing partners.
              </p>

              <button onClick={openModal} className="btn-primary" style={{ backgroundColor: 'var(--accent)', color: 'var(--primary)', border: 'none', boxShadow: 'none' }}>
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

      {/* ================= FAQs SECTION ================= */}
      <section id="faqs" style={{ padding: '7rem 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-outline">
              FAQ Center
            </span>
            <h2 style={{ 
              fontSize: '2.75rem', 
              color: 'var(--primary)', 
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
            }} className="section-heading">
              Common Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    borderRadius: '16px',
                    border: '1px solid rgba(11, 61, 43, 0.05)',
                    background: 'var(--bg-light)',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.75rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: 'var(--primary)',
                    }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: 800 }}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: 'var(--secondary)' }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                      >
                        <div style={{ padding: '0 1.75rem 1.75rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer style={{
        background: 'linear-gradient(180deg, #0b3d2b 0%, #071912 100%)',
        color: 'white',
        padding: '5rem 0 3rem',
        marginTop: 'auto',
        position: 'relative',
        zIndex: 2
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: '4rem',
            textAlign: 'left',
            marginBottom: '4rem'
          }} className="footer-grid">
            
            {/* Brand column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.35rem', color: 'white', fontFamily: 'var(--font-heading)' }}>
                <Leaf size={28} style={{ color: 'var(--accent)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                  <span>GREENOVATORS</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)' }}>HACKATHON 2026</span>
                </div>
              </a>
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
                Sections
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }} className="footer-links">
                <a href="#about">About Initiative</a>
                <a href="#themes">Theme Pillars</a>
                <a href="#objectives">Core Objectives</a>
                <a href="#timeline">Sprinting Roadmap</a>
                <a href="#prizes">Awards & Prizes</a>
              </div>
            </div>

            {/* Address */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Organising Host
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                <strong>Amity Institute of Environmental Sciences</strong>
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
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Sprint</a>
            </div>
          </div>

        </div>
      </footer>

      {/* ================= REGISTRATION MODAL ================= */}
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Embedded CSS overrides (Hardware-Accelerated Floating Background Wave & Responsive queries) */}
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

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 3rem !important;
          }
          .hero-grid div {
            align-items: center !important;
            text-align: center !important;
          }
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
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 0.75rem !important;
            text-align: center !important;
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
        
        .footer-links a:hover {
          color: var(--accent) !important;
        }
      `}} />

    </div>
  );
}
