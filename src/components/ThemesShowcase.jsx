import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, MapPin, Cpu, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ThemesShowcase() {
  const cards = [
    {
      title: "Waste to Wealth",
      tagline: "Circular Economy & Resource Recovery",
      icon: <RefreshCw size={22} />,
      borderColor: "rgba(16, 185, 129, 0.15)",
      hoverBorder: "var(--secondary)",
      badgeColor: "rgba(16, 185, 129, 0.08)",
      textAccent: "var(--secondary)",
      points: [
        "A waste-to-resource technology prototype showing operational circularity.",
        "Industry and community circular business frameworks ready for seed modeling.",
        "Scalable concepts designed to reduce landfill pressure by 60%+."
      ],
      sdgs: ["SDG 12", "SDG 9"]
    },
    {
      title: "Smart Infrastructure",
      tagline: "Climate-Resilient Cities & Smart Mobility",
      icon: <MapPin size={22} />,
      borderColor: "rgba(2, 132, 199, 0.15)",
      hoverBorder: "#0284c7",
      badgeColor: "rgba(2, 132, 199, 0.08)",
      textAccent: "#0284c7",
      points: [
        "Smart infrastructure blueprints integrating green materials and IoT layers.",
        "Sustainable urban dashboards displaying energy, water, and structural loads.",
        "Disaster-resilient transit and community toolkits for low-carbon communities."
      ],
      sdgs: ["SDG 11", "SDG 7"]
    },
    {
      title: "NetZeroAIArchitecture",
      tagline: "Artificial Intelligence & Carbon Optimization",
      icon: <Cpu size={22} />,
      borderColor: "rgba(139, 92, 246, 0.15)",
      hoverBorder: "#8b5cf6",
      badgeColor: "rgba(139, 92, 246, 0.08)",
      textAccent: "#8b5cf6",
      points: [
        "AI-powered predictive dashboards modeling industrial pathway emissions.",
        "Intelligent resource distribution software mapping energy grid margins.",
        "Carbon trading and climate-fintech prototypes driving green investment."
      ],
      sdgs: ["SDG 13", "SDG 9"]
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
      padding: '1rem 0'
    }} className="themes-grid">
      
      {cards.map((card, index) => (
        <motion.div
          key={index}
          style={{
            background: '#ffffff',
            border: `1px solid ${card.borderColor}`,
            borderRadius: '20px',
            padding: '2.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            textAlign: 'left',
            boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
            position: 'relative',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          }}
          whileHover={{ 
            y: -5,
            borderColor: card.hoverBorder,
            boxShadow: '0 10px 30px rgba(11, 61, 43, 0.04)',
          }}
        >
          {/* Icon Badge */}
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            backgroundColor: card.badgeColor,
            display: 'grid',
            placeItems: 'center',
            color: card.textAccent,
          }}>
            {card.icon}
          </div>

          <div>
            <h3 style={{ 
              fontSize: '1.45rem', 
              color: 'var(--primary)', 
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '0.25rem'
            }}>
              {card.title}
            </h3>
            <p style={{ 
              fontSize: '0.8rem', 
              color: card.textAccent, 
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {card.tagline}
            </p>
          </div>

          <div style={{ height: '1px', background: 'rgba(11, 61, 43, 0.05)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
            <h4 style={{ 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              color: 'var(--primary)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <ShieldCheck size={14} style={{ color: card.textAccent }} />
              Target Outcomes
            </h4>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {card.points.map((pt, idx) => (
                <li key={idx} style={{ 
                  fontSize: '0.9rem', 
                  color: 'var(--text-muted)',
                  lineHeight: '1.4',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem'
                }}>
                  <span style={{ 
                    color: card.textAccent, 
                    fontWeight: 'bold', 
                    fontSize: '1.1rem',
                    lineHeight: '0.9',
                    marginTop: '2px'
                  }}>
                    ›
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(11, 61, 43, 0.04)'
          }}>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {card.sdgs.map((sdg, i) => (
                <span key={i} className="badge" style={{
                  backgroundColor: card.badgeColor,
                  color: card.textAccent,
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  padding: '0.25rem 0.6rem',
                  borderRadius: '100px',
                  border: `1px solid ${card.borderColor}`
                }}>
                  {sdg}
                </span>
              ))}
            </div>
            
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: card.textAccent,
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              cursor: 'pointer'
            }}>
              Track details <ArrowRight size={12} />
            </span>
          </div>

        </motion.div>
      ))}

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .themes-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}} />
    </div>
  );
}
