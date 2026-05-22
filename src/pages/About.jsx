import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Leaf, Users, Zap, BookOpen, GraduationCap } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function About() {
  const { openModal } = useOutletContext();

  const milestones = [
    { number: "15+", label: "Research Patents", desc: "Eco-innovations filed by student cohorts" },
    { number: "40+", label: "Academic Publications", desc: "Scientific studies in green technology journals" },
    { number: "10+", label: "State Collaborations", desc: "Working with municipal agencies on urban recovery" },
    { number: "1500+", label: "Global Alumni", desc: "Leading sustainability roles worldwide" }
  ];

  const pillars = [
    {
      title: "Scientific Excellence",
      desc: "Applying rigorous chemical, biological, and geological laboratory processes to green solutions.",
      icon: <BookOpen size={24} />,
      color: "var(--secondary)"
    },
    {
      title: "Commercial Scalability",
      desc: "Structuring innovations into realistic incubation pathways and viable business models.",
      icon: <Target size={24} />,
      color: "#0284c7"
    },
    {
      title: "Public Resiliency",
      desc: "Aligning technologies with direct public utility, local government standards, and citizen health.",
      icon: <Globe size={24} />,
      color: "#8b5cf6"
    }
  ];

  return (
    <div style={{ background: '#fbfbfa', minHeight: '100vh', paddingTop: '140px', paddingBottom: '80px' }}>
      
      {/* ================= HERO HEADER ================= */}
      <section className="container" style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="badge badge-outline" 
          style={{ marginBottom: '1.25rem' }}
        >
          About The Initiative
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 3.75rem)',
            color: 'var(--primary)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            maxWidth: '900px',
            margin: '0 auto 1.5rem'
          }}
        >
          Fusing Academic Research with <span style={{ color: 'var(--secondary)' }}>Sustainable Scalability</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1rem, 4vw, 1.25rem)',
            color: 'var(--text-muted)',
            lineHeight: '1.6',
            maxWidth: '750px',
            margin: '0 auto'
          }}
        >
          Under the visionary leadership of Amity University, the Greenovators Hackathon acts as a catalyst, bridging laboratory experiments with national climate action.
        </motion.p>
      </section>

      {/* ================= DETAILED BLOCKS ================= */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '5rem',
          alignItems: 'center'
        }} className="about-grid">
          
          <motion.div {...fadeUp} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="badge badge-outline" style={{ alignSelf: 'flex-start' }}>
              Organizing Host
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 6vw, 2.5rem)', color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              Amity Institute of Environmental Sciences
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Amity Institute of Environmental Sciences (AIES) is a premier academic department of Amity University Uttar Pradesh, dedicated to developing technical environmental solutions. AIES conducts cutting-edge research in waste management, carbon capture, air pollution modeling, and ecological remediation.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              The national Greenovators Hackathon is our flagship platform. It challenges the brightest youth minds across India to refine their raw scientific concepts into tangible, deployable hardware and software prototypes.
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <button onClick={openModal} className="btn-primary" style={{ padding: '0.85rem 2rem', cursor: 'pointer' }}>
                Join the Hackathon Proposal
              </button>
            </div>
          </motion.div>

          <motion.div 
            {...fadeUp}
            style={{
              background: '#041710',
              padding: 'clamp(1.5rem, 5vw, 3rem)',
              borderRadius: '28px',
              border: '1px solid rgba(255,255,255,0.06)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            {/* Fine grain dot grid background */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 0)',
              backgroundSize: '24px 24px',
              opacity: 0.8
            }} />
            
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#bef264' }}>
                <GraduationCap size={36} />
                <h3 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.35rem)', color: '#ffffff', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                  AIES Research Scope
                </h3>
              </div>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: 0, margin: 0, listStyle: 'none' }}>
                {[
                  { title: "Circular Economy Science", desc: "Analyzing biochemical conversions of organic & municipal waste structures." },
                  { title: "Resilient City Architectures", desc: "Modeling micro-climate impacts, public green spaces, and localized pollution levels." },
                  { title: "Eco-Industrial Symbiosis", desc: "Designing closed-loop pipelines where output waste of one sector fuels another." },
                  { title: "Climate Policy & Audits", desc: "Translating engineering specifications into carbon-credit models and policy reports." }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <strong style={{ color: '#bef264', fontSize: '0.95rem', fontWeight: 700 }}>
                      • {item.title}
                    </strong>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', paddingLeft: '1.1rem' }}>
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= STATS COUNTERS ================= */}
      <section style={{ padding: '5rem 0', background: 'var(--primary)', color: 'white', marginBottom: '6rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2.5rem'
          }} className="stats-grid">
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
              >
                <strong style={{ fontSize: 'clamp(2rem, 6vw, 2.75rem)', color: 'var(--accent)', fontFamily: 'var(--font-heading)', fontWeight: 900 }}>
                  {milestone.number}
                </strong>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {milestone.label}
                </span>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', maxWidth: '200px', margin: '0 auto' }}>
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THE THREE CORE VALUES ================= */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge badge-outline" style={{ marginBottom: '0.5rem' }}>
            Our Foundations
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 6vw, 2.5rem)', color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontWeight: 900 }}>
            Methodologies Fostering Change
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }} className="values-grid">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={{
                padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                background: '#ffffff',
                border: '1px solid rgba(11, 61, 43, 0.06)',
                borderRadius: '24px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
              }}
              className="value-card"
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: `${pillar.color}08`,
                color: pillar.color,
                display: 'grid',
                placeItems: 'center'
              }}>
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 800 }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Responsive overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .values-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

    </div>
  );
}