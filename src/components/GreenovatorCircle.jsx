import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Shield, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function GreenovatorCircle() {
  const [activeSegment, setActiveSegment] = useState(0);

  const segments = [
    {
      title: "Waste to Wealth",
      icon: <Trash2 size={24} />,
      color: "var(--secondary)",
      accentBg: "rgba(16, 185, 129, 0.05)",
      borderColor: "rgba(16, 185, 129, 0.2)",
      brief: "Fostering national models for resource circularity, recycling technology, and plastic substitutes.",
      points: [
        "High-performance waste-to-resource prototype blueprints",
        "Municipal, e-waste, and agricultural waste transformation engines",
        "Scalable circular economy frameworks to reduce reliance on landfills",
        "Biodegradable structural alternatives to single-use plastics"
      ],
      sdg: "SDG 12: Responsible Consumption",
      metric: "60%+",
      metricDesc: "Landfill Pressure Reduction Target"
    },
    {
      title: "Smart Infrastructure",
      icon: <Shield size={24} />,
      color: "#0284c7", // Sky blue
      accentBg: "rgba(2, 132, 199, 0.05)",
      borderColor: "rgba(2, 132, 199, 0.2)",
      brief: "Designing climate-resilient, energy-efficient, and socially inclusive urban systems.",
      points: [
        "Clean, smart mobility solutions and intelligent public transit models",
        "AI and IoT-enabled grids for real-time air, water, and structural monitoring",
        "Urban farming networks integrated natively within cityscape systems",
        "Resilient, disaster-ready public spaces and green building solutions"
      ],
      sdg: "SDG 11: Sustainable Cities",
      metric: "40%",
      metricDesc: "Energy Efficiency Optimization"
    },
    {
      title: "NetZeroAIArchitecture",
      icon: <Cpu size={24} />,
      color: "#8b5cf6", // Violet
      accentBg: "rgba(139, 92, 246, 0.05)",
      borderColor: "rgba(139, 92, 246, 0.2)",
      brief: "Harnessing predictive neural systems, sensors, and modeling to absolute-zero emissions.",
      points: [
        "Real-time carbon tracking engines for industrial processes",
        "Predictive models for renewable energy grid demand management",
        "AI-driven low-carbon urban planning twins and simulations",
        "Climate-fintech modules for green investment matching grids"
      ],
      sdg: "SDG 13: Climate Action",
      metric: "0",
      metricDesc: "Net Carbon Pathway target"
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: '5rem',
      alignItems: 'stretch',
      padding: '1.5rem 0',
    }} className="pillars-redesign-grid">
      
      {/* LEFT COLUMN: Modern Minimal Metric & Tab Selector */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}>
        
        {/* Sleek Segment Selector Buttons (Tab style) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {segments.map((seg, index) => {
            const isActive = activeSegment === index;
            return (
              <button
                key={index}
                onClick={() => setActiveSegment(index)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem 1.75rem',
                  borderRadius: '16px',
                  border: `1px solid ${isActive ? seg.borderColor : 'rgba(11, 61, 43, 0.06)'}`,
                  background: isActive ? seg.accentBg : '#ffffff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 4px 15px rgba(0,0,0,0.02)' : 'none',
                }}
                className={`pillar-tab-btn ${isActive ? 'active' : ''}`}
                type="button"
              >
                {/* Minimal Icon Core */}
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: isActive ? seg.color : 'rgba(11, 61, 43, 0.05)',
                  color: isActive ? 'white' : 'var(--primary)',
                  display: 'grid',
                  placeItems: 'center',
                  transition: 'all 0.3s ease',
                }}>
                  {seg.icon}
                </div>

                <div style={{ flexGrow: 1 }}>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-heading)',
                    lineHeight: '1.2'
                  }}>
                    {seg.title}
                  </h4>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: isActive ? seg.color : 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Track 0{index + 1}
                  </span>
                </div>

                {/* Subtle right chevron */}
                <motion.div
                  animate={{ x: isActive ? 5 : 0 }}
                  style={{ color: isActive ? seg.color : 'rgba(11, 61, 43, 0.2)' }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </button>
            );
          })}
        </div>

        {/* Minimal High-Impact Metric Box */}
        <div className="glass-panel" style={{
          padding: '1.75rem',
          borderRadius: '20px',
          background: '#ffffff',
          border: '1px solid rgba(11, 61, 43, 0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'left',
          boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
        }}>
          <strong style={{
            fontSize: '3rem',
            fontFamily: 'var(--font-heading)',
            color: segments[activeSegment].color,
            fontWeight: 900,
            lineHeight: 1,
            transition: 'color 0.3s ease',
          }}>
            {segments[activeSegment].metric}
          </strong>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)' }}>
              {segments[activeSegment].metricDesc}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Greenovators Target Outcome
            </span>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: Premium Text Detail Reveals */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSegment}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              textAlign: 'left',
              padding: '2.5rem',
              borderRadius: '24px',
              border: `1px solid ${segments[activeSegment].borderColor}`,
              background: '#ffffff',
              boxShadow: '0 8px 30px rgba(11, 61, 43, 0.02)',
            }}
          >
            {/* Header elements */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <span className="badge" style={{
                backgroundColor: segments[activeSegment].accentBg,
                color: segments[activeSegment].color,
                border: `1px solid ${segments[activeSegment].borderColor}`,
                fontWeight: 700,
              }}>
                {segments[activeSegment].sdg}
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                Track Briefing
              </span>
            </div>

            <h3 style={{
              fontSize: '2.25rem',
              color: 'var(--primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}>
              {segments[activeSegment].title}
            </h3>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: '1.5',
            }}>
              {segments[activeSegment].brief}
            </p>

            <div style={{ height: '1px', background: 'rgba(11, 61, 43, 0.06)' }} />

            {/* List focus points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h5 style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: 'var(--primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <Sparkles size={14} style={{ color: segments[activeSegment].color }} />
                Focus Objectives
              </h5>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                {segments[activeSegment].points.map((pt, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.95rem',
                      color: 'var(--text-dark)',
                      lineHeight: '1.4',
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: segments[activeSegment].color, flexShrink: 0, marginTop: '2px' }} />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .pillars-redesign-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}} />

    </div>
  );
}
