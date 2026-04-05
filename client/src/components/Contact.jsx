// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { FiArrowRight, FiCheck, FiMail, FiPhone, FiClock } from 'react-icons/fi';

// const CONTACT_IMG = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85';
// const services = ['Website', 'E-Commerce Store', 'Web Application', 'Mobile App', 'Business System', 'SEO & Marketing', 'Not sure yet'];

// export default function Contact() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
//   const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
//   const [status, setStatus] = useState('idle');

//   const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
//   const handleSubmit = async e => {
//     e.preventDefault(); setStatus('loading');
//     try {
//       const res = await fetch('http://localhost:5000/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
//       const data = await res.json();
//       setStatus(data.success ? 'success' : 'error');
//       if (data.success) setForm({ name: '', email: '', service: '', message: '' });
//     } catch { setStatus('error'); }
//   };

//   const inp = { width: '100%', padding: '13px 16px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text)', fontSize: 15, outline: 'none', fontFamily: 'Inter, sans-serif', transition: 'border-color 0.2s' };

//   return (
//     <section id="contact" className="section" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
//       <div className="orange-glow" style={{ width: 700, height: 700, top: '-20%', left: '50%', transform: 'translateX(-50%)' }} />

//       <div className="container" ref={ref}>
//         <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
//           <div className="pill" style={{ margin: '0 auto 24px' }}>Get In Touch</div>
//           <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', maxWidth: 560, margin: '0 auto 16px' }}>
//             Let's Build Something<br /><span style={{ color: 'var(--orange)' }}>Amazing Together</span>
//           </h2>
//           <p style={{ color: 'var(--text2)', fontSize: '1.05rem', maxWidth: 480, margin: '0 auto' }}>
//             Tell us what you're building and we'll get back to you within one business day.
//           </p>
//         </motion.div>

//         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }} className="contact-grid">
//           <motion.div initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
//             <div style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 28, aspectRatio: '4/3', border: '1px solid var(--border)', boxShadow: '0 0 40px rgba(249,115,22,0.08)' }}>
//               <img src={CONTACT_IMG} alt="Contact" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
//               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(249,115,22,0.1), transparent)', borderRadius: 20 }} />
//             </div>
//             {[{ icon: <FiMail />, label: 'Email', value: 'hello@anvawebsolutions.com', c: 'var(--orange)' }, { icon: <FiPhone />, label: 'Phone', value: '+1 (555) 123-4567', c: '#22C55E' }, { icon: <FiClock />, label: 'Response time', value: 'Within 24 hours', c: '#60A5FA' }].map(item => (
//               <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
//                 <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.c}15`, border: `1px solid ${item.c}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.c, fontSize: 16, flexShrink: 0 }}>{item.icon}</div>
//                 <div>
//                   <div style={{ fontSize: 11, color: 'var(--text3)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{item.label}</div>
//                   <div style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>{item.value}</div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           <motion.div initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
//             <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 24, padding: '36px 32px', position: 'relative', overflow: 'hidden', boxShadow: '0 0 40px rgba(249,115,22,0.06)' }}>
//               <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--orange), var(--orange2), transparent)' }} />

//               {status === 'success' ? (
//                 <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '32px 0' }}>
//                   <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(249,115,22,0.12)', border: '2px solid var(--orange-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', animation: 'pulse-orange 3s infinite' }}>
//                     <FiCheck size={28} color="var(--orange)" />
//                   </div>
//                   <h3 style={{ fontSize: '1.4rem', marginBottom: 10 }}>Message received!</h3>
//                   <p style={{ color: 'var(--text2)', marginBottom: 28 }}>We'll be in touch within one business day.</p>
//                   <button onClick={() => setStatus('idle')} className="btn btn-dark" style={{ fontSize: 14 }}>Send another</button>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
//                     {[{ name: 'name', label: 'Your name', placeholder: 'Jane Smith', type: 'text' }, { name: 'email', label: 'Email address', placeholder: 'jane@company.com', type: 'email' }].map(f => (
//                       <div key={f.name}>
//                         <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text2)', display: 'block', marginBottom: 8 }}>{f.label}</label>
//                         <input name={f.name} value={form[f.name]} onChange={handleChange} required type={f.type} placeholder={f.placeholder} style={inp}
//                           onFocus={e => e.target.style.borderColor = 'var(--orange)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
//                       </div>
//                     ))}
//                   </div>
//                   <div style={{ marginBottom: 16 }}>
//                     <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text2)', display: 'block', marginBottom: 10 }}>What do you need?</label>
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
//                       {services.map(s => (
//                         <button key={s} type="button" onClick={() => setForm(f => ({ ...f, service: s }))}
//                           style={{ padding: '7px 14px', borderRadius: 50, cursor: 'pointer', border: '1px solid', fontFamily: 'Inter, sans-serif', borderColor: form.service === s ? 'var(--orange)' : 'var(--border2)', background: form.service === s ? 'rgba(249,115,22,0.12)' : 'transparent', color: form.service === s ? 'var(--orange)' : 'var(--text3)', fontSize: 13, fontWeight: 500, transition: 'all 0.2s' }}>{s}</button>
//                       ))}
//                     </div>
//                   </div>
//                   <div style={{ marginBottom: 24 }}>
//                     <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text2)', display: 'block', marginBottom: 8 }}>Tell us more</label>
//                     <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Describe your project, timeline, and any questions..." rows={5} style={{ ...inp, resize: 'vertical', minHeight: 120 }}
//                       onFocus={e => e.target.style.borderColor = 'var(--orange)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
//                   </div>
//                   <motion.button type="submit" className="btn btn-orange" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={status === 'loading'} style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '15px 28px' }}>
//                     {status === 'loading' ? 'Sending...' : <><FiArrowRight /> Send Message</>}
//                   </motion.button>
//                   {status === 'error' && <p style={{ color: '#EF4444', textAlign: 'center', marginTop: 14, fontSize: 14 }}>Something went wrong. Email us at hello@anvawebsolutions.com</p>}
//                 </form>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <style>{`
//         @media(max-width:860px){.contact-grid{grid-template-columns:1fr!important;gap:40px!important}}
//         @media(max-width:560px){.contact-grid form>div:first-child{grid-template-columns:1fr!important}}
//       `}</style>
//     </section>
//   );
// }








import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiCheck, FiMail, FiPhone, FiClock, FiMapPin, FiSend, FiStar } from 'react-icons/fi';

const services = [
  { label: 'Website', icon: '🌐' },
  { label: 'E-Commerce Store', icon: '🛒' },
  { label: 'Web Application', icon: '⚡' },
  { label: 'Mobile App', icon: '📱' },
  { label: 'Business System', icon: '🏢' },
  { label: 'SEO & Marketing', icon: '📈' },
  { label: 'Not sure yet', icon: '🤔' },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
      if (data.success) setForm({ name: '', email: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = (fieldName) => ({
    width: '100%',
    padding: '11px 14px',
    background: focusedField === fieldName ? 'rgba(249,115,22,0.04)' : 'rgba(255,255,255,0.03)',
    border: `1.5px solid ${focusedField === fieldName ? 'var(--orange)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: 12,
    color: 'var(--text)',
    fontSize: 14,
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: focusedField === fieldName ? '0 0 0 3px rgba(249,115,22,0.08)' : 'none',
  });

  const labelStyle = {
    fontSize: 11,
    fontWeight: 700,
    color: 'var(--text3)',
    display: 'block',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  };

  const contactInfo = [
    { icon: <FiMail size={15} />, label: 'Email', value: 'hello@anvawebsolutions.com', color: 'var(--orange)' },
    { icon: <FiPhone size={15} />, label: 'Phone', value: '+1 (555) 123-4567', color: '#22C55E' },
    { icon: <FiClock size={15} />, label: 'Response', value: 'Within 24 hours', color: '#60A5FA' },
    { icon: <FiMapPin size={15} />, label: 'Location', value: 'Available worldwide', color: '#A78BFA' },
  ];

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden', padding: '72px 0' }}>
      <div className="orange-glow" style={{ width: 700, height: 700, top: '-25%', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none', opacity: 0.4 }} />

      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 44 }}
        >
          <div className="pill" style={{ margin: '0 auto 18px', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
            <FiStar size={10} style={{ color: 'var(--orange)' }} /> Start Your Project
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', maxWidth: 520, margin: '0 auto 12px', lineHeight: 1.2, fontWeight: 800 }}>
            Let's Build Something{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--orange), var(--orange2), #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Extraordinary
            </span>
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '0.95rem', maxWidth: 440, margin: '0 auto', lineHeight: 1.6 }}>
            Share your vision and we'll craft a solution that exceeds expectations.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40, alignItems: 'start' }} className="contact-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Testimonial */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(249,115,22,0.02))',
              border: '1px solid rgba(249,115,22,0.15)',
              borderRadius: 16,
              padding: '20px',
              marginBottom: 20,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ display: 'flex', gap: 1 }}>
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} size={11} style={{ color: 'var(--orange)', fill: 'var(--orange)' }} />
                  ))}
                </div>
                <span style={{ fontSize: 11, color: 'var(--text2)', fontWeight: 600 }}>5.0</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, margin: '0 0 12px', fontStyle: 'italic' }}>
                "ANVA web solutions transformed our vision into reality. Unmatched expertise."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg, var(--orange), var(--orange2))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 11, fontWeight: 700 }}>J</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'white' }}>James Wilson</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)' }}>CEO, TechFlow Inc.</div>
                </div>
              </div>
            </div>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 12,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: `${item.color}10`,
                    border: `1px solid ${item.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color,
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: 'var(--text3)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'white' }}>{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 20 }}>
              {[
                { num: '50+', label: 'Projects' },
                { num: '98%', label: 'Satisfaction' },
                { num: '24h', label: 'Response' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  style={{
                    textAlign: 'center',
                    padding: '14px 6px',
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--orange)', marginBottom: 2 }}>{stat.num}</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 22,
              padding: '28px 28px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 6px 40px rgba(0,0,0,0.15), 0 0 30px rgba(249,115,22,0.03)',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, var(--orange), var(--orange2), transparent)', opacity: 0.7 }} />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ textAlign: 'center', padding: '28px 0' }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.15 }}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: 'rgba(249,115,22,0.12)',
                        border: '2px solid rgba(249,115,22,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                        boxShadow: '0 0 30px rgba(249,115,22,0.12)',
                      }}
                    >
                      <FiCheck size={28} color="var(--orange)" strokeWidth={3} />
                    </motion.div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: 8, fontWeight: 800 }}>Message Sent! 🎉</h3>
                    <p style={{ color: 'var(--text2)', fontSize: 13, marginBottom: 20, lineHeight: 1.6 }}>
                      We'll get back to you within one business day.
                    </p>
                    <button onClick={() => setStatus('idle')} className="btn btn-dark" style={{ fontSize: 13, padding: '10px 22px', borderRadius: 12 }}>
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div style={{ marginBottom: 20 }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 4, color: 'white' }}>Tell us about your project</h3>
                      <p style={{ color: 'var(--text3)', fontSize: 13, margin: 0 }}>We'll get back to you shortly.</p>
                    </div>

                    {/* Name & Email */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
                      {[
                        { name: 'name', label: 'Full Name', placeholder: 'Jane Smith', type: 'text' },
                        { name: 'email', label: 'Email', placeholder: 'jane@company.com', type: 'email' },
                      ].map(f => (
                        <div key={f.name}>
                          <label style={labelStyle}>{f.label} <span style={{ color: 'var(--orange)' }}>*</span></label>
                          <input
                            name={f.name}
                            value={form[f.name]}
                            onChange={handleChange}
                            required
                            type={f.type}
                            placeholder={f.placeholder}
                            style={inputStyle(f.name)}
                            onFocus={() => setFocusedField(f.name)}
                            onBlur={() => setFocusedField(null)}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Services */}
                    <div style={{ marginBottom: 16 }}>
                      <label style={labelStyle}>What do you need? <span style={{ color: 'var(--orange)' }}>*</span></label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                        {services.map(s => {
                          const sel = form.service === s.label;
                          return (
                            <motion.button
                              key={s.label}
                              type="button"
                              onClick={() => setForm(f => ({ ...f, service: s.label }))}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              style={{
                                padding: '6px 12px',
                                borderRadius: 10,
                                cursor: 'pointer',
                                border: '1.5px solid',
                                fontFamily: 'Inter, sans-serif',
                                borderColor: sel ? 'var(--orange)' : 'rgba(255,255,255,0.08)',
                                background: sel ? 'rgba(249,115,22,0.12)' : 'rgba(255,255,255,0.02)',
                                color: sel ? 'var(--orange)' : 'var(--text3)',
                                fontSize: 12,
                                fontWeight: 600,
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 5,
                                boxShadow: sel ? '0 0 16px rgba(249,115,22,0.08)' : 'none',
                              }}
                            >
                              <span style={{ fontSize: 12 }}>{s.icon}</span>
                              {s.label}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle}>Project Details <span style={{ color: 'var(--orange)' }}>*</span></label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Describe your project, timeline, and requirements..."
                        rows={4}
                        style={{
                          ...inputStyle('message'),
                          resize: 'vertical',
                          minHeight: 100,
                          lineHeight: 1.6,
                        }}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={{ scale: 1.015, boxShadow: '0 6px 32px rgba(249,115,22,0.25)' }}
                      whileTap={{ scale: 0.985 }}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        fontSize: 14,
                        fontWeight: 700,
                        padding: '14px 24px',
                        borderRadius: 14,
                        border: 'none',
                        cursor: status === 'loading' ? 'wait' : 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        background: 'linear-gradient(135deg, var(--orange), var(--orange2))',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(249,115,22,0.18)',
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                        animation: 'shimmer 3s infinite',
                      }} />
                      {status === 'loading' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}
                          />
                          Sending...
                        </>
                      ) : (
                        <><FiSend size={15} /> Send Message</>
                      )}
                    </motion.button>

                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          style={{
                            marginTop: 12,
                            padding: '10px 14px',
                            borderRadius: 10,
                            background: 'rgba(239,68,68,0.08)',
                            border: '1px solid rgba(239,68,68,0.2)',
                            fontSize: 12,
                            color: '#EF4444',
                          }}
                        >
                          ⚠️ Something went wrong. Email us at hello@anvawebsolutions.com
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--text3)', marginTop: 14 }}>
                      🔒 Your info is secure and never shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer { 0% { left: -100%; } 100% { left: 200%; } }
        @media(max-width:860px) { .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        @media(max-width:560px) { .contact-grid form > div:nth-child(2) { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
