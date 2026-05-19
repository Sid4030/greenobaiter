import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, User, Mail, Users, FileText, Zap } from 'lucide-react';

export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    teamName: '',
    track: 'waste-to-wealth',
    leaderName: '',
    leaderEmail: '',
    teamSize: '3',
    brief: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      teamName: '',
      track: 'waste-to-wealth',
      leaderName: '',
      leaderEmail: '',
      teamSize: '3',
      brief: ''
    });
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1.5rem',
        }}>
          {/* Backdrop */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(7, 25, 18, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="glass-panel"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 30px 60px rgba(7, 25, 18, 0.25)',
              background: 'rgba(251, 251, 249, 0.98)',
              overflow: 'hidden',
              zIndex: 201,
              padding: '2.5rem',
            }}
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                border: 'none',
                background: 'rgba(11, 61, 43, 0.05)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                color: 'var(--primary)',
                transition: 'all 0.2s',
              }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(11, 61, 43, 0.1)' }}
              whileTap={{ scale: 0.9 }}
              type="button"
            >
              <X size={18} />
            </button>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
                    <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>
                      REGISTRATION OPEN
                    </span>
                    <h2 style={{ 
                      fontSize: '1.85rem', 
                      fontWeight: 800, 
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--primary)',
                      letterSpacing: '-0.02em',
                    }}>
                      Secure Your Spot
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Enter your details below to register for the Greenovators Hackathon 2026.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'left' }}>
                    {/* Team Name */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Team Name
                      </label>
                      <div className="input-wrapper">
                        <Users size={16} className="input-icon" />
                        <input
                          type="text"
                          required
                          value={formData.teamName}
                          onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                          placeholder="e.g., EchoTech Innovators"
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Track Selection */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Hackathon Track
                      </label>
                      <div className="input-wrapper">
                        <Zap size={16} className="input-icon" />
                        <select
                          value={formData.track}
                          onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                          className="form-input"
                          style={{ appearance: 'none', cursor: 'pointer' }}
                        >
                          <option value="waste-to-wealth">Waste to Wealth</option>
                          <option value="smart-infrastructure">Smart & Sustainable Infrastructure</option>
                          <option value="net-zero-ai">Net Zero AI</option>
                        </select>
                      </div>
                    </div>

                    {/* Contact Rows */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Leader Name
                        </label>
                        <div className="input-wrapper">
                          <User size={16} className="input-icon" />
                          <input
                            type="text"
                            required
                            value={formData.leaderName}
                            onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })}
                            placeholder="Your full name"
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Leader Email
                        </label>
                        <div className="input-wrapper">
                          <Mail size={16} className="input-icon" />
                          <input
                            type="email"
                            required
                            value={formData.leaderEmail}
                            onChange={(e) => setFormData({ ...formData, leaderEmail: e.target.value })}
                            placeholder="name@university.edu"
                            className="form-input"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Team Size */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Team Size (including leader)
                      </label>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {['2', '3', '4', '5'].map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setFormData({ ...formData, teamSize: size })}
                            className={`size-btn ${formData.teamSize === size ? 'active' : ''}`}
                            style={{
                              flex: 1,
                              padding: '0.6rem 0',
                              borderRadius: '10px',
                              border: `1px solid ${formData.teamSize === size ? 'var(--primary)' : 'rgba(11, 61, 43, 0.1)'}`,
                              background: formData.teamSize === size ? 'var(--primary)' : 'transparent',
                              color: formData.teamSize === size ? 'var(--bg-light)' : 'var(--primary)',
                              fontWeight: 700,
                              cursor: 'pointer',
                              transition: 'all 0.2s',
                            }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Short Idea Brief */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Initial Idea Abstract (Optional)
                      </label>
                      <div className="input-wrapper" style={{ alignItems: 'flex-start' }}>
                        <FileText size={16} className="input-icon" style={{ marginTop: '10px' }} />
                        <textarea
                          rows="3"
                          value={formData.brief}
                          onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                          placeholder="Briefly describe the sustainability problem and your proposed technology solution..."
                          className="form-input"
                          style={{ padding: '0.75rem 0.75rem 0.75rem 2.5rem', resize: 'none', fontFamily: 'var(--font-body)' }}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        padding: '1rem',
                        marginTop: '0.5rem',
                      }}
                    >
                      {isSubmitting ? (
                        <span>Validating credentials...</span>
                      ) : (
                        <>
                          Submit Registration <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3rem 1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}
                  >
                    <CheckCircle2 size={72} />
                  </motion.div>

                  <h3 style={{ 
                    fontSize: '2rem', 
                    fontWeight: 900, 
                    color: 'var(--primary)', 
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0.5rem' 
                  }}>
                    Successfully Registered!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '380px' }}>
                    Welcome to the revolution. An official verification email has been sent to <strong>{formData.leaderEmail}</strong>. Mark your calendar for <strong>17th September 2026</strong>.
                  </p>

                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    width: '100%',
                    gap: '0.75rem',
                    background: 'rgba(16, 185, 129, 0.05)',
                    padding: '1.25rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                    textAlign: 'left',
                    fontSize: '0.85rem',
                    marginBottom: '2rem'
                  }}>
                    <div><strong>Team:</strong> {formData.teamName}</div>
                    <div><strong>Track:</strong> {formData.track.replace(/-/g, ' ').toUpperCase()}</div>
                    <div><strong>Team Size:</strong> {formData.teamSize} Innovators</div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                    <button
                      onClick={handleReset}
                      className="btn-secondary"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      Register Another
                    </button>
                    <button
                      onClick={onClose}
                      className="btn-primary"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* Styled embedded CSS for Form elements to keep layout clean */}
      <style dangerouslySetInnerHTML={{__html: `
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          color: var(--primary);
          opacity: 0.5;
          pointer-events: none;
        }
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          border-radius: 12px;
          border: 1px solid rgba(11, 61, 43, 0.15);
          background: rgba(255,255,255,0.7);
          color: var(--primary);
          font-family: var(--font-body);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s;
        }
        .form-input:focus {
          border-color: var(--secondary);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
        }
        .size-btn:hover {
          background: rgba(11, 61, 43, 0.05);
        }
        .size-btn.active:hover {
          background: var(--primary);
        }
        @media (max-width: 576px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </AnimatePresence>
  );
}
