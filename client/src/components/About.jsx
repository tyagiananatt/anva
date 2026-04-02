// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { FiArrowRight, FiCheck } from 'react-icons/fi';
// import { Link } from 'react-scroll';

// const TEAM = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85';
// const APP = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80';

// export default function About() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

//   return (
//     <section id="about" className="section" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
//       <div className="orange-glow" style={{ width: 500, height: 500, top: '20%', left: '-10%' }} />

//       <div className="container" ref={ref}>
//         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">
//           {/* Left images */}
//           <motion.div initial={{ opacity: 0, x: -36 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'relative' }}>
//             <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3', border: '1px solid var(--border)', boxShadow: '0 0 60px rgba(249,115,22,0.08)' }}>
//               <img src={TEAM} alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
//               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, transparent 60%)', borderRadius: 20 }} />
//             </div>

//             <motion.div animate={{ y: [0,-10,0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
//               style={{ position: 'absolute', bottom: -24, right: -24, width: 170, height: 130, borderRadius: 16, overflow: 'hidden', border: '2px solid var(--orange-border)', boxShadow: '0 12px 40px rgba(0,0,0,0.6)' }}>
//               <img src={APP} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
//             </motion.div>

//             {/* Stats */}
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 44 }}>
//               {[['200+','Projects Delivered','var(--orange)'],['50+','Happy Clients','#22C55E'],['99%','On-Time Delivery','#60A5FA'],['5.0★','Average Rating','#F59E0B)']].map(([n,l,c])=>(
//                 <div key={l} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px', textAlign: 'center' }}>
//                   <div style={{ fontWeight: 900, fontSize: '1.5rem', color: c, letterSpacing: '-0.02em' }}>{n}</div>
//                   <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 4 }}>{l}</div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right */}
//           <motion.div initial={{ opacity: 0, x: 36 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
//             <div className="pill" style={{ marginBottom: 24 }}>About Vaan Tech</div>
//             <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: 24 }}>
//               Your Trusted<br /><span style={{ color: 'var(--orange)' }}>Digital Partner</span>
//             </h2>
//             <p style={{ color: 'var(--text2)', lineHeight: 1.85, marginBottom: 20, fontSize: '1.05rem' }}>
//               Vaan Tech was built on a simple belief: every business deserves a great online presence, regardless of how technical they are.
//             </p>
//             <p style={{ color: 'var(--text2)', lineHeight: 1.85, marginBottom: 36, fontSize: '1.05rem' }}>
//               We work with founders, shop owners, clinics, agencies, and enterprises — anyone who wants a digital presence that actually works and drives real business results.
//             </p>

//             <div style={{ marginBottom: 40 }}>
//               {['Expert team of developers & designers','Agile delivery with weekly updates','You own all code, domain & data','Post-launch support included'].map((p, i) => (
//                 <motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.08 }}
//                   style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
//                   <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(249,115,22,0.15)', border: '1px solid var(--orange-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                     <FiCheck size={12} color="var(--orange)" />
//                   </div>
//                   <span style={{ fontSize: 15, color: 'var(--text2)', fontWeight: 500 }}>{p}</span>
//                 </motion.div>
//               ))}
//             </div>

//             <Link to="contact" smooth duration={600} offset={-68}>
//               <motion.button className="btn btn-orange" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
//                 Work With Us <FiArrowRight />
//               </motion.button>
//             </Link>
//           </motion.div>
//         </div>
//       </div>

//       <style>{`@media(max-width:860px){.about-grid{grid-template-columns:1fr!important;gap:60px!important}}`}</style>
//     </section>
//   );
// }

import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';

const TEAM = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85';
const APP = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80';
const WORK = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80';

const words = ['Digital Partner', 'Growth Engine', 'Tech Backbone'];

const journey = [
  { year: '2020', text: 'Started with 2 developers and a dream to make tech accessible', color: 'var(--orange)' },
  { year: '2022', text: 'Crossed 100 projects — from startups to enterprise clients', color: '#22C55E' },
  { year: '2024', text: 'Team of 25+ experts delivering globally with 99% on-time record', color: '#60A5FA' },
  { year: 'Now', text: 'Building the future — AI-powered solutions and beyond', color: 'var(--orange)' },
];

// Premium SVG icons
const IconKey = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7.5" cy="15.5" r="5.5"/><path d="M21 2l-9.6 9.6"/><path d="M15.5 7.5l3 3L21 8l-3-3"/>
  </svg>
);
const IconRefresh = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
  </svg>
);
const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const values = [
  { title: 'You Own Everything', desc: "Code, domain, data — it's all yours. No lock-in, ever.", Icon: IconKey, color: 'var(--orange)' },
  { title: 'Weekly Updates', desc: 'Agile delivery with demos every week so you\'re always in the loop.', Icon: IconRefresh, color: '#60A5FA' },
  { title: 'Built to Perform', desc: "We don't just design pretty — we engineer fast, scalable products.", Icon: IconZap, color: '#F59E0B' },
  { title: 'Support Included', desc: "Post-launch support comes standard. We don't disappear after delivery.", Icon: IconShield, color: '#22C55E' },
];

// Bubble
const Bubble = ({ size, left, delay, duration, color }) => (
  <motion.div
    style={{
      position: 'absolute', bottom: -30, width: size, height: size, left: `${left}%`,
      borderRadius: '50%', background: color || 'rgba(249,115,22,0.05)',
      border: `1px solid ${color ? color.replace('0.05', '0.08') : 'rgba(249,115,22,0.07)'}`,
      backdropFilter: 'blur(2px)', pointerEvents: 'none',
    }}
    initial={{ y: '110vh', opacity: 0, scale: 0.3 }}
    animate={{ y: '-10vh', opacity: [0, 0.7, 0.7, 0], scale: [0.3, 1, 1, 0.5] }}
    transition={{ duration: duration || 16, delay: delay || 0, repeat: Infinity, ease: 'linear' }}
  />
);

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });
  const [wordIndex, setWordIndex] = useState(0);
  const [activeJourney, setActiveJourney] = useState(0);
  const [hoveredValue, setHoveredValue] = useState(null);
  const imageRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-150, 150], [5, -5]);
  const rotateY = useTransform(mouseX, [-150, 150], [-5, 5]);

  useEffect(() => {
    const interval = setInterval(() => setWordIndex(prev => (prev + 1) % words.length), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setActiveJourney(prev => (prev + 1) % journey.length), 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="section" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div className="orange-glow" style={{ width: 600, height: 600, top: '10%', left: '-8%' }} />
      <div className="orange-glow" style={{ width: 400, height: 400, bottom: '5%', right: '-5%', opacity: 0.12 }} />

      {/* Bubbles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <Bubble size={10} left={6} delay={0} duration={18} />
        <Bubble size={16} left={20} delay={3} duration={20} color="rgba(96,165,250,0.04)" />
        <Bubble size={7} left={35} delay={6} duration={15} />
        <Bubble size={20} left={50} delay={1} duration={22} color="rgba(249,115,22,0.04)" />
        <Bubble size={9} left={65} delay={8} duration={16} />
        <Bubble size={14} left={78} delay={2} duration={19} color="rgba(34,197,94,0.04)" />
        <Bubble size={6} left={90} delay={10} duration={14} />
        <Bubble size={12} left={42} delay={5} duration={17} />
      </div>

      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>

        {/* ===== TOP: Hero-style intro ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="ab-header"
        >
          <div className="pill" style={{ margin: '0 auto 24px' }}>About Vaan Tech</div>
          <h2 className="ab-title">
            Your Trusted<br />
            <span className="ab-word-wrap">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  className="ab-word"
                  initial={{ y: 40, opacity: 0, rotateX: 45 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -40, opacity: 0, rotateX: -45 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
        </motion.div>

        {/* ===== MAIN: Two column cinematic layout ===== */}
        <div className="ab-main">

          {/* LEFT: 3D Tilt Image + Journey Timeline */}
          <motion.div
            className="ab-left"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* 3D Tilt image */}
            <motion.div
              ref={imageRef}
              className="ab-image-3d"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
            >
              <div className="ab-image-inner">
                <img src={TEAM} alt="Our Team" />
                <div className="ab-image-shine" />
                <div className="ab-image-border-glow" />

                {/* Floating glass info */}
                <motion.div
                  className="ab-glass-tag ab-glass-1"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="ab-glass-emoji">🚀</span>
                  <span>Shipping daily</span>
                </motion.div>

                <motion.div
                  className="ab-glass-tag ab-glass-2"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                >
                  <span className="ab-glass-emoji">💡</span>
                  <span>25+ Experts</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Small preview images */}
            <div className="ab-previews">
              <motion.div
                className="ab-preview"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.04 }}
              >
                <img src={APP} alt="" />
                <div className="ab-preview-overlay" />
              </motion.div>
              <motion.div
                className="ab-preview"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.04 }}
              >
                <img src={WORK} alt="" />
                <div className="ab-preview-overlay" />
              </motion.div>
            </div>

            {/* Journey Timeline */}
            <motion.div
              className="ab-journey"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="ab-journey-track">
                {journey.map((j, i) => (
                  <button
                    key={i}
                    className={`ab-journey-dot ${activeJourney === i ? 'ab-jd-active' : ''}`}
                    onClick={() => setActiveJourney(i)}
                    style={{
                      '--jcolor': j.color,
                      left: `${(i / (journey.length - 1)) * 100}%`,
                    }}
                  >
                    <motion.div
                      className="ab-jd-ring"
                      animate={activeJourney === i ? { scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="ab-jd-year">{j.year}</span>
                  </button>
                ))}

                {/* Progress line */}
                <motion.div
                  className="ab-journey-fill"
                  animate={{ width: `${(activeJourney / (journey.length - 1)) * 100}%` }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Journey text */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeJourney}
                  className="ab-journey-text"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  style={{ color: journey[activeJourney].color }}
                >
                  <span className="ab-jt-year">{journey[activeJourney].year}</span>
                  {journey[activeJourney].text}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content + Interactive value cards */}
          <motion.div
            className="ab-right"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Quote */}
            <div className="ab-quote-block">
              <div className="ab-quote-line" />
              <div>
                <p className="ab-quote-text">
                  Every business deserves a great online presence — regardless of how technical they are.
                </p>
                <p className="ab-quote-sub">
                  We work with founders, shop owners, clinics, agencies, and enterprises — anyone who wants a digital presence that actually works and drives real results.
                </p>
              </div>
            </div>

            {/* Interactive value cards — hover to reveal */}
            <div className="ab-values">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  className={`ab-value-card ${hoveredValue === i ? 'ab-vc-active' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                  whileHover={{ x: 6 }}
                >
                  <div className="ab-vc-left">
                    <motion.div
                      className="ab-vc-icon"
                      style={{ color: v.color }}
                      animate={hoveredValue === i ? { scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.45, ease: 'easeInOut' }}
                    >
                      <v.Icon />
                    </motion.div>
                    <div className="ab-vc-connector" />
                  </div>
                  <div className="ab-vc-content">
                    <h4 className="ab-vc-title">{v.title}</h4>
                    <AnimatePresence initial={false}>
                      {hoveredValue === i && (
                        <motion.p
                          className="ab-vc-desc"
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: 6 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          {v.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <motion.div
                    className="ab-vc-arrow"
                    animate={{ x: hoveredValue === i ? 0 : -8, opacity: hoveredValue === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiArrowRight size={14} />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Inline proof strip */}
            <motion.div
              className="ab-proof"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="ab-proof-item">
                <span className="ab-proof-num">200+</span>
                <span className="ab-proof-label">projects</span>
              </div>
              <div className="ab-proof-divider" />
              <div className="ab-proof-item">
                <span className="ab-proof-num">50+</span>
                <span className="ab-proof-label">clients</span>
              </div>
              <div className="ab-proof-divider" />
              <div className="ab-proof-item">
                <span className="ab-proof-num">99%</span>
                <span className="ab-proof-label">on-time</span>
              </div>
              <div className="ab-proof-divider" />
              <div className="ab-proof-item">
                <span className="ab-proof-num">5.0</span>
                <span className="ab-proof-label">rating</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="ab-cta"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <Link to="contact" smooth duration={600} offset={-68}>
                <motion.button className="btn btn-orange" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  Work With Us <FiArrowRight />
                </motion.button>
              </Link>
              <Link to="work" smooth duration={600} offset={-68}>
                <motion.button className="ab-ghost-btn" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  See Our Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* ========== HEADER ========== */
        .ab-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .ab-title {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          line-height: 1.15;
          max-width: 500px;
          margin: 0 auto;
        }
        .ab-word-wrap {
          display: inline-block;
          height: 1.25em;
          overflow: hidden;
          vertical-align: bottom;
          perspective: 400px;
        }
        .ab-word {
          display: inline-block;
          color: var(--orange);
        }

        /* ========== MAIN LAYOUT ========== */
        .ab-main {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 64px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ========== LEFT SIDE ========== */
        .ab-left { position: relative; }

        /* 3D Image */
        .ab-image-3d {
          cursor: default;
          border-radius: 22px;
          will-change: transform;
        }
        .ab-image-inner {
          border-radius: 22px;
          overflow: hidden;
          aspect-ratio: 4/3;
          position: relative;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .ab-image-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          transition: opacity 0.6s ease;
        }
        .ab-image-3d:hover .ab-image-inner img {
          opacity: 0.85;
        }
        .ab-image-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(249,115,22,0.08) 0%, transparent 40%, rgba(255,255,255,0.02) 60%, transparent 100%);
          pointer-events: none;
        }
        .ab-image-border-glow {
          position: absolute;
          inset: -1px;
          border-radius: 22px;
          border: 1px solid transparent;
          background: linear-gradient(135deg, rgba(249,115,22,0.2), transparent, transparent, rgba(249,115,22,0.1)) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .ab-image-3d:hover .ab-image-border-glow {
          opacity: 1;
        }

        /* Glass floating tags */
        .ab-glass-tag {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50px;
          padding: 8px 16px 8px 10px;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          z-index: 3;
        }
        .ab-glass-emoji {
          font-size: 16px;
        }
        .ab-glass-1 { top: 18px; right: 18px; }
        .ab-glass-2 { bottom: 18px; left: 18px; }

        /* Previews */
        .ab-previews {
          display: flex;
          gap: 10px;
          margin-top: 12px;
        }
        .ab-preview {
          flex: 1;
          height: 90px;
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
        }
        .ab-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.45;
          transition: all 0.5s ease;
        }
        .ab-preview:hover img {
          opacity: 0.65;
        }
        .ab-preview-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%);
        }

        /* ========== JOURNEY TIMELINE ========== */
        .ab-journey {
          margin-top: 28px;
          background: var(--card, #111);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 28px 24px 22px;
        }
        .ab-journey-track {
          position: relative;
          height: 3px;
          background: rgba(255,255,255,0.06);
          border-radius: 3px;
          margin: 0 20px 24px;
        }
        .ab-journey-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: var(--orange);
          border-radius: 3px;
          z-index: 1;
        }
        .ab-journey-dot {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--bg2, #0a0a0a);
          border: 2px solid rgba(255,255,255,0.15);
          cursor: pointer;
          z-index: 2;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          font-family: inherit;
        }
        .ab-jd-active {
          border-color: var(--jcolor) !important;
          background: var(--jcolor) !important;
          box-shadow: 0 0 16px color-mix(in srgb, var(--jcolor) 40%, transparent);
        }
        .ab-jd-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid var(--jcolor);
          pointer-events: none;
        }
        .ab-jd-year {
          position: absolute;
          top: -22px;
          font-size: 10px;
          font-weight: 700;
          color: rgba(255,255,255,0.35);
          white-space: nowrap;
          transition: color 0.3s ease;
          letter-spacing: 0.5px;
        }
        .ab-jd-active .ab-jd-year {
          color: rgba(255,255,255,0.8);
        }
        .ab-journey-text {
          font-size: 13.5px;
          line-height: 1.7;
          font-weight: 500;
          min-height: 46px;
        }
        .ab-jt-year {
          font-weight: 800;
          margin-right: 6px;
          font-size: 12px;
          opacity: 0.6;
        }

        /* ========== RIGHT SIDE ========== */
        .ab-right {
          padding-top: 4px;
        }

        /* Quote */
        .ab-quote-block {
          display: flex;
          gap: 20px;
          margin-bottom: 32px;
        }
        .ab-quote-line {
          width: 3px;
          min-width: 3px;
          border-radius: 3px;
          background: linear-gradient(to bottom, var(--orange), rgba(249,115,22,0.1));
          flex-shrink: 0;
        }
        .ab-quote-text {
          font-size: 1.15rem;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
          line-height: 1.7;
          margin-bottom: 12px;
          font-style: italic;
        }
        .ab-quote-sub {
          font-size: 14.5px;
          color: var(--text2);
          line-height: 1.8;
        }

        /* ========== VALUE CARDS ========== */
        .ab-values {
          margin-bottom: 28px;
        }
        .ab-value-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 14px 16px;
          border-radius: 12px;
          cursor: pointer;
          position: relative;
          transition: background 0.3s ease;
        }
        .ab-value-card:hover, .ab-vc-active {
          background: rgba(255,255,255,0.02);
        }
        .ab-vc-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          padding-top: 2px;
        }
        .ab-vc-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .ab-vc-active .ab-vc-icon,
        .ab-value-card:hover .ab-vc-icon {
          background: rgba(249,115,22,0.08);
          border-color: rgba(249,115,22,0.2);
          box-shadow: 0 0 16px rgba(249,115,22,0.12);
        }
        .ab-vc-connector {
          width: 1px;
          flex: 1;
          min-height: 12px;
          background: rgba(255,255,255,0.06);
          margin-top: 6px;
        }
        .ab-value-card:last-child .ab-vc-connector {
          display: none;
        }
        .ab-vc-content {
          flex: 1;
          min-width: 0;
        }
        .ab-vc-title {
          font-size: 14.5px;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          margin: 0;
          line-height: 1.4;
        }
        .ab-vc-desc {
          font-size: 13px;
          color: var(--text2);
          line-height: 1.7;
          margin-top: 4px;
          overflow: hidden;
        }
        .ab-vc-arrow {
          color: var(--orange);
          margin-top: 3px;
          flex-shrink: 0;
        }

        /* ========== PROOF STRIP ========== */
        .ab-proof {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          background: var(--card, #111);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 14px;
          padding: 18px 8px;
          margin-bottom: 28px;
        }
        .ab-proof-item {
          flex: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ab-proof-num {
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--orange);
          letter-spacing: -0.02em;
          line-height: 1.3;
        }
        .ab-proof-label {
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          text-transform: lowercase;
          letter-spacing: 0.3px;
        }
        .ab-proof-divider {
          width: 1px;
          height: 28px;
          background: rgba(255,255,255,0.06);
          flex-shrink: 0;
        }

        /* ========== CTA ========== */
        .ab-cta {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .ab-ghost-btn {
          padding: 13px 28px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: rgba(255,255,255,0.65);
          font-size: 14.5px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .ab-ghost-btn:hover {
          border-color: var(--orange);
          color: var(--orange);
          background: rgba(249,115,22,0.05);
        }

        /* ========== RESPONSIVE — TABLET ========== */
        @media (max-width: 960px) {
          .ab-main {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
          .ab-glass-1 { top: 12px; right: 12px; }
          .ab-glass-2 { bottom: 12px; left: 12px; }
          .ab-proof {
            gap: 0;
          }
        }

        /* ========== RESPONSIVE — MOBILE ========== */
        @media (max-width: 640px) {
          .ab-header { margin-bottom: 44px; }
          .ab-main { gap: 32px !important; }

          .ab-glass-tag {
            padding: 6px 12px 6px 8px;
            font-size: 11px;
            gap: 6px;
          }
          .ab-glass-emoji { font-size: 14px; }
          .ab-glass-1 { top: 10px; right: 10px; }
          .ab-glass-2 { bottom: 10px; left: 10px; }

          .ab-previews { gap: 8px; }
          .ab-preview { height: 75px; border-radius: 10px; }

          .ab-journey { padding: 22px 18px 18px; margin-top: 20px; }
          .ab-journey-track { margin: 0 14px 22px; }
          .ab-jd-year { font-size: 9px; top: -18px; }
          .ab-journey-text { font-size: 12.5px; min-height: 40px; }

          .ab-quote-block { gap: 14px; margin-bottom: 24px; }
          .ab-quote-text { font-size: 1rem; }
          .ab-quote-sub { font-size: 13.5px; }

          .ab-value-card { padding: 12px 12px; gap: 12px; }
          .ab-vc-icon { width: 30px; height: 30px; border-radius: 8px; }
          .ab-vc-icon svg { width: 16px; height: 16px; }
          .ab-vc-title { font-size: 13.5px; }
          .ab-vc-desc { font-size: 12px; }

          .ab-proof { padding: 14px 4px; border-radius: 12px; }
          .ab-proof-num { font-size: 1.05rem; }
          .ab-proof-label { font-size: 10px; }
          .ab-proof-divider { height: 22px; }

          .ab-cta { flex-direction: column; }
          .ab-cta .btn, .ab-ghost-btn {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
        }

        /* ========== VERY SMALL ========== */
        @media (max-width: 380px) {
          .ab-glass-tag { display: none; }
          .ab-preview { height: 65px; }
          .ab-journey-dot { width: 12px; height: 12px; }
          .ab-journey-track { margin: 0 10px 20px; }
        }
      `}</style>
    </section>
  );
}