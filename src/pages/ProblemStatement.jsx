import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Recycle, Building, BrainCircuit, ShieldAlert, CheckCircle, HelpCircle } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function ProblemStatement() {
  const { openModal } = useOutletContext();

  const tracks = [
    {
      title: "Circular Waste Recovery Models",
      icon: <Recycle size={28} />,
      color: "var(--secondary)",
      tagline: "Track 1: Waste to Wealth",
      focusPoints: [
        "Advanced sorting pipelines for electronic waste (e-waste) extraction.",
        "Municipal solid waste bio-conversion and organic composting scaling.",
        "Agricultural crop residue utilization to mitigate biomass burning cycles.",
        "Closed-loop plastic recycling systems and eco-materials alternatives."
      ],
      deliverable: "Working biological or mechanical prototype, scale logistics layout, and economic viability blueprint."
    },
    {
      title: "Smart Climate-Resilient Cities",
      icon: <Building size={28} />,
      color: "#0284c7",
      tagline: "Track 2: Infrastructure & Logistics",
      focusPoints: [
        "Energy efficiency automation systems for public buildings and streetlights.",
        "Air quality tracking sensor networks using decentralized grid mapping.",
        "Urban heat island reduction grids via green roofs and localized water bodies.",
        "Eco-friendly transport routing grids and clean fuel logistics grids."
      ],
      deliverable: "Functional hardware micro-controller circuit, sensor array dataset, and graphical dashboard mockup."
    },
    {
      title: "Net Zero AI Architectures",
      icon: <BrainCircuit size={28} />,
      color: "#8b5cf6",
      tagline: "Track 3: Climate Informatics",
      focusPoints: [
        "Machine learning models forecasting localized greenhouse gas levels.",
        "AI algorithms optimizing micro-grid solar & wind distribution patterns.",
        "Satellite imagery processing tracking regional deforestation or lake pollution.",
        "Industrial carbon footprint estimators mapping Scope 1, 2, and 3 emissions."
      ],
      deliverable: "Trained ML model repository (Python/GitHub), sample inference outputs, and carbon abatement projections."
    }
  ];

  const criteria = [
    { title: "Innovation & Originality (25%)", desc: "Fresh scientific approaches or unique engineering pathways that stand out from current commercial solutions." },
    { title: "Technical Feasibility (25%)", desc: "A practical, builder-oriented execution showing engineering validation, circuit diagrams, or software codebases." },
    { title: "Environmental Impact (25%)", desc: "Direct, measurable contributions to carbon reduction, resource recovery, or air/water quality metrics." },
    { title: "Team Presentation & Roadmap (25%)", desc: "Clear understanding of scale logistics, business model, and structured incubation path forward." }
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
          Hackathon Problem Statements
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(1.85rem, 7.5vw, 3.75rem)',
            color: 'var(--primary)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            maxWidth: '900px',
            margin: '0 auto 1.5rem',
            wordBreak: 'keep-all',
            overflowWrap: 'normal'
          }}
        >
          Engineering Solutions For <span style={{ color: 'var(--secondary)' }}>Global Climatic Challenges</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: '1.25rem',
            color: 'var(--text-muted)',
            lineHeight: '1.6',
            maxWidth: '750px',
            margin: '0 auto'
          }}
        >
          Review our three specialized tracks. Select the problem domain that fits your research profile and build a scalable solution during our 3-day sprint.
        </motion.p>
      </section>

      {/* ================= TRACK DETAILS ================= */}
      <section className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '6rem' }}>
        {tracks.map((track, idx) => (
          <motion.div
            key={idx}
            {...fadeUp}
            style={{
              padding: '3rem',
              background: '#ffffff',
              borderRadius: '28px',
              border: '1px solid rgba(11, 61, 43, 0.06)',
              boxShadow: '0 4px 30px rgba(0,0,0,0.01)',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '4rem',
              alignItems: 'start',
              textAlign: 'left'
            }}
            className="track-card"
          >
            {/* Left Track Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  backgroundColor: `${track.color}08`,
                  color: track.color,
                  display: 'grid',
                  placeItems: 'center'
                }}>
                  {track.icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: track.color }}>
                    {track.tagline}
                  </span>
                  <h3 style={{ fontSize: '1.65rem', color: 'var(--primary)', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                    {track.title}
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 700 }}>
                  Key Areas of Focus:
                </strong>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)' }}>
                  {track.focusPoints.map((point, idx) => (
                    <li key={idx} style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Track Deliverable */}
            <div style={{
              background: 'rgba(11, 61, 43, 0.02)',
              border: '1px solid rgba(11, 61, 43, 0.05)',
              padding: '2rem',
              borderRadius: '20px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1rem'
            }} className="track-deliverable">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
                <CheckCircle size={18} style={{ color: 'var(--secondary)' }} />
                <strong style={{ fontSize: '0.95rem', fontWeight: 800 }}>
                  Required Prototype Deliverable
                </strong>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                {track.deliverable}
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <button onClick={openModal} className="btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.8rem', cursor: 'pointer' }}>
                  Register Proposal
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ================= EVALUATION RULES ================= */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{
          background: '#ffffff',
          border: '1px solid rgba(6, 47, 33, 0.08)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.03)',
          padding: '4rem',
          borderRadius: '28px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '4rem',
          alignItems: 'center',
          textAlign: 'left'
        }} className="rules-grid">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="badge" style={{ backgroundColor: 'rgba(15, 159, 110, 0.1)', color: 'var(--secondary)', alignSelf: 'flex-start' }}>
              Evaluation Rules
            </span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontWeight: 900, lineHeight: 1.15 }}>
              How Teams Are Assessed
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Our academic and industrial panel values technical integrity, scientific validation, and realistic commercial roadmaps. Plagiarized ideas or templates are disqualified immediately.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="rules-cards">
            {criteria.map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(250, 250, 249, 0.8)',
                border: '1px solid rgba(6, 47, 33, 0.05)',
                padding: '1.5rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.01)'
              }}>
                <strong style={{ color: 'var(--primary)', fontSize: '0.95rem', fontWeight: 800 }}>
                  {item.title}
                </strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.45', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ADVISORY WARNINGS ================= */}
      <section className="container" style={{ maxWidth: '850px' }}>
        <motion.div
          whileInView={{ scale: [0.99, 1] }}
          viewport={{ once: true }}
          style={{
            padding: '2rem 2.5rem',
            background: 'rgba(239, 68, 68, 0.03)',
            border: '1px solid rgba(239, 68, 68, 0.12)',
            borderRadius: '20px',
            textAlign: 'left',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'start'
          }}
          className="warning-box"
        >
          <ShieldAlert size={28} style={{ color: '#ef4444', flexShrink: 0, marginTop: '0.25rem' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <strong style={{ fontSize: '1.05rem', color: '#991b1b', fontWeight: 800 }}>
              Intellectual Property Disclaimer
            </strong>
            <p style={{ fontSize: '0.85rem', color: '#7f1d1d', lineHeight: '1.5', margin: 0 }}>
              All codebases, design blueprints, and biological formulas developed during the Greenovators Hackathon remain <strong>100% intellectual property (IP) of the respective participating teams</strong>. Neither AIES nor Amity University claims ownership of models built during the sprint. Intellectual property assistance and patent filings will be supported for selected incubated startups.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Responsive styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .track-card {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .rules-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            padding: 2.5rem !important;
          }
        }
        @media (max-width: 576px) {
          .rules-cards {
            grid-template-columns: 1fr !important;
          }
          .warning-box {
            flex-direction: column !important;
            gap: 1rem !important;
          }
        }
      `}} />

    </div>
  );
}