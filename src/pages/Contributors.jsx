import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Sparkles } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-85px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function Contributors() {
  
  const patrons = [
    {
      name: "Dr. Balvinder Shukla",
      role: "Vice Chancellor, Amity University",
      desc: "Patron in Chief directing strategic academic-industrial partnerships.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      email: "vc@amity.edu"
    },
    {
      name: "Prof. (Dr.) Tanu Jindal",
      role: "Director, Amity Institute of Environmental Sciences",
      desc: "Distinguished scientist directing climate monitoring & carbon research.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
      email: "tjindal@amity.edu"
    }
  ];

  const faculty = [
    {
      name: "Dr. R. S. Ningthoujam",
      role: "Associate Professor & Organizing Convenor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
      email: "rsningthoujam@amity.edu"
    },
    {
      name: "Dr. Richa Davar",
      role: "Assistant Professor & Coordinating Secretary",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400",
      email: "rdavar@amity.edu"
    },
    {
      name: "Dr. Anamika Tripathi",
      role: "Assistant Professor & Tech Lead Advisor",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
      email: "atripathi@amity.edu"
    }
  ];

  const students = [
    {
      name: "Aarav Sharma",
      role: "Student Coordinator",
      dept: "B.Sc. Environmental Science",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Diya Verma",
      role: "Technical Operations Head",
      dept: "B.Tech. Biotechnology",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Kabir Mehta",
      role: "Logistics & Outreach Head",
      dept: "MBA Sustainability",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Ananya Sen",
      role: "Creative & Design Lead",
      dept: "B.Sc. Environmental Studies",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400"
    }
  ];

  return (
    <div style={{ background: '#fbfbfa', minHeight: '100vh', paddingTop: '110px', paddingBottom: '80px' }}>
      
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
            fontSize: '3.75rem',
            color: 'var(--primary)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            maxWidth: '900px',
            margin: '0 auto 1.5rem'
          }}
        >
          The Minds Behind The <span style={{ color: 'var(--secondary)' }}>Greenovators Initiative</span>
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
          Supported by Amity University administration, environmental science faculty scholars, and student leaders coordinate this national forum.
        </motion.p>
      </section>

      {/* ================= SECTION: PATRONS ================= */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem', justifyContent: 'center' }}>
          <GraduationCap style={{ color: 'var(--secondary)' }} size={24} />
          <h2 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 800, fontFamily: 'var(--font-heading)', margin: 0 }}>
            Patrons & Advisory Panel
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          maxWidth: '960px',
          margin: '0 auto'
        }} className="patrons-grid">
          {patrons.map((patron, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              style={{
                padding: '2.5rem',
                background: '#ffffff',
                border: '1px solid rgba(11, 61, 43, 0.06)',
                borderRadius: '24px',
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
                textAlign: 'left',
                boxShadow: '0 4px 20px rgba(0,0,0,0.01)'
              }}
              className="patron-card"
            >
              <img 
                src={patron.image} 
                alt={patron.name} 
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '20px',
                  objectFit: 'cover',
                  flexShrink: 0
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <strong style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 800 }}>
                  {patron.name}
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 700 }}>
                  {patron.role}
                </span>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.45', margin: 0 }}>
                  {patron.desc}
                </p>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  📧 {patron.email}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SECTION: FACULTY ================= */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem', justifyContent: 'center' }}>
          <Users style={{ color: 'var(--secondary)' }} size={24} />
          <h2 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 800, fontFamily: 'var(--font-heading)', margin: 0 }}>
            Faculty Coordinating Committee
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2.5rem'
        }} className="faculty-grid">
          {faculty.map((member, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              style={{
                padding: '2rem',
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
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(11, 61, 43, 0.08)'
              }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <strong style={{ fontSize: '1.15rem', color: 'var(--primary)', fontWeight: 800 }}>
                  {member.name}
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 700 }}>
                  {member.role}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  📧 {member.email}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SECTION: STUDENTS ================= */}
      <section className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem', justifyContent: 'center' }}>
          <Sparkles style={{ color: 'var(--secondary)' }} size={24} />
          <h2 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 800, fontFamily: 'var(--font-heading)', margin: 0 }}>
            Student Organizing Committee
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem'
        }} className="student-grid">
          {students.map((student, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              style={{
                padding: '1.75rem',
                background: '#ffffff',
                border: '1px solid rgba(11, 61, 43, 0.06)',
                borderRadius: '24px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.01)'
              }}
              className="contributor-card"
            >
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(11, 61, 43, 0.05)'
              }}>
                <img 
                  src={student.image} 
                  alt={student.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                <strong style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: 800 }}>
                  {student.name}
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: 700 }}>
                  {student.role}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  {student.dept}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Responsive layout rules */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .patrons-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .faculty-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .student-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .patron-card {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 2rem 1.5rem !important;
          }
          .faculty-grid {
            grid-template-columns: 1fr !important;
          }
          .student-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

    </div>
  );
}