// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const avatars = [
//   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
//   'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
//   'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
//   'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
//   'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80',
// ];

// const testimonials = [
//   { quote: "Our team works in a fast-moving environment, and priorities change all the time. ANVA web solutions keeps everyone aligned by delivering exactly what we need, when we need it.", name: 'Noah', role: 'Operations Manager', avatar: 0 },
//   { quote: "Workload feels more balanced across the team, and we spend less time re-planning. The website they built handles everything automatically.", name: 'Ridho', role: 'Team Lead', avatar: 1 },
//   { quote: "What surprised me most is how much mental energy I used to spend on planning. With ANVA web solutions handling the digital side, I can move straight into execution.", name: 'Edward', role: 'Corporate Director', avatar: 2 },
//   { quote: "The AI now handles that part for me by organizing tasks and highlighting real priorities. ANVA web solutions built exactly what we needed.", name: 'Sarah', role: 'Product Manager', avatar: 3 },
//   { quote: "I had no idea what I needed — just that my old website was embarrassing. ANVA web solutions walked me through everything and delivered something I'm genuinely proud to show people.", name: 'Priya', role: 'Founder, ClearCare', avatar: 4 },
// ];

// export default function Testimonials() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

//   return (
//     <section id="testimonials" className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
//       <div className="orange-glow" style={{ width: 600, height: 600, top: '10%', left: '50%', transform: 'translateX(-50%)' }} />

//       <div className="container" ref={ref}>
//         <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
//           <div className="pill" style={{ margin: '0 auto 24px' }}>Proven by Real Results</div>
//           <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', maxWidth: 560, margin: '0 auto 20px' }}>
//             Trusted By Teams<br />
//             <span style={{ color: 'var(--text2)' }}>Who Value Focus</span>
//           </h2>
//           <p style={{ color: 'var(--text2)', maxWidth: 520, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
//             From solo professionals to growing teams, people rely on ANVA web solutions to stay organized, focused, and productive.
//           </p>
//         </motion.div>

//         <div style={{ columns: 3, columnGap: 20 }} className="testi-cols">
//           {testimonials.map((t, i) => (
//             <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.09, duration: 0.6 }}
//               className="card-base" style={{ padding: '24px', marginBottom: 20, breakInside: 'avoid', cursor: 'default' }}
//               whileHover={{ y: -3 }}>
//               <p style={{ color: 'var(--text2)', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>"{t.quote}"</p>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                 <img src={avatars[t.avatar]} alt={t.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(249,115,22,0.3)' }} />
//                 <div>
//                   <div style={{ fontWeight: 700, fontSize: 14, color: 'white' }}>{t.name}</div>
//                   <div style={{ color: 'var(--text3)', fontSize: 13 }}>{t.role}</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @media(max-width:900px){.testi-cols{columns:2!important}}
//         @media(max-width:560px){.testi-cols{columns:1!important}}
//       `}</style>
//     </section>
//   );
// }

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';

const avatars = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80',
];

const testimonials = [
  {
    quote: "Our team works in a fast-moving environment, and priorities change all the time. ANVA web solutions keeps everyone aligned by delivering exactly what we need, when we need it.",
    name: 'Noah',
    role: 'Operations Manager',
    company: 'ScaleUp Inc.',
    avatar: 0,
    rating: 5,
    color: '#F97316',
  },
  {
    quote: "Workload feels more balanced across the team, and we spend less time re-planning. The website they built handles everything automatically.",
    name: 'Ridho',
    role: 'Team Lead',
    company: 'Flowline',
    avatar: 1,
    rating: 5,
    color: '#60A5FA',
  },
  {
    quote: "What surprised me most is how much mental energy I used to spend on planning. With ANVA web solutions handling the digital side, I can move straight into execution.",
    name: 'Edward',
    role: 'Corporate Director',
    company: 'NovaCorp',
    avatar: 2,
    rating: 5,
    color: '#22C55E',
  },
  {
    quote: "The system now handles that part for me by organizing tasks and highlighting real priorities. ANVA web solutions built exactly what we needed.",
    name: 'Sarah',
    role: 'Product Manager',
    company: 'Telepath',
    avatar: 3,
    rating: 5,
    color: '#A78BFA',
  },
  {
    quote: "I had no idea what I needed — just that my old website was embarrassing. ANVA web solutions walked me through everything and delivered something I'm genuinely proud to show people.",
    name: 'Priya',
    role: 'Founder',
    company: 'ClearCare',
    avatar: 4,
    rating: 5,
    color: '#F97316',
  },
];

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : '249,115,22';
}

// Bubble
const Bubble = ({ size, left, delay, duration, color }) => (
  <motion.div
    style={{
      position: 'absolute', bottom: -20, width: size, height: size,
      left: `${left}%`, borderRadius: '50%',
      background: color || 'rgba(249,115,22,0.05)',
      border: `1px solid ${color ? color.replace('0.05', '0.08') : 'rgba(249,115,22,0.07)'}`,
      backdropFilter: 'blur(2px)', pointerEvents: 'none',
    }}
    initial={{ y: '110vh', opacity: 0, scale: 0.3 }}
    animate={{ y: '-10vh', opacity: [0, 0.7, 0.7, 0], scale: [0.3, 1, 1, 0.5] }}
    transition={{ duration: duration || 16, delay: delay || 0, repeat: Infinity, ease: 'linear' }}
  />
);

// Star rating
const Stars = ({ count, color }) => (
  <div style={{ display: 'flex', gap: 2 }}>
    {[...Array(count)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={color} stroke="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });
  const [featured, setFeatured] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const featuredRef = useRef(featured);

  useEffect(() => { featuredRef.current = featured; }, [featured]);

  // Auto rotate featured
  useEffect(() => {
    const interval = setInterval(() => {
      setFeatured(prev => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [featured]);

  const ft = testimonials[featured];
  const ftRgb = hexToRgb(ft.color);

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="orange-glow" style={{ width: 600, height: 600, top: '10%', left: '50%', transform: 'translateX(-50%)', opacity: 0.25 }} />

      {/* Bubbles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <Bubble size={10} left={6} delay={0} duration={17} />
        <Bubble size={15} left={20} delay={3} duration={20} color="rgba(96,165,250,0.04)" />
        <Bubble size={8} left={35} delay={6} duration={14} />
        <Bubble size={18} left={52} delay={1.5} duration={21} color="rgba(249,115,22,0.04)" />
        <Bubble size={7} left={68} delay={8} duration={15} />
        <Bubble size={12} left={82} delay={4} duration={18} color="rgba(34,197,94,0.04)" />
        <Bubble size={9} left={92} delay={10} duration={16} />
      </div>

      <div className="tm-container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="pill" style={{ margin: '0 auto 24px' }}>Proven by Real Results</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', maxWidth: 560, margin: '0 auto 20px' }}>
            Trusted By Teams<br />
            <span style={{ color: 'var(--text2)' }}>Who Value Focus</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 520, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
            From solo professionals to growing teams, people rely on ANVA web solutions to stay organized, focused, and productive.
          </p>
        </motion.div>

        {/* ===== FEATURED TESTIMONIAL ===== */}
        <motion.div
          className="tm-featured"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={featured}
              className="tm-featured-inner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Left: quote */}
              <div className="tm-f-left">
                <div className="tm-f-quote-mark" style={{ color: `rgba(${ftRgb}, 0.12)` }}>"</div>

                <Stars count={ft.rating} color={ft.color} />

                <motion.p
                  className="tm-f-quote"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  {ft.quote}
                </motion.p>

                {/* Author */}
                <motion.div
                  className="tm-f-author"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <div className="tm-f-avatar-wrap">
                    <img src={avatars[ft.avatar]} alt={ft.name} className="tm-f-avatar" />
                    <div className="tm-f-avatar-ring" style={{ borderColor: ft.color }} />
                  </div>
                  <div>
                    <div className="tm-f-name">{ft.name}</div>
                    <div className="tm-f-role">{ft.role} <span style={{ color: ft.color }}>@ {ft.company}</span></div>
                  </div>
                </motion.div>
              </div>

              {/* Right: avatar circles selector */}
              <div className="tm-f-right">
                <div className="tm-f-selector">
                  {testimonials.map((t, i) => {
                    const isActive = featured === i;
                    return (
                      <motion.button
                        key={i}
                        className={`tm-f-dot ${isActive ? 'tm-f-dot-active' : ''}`}
                        onClick={() => setFeatured(i)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          borderColor: isActive ? t.color : 'rgba(255,255,255,0.1)',
                          boxShadow: isActive ? `0 0 20px rgba(${hexToRgb(t.color)}, 0.25)` : 'none',
                        }}
                      >
                        <img src={avatars[t.avatar]} alt={t.name} />
                        {isActive && (
                          <motion.div
                            className="tm-f-dot-ring"
                            style={{ borderColor: t.color }}
                            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                          />
                        )}
                        {isActive && (
                          <svg className="tm-f-progress-ring" viewBox="0 0 60 60">
                            <circle cx="30" cy="30" r="27" fill="none" stroke={`rgba(${hexToRgb(t.color)}, 0.1)`} strokeWidth="2"/>
                            <motion.circle
                              cx="30" cy="30" r="27" fill="none" stroke={t.color} strokeWidth="2"
                              strokeLinecap="round" strokeDasharray={170}
                              initial={{ strokeDashoffset: 170 }}
                              animate={{ strokeDashoffset: 0 }}
                              transition={{ duration: 7, ease: 'linear' }}
                              transform="rotate(-90 30 30)"
                            />
                          </svg>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Name list */}
                <div className="tm-f-names">
                  {testimonials.map((t, i) => (
                    <motion.button
                      key={i}
                      className="tm-f-name-btn"
                      onClick={() => setFeatured(i)}
                      style={{
                        color: featured === i ? 'white' : 'rgba(255,255,255,0.3)',
                        borderColor: featured === i ? `rgba(${hexToRgb(t.color)}, 0.2)` : 'transparent',
                        background: featured === i ? `rgba(${hexToRgb(t.color)}, 0.05)` : 'transparent',
                      }}
                    >
                      <span className="tm-fn-name">{t.name}</span>
                      <span className="tm-fn-company" style={{ color: featured === i ? t.color : 'rgba(255,255,255,0.2)' }}>
                        {t.company}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ===== SCROLLING TESTIMONIAL STRIP ===== */}
        <motion.div
          className="tm-strip-section"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="tm-strip-label">
            <div className="tm-strip-line" />
            <span>More from our clients</span>
            <div className="tm-strip-line" />
          </div>

          <div className="tm-scroll-wrap">
            <motion.div
              className="tm-scroll-track"
              animate={{ x: [0, -1200] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map((t, i) => {
                const rgb = hexToRgb(t.color);
                const isHov = hoveredCard === i;
                return (
                  <motion.div
                    key={i}
                    className="tm-scroll-card"
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ y: -4 }}
                    style={{
                      borderColor: isHov ? `rgba(${rgb}, 0.2)` : 'rgba(255,255,255,0.06)',
                    }}
                  >
                    {/* Top glow */}
                    <motion.div
                      className="tm-sc-glow"
                      style={{ background: t.color }}
                      animate={{ opacity: isHov ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="tm-sc-top">
                      <Stars count={t.rating} color={t.color} />
                      <div className="tm-sc-quote-icon" style={{ color: `rgba(${rgb}, 0.2)` }}>"</div>
                    </div>

                    <p className="tm-sc-quote">"{t.quote}"</p>

                    <div className="tm-sc-author">
                      <div className="tm-sc-avatar-wrap">
                        <img src={avatars[t.avatar]} alt={t.name} className="tm-sc-avatar" />
                        <div className="tm-sc-avatar-dot" style={{ background: t.color }} />
                      </div>
                      <div>
                        <div className="tm-sc-name">{t.name}</div>
                        <div className="tm-sc-role">
                          {t.role} <span style={{ color: t.color }}>@ {t.company}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Fade edges */}
            <div className="tm-scroll-fade-left" />
            <div className="tm-scroll-fade-right" />
          </div>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          className="tm-trust"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <div className="tm-trust-item">
            <span className="tm-trust-num">50+</span>
            <span className="tm-trust-label">Happy Clients</span>
          </div>
          <div className="tm-trust-divider" />
          <div className="tm-trust-item">
            <span className="tm-trust-num">5.0</span>
            <span className="tm-trust-label">Avg Rating</span>
          </div>
          <div className="tm-trust-divider" />
          <div className="tm-trust-item">
            <span className="tm-trust-num">200+</span>
            <span className="tm-trust-label">Projects</span>
          </div>
          <div className="tm-trust-divider" />
          <div className="tm-trust-item">
            <div className="tm-trust-avatars">
              {avatars.slice(0, 4).map((a, i) => (
                <img key={i} src={a} alt="" className="tm-trust-av" style={{ marginLeft: i > 0 ? -8 : 0, zIndex: 4 - i }} />
              ))}
            </div>
            <span className="tm-trust-label">Trusted Team</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .tm-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
        }

        /* ========== FEATURED ========== */
        .tm-featured {
          background: var(--card, #111);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 48px;
        }

        .tm-featured-inner {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          min-height: 340px;
        }

        /* Left */
        .tm-f-left {
          padding: 40px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          border-right: 1px solid rgba(255,255,255,0.04);
        }

        .tm-f-quote-mark {
          font-size: 120px;
          font-weight: 900;
          font-family: Georgia, serif;
          position: absolute;
          top: 10px;
          left: 30px;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .tm-f-quote {
          font-size: 1.15rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.85;
          margin: 16px 0 28px;
          font-weight: 400;
          position: relative;
          z-index: 1;
          max-width: 520px;
        }

        .tm-f-author {
          display: flex;
          align-items: center;
          gap: 14px;
          position: relative;
          z-index: 1;
        }

        .tm-f-avatar-wrap {
          position: relative;
          width: 48px;
          height: 48px;
        }
        .tm-f-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
        .tm-f-avatar-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 2px solid;
          opacity: 0.4;
        }

        .tm-f-name {
          font-size: 15px;
          font-weight: 700;
          color: white;
        }
        .tm-f-role {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          font-weight: 500;
        }

        /* Right: selector */
        .tm-f-right {
          padding: 32px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 28px;
        }

        .tm-f-selector {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .tm-f-dot {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid;
          overflow: hidden;
          cursor: pointer;
          padding: 0;
          background: none;
          position: relative;
          transition: all 0.4s ease;
        }
        .tm-f-dot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .tm-f-dot-active img {
          opacity: 1;
        }
        .tm-f-dot:hover img {
          opacity: 0.8;
        }

        .tm-f-dot-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid;
          pointer-events: none;
        }

        .tm-f-progress-ring {
          position: absolute;
          inset: -5px;
          width: calc(100% + 10px);
          height: calc(100% + 10px);
          pointer-events: none;
        }

        .tm-f-names {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 100%;
        }

        .tm-f-name-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 14px;
          border-radius: 10px;
          border: 1px solid;
          background: none;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.3s ease;
          width: 100%;
        }
        .tm-f-name-btn:hover {
          background: rgba(255,255,255,0.02);
        }
        .tm-fn-name {
          font-size: 13px;
          font-weight: 600;
        }
        .tm-fn-company {
          font-size: 12px;
          font-weight: 500;
        }

        /* ========== SCROLLING STRIP ========== */
        .tm-strip-section {
          margin-bottom: 40px;
        }

        .tm-strip-label {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .tm-strip-label span {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.25);
          text-transform: uppercase;
          letter-spacing: 1px;
          white-space: nowrap;
        }
        .tm-strip-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.05);
        }

        .tm-scroll-wrap {
          position: relative;
          overflow: hidden;
        }

        .tm-scroll-track {
          display: flex;
          gap: 16px;
          width: max-content;
        }

        .tm-scroll-card {
          width: 340px;
          min-width: 340px;
          background: var(--card, #111);
          border: 1px solid;
          border-radius: 18px;
          padding: 24px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .tm-sc-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          z-index: 2;
          box-shadow: 0 0 20px currentColor;
        }

        .tm-sc-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }

        .tm-sc-quote-icon {
          font-size: 40px;
          font-weight: 900;
          font-family: Georgia, serif;
          line-height: 1;
        }

        .tm-sc-quote {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tm-sc-author {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
        }

        .tm-sc-avatar-wrap {
          position: relative;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
        }
        .tm-sc-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
        .tm-sc-avatar-dot {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid var(--card, #111);
        }

        .tm-sc-name {
          font-size: 13px;
          font-weight: 700;
          color: white;
        }
        .tm-sc-role {
          font-size: 11.5px;
          color: rgba(255,255,255,0.35);
          font-weight: 500;
        }

        /* Scroll fades */
        .tm-scroll-fade-left,
        .tm-scroll-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .tm-scroll-fade-left {
          left: 0;
          background: linear-gradient(to right, var(--bg, #0a0a0a), transparent);
        }
        .tm-scroll-fade-right {
          right: 0;
          background: linear-gradient(to left, var(--bg, #0a0a0a), transparent);
        }

        /* ========== TRUST BAR ========== */
        .tm-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          background: var(--card, #111);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 22px 16px;
        }

        .tm-trust-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-align: center;
        }
        .tm-trust-num {
          font-size: 22px;
          font-weight: 900;
          color: #F97316;
          letter-spacing: -0.02em;
        }
        .tm-trust-label {
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        .tm-trust-divider {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.06);
          flex-shrink: 0;
        }

        .tm-trust-avatars {
          display: flex;
          margin-bottom: 2px;
        }
        .tm-trust-av {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--card, #111);
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 960px) {
          .tm-featured-inner {
            grid-template-columns: 1fr !important;
          }
          .tm-f-left {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.04);
            padding: 32px 28px;
          }
          .tm-f-right {
            padding: 24px 28px;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 16px;
          }
          .tm-f-selector {
            gap: 8px;
          }
          .tm-f-dot {
            width: 44px;
            height: 44px;
          }
          .tm-f-names {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 6px;
          }
          .tm-f-name-btn {
            flex: none;
            width: auto;
            padding: 6px 12px;
          }
          .tm-fn-company { display: none; }
          .tm-f-quote-mark { font-size: 80px; left: 20px; top: 5px; }
        }

        @media (max-width: 640px) {
          .tm-container { padding: 0 16px; }
          .tm-f-left { padding: 28px 22px; }
          .tm-f-quote { font-size: 1rem; }
          .tm-f-quote-mark { font-size: 60px; left: 14px; }
          .tm-f-right { padding: 20px 22px; }
          .tm-f-dot { width: 38px; height: 38px; }
          .tm-f-selector { gap: 6px; }
          .tm-f-names { display: none; }

          .tm-scroll-card { width: 280px; min-width: 280px; padding: 20px; }
          .tm-sc-quote { font-size: 13px; -webkit-line-clamp: 3; }
          .tm-scroll-fade-left, .tm-scroll-fade-right { width: 40px; }

          .tm-trust { padding: 18px 10px; border-radius: 14px; }
          .tm-trust-num { font-size: 18px; }
          .tm-trust-label { font-size: 9px; }
          .tm-trust-av { width: 24px; height: 24px; }
          .tm-trust-divider { height: 24px; }
        }

        @media (max-width: 380px) {
          .tm-f-dot { width: 32px; height: 32px; }
          .tm-f-progress-ring { display: none; }
          .tm-f-dot-ring { display: none; }
          .tm-trust-avatars { display: none; }
          .tm-scroll-card { width: 250px; min-width: 250px; }
        }
      `}</style>
    </section>
  );
}
