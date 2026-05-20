import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Briefcase, Zap, Compass, CheckCircle } from 'lucide-react';

export default function Timeline() {
  const steps = [
    {
      phase: "Phase 01",
      title: "Call for Applications",
      icon: <Users size={20} />,
      color: "var(--secondary)",
      items: [
        "Online nationwide team registrations open.",
        "National screening panel evaluates initial proposals.",
        "Shortlisting based on innovation, feasibility, and sustainability impact."
      ],
      badge: "Active Phase"
    },
    {
      phase: "Phase 02",
      title: "3-Day Dynamic Sprint",
      icon: <Zap size={20} />,
      color: "#0284c7",
      items: [
        "Day 1: Technical orientation, problem briefs, and industry mentors mapping.",
        "Day 2: Design sprint, rapid prototyping, and intensive laboratory feedback.",
        "Day 3: Final pitches before a high-profile jury of policymakers and Venture Capitalists."
      ],
      badge: "17th - 19th Sep 2026"
    },
    {
      phase: "Phase 03",
      title: "Seed Incubation & Launch",
      icon: <Briefcase size={20} />,
      color: "#8b5cf6",
      items: [
        "Shortlisted teams enter the incubation phase with Amity Incubation Center.",
        "Direct access to ₹ 1,00,000 cash prizes and pilot scale budgets.",
        "Mentorship pipelines from UNEP, Ministry experts, and clean-tech leaders."
      ],
      badge: "Post-Hackathon"
    }
  ];

  return (
    <div style={{ position: 'relative', padding: '2rem 0' }} className="timeline-container-wrapper">
      {/* Central Connector Line */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        top: '20px',
        bottom: '20px',
        width: '2px',
        background: 'linear-gradient(180deg, var(--secondary) 0%, #0284c7 50%, #8b5cf6 100%)',
        opacity: 0.15,
      }} className="central-timeline-line" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                position: 'relative',
              }}
              className="timeline-row"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Timeline Center Node */}
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-light)',
                border: `3px solid ${step.color}`,
                display: 'grid',
                placeItems: 'center',
                color: step.color,
                zIndex: 3,
                boxShadow: '0 4px 10px rgba(11, 61, 43, 0.1)',
              }} className="timeline-node">
                {step.icon}
              </div>

              {/* Left Column */}
              <div className={`timeline-col ${!isLeft ? 'spacer' : ''}`} style={{
                width: '44%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                textAlign: 'right',
                gap: '1rem',
              }}>
                {isLeft && (
                  <>
                    <span className="badge" style={{
                      backgroundColor: `${step.color}15`,
                      color: step.color,
                      border: `1px solid ${step.color}30`,
                    }}>
                      {step.badge}
                    </span>
                    
                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: step.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {step.phase}
                      </span>
                      <h3 style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 800, 
                        color: 'var(--primary)', 
                        fontFamily: 'var(--font-heading)',
                        marginTop: '0.25rem'
                      }}>
                        {step.title}
                      </h3>
                    </div>

                    <div className="glass-panel" style={{
                      padding: '1.75rem',
                      borderRadius: '20px',
                      border: '1px solid rgba(11, 61, 43, 0.06)',
                      background: 'var(--bg-card)',
                      boxShadow: '0 8px 30px rgba(11, 61, 43, 0.01)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      width: '100%',
                      textAlign: 'right',
                    }}>
                      {step.items.map((item, idx) => (
                        <div key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Right Column */}
              <div className={`timeline-col ${isLeft ? 'spacer' : ''}`} style={{
                width: '44%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                gap: '1rem',
              }}>
                {!isLeft && (
                  <>
                    <span className="badge" style={{
                      backgroundColor: `${step.color}15`,
                      color: step.color,
                      border: `1px solid ${step.color}30`,
                    }}>
                      {step.badge}
                    </span>

                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: step.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {step.phase}
                      </span>
                      <h3 style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 800, 
                        color: 'var(--primary)', 
                        fontFamily: 'var(--font-heading)',
                        marginTop: '0.25rem'
                      }}>
                        {step.title}
                      </h3>
                    </div>

                    <div className="glass-panel" style={{
                      padding: '1.75rem',
                      borderRadius: '20px',
                      border: '1px solid rgba(11, 61, 43, 0.06)',
                      background: 'var(--bg-card)',
                      boxShadow: '0 8px 30px rgba(11, 61, 43, 0.01)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      width: '100%',
                      textAlign: 'left',
                    }}>
                      {step.items.map((item, idx) => (
                        <div key={idx} style={{ 
                          fontSize: '0.9rem', 
                          color: 'var(--text-muted)', 
                          lineHeight: '1.4',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                        }}>
                          <CheckCircle size={14} style={{ color: step.color, marginTop: '4px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

            </motion.div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .central-timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding-left: 50px !important;
            width: 100% !important;
          }
          .timeline-node {
            left: 20px !important;
            transform: translateX(-50%) !important;
          }
          .spacer {
            display: none !important;
          }
          .timeline-col {
            width: 100% !important;
            display: flex !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
          .timeline-col .glass-panel {
            text-align: left !important;
          }
        }
      `}} />
    </div>
  );
}
