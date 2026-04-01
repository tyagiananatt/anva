// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const steps = [
//   { num: '01', title: 'Free Discovery Call', desc: 'A 30-minute call to understand your business, goals, and what you need. No pressure, no sales pitch.', icon: '💬', color: 'var(--orange)' },
//   { num: '02', title: 'Proposal & Timeline', desc: 'A clear proposal with scope, cost, and timeline. Everything in plain English — no hidden fees.', icon: '📋', color: '#60A5FA' },
//   { num: '03', title: 'Design & Build', desc: 'We design and build with regular check-ins. You see progress every step of the way.', icon: '⚡', color: '#22C55E' },
//   { num: '04', title: 'Launch & Grow', desc: "You review, we refine. Once you're happy, we launch — and stay available for ongoing support.", icon: '🚀', color: 'var(--orange)' },
// ];

// export default function Process() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

//   return (
//     <section id="process" className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
//       <div className="orange-glow" style={{ width: 500, height: 500, bottom: '-10%', right: '-10%' }} />

//       <div className="container" ref={ref}>
//         <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 72 }}>
//           <div className="pill" style={{ margin: '0 auto 24px' }}>How It Works</div>
//           <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', maxWidth: 520, margin: '0 auto 20px' }}>
//             Simple Process,<br /><span style={{ color: 'var(--text2)' }}>Zero Stress</span>
//           </h2>
//           <p style={{ color: 'var(--text2)', maxWidth: 480, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
//             We've made working with us as easy as possible — even if you've never hired a web agency before.
//           </p>
//         </motion.div>

//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, position: 'relative' }} className="steps-grid">
//           <div style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 1, background: 'linear-gradient(90deg, var(--orange), rgba(249,115,22,0.2))', opacity: 0.4, zIndex: 0 }} className="step-line" />

//           {steps.map((step, i) => (
//             <motion.div key={i} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//               style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
//               <div style={{ width: 72, height: 72, borderRadius: '50%', background: `${step.color === 'var(--orange)' ? 'rgba(249,115,22,0.12)' : 'rgba(96,165,250,0.1)'}`, border: `1px solid ${step.color === 'var(--orange)' ? 'rgba(249,115,22,0.3)' : 'rgba(96,165,250,0.2)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 28, boxShadow: step.color === 'var(--orange)' ? '0 0 24px rgba(249,115,22,0.15)' : 'none' }}>
//                 {step.icon}
//               </div>
//               <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.08em', marginBottom: 10, textTransform: 'uppercase' }}>Step {step.num}</div>
//               <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 10, color: 'white' }}>{step.title}</h3>
//               <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.75 }}>{step.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @media(max-width:860px){.steps-grid{grid-template-columns:repeat(2,1fr)!important}.step-line{display:none}}
//         @media(max-width:500px){.steps-grid{grid-template-columns:1fr!important}}
//       `}</style>
//     </section>
//   );
// }

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Free Discovery Call',
    desc: 'A 30-minute call to understand your business, goals, and what you need. No pressure, no sales pitch.',
    detail: 'We listen first. Tell us your vision, your pain points, and where you want to be — we\'ll map the best path forward.',
    color: '#F97316',
    visual: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
    tags: ['30 min call', 'No obligation', 'Free consultation'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Proposal & Timeline',
    desc: 'A clear proposal with scope, cost, and timeline. Everything in plain English — no hidden fees.',
    detail: 'You\'ll receive a detailed breakdown of deliverables, milestones, and pricing within 48 hours.',
    color: '#60A5FA',
    visual: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    tags: ['48hr delivery', 'Fixed pricing', 'Clear milestones'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Design & Build',
    desc: 'We design and build with regular check-ins. You see progress every step of the way.',
    detail: 'Weekly demos, unlimited revisions during build phase, and a dedicated project manager keeping everything on track.',
    color: '#22C55E',
    visual: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
    tags: ['Weekly demos', 'Unlimited revisions', 'Agile sprints'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Launch & Grow',
    desc: "You review, we refine. Once you're happy, we launch — and stay available for ongoing support.",
    detail: 'Post-launch support, performance monitoring, and growth strategy included. We don\'t disappear after delivery.',
    color: '#F97316',
    visual: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    tags: ['Go live', 'Monitoring', 'Growth support'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
  },
];

// Helper: hex to rgb values
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : '249,115,22';
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

export default function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const activeRef = useRef(active);
  const progressRef = useRef(progress);

  // Keep refs in sync
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  // Reset progress when active changes
  useEffect(() => {
    setProgress(0);
  }, [active]);

  // Single interval that runs forever
  useEffect(() => {
    const interval = setInterval(() => {
      const currentProgress = progressRef.current;
      const nextProgress = currentProgress + 0.5; // 0.5% per tick

      if (nextProgress >= 100) {
        const currentActive = activeRef.current;
        const nextActive = (currentActive + 1) % steps.length;
        setActive(nextActive);
        // progress will be reset by the useEffect above
      } else {
        setProgress(nextProgress);
      }
    }, 30); // 30ms × 200 ticks = 6 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (i) => {
    setActive(i);
  };

  const currentStep = steps[active];
  const currentRgb = hexToRgb(currentStep.color);

  return (
    <section id="process" className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="orange-glow" style={{ width: 600, height: 600, bottom: '-10%', right: '-10%' }} />
      <div className="orange-glow" style={{ width: 400, height: 400, top: '-5%', left: '-5%', opacity: 0.12 }} />

      {/* Bubbles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <Bubble size={10} left={5} delay={0} duration={17} />
        <Bubble size={15} left={18} delay={3} duration={20} color="rgba(96,165,250,0.04)" />
        <Bubble size={8} left={32} delay={6} duration={14} />
        <Bubble size={18} left={48} delay={1.5} duration={21} color="rgba(249,115,22,0.04)" />
        <Bubble size={7} left={62} delay={8} duration={15} />
        <Bubble size={12} left={75} delay={2.5} duration={18} color="rgba(34,197,94,0.04)" />
        <Bubble size={9} left={88} delay={5} duration={16} />
        <Bubble size={14} left={40} delay={10} duration={19} />
      </div>

      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <div className="pill" style={{ margin: '0 auto 24px' }}>How It Works</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', maxWidth: 520, margin: '0 auto 20px' }}>
            Simple Process,<br /><span style={{ color: 'var(--text2)' }}>Zero Stress</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 480, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
            We've made working with us as easy as possible — even if you've never hired a web agency before.
          </p>
        </motion.div>

        {/* ===== DESKTOP: Circle Steps + Content ===== */}
        <div className="pw-desktop">

          {/* Circle navigation */}
          <div className="pw-circles">
            {steps.map((step, i) => {
              const isActive = active === i;
              const isPast = i < active;
              const rgb = hexToRgb(step.color);

              return (
                <motion.div
                  key={i}
                  className="pw-circle-wrap"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
                >
                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <div className="pw-line">
                      <div
                        className="pw-line-fill"
                        style={{
                          background: step.color,
                          transform: `scaleX(${isPast ? 1 : isActive ? progress / 100 : 0})`,
                          transition: isPast ? 'transform 0.5s ease' : 'transform 0.03s linear',
                        }}
                      />
                    </div>
                  )}

                  {/* Circle */}
                  <motion.button
                    className="pw-circle"
                    onClick={() => handleSelect(i)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      borderColor: isActive
                        ? 'transparent'
                        : isPast
                          ? `rgba(${rgb}, 0.35)`
                          : 'rgba(255,255,255,0.08)',
                      background: isActive
                        ? `rgba(${rgb}, 0.1)`
                        : isPast
                          ? `rgba(${rgb}, 0.08)`
                          : 'var(--card, #111)',
                      boxShadow: isActive
                        ? `0 0 30px rgba(${rgb}, 0.2)`
                        : 'none',
                    }}
                  >
                    {/* Pulse rings */}
                    {isActive && (
                      <>
                        <motion.div
                          className="pw-ring"
                          style={{ borderColor: step.color }}
                          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                          className="pw-ring"
                          style={{ borderColor: step.color }}
                          animate={{ scale: [1, 1.8, 1], opacity: [0.15, 0, 0.15] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                        />
                      </>
                    )}

                    {/* Progress SVG ring */}
                    {isActive && (
                      <svg className="pw-svg-ring" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="46" fill="none" stroke={`rgba(${rgb}, 0.12)`} strokeWidth="3" />
                        <circle
                          cx="50" cy="50" r="46"
                          fill="none"
                          stroke={step.color}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray={289}
                          strokeDashoffset={289 - (289 * progress) / 100}
                          transform="rotate(-90 50 50)"
                          style={{ transition: 'stroke-dashoffset 0.03s linear' }}
                        />
                      </svg>
                    )}

                    {/* Check for completed */}
                    {isPast ? (
                      <motion.div
                        style={{ color: step.color, display: 'flex' }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </motion.div>
                    ) : (
                      <motion.div
                        style={{
                          color: isActive ? step.color : 'rgba(255,255,255,0.35)',
                          display: 'flex',
                          transition: 'color 0.3s',
                        }}
                        animate={isActive ? { scale: [1, 1.06, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {step.icon}
                      </motion.div>
                    )}
                  </motion.button>

                  {/* Label */}
                  <div className="pw-label">
                    <span className="pw-label-num" style={{ color: isActive ? step.color : `rgba(${rgb}, 0.3)` }}>
                      {step.num}
                    </span>
                    <span className="pw-label-title" style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.3)' }}>
                      {step.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Content panel — FIXED HEIGHT */}
          <div className="pw-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="pw-panel-inner"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image */}
                <div className="pw-panel-img">
                  <img src={currentStep.visual} alt={currentStep.title} />
                  <div className="pw-panel-img-ov" />

                  <div className="pw-panel-badge" style={{
                    borderColor: `rgba(${currentRgb}, 0.3)`,
                    color: currentStep.color,
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: currentStep.color, display: 'inline-block',
                      animation: 'pwDotPulse 2.5s infinite',
                    }} />
                    Step {currentStep.num}
                  </div>
                </div>

                {/* Text */}
                <div className="pw-panel-text">
                  <div className="pw-ghost" style={{ color: `rgba(${currentRgb}, 0.05)` }}>
                    {currentStep.num}
                  </div>

                  <motion.div
                    className="pw-icon-circle"
                    style={{
                      color: currentStep.color,
                      background: `rgba(${currentRgb}, 0.08)`,
                      borderColor: `rgba(${currentRgb}, 0.18)`,
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {currentStep.icon}
                  </motion.div>

                  <motion.h3
                    className="pw-title"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    {currentStep.title}
                  </motion.h3>

                  <motion.p
                    className="pw-desc"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 }}
                  >
                    {currentStep.desc}
                  </motion.p>

                  <motion.p
                    className="pw-detail"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28 }}
                  >
                    {currentStep.detail}
                  </motion.p>

                  <div className="pw-tags">
                    {currentStep.tags.map((tag, ti) => (
                      <motion.span
                        key={ti}
                        className="pw-tag"
                        style={{ borderColor: `rgba(${currentRgb}, 0.2)` }}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.32 + ti * 0.06 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="pw-mobile">
          {steps.map((step, i) => {
            const isActive = active === i;
            const rgb = hexToRgb(step.color);

            return (
              <motion.div
                key={i}
                className="pw-m-card"
                onClick={() => handleSelect(i)}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
                style={{
                  borderColor: isActive ? `rgba(${rgb}, 0.15)` : 'rgba(255,255,255,0.06)',
                }}
              >
                {/* Top line */}
                <div className="pw-m-topline" style={{
                  background: step.color,
                  opacity: isActive ? 1 : 0.15,
                }} />

                {/* Head */}
                <div className="pw-m-head">
                  <div className="pw-m-circle">
                    {isActive && (
                      <svg className="pw-m-ring" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="19" fill="none" stroke={`rgba(${rgb},0.12)`} strokeWidth="2.5"/>
                        <circle
                          cx="22" cy="22" r="19" fill="none" stroke={step.color} strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeDasharray={119}
                          strokeDashoffset={119 - (119 * progress) / 100}
                          transform="rotate(-90 22 22)"
                          style={{ transition: 'stroke-dashoffset 0.03s linear' }}
                        />
                      </svg>
                    )}
                    <div style={{ color: isActive ? step.color : 'rgba(255,255,255,0.35)', display: 'flex' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {step.icon.props.children}
                      </svg>
                    </div>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase', color: step.color, display: 'block', marginBottom: 2 }}>
                      Step {step.num}
                    </span>
                    <h4 style={{ fontSize: 14.5, fontWeight: 700, color: 'white', margin: 0 }}>{step.title}</h4>
                  </div>

                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ flexShrink: 0, color: 'rgba(255,255,255,0.4)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Expand */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 18px 20px' }}>
                        <div style={{
                          borderRadius: 14, overflow: 'hidden', height: 150,
                          marginBottom: 14, position: 'relative',
                        }}>
                          <img src={step.visual} alt={step.title} style={{
                            width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5,
                          }} />
                          <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)',
                          }} />
                        </div>

                        <p style={{ fontSize: 13.5, color: 'var(--text2)', lineHeight: 1.75, marginBottom: 8 }}>
                          {step.desc}
                        </p>
                        <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 14 }}>
                          {step.detail}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {step.tags.map((tag, ti) => (
                            <motion.span
                              key={ti}
                              style={{
                                fontSize: 10.5, fontWeight: 500, padding: '4px 12px',
                                borderRadius: 50, background: 'rgba(255,255,255,0.04)',
                                border: `1px solid rgba(${rgb}, 0.2)`,
                                color: 'rgba(255,255,255,0.45)',
                              }}
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + ti * 0.05 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* ========== DESKTOP ========== */
        .pw-desktop {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Circles row */
        .pw-circles {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin-bottom: 48px;
        }

        .pw-circle-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          position: relative;
        }

        /* Connector */
        .pw-line {
          position: absolute;
          top: 40px;
          left: calc(50% + 46px);
          right: calc(-50% + 46px);
          height: 2px;
          background: rgba(255,255,255,0.06);
          border-radius: 2px;
          z-index: 0;
          overflow: hidden;
        }
        .pw-line-fill {
          position: absolute;
          top: 0; left: 0;
          height: 100%; width: 100%;
          transform-origin: left;
          border-radius: 2px;
        }

        /* Circle */
        .pw-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          z-index: 2;
          padding: 0;
          font-family: inherit;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .pw-ring {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 2px solid;
          pointer-events: none;
        }

        .pw-svg-ring {
          position: absolute;
          inset: -4px;
          width: calc(100% + 8px);
          height: calc(100% + 8px);
          pointer-events: none;
        }

        /* Label */
        .pw-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          margin-top: 16px;
          text-align: center;
        }
        .pw-label-num {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          transition: color 0.3s;
        }
        .pw-label-title {
          font-size: 13px;
          font-weight: 600;
          transition: color 0.3s;
          max-width: 120px;
          line-height: 1.4;
        }

        /* ========== CONTENT PANEL — FIXED SIZE ========== */
        .pw-panel {
          background: var(--card, #111);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
          height: 380px;
        }

        .pw-panel-inner {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          height: 380px;
        }

        /* Image */
        .pw-panel-img {
          position: relative;
          overflow: hidden;
          height: 100%;
        }
        .pw-panel-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
          transition: opacity 0.5s;
        }
        .pw-panel-inner:hover .pw-panel-img img {
          opacity: 0.65;
        }
        .pw-panel-img-ov {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 30%, var(--card, #111) 100%);
        }

        .pw-panel-badge {
          position: absolute;
          top: 20px; left: 20px;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid;
          border-radius: 50px;
          padding: 6px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 7px;
          z-index: 2;
        }

        @keyframes pwDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.7); }
        }

        /* Text */
        .pw-panel-text {
          padding: 36px 40px 36px 32px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          overflow: hidden;
        }

        .pw-ghost {
          font-size: 140px;
          font-weight: 900;
          position: absolute;
          top: -20px; right: 20px;
          line-height: 1;
          letter-spacing: -6px;
          pointer-events: none;
          user-select: none;
        }

        .pw-icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }
        .pw-icon-circle svg {
          width: 24px;
          height: 24px;
        }

        .pw-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: white;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        .pw-desc {
          font-size: 14.5px;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          margin-bottom: 10px;
          max-width: 440px;
          position: relative;
          z-index: 1;
        }

        .pw-detail {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          line-height: 1.7;
          margin-bottom: 18px;
          font-style: italic;
          max-width: 420px;
          position: relative;
          z-index: 1;
        }

        .pw-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          position: relative;
          z-index: 1;
        }
        .pw-tag {
          font-size: 11.5px;
          font-weight: 500;
          padding: 5px 14px;
          border-radius: 50px;
          background: rgba(255,255,255,0.04);
          border: 1px solid;
          color: rgba(255,255,255,0.5);
        }

        /* ========== MOBILE ========== */
        .pw-mobile {
          display: none;
          flex-direction: column;
          gap: 10px;
          max-width: 600px;
          margin: 0 auto;
        }

        .pw-m-card {
          background: var(--card, #111);
          border: 1px solid;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          transition: border-color 0.3s;
        }

        .pw-m-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          z-index: 2;
          transition: opacity 0.3s;
        }

        .pw-m-head {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
        }

        .pw-m-circle {
          width: 44px; height: 44px; min-width: 44px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pw-m-ring {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 900px) {
          .pw-desktop { display: none !important; }
          .pw-mobile { display: flex !important; }
        }

        @media (max-width: 560px) {
          .pw-m-card { border-radius: 14px; }
          .pw-m-head { padding: 14px 16px; gap: 12px; }
          .pw-m-circle { width: 38px; height: 38px; min-width: 38px; }
        }

        @media (max-width: 380px) {
          .pw-m-circle { width: 34px; height: 34px; min-width: 34px; }
        }
      `}</style>
    </section>
  );
}