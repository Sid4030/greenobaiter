import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Search, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

const faqData = [
  {
    category: "Participation & Eligibility",
    questions: [
      {
        q: "Who is eligible to participate in the Greenovators Hackathon?",
        a: "The hackathon is open to undergraduate (UG), postgraduate (PG), and doctoral/PhD research scholars from any recognized college, university, or institute across India. Multidisciplinary teams are highly encouraged."
      },
      {
        q: "What is the team size requirement?",
        a: "Teams must consist of a minimum of 2 members and a maximum of 5 members. Individual participations are not permitted to ensure collaborative development."
      },
      {
        q: "Can a team have members from different universities?",
        a: "Yes! Inter-college and inter-university teams are fully permitted. However, a single primary contact student coordinator must be designated for all communication."
      }
    ]
  },
  {
    category: "Idea Submission & Technology",
    questions: [
      {
        q: "Do I need a fully working prototype during the initial submission?",
        a: "No. For the initial phase, teams submit a proposal document detailing the problem statement, scientific hypothesis, block architecture, and expected SDG impact. High-fidelity prototypes are developed during subsequent selection rounds."
      },
      {
        q: "Can I submit an idea that is already being incubated?",
        a: "Yes, provided the prototype has not received commercial venture capital seed funding or previous national awards. Scaling existing lab models into hackathon prototypes is encouraged."
      },
      {
        q: "Are software-only solutions allowed?",
        a: "For the 'Smart Cities' and 'Circular Waste' tracks, physical or biological hardware prototypes are highly preferred. Software-only or machine learning repository submissions are accepted for the 'Net Zero AI' informatics track."
      }
    ]
  },
  {
    category: "Logistics, Prizes & Finale",
    questions: [
      {
        q: "Is there a registration fee to participate?",
        a: "No! Registration and submission of proposals for the Greenovators Hackathon 2026 are 100% free of cost."
      },
      {
        q: "Where will the Grand Finale be hosted?",
        a: "The 3-day Grand Finale sprint will be hosted physically at the Amity University Uttar Pradesh campus in Sector-125, Noida, India."
      },
      {
        q: "Will travel and accommodation be funded for finalist teams?",
        a: "Accommodation and meals during the 3-day Grand Finale will be provided free of cost by AIES. Limited travel subsidies will be awarded to outstation finalist teams based on budget approvals."
      }
    ]
  }
];

export default function Faqs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Flatten questions and filter based on search term
  const allQuestions = faqData.reduce((acc, cat) => {
    return [...acc, ...cat.questions.map(q => ({ ...q, category: cat.category }))];
  }, []);

  const filteredQuestions = allQuestions.filter(item => 
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ background: '#fbfbfa', minHeight: '100vh', paddingTop: '140px', paddingBottom: '80px' }}>
      
      {/* ================= HERO HEADER ================= */}
      <section className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="badge badge-outline" style={{ marginBottom: '1.25rem' }}>
          FAQ Center
        </span>
        
        <h1 style={{
          fontSize: '3.75rem',
          color: 'var(--primary)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          maxWidth: '900px',
          margin: '0 auto 1.5rem'
        }}>
          Got Questions? <span style={{ color: 'var(--secondary)' }}>We Have Answers.</span>
        </h1>

        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-muted)',
          lineHeight: '1.6',
          maxWidth: '650px',
          margin: '0 auto 2.5rem'
        }}>
          Search through our frequently asked questions or filter categories to quickly find detailed guidelines.
        </p>

        {/* Live Search Input Box */}
        <div style={{
          position: 'relative',
          maxWidth: '550px',
          margin: '0 auto',
          boxShadow: '0 4px 30px rgba(0,0,0,0.02)'
        }} className="search-box">
          <Search style={{
            position: 'absolute',
            left: '1.25rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            opacity: 0.7
          }} size={20} />
          
          <input 
            type="text"
            placeholder="Search FAQs (e.g. eligibility, prototype, venue)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3.25rem',
              borderRadius: '16px',
              border: '1px solid rgba(11, 61, 43, 0.08)',
              background: '#ffffff',
              fontSize: '1rem',
              color: 'var(--primary)',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            className="search-input"
          />
        </div>
      </section>

      {/* ================= ACCORDION CONTENT ================= */}
      <section className="container" style={{ maxWidth: '800px' }}>
        
        {filteredQuestions.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredQuestions.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div 
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: isExpanded ? '1px solid rgba(11, 61, 43, 0.12)' : '1px solid rgba(11, 61, 43, 0.05)',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isExpanded ? '0 8px 30px rgba(11, 61, 43, 0.03)' : 'none'
                  }}
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggleExpand(idx)}
                    style={{
                      width: '100%',
                      padding: '1.5rem 1.75rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      outline: 'none'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <HelpCircle size={18} style={{ color: isExpanded ? 'var(--secondary)' : 'var(--primary)', flexShrink: 0 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {item.category}
                        </span>
                        <strong style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: 800, lineHeight: 1.3 }}>
                          {item.q}
                        </strong>
                      </div>
                    </div>
                    {isExpanded ? <ChevronUp size={20} style={{ color: 'var(--primary)' }} /> : <ChevronDown size={20} style={{ color: 'var(--primary)' }} />}
                  </button>

                  {/* Answer slide */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div style={{
                          padding: '0 1.75rem 1.5rem 2.8rem',
                          fontSize: '0.92rem',
                          color: 'var(--text-muted)',
                          lineHeight: '1.6',
                          borderTop: '1px solid rgba(11, 61, 43, 0.03)'
                        }}>
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>
        ) : (
          <div style={{
            padding: '3rem',
            textAlign: 'center',
            background: 'rgba(11, 61, 43, 0.02)',
            borderRadius: '24px',
            border: '1px dashed rgba(11, 61, 43, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <AlertCircle size={36} style={{ color: 'var(--text-muted)', opacity: 0.6 }} />
            <strong style={{ color: 'var(--primary)', fontSize: '1.15rem' }}>No results match your search term.</strong>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Try using keywords like "eligibility", "accommodation", or "fee".</p>
          </div>
        )}

      </section>

      {/* Styled inputs focus outline */}
      <style dangerouslySetInnerHTML={{__html: `
        .search-input:focus {
          border-color: var(--secondary) !important;
          box-shadow: 0 0 0 3px rgba(162, 230, 53, 0.15);
        }
      `}} />

    </div>
  );
}