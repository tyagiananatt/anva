// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Link } from 'react-scroll';

// const IMG1 = 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80';
// const IMG2 = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80';
// const IMG3 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80';
// const IMG4 = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80';
// const IMG5 = 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80';

// // Taskpad-style feature cards with mockup previews inside
// const features = [
//   {
//     title: 'Website Design & Development',
//     desc: 'Beautiful, fast websites that make a great first impression. We handle everything — design, development, and launch.',
//     img: IMG1, wide: false,
//     badge: { text: 'Live Preview', color: 'var(--orange)' },
//   },
//   {
//     title: 'E-Commerce Stores',
//     desc: 'Sell online with confidence. We build stores that are easy to manage and designed to convert visitors into buyers.',
//     img: IMG2, wide: false,
//     badge: { text: 'Payments Ready', color: '#22C55E' },
//   },
//   {
//     title: 'Business Management Systems',
//     desc: 'Custom dashboards, CRMs, and internal tools that replace messy spreadsheets and save your team hours every week.',
//     img: IMG3, wide: true,
//     badge: { text: 'Analysing', color: 'var(--orange)' },
//   },
//   {
//     title: 'Mobile Applications',
//     desc: 'Apps for iOS and Android that your customers will actually enjoy using. Simple, fast, and built to last.',
//     img: IMG4, wide: false,
//     badge: { text: 'iOS & Android', color: '#60A5FA' },
//   },
//   {
//     title: 'SEO & Digital Growth',
//     desc: 'Get found on Google. We optimize your site so the right people find you without paying for every click.',
//     img: IMG5, wide: false,
//     badge: { text: 'Ranking #1', color: 'var(--orange)' },
//   },
// ];

// export default function Services() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

//   return (
//     <section id="services" className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
//       <div className="orange-glow" style={{ width: 600, height: 600, top: '10%', left: '50%', transform: 'translateX(-50%)' }} />

//       <div className="container" ref={ref}>
//         {/* Header */}
//         <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 64 }}>
//           <div className="pill" style={{ margin: '0 auto 24px' }}>Built with Adaptive Technology</div>
//           <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', maxWidth: 640, margin: '0 auto 20px' }}>
//             An Intelligent System That<br />
//             <span style={{ color: 'var(--text2)' }}>Plans As You Work</span>
//           </h2>
//           <p style={{ color: 'var(--text2)', maxWidth: 580, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
//             Traditional agencies only build what you ask. We go further — learning your business, adjusting strategy in real time, and helping you grow when things change.
//           </p>
//         </motion.div>

//         {/* Feature cards grid — Taskpad style */}
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="feat-grid">
//           {/* Row 1: 3 equal cards */}
//           {features.slice(0, 3).map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 32 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//               className="card-base"
//               style={{ gridColumn: i === 2 ? 'span 1' : 'span 1', cursor: 'default' }}
//               whileHover={{ y: -4 }}
//             >
//               {/* Mockup image */}
//               <div style={{ height: 200, overflow: 'hidden', position: 'relative', background: 'var(--bg3)' }}>
//                 <img src={f.img} alt={f.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, transition: 'opacity 0.3s' }}
//                   onMouseEnter={e => e.target.style.opacity = '0.8'}
//                   onMouseLeave={e => e.target.style.opacity = '0.6'} />
//                 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, var(--card) 100%)' }} />
//                 {/* Badge */}
//                 <div style={{ position: 'absolute', top: 16, left: 16, background: 'var(--card2)', border: `1px solid ${f.badge.color}40`, borderRadius: 50, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: f.badge.color, display: 'flex', alignItems: 'center', gap: 6 }}>
//                   <span style={{ width: 6, height: 6, borderRadius: '50%', background: f.badge.color, display: 'inline-block' }} />
//                   {f.badge.text}
//                 </div>
//               </div>
//               <div style={{ padding: '20px 24px 28px' }}>
//                 <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 10, color: 'white' }}>{f.title}</h3>
//                 <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.75 }}>{f.desc}</p>
//               </div>
//             </motion.div>
//           ))}

//           {/* Row 2: 2 wider cards */}
//           {features.slice(3).map((f, i) => (
//             <motion.div
//               key={i + 3}
//               initial={{ opacity: 0, y: 32 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: (i + 3) * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//               className="card-base"
//               style={{ gridColumn: 'span 1', cursor: 'default' }}
//               whileHover={{ y: -4 }}
//             >
//               <div style={{ height: 200, overflow: 'hidden', position: 'relative', background: 'var(--bg3)' }}>
//                 <img src={f.img} alt={f.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, transition: 'opacity 0.3s' }}
//                   onMouseEnter={e => e.target.style.opacity = '0.8'}
//                   onMouseLeave={e => e.target.style.opacity = '0.6'} />
//                 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, var(--card) 100%)' }} />
//                 <div style={{ position: 'absolute', top: 16, left: 16, background: 'var(--card2)', border: `1px solid ${f.badge.color}40`, borderRadius: 50, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: f.badge.color, display: 'flex', alignItems: 'center', gap: 6 }}>
//                   <span style={{ width: 6, height: 6, borderRadius: '50%', background: f.badge.color, display: 'inline-block' }} />
//                   {f.badge.text}
//                 </div>
//               </div>
//               <div style={{ padding: '20px 24px 28px' }}>
//                 <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 10, color: 'white' }}>{f.title}</h3>
//                 <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.75 }}>{f.desc}</p>
//               </div>
//             </motion.div>
//           ))}

//           {/* Sixth placeholder card */}
//           <motion.div
//             initial={{ opacity: 0, y: 32 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.55, duration: 0.6 }}
//             className="card-base"
//             style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 28px', textAlign: 'center', minHeight: 280, cursor: 'default' }}
//             whileHover={{ y: -4 }}
//           >
//             <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20, boxShadow: '0 0 32px rgba(249,115,22,0.4)', animation: 'pulse-orange 3s infinite' }}>🛡️</div>
//             <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 10, color: 'white' }}>Ongoing Support & Care</h3>
//             <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.75 }}>24/7 monitoring, security updates, and a team you can call when something needs fixing.</p>
//           </motion.div>
//         </div>

//         {/* CTA */}
//         <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} style={{ textAlign: 'center', marginTop: 56 }}>
//           <Link to="contact" smooth duration={600} offset={-68}>
//             <motion.button className="btn btn-orange" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ fontSize: 15, padding: '15px 40px' }}>
//               Explore All Services
//             </motion.button>
//           </Link>
//         </motion.div>
//       </div>

//       <style>{`
//         @media (max-width: 900px) { .feat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
//         @media (max-width: 560px) { .feat-grid { grid-template-columns: 1fr !important; } }
//       `}</style>
//     </section>
//   );
// }

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const IMG1 = 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80';
const IMG2 = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80';
const IMG3 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80';
const IMG4 = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80';
const IMG5 = 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80';

const features = [
  {
    title: 'Website Design & Development',
    desc: 'Beautiful, fast websites that make a great first impression. We handle everything — design, development, and launch.',
    img: IMG1,
    badge: 'Live Preview',
    badgeColor: 'var(--orange)',
    tags: ['React', 'Next.js', 'Figma', 'Tailwind'],
    stat: { val: '200+', label: 'Sites Launched' },
    shortTitle: 'Websites',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: 'E-Commerce Stores',
    desc: 'Sell online with confidence. We build stores that are easy to manage and designed to convert visitors into buyers.',
    img: IMG2,
    badge: 'Payments Ready',
    badgeColor: '#22C55E',
    tags: ['Shopify', 'Stripe', 'WooCommerce'],
    stat: { val: '3x', label: 'Avg Conversion' },
    shortTitle: 'E-Commerce',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
  },
  {
    title: 'Business Management Systems',
    desc: 'Custom dashboards, CRMs, and internal tools that replace messy spreadsheets and save your team hours every week.',
    img: IMG3,
    badge: 'Analysing',
    badgeColor: 'var(--orange)',
    tags: ['Node.js', 'PostgreSQL', 'APIs', 'Dashboards'],
    stat: { val: '10hrs', label: 'Saved Weekly' },
    shortTitle: 'CRM',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    title: 'Mobile Applications',
    desc: 'Apps for iOS and Android that your customers will actually enjoy using. Simple, fast, and built to last.',
    img: IMG4,
    badge: 'iOS & Android',
    badgeColor: '#60A5FA',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    stat: { val: '50+', label: 'Apps Shipped' },
    shortTitle: 'Apps',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: 'SEO & Digital Growth',
    desc: 'Get found on Google. We optimize your site so the right people find you without paying for every click.',
    img: IMG5,
    badge: 'Ranking #1',
    badgeColor: 'var(--orange)',
    tags: ['SEO Audit', 'Google Ads', 'Analytics', 'Content'],
    stat: { val: '300%', label: 'Traffic Growth' },
    shortTitle: 'SEO',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    title: 'Ongoing Support & Care',
    desc: '24/7 monitoring, security updates, and a team you can call when something needs fixing.',
    img: null,
    badge: 'Always On',
    badgeColor: 'var(--orange)',
    tags: ['Monitoring', 'Security', 'Updates'],
    stat: { val: '24/7', label: 'Availability' },
    shortTitle: 'Support',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

// ========== BUBBLE COMPONENT ==========
const Bubble = ({ size, left, delay, duration, color }) => (
  <motion.div
    className="sv-bubble"
    style={{
      width: size,
      height: size,
      left: `${left}%`,
      background: color || 'rgba(249, 115, 22, 0.06)',
      border: `1px solid ${color ? color.replace('0.06', '0.1') : 'rgba(249, 115, 22, 0.08)'}`,
    }}
    initial={{ y: '110vh', opacity: 0, scale: 0.3 }}
    animate={{
      y: '-10vh',
      opacity: [0, 0.8, 0.8, 0],
      scale: [0.3, 1, 1, 0.6],
    }}
    transition={{
      duration: duration || 14,
      delay: delay || 0,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
);

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleSelect = (i) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSelect((active + 1) % features.length);
    }, 8000);
    return () => clearTimeout(timer);
  }, [active]);

  const f = features[active];

  return (
    <section id="services" className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="orange-glow" style={{ width: 700, height: 700, top: '5%', left: '50%', transform: 'translateX(-50%)', opacity: 0.3 }} />

      {/* ===== FLOATING BUBBLES ===== */}
      <div className="sv-bubbles-container">
        <Bubble size={8} left={5} delay={0} duration={16} />
        <Bubble size={14} left={12} delay={2} duration={18} color="rgba(249,115,22,0.05)" />
        <Bubble size={6} left={22} delay={4} duration={14} />
        <Bubble size={18} left={30} delay={1} duration={20} color="rgba(96,165,250,0.04)" />
        <Bubble size={10} left={40} delay={6} duration={15} />
        <Bubble size={12} left={50} delay={3} duration={17} color="rgba(249,115,22,0.05)" />
        <Bubble size={7} left={60} delay={8} duration={13} />
        <Bubble size={16} left={68} delay={2.5} duration={19} color="rgba(34,197,94,0.04)" />
        <Bubble size={9} left={78} delay={5} duration={16} />
        <Bubble size={20} left={85} delay={0.5} duration={21} color="rgba(249,115,22,0.04)" />
        <Bubble size={6} left={92} delay={7} duration={14} />
        <Bubble size={11} left={48} delay={9} duration={17} />
        <Bubble size={8} left={16} delay={11} duration={15} color="rgba(96,165,250,0.03)" />
        <Bubble size={14} left={74} delay={4.5} duration={18} />
        <Bubble size={5} left={35} delay={10} duration={12} />
        <Bubble size={22} left={55} delay={1.5} duration={22} color="rgba(249,115,22,0.03)" />
      </div>

      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="pill" style={{ margin: '0 auto 24px' }}>What We Build</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', maxWidth: 640, margin: '0 auto 20px' }}>
            Services That<br />
            <span style={{ color: 'var(--text2)' }}>Drive Real Growth</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 560, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
            From concept to launch and beyond — we craft digital experiences that convert visitors into loyal customers.
          </p>
        </motion.div>

        {/* ===== MAIN SHOWCASE ===== */}
        <motion.div
          className="sv-showcase"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* LEFT: Navigation tabs */}
          <div className="sv-nav">
            {features.map((item, i) => (
              <motion.button
                key={i}
                className={`sv-nav-item ${active === i ? 'sv-nav-active' : ''}`}
                onClick={() => handleSelect(i)}
                whileTap={{ scale: 0.97 }}
              >
                {/* Active indicator line */}
                <motion.div
                  className="sv-nav-line"
                  style={{ background: item.badgeColor }}
                  animate={{
                    height: active === i ? '100%' : '0%',
                    opacity: active === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Mobile: bottom line */}
                <motion.div
                  className="sv-nav-bottom-line"
                  style={{ background: item.badgeColor }}
                  animate={{
                    width: active === i ? '100%' : '0%',
                    opacity: active === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className="sv-nav-icon" style={{
                  color: active === i ? item.badgeColor : 'rgba(255,255,255,0.3)',
                  borderColor: active === i ? `${item.badgeColor}30` : 'rgba(255,255,255,0.06)',
                  background: active === i ? `${item.badgeColor}10` : 'transparent',
                }}>
                  {item.icon}
                </div>

                <div className="sv-nav-text">
                  <span className="sv-nav-num" style={{ color: active === i ? `${item.badgeColor}60` : 'rgba(255,255,255,0.15)' }}>
                    0{i + 1}
                  </span>
                  {/* Desktop: full title, Mobile: short title */}
                  <span className="sv-nav-title-full" style={{ color: active === i ? 'white' : 'rgba(255,255,255,0.4)' }}>
                    {item.title}
                  </span>
                  <span className="sv-nav-title-short" style={{ color: active === i ? 'white' : 'rgba(255,255,255,0.4)' }}>
                    {item.shortTitle}
                  </span>
                </div>

                {/* Desktop arrow */}
                <motion.div
                  className="sv-nav-arrow"
                  animate={{ opacity: active === i ? 1 : 0, x: active === i ? 0 : -8 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: item.badgeColor }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </motion.div>
              </motion.button>
            ))}
          </div>

          {/* RIGHT: Content showcase */}
          <div className="sv-content">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                className="sv-content-inner"
                custom={direction}
                initial={{ opacity: 0, y: direction * 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: direction * -30, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image area */}
                <div className="sv-image-area">
                  {f.img ? (
                    <>
                      <img src={f.img} alt={f.title} className="sv-image" />
                      <div className="sv-image-overlay" />
                    </>
                  ) : (
                    <div className="sv-image-placeholder">
                      <motion.div
                        className="sv-shield-rings"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        <div className="sv-ring-1" />
                        <div className="sv-ring-2" />
                      </motion.div>
                      <div className="sv-shield-icon">
                        {f.icon}
                      </div>
                    </div>
                  )}

                  {/* Badge overlay */}
                  <motion.div
                    className="sv-badge"
                    style={{ borderColor: `${f.badgeColor}40`, color: f.badgeColor }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="sv-badge-dot" style={{ background: f.badgeColor }} />
                    {f.badge}
                  </motion.div>

                  {/* Stat floating card */}
                  <motion.div
                    className="sv-float-stat"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="sv-float-val" style={{ color: f.badgeColor }}>{f.stat.val}</div>
                    <div className="sv-float-label">{f.stat.label}</div>
                  </motion.div>
                </div>

                {/* Text content */}
                <div className="sv-text-area">
                  <motion.div
                    className="sv-big-num"
                    style={{ color: `${f.badgeColor}15` }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    0{active + 1}
                  </motion.div>

                  <motion.h3
                    className="sv-title"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {f.title}
                  </motion.h3>

                  <motion.p
                    className="sv-desc"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28 }}
                  >
                    {f.desc}
                  </motion.p>

                  <motion.div
                    className="sv-tags"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                  >
                    {f.tags.map((t, ti) => (
                      <motion.span
                        key={ti}
                        className="sv-tag"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.38 + ti * 0.05 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="contact" smooth duration={600} offset={-68}>
                      <motion.button
                        className="sv-cta-btn"
                        style={{ background: f.badgeColor }}
                        whileHover={{ scale: 1.03, boxShadow: `0 8px 30px ${f.badgeColor}40` }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Get Started
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} style={{ textAlign: 'center', marginTop: 56 }}>
          <Link to="contact" smooth duration={600} offset={-68}>
            <motion.button className="btn btn-orange" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ fontSize: 15, padding: '15px 40px' }}>
              Explore All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style>{`
        /* ========== BUBBLES ========== */
        .sv-bubbles-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .sv-bubble {
          position: absolute;
          bottom: -30px;
          border-radius: 50%;
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
        }

        /* ========== SHOWCASE WRAPPER ========== */
        .sv-showcase {
          display: flex;
          gap: 0;
          max-width: 1200px;
          margin: 0 auto;
          background: var(--card, #111);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          overflow: hidden;
          min-height: 520px;
          position: relative;
          z-index: 1;
        }

        /* ========== LEFT NAV — DESKTOP ========== */
        .sv-nav {
          width: 300px;
          min-width: 300px;
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          padding: 8px 0;
          overflow-y: auto;
        }

        .sv-nav-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 22px;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          text-align: left;
          font-family: inherit;
          transition: background 0.3s ease;
          overflow: hidden;
        }
        .sv-nav-item:hover {
          background: rgba(255,255,255,0.02);
        }
        .sv-nav-active {
          background: rgba(255,255,255,0.03) !important;
        }

        /* Desktop: left vertical line */
        .sv-nav-line {
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          border-radius: 0 3px 3px 0;
        }

        /* Mobile: bottom line (hidden on desktop) */
        .sv-nav-bottom-line {
          display: none;
        }

        .sv-nav-icon {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 12px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }

        .sv-nav-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
          min-width: 0;
        }
        .sv-nav-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }
        .sv-nav-title-full {
          font-size: 13px;
          font-weight: 600;
          transition: color 0.3s ease;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }
        .sv-nav-title-short {
          display: none;
        }
        .sv-nav-arrow {
          min-width: 14px;
        }

        /* ========== RIGHT CONTENT ========== */
        .sv-content {
          flex: 1;
          position: relative;
          overflow: hidden;
        }
        .sv-content-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* Image */
        .sv-image-area {
          position: relative;
          height: 260px;
          overflow: hidden;
          background: var(--bg3, #0a0a0a);
        }
        .sv-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.55;
          transition: opacity 0.5s ease;
        }
        .sv-content-inner:hover .sv-image {
          opacity: 0.7;
        }
        .sv-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 20%, var(--card, #111) 100%);
        }

        .sv-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, transparent 70%);
          position: relative;
        }
        .sv-shield-rings {
          position: absolute;
          width: 160px;
          height: 160px;
        }
        .sv-ring-1 {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(249,115,22,0.12);
        }
        .sv-ring-2 {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          border: 1px dashed rgba(249,115,22,0.07);
        }
        .sv-shield-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--orange), #e86a10);
          box-shadow: 0 12px 40px rgba(249,115,22,0.3);
          position: relative;
          z-index: 1;
          color: white;
        }

        /* Badge */
        .sv-badge {
          position: absolute;
          top: 18px;
          left: 22px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid;
          border-radius: 50px;
          padding: 6px 16px;
          font-size: 11px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 7px;
          z-index: 2;
        }
        .sv-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          animation: svDotPulse 2.5s infinite;
        }
        @keyframes svDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.7); }
        }

        /* Floating stat */
        .sv-float-stat {
          position: absolute;
          bottom: 18px;
          right: 22px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 12px 20px;
          text-align: center;
          z-index: 2;
        }
        .sv-float-val {
          font-size: 24px;
          font-weight: 900;
          line-height: 1.2;
        }
        .sv-float-label {
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          font-weight: 500;
        }

        /* Text area */
        .sv-text-area {
          padding: 28px 32px 32px;
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .sv-big-num {
          font-size: 72px;
          font-weight: 900;
          position: absolute;
          top: 12px;
          right: 28px;
          line-height: 1;
          letter-spacing: -3px;
          pointer-events: none;
          user-select: none;
        }
        .sv-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: white;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .sv-desc {
          font-size: 14.5px;
          color: var(--text2, #888);
          line-height: 1.8;
          margin-bottom: 20px;
          max-width: 480px;
        }
        .sv-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 24px;
        }
        .sv-tag {
          font-size: 11.5px;
          font-weight: 500;
          padding: 5px 13px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.2px;
        }
        .sv-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          margin-top: auto;
          width: fit-content;
          transition: all 0.3s ease;
        }

        /* ==================================================
           RESPONSIVE — TABLET
           ================================================== */
        @media (max-width: 900px) {
          .sv-showcase {
            flex-direction: column;
            min-height: auto;
            border-radius: 20px;
          }

          /* Nav becomes horizontal scrollable strip */
          .sv-nav {
            width: 100%;
            min-width: 100%;
            flex-direction: row;
            overflow-x: auto;
            overflow-y: hidden;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            padding: 0;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .sv-nav::-webkit-scrollbar { display: none; }

          .sv-nav-item {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 14px 16px 12px;
            min-width: 72px;
            gap: 6px;
          }

          /* Hide desktop vertical line */
          .sv-nav-line { display: none; }

          /* Show mobile bottom line */
          .sv-nav-bottom-line {
            display: block;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 3px;
            border-radius: 3px 3px 0 0;
          }

          .sv-nav-icon {
            width: 36px;
            height: 36px;
            min-width: 36px;
            border-radius: 10px;
          }
          .sv-nav-icon svg {
            width: 18px;
            height: 18px;
          }

          .sv-nav-text {
            align-items: center;
          }

          /* Hide full title, show short title */
          .sv-nav-title-full { display: none !important; }
          .sv-nav-title-short {
            display: block !important;
            font-size: 10px;
            font-weight: 600;
            transition: color 0.3s ease;
            white-space: nowrap;
            letter-spacing: 0.2px;
          }

          .sv-nav-num { display: none; }
          .sv-nav-arrow { display: none; }

          .sv-image-area { height: 200px; }
          .sv-big-num { font-size: 48px; top: 8px; right: 16px; }
          .sv-text-area { padding: 22px 24px 28px; }
        }

        /* ==================================================
           RESPONSIVE — MOBILE SMALL
           ================================================== */
        @media (max-width: 560px) {
          .sv-showcase {
            border-radius: 16px;
          }

          .sv-nav-item {
            min-width: 62px;
            padding: 12px 10px 10px;
            gap: 5px;
          }

          .sv-nav-icon {
            width: 32px;
            height: 32px;
            min-width: 32px;
            border-radius: 8px;
          }
          .sv-nav-icon svg {
            width: 16px;
            height: 16px;
          }

          .sv-nav-title-short {
            font-size: 9px !important;
          }

          .sv-image-area { height: 170px; }
          .sv-float-stat {
            padding: 8px 14px;
            bottom: 12px;
            right: 14px;
          }
          .sv-float-val { font-size: 18px; }
          .sv-float-label { font-size: 9px; }

          .sv-badge {
            top: 12px;
            left: 14px;
            padding: 5px 12px;
            font-size: 10px;
          }

          .sv-big-num { font-size: 36px; top: 6px; right: 14px; }
          .sv-title { font-size: 1.1rem; }
          .sv-desc { font-size: 13.5px; }
          .sv-text-area { padding: 18px 20px 24px; }

          .sv-tag {
            font-size: 10.5px;
            padding: 4px 10px;
          }

          .sv-cta-btn {
            padding: 11px 24px;
            font-size: 13px;
            width: 100%;
            justify-content: center;
          }
        }

        /* ==================================================
           RESPONSIVE — VERY SMALL
           ================================================== */
        @media (max-width: 380px) {
          .sv-nav-item {
            min-width: 54px;
            padding: 10px 8px 8px;
          }
          .sv-nav-icon {
            width: 28px;
            height: 28px;
            min-width: 28px;
          }
          .sv-nav-icon svg {
            width: 14px;
            height: 14px;
          }
          .sv-nav-title-short {
            font-size: 8px !important;
          }
          .sv-float-stat { display: none; }
          .sv-image-area { height: 150px; }
        }
      `}</style>
    </section>
  );
}