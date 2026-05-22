import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserCircle } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-85px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function Contributors() {
  
  const contributors = [
    {
      name: "Prof. Dr. Renu Dhupper",
      role: "Assistant Director",
      dept: "Amity Institute of Environmental Sciences, Amity University Uttar Pradesh, Noida",
      image: "/renu_dhupper.png"
    },
    {
      name: "Prof. Dr. Rachana Singh",
      role: "Contributor",
      dept: "Amity Institute of Biotechnology, Amity University Uttar Pradesh, Noida",
      image: null
    },
    {
      name: "Dr. Garima Agarwal",
      role: "Associate Professor and Head",
      dept: "Amity Centre for Entrepreneurship Development, Amity University Uttar Pradesh, Noida",
      image: null
    },
    {
      name: "Dr. Kartikeya Shukla",
      role: "Assistant Professor",
      dept: "Amity Institute of Environmental Sciences, Amity University Uttar Pradesh, Noida",
      image: null
    },
    {
      name: "Dr. Manoj Chandra Garg",
      role: "Assistant Professor",
      dept: "Amity Institute of Environmental Sciences, Amity University Uttar Pradesh, Noida",
      image: null
    },
    {
      name: "Dr. Juhi Gupta",
      role: "Assistant Professor",
      dept: "Amity Institute of Environmental Sciences, Amity University Uttar Pradesh, Noida",
      image: null
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
          Organising Committee
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 8vw, 3.75rem)',
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
          Contributors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: '1.25rem',
            color: 'var(--text-muted)',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto'
          }}
        >
          The dedicated faculty members who coordinate this national forum and guide the sustainable initiative.
        </motion.p>
      </section>

      {/* ================= SECTION: CONTRIBUTORS ================= */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem', justifyContent: 'center' }}>
          <Users style={{ color: 'var(--secondary)' }} size={24} />
          <h2 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 800, fontFamily: 'var(--font-heading)', margin: 0 }}>
            Our Contributors
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2.5rem'
        }} className="faculty-grid">
          {contributors.map((member, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              style={{
                padding: '2.5rem 2rem',
                background: '#ffffff',
                border: '1px solid rgba(11, 61, 43, 0.06)',
                borderRadius: '24px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.25rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.01)'
              }}
              className="contributor-card"
            >
              <div style={{
                width: '220px',
                height: '280px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'var(--bg-light)',
                border: '1px solid rgba(11, 61, 43, 0.08)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'var(--secondary)',
                margin: '0 auto 0.5rem'
              }}>
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                  />
                ) : (
                  <UserCircle size={64} strokeWidth={1} />
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <strong style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 800 }}>
                  {member.name}
                </strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 700, lineHeight: '1.4' }}>
                  {member.role}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                  {member.dept}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Responsive layout rules */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .faculty-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .faculty-grid {
            grid-template-columns: 1fr !important;
          }
          .contributor-card {
            padding: 2rem 1.5rem !important;
          }
        }
      `}} />

    </div>
  );
}