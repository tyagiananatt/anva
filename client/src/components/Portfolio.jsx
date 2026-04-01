// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { FiArrowUpRight } from 'react-icons/fi';

// const cats = ['All', 'Website', 'Web App', 'E-Commerce', 'Mobile'];
// const projects = [
//   { title: 'NexaShop', category: 'E-Commerce', desc: 'Fashion e-commerce platform. Increased sales by 3× in the first month.', result: '+340%', img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80', wide: true },
//   { title: 'FlowDesk CRM', category: 'Web App', desc: 'Custom CRM replacing spreadsheets for a 40-person sales team.', result: '12 hrs/wk', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', wide: false },
//   { title: 'MediCare Portal', category: 'Website', desc: 'Patient booking portal. Reduced phone calls by 60%.', result: '−60%', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', wide: false },
//   { title: 'TradeVault App', category: 'Mobile', desc: '4.8★ on the App Store with 8,000+ downloads.', result: '4.8★', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80', wide: false },
//   { title: 'EduLearn LMS', category: 'Web App', desc: 'Learning platform handling 10,000+ students.', result: '10k+', img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80', wide: false },
//   { title: 'PropEstate', category: 'Website', desc: 'Real estate platform with virtual tours. Leads up 200%.', result: '+200%', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', wide: true },
// ];

// export default function Portfolio() {
//   const [active, setActive] = useState('All');
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });
//   const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

//   return (
//     <section id="portfolio" className="section" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
//       <div className="container" ref={ref}>
//         <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: 48 }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 28 }}>
//             <div>
//               <div className="pill" style={{ marginBottom: 16 }}>Our Work</div>
//               <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', maxWidth: 440 }}>
//                 Projects We're<br /><span style={{ color: 'var(--text2)' }}>Proud Of</span>
//               </h2>
//             </div>
//             <p style={{ color: 'var(--text2)', maxWidth: 300, fontSize: '0.95rem', lineHeight: 1.75 }}>Real results for real businesses across industries.</p>
//           </div>
//           <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
//             {cats.map(cat => (
//               <button key={cat} onClick={() => setActive(cat)} style={{ padding: '8px 20px', borderRadius: 50, cursor: 'pointer', border: '1px solid', fontFamily: 'Inter, sans-serif', borderColor: active === cat ? 'var(--orange)' : 'var(--border2)', background: active === cat ? 'rgba(249,115,22,0.12)' : 'transparent', color: active === cat ? 'var(--orange)' : 'var(--text3)', fontSize: 13, fontWeight: 600, transition: 'all 0.2s' }}>{cat}</button>
//             ))}
//           </div>
//         </motion.div>

//         <AnimatePresence mode="wait">
//           <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
//             style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="port-grid">
//             {filtered.map((p, i) => (
//               <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
//                 style={{ gridColumn: p.wide && active === 'All' ? 'span 2' : 'span 1', borderRadius: 20, overflow: 'hidden', position: 'relative', cursor: 'pointer', aspectRatio: p.wide && active === 'All' ? '16/7' : '4/3', border: '1px solid var(--border)', background: 'var(--card)' }}
//                 whileHover={{ scale: 1.02, borderColor: 'var(--orange-border)' }}>
//                 <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, transition: 'transform 0.5s, opacity 0.3s' }}
//                   onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.opacity = '0.55'; }}
//                   onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.opacity = '0.7'; }} />
//                 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)' }} />
//                 <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px' }}>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
//                     <div>
//                       <div style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 50, background: 'rgba(249,115,22,0.15)', border: '1px solid var(--orange-border)', color: 'var(--orange)', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>{p.category}</div>
//                       <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: 4 }}>{p.title}</h3>
//                       <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>{p.desc}</p>
//                     </div>
//                     <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 16 }}>
//                       <div style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--orange)', marginBottom: 8 }}>{p.result}</div>
//                       <div style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(249,115,22,0.15)', border: '1px solid var(--orange-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
//                         <FiArrowUpRight size={15} color="var(--orange)" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <style>{`
//         @media(max-width:900px){.port-grid{grid-template-columns:repeat(2,1fr)!important}.port-grid>div{grid-column:span 1!important;aspect-ratio:4/3!important}}
//         @media(max-width:560px){.port-grid{grid-template-columns:1fr!important}}
//       `}</style>
//     </section>
//   );
// }




import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi';

const cats = ['All', 'Website', 'Web App', 'E-Commerce', 'Mobile'];

const projects = [
  {
    title: 'NexaShop',
    category: 'E-Commerce',
    desc: 'Fashion e-commerce platform. Increased sales by 3× in the first month.',
    result: '+340%',
    resultLabel: 'Revenue',
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    color: '#F97316',
    tags: ['Shopify', 'Custom Theme', 'Stripe'],
    size: 'hero',
  },
  {
    title: 'FlowDesk CRM',
    category: 'Web App',
    desc: 'Custom CRM replacing spreadsheets for a 40-person sales team.',
    result: '12 hrs',
    resultLabel: 'Saved/week',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    color: '#60A5FA',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    size: 'tall',
  },
  {
    title: 'MediCare Portal',
    category: 'Website',
    desc: 'Patient booking portal. Reduced phone calls by 60%.',
    result: '−60%',
    resultLabel: 'Phone Calls',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    color: '#22C55E',
    tags: ['Next.js', 'Booking API', 'HIPAA'],
    size: 'standard',
  },
  {
    title: 'TradeVault App',
    category: 'Mobile',
    desc: '4.8★ on the App Store with 8,000+ downloads in first quarter.',
    result: '4.8★',
    resultLabel: 'App Rating',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    color: '#F59E0B',
    tags: ['React Native', 'Firebase', 'Charts'],
    size: 'standard',
  },
  {
    title: 'EduLearn LMS',
    category: 'Web App',
    desc: 'Learning platform handling 10,000+ students across 15 schools.',
    result: '10k+',
    resultLabel: 'Students',
    img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80',
    color: '#A78BFA',
    tags: ['Vue.js', 'AWS', 'Video CDN'],
    size: 'wide',
  },
  {
    title: 'PropEstate',
    category: 'Website',
    desc: 'Real estate platform with virtual tours. Leads increased by 200%.',
    result: '+200%',
    resultLabel: 'Lead Growth',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    color: '#F97316',
    tags: ['Next.js', '3D Tours', 'CRM'],
    size: 'standard',
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

// ========== HERO CARD (Large featured) ==========
const HeroCard = ({ p, isHovered, onHover, onLeave, idx }) => {
  const rgb = hexToRgb(p.color);
  return (
    <motion.div
      className="pf-hero-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      layout
    >
      <motion.div
        className="pf-hero-glow"
        style={{ background: p.color }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="pf-hero-inner">
        {/* Image side */}
        <div className="pf-hero-img-side">
          <motion.img
            src={p.img} alt={p.title}
            className="pf-hero-img"
            animate={{ scale: isHovered ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="pf-hero-img-ov" />

          {/* Floating result */}
          <motion.div
            className="pf-hero-float"
            style={{ background: `rgba(${rgb}, 0.12)`, borderColor: `rgba(${rgb}, 0.3)`, color: p.color }}
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.7 }}
          >
            <span className="pf-hero-float-val">{p.result}</span>
            <span className="pf-hero-float-label">{p.resultLabel}</span>
          </motion.div>
        </div>

        {/* Content side */}
        <div className="pf-hero-content">
          <div className="pf-hero-cat" style={{ color: p.color, borderColor: `rgba(${rgb},0.3)`, background: `rgba(${rgb},0.08)` }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.color, animation: 'pfDot 2.5s infinite' }} />
            {p.category}
          </div>

          <div className="pf-hero-num" style={{ color: `rgba(${rgb}, 0.06)` }}>01</div>

          <h3 className="pf-hero-title">{p.title}</h3>
          <p className="pf-hero-desc">{p.desc}</p>

          <div className="pf-hero-tags">
            {p.tags.map((t, i) => (
              <span key={i} className="pf-htag" style={{ borderColor: `rgba(${rgb}, 0.15)` }}>{t}</span>
            ))}
          </div>

          <div className="pf-hero-bottom">
            <motion.span
              className="pf-hero-link"
              style={{ color: isHovered ? p.color : 'rgba(255,255,255,0.35)' }}
              animate={{ x: isHovered ? 4 : 0 }}
            >
              View Case Study <FiArrowUpRight size={14} />
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ========== TALL CARD (Vertical emphasis) ==========
const TallCard = ({ p, isHovered, onHover, onLeave, idx, delay }) => {
  const rgb = hexToRgb(p.color);
  return (
    <motion.div
      className="pf-tall-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      layout
    >
      <motion.div className="pf-card-topglow" style={{ background: p.color }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} />

      <div className="pf-tall-img-wrap">
        <motion.img src={p.img} alt={p.title} className="pf-tall-img" animate={{ scale: isHovered ? 1.08 : 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />
        <div className="pf-tall-img-ov" />

        <div className="pf-tall-cat" style={{ color: p.color, borderColor: `rgba(${rgb},0.3)`, background: `rgba(${rgb},0.1)` }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: p.color, animation: 'pfDot 2.5s infinite' }} />
          {p.category}
        </div>
      </div>

      <div className="pf-tall-content">
        <div className="pf-tall-result" style={{ color: p.color }}>
          <span className="pf-tall-rv">{p.result}</span>
          <span className="pf-tall-rl">{p.resultLabel}</span>
        </div>

        <h3 className="pf-tall-title">{p.title}</h3>
        <p className="pf-tall-desc">{p.desc}</p>

        <div className="pf-tall-tags">
          {p.tags.map((t, i) => (
            <span key={i} className="pf-ttag" style={{ borderColor: `rgba(${rgb}, 0.15)` }}>{t}</span>
          ))}
        </div>

        <motion.div
          className="pf-tall-arrow"
          style={{
            borderColor: isHovered ? `rgba(${rgb}, 0.3)` : 'rgba(255,255,255,0.06)',
            background: isHovered ? `rgba(${rgb}, 0.08)` : 'transparent',
            color: isHovered ? p.color : 'rgba(255,255,255,0.25)',
          }}
          animate={{ rotate: isHovered ? 0 : -45 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowUpRight size={16} />
        </motion.div>
      </div>
    </motion.div>
  );
};

// ========== COMPACT CARD ==========
const CompactCard = ({ p, isHovered, onHover, onLeave, idx, delay }) => {
  const rgb = hexToRgb(p.color);
  return (
    <motion.div
      className="pf-compact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      layout
    >
      <motion.div className="pf-card-topglow" style={{ background: p.color }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} />

      <div className="pf-compact-img-wrap">
        <motion.img src={p.img} alt={p.title} className="pf-compact-img" animate={{ scale: isHovered ? 1.08 : 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />
        <div className="pf-compact-img-ov" />

        {/* Result overlay */}
        <motion.div
          className="pf-compact-result"
          style={{ color: p.color }}
          animate={{ y: isHovered ? 0 : 6, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="pf-cr-val">{p.result}</span>
          <span className="pf-cr-label">{p.resultLabel}</span>
        </motion.div>
      </div>

      <div className="pf-compact-content">
        <div className="pf-compact-cat" style={{ color: p.color }}>{p.category}</div>
        <h3 className="pf-compact-title">{p.title}</h3>
        <p className="pf-compact-desc">{p.desc}</p>

        <div className="pf-compact-bottom">
          <div className="pf-compact-tags">
            {p.tags.slice(0, 2).map((t, i) => (
              <span key={i} className="pf-ctag" style={{ borderColor: `rgba(${rgb}, 0.15)` }}>{t}</span>
            ))}
          </div>
          <motion.div
            className="pf-compact-arrow"
            style={{
              color: isHovered ? p.color : 'rgba(255,255,255,0.2)',
              borderColor: isHovered ? `rgba(${rgb}, 0.3)` : 'rgba(255,255,255,0.06)',
            }}
            animate={{ rotate: isHovered ? 0 : -45 }}
          >
            <FiArrowUpRight size={14} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// ========== WIDE CARD ==========
const WideCard = ({ p, isHovered, onHover, onLeave, delay }) => {
  const rgb = hexToRgb(p.color);
  return (
    <motion.div
      className="pf-wide"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      layout
    >
      <motion.div className="pf-card-topglow" style={{ background: p.color }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} />

      <div className="pf-wide-inner">
        <div className="pf-wide-img-wrap">
          <motion.img src={p.img} alt={p.title} className="pf-wide-img" animate={{ scale: isHovered ? 1.06 : 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />
          <div className="pf-wide-img-ov" />
        </div>

        <div className="pf-wide-content">
          <div className="pf-wide-cat" style={{ color: p.color, borderColor: `rgba(${rgb},0.3)`, background: `rgba(${rgb},0.08)` }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: p.color, animation: 'pfDot 2.5s infinite' }} />
            {p.category}
          </div>

          <h3 className="pf-wide-title">{p.title}</h3>
          <p className="pf-wide-desc">{p.desc}</p>

          <div className="pf-wide-stats">
            <div className="pf-wide-stat">
              <span style={{ color: p.color, fontWeight: 900, fontSize: 22 }}>{p.result}</span>
              <span className="pf-wide-stat-label">{p.resultLabel}</span>
            </div>
          </div>

          <div className="pf-wide-tags">
            {p.tags.map((t, i) => (
              <span key={i} className="pf-wtag" style={{ borderColor: `rgba(${rgb}, 0.15)` }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [hovered, setHovered] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  // Render cards based on layout
  const renderCards = () => {
    if (active !== 'All') {
      // Filtered view: uniform grid
      return (
        <div className="pf-uniform-grid">
          {filtered.map((p, i) => (
            <CompactCard key={p.title} p={p} idx={i} delay={i * 0.07}
              isHovered={hovered === p.title}
              onHover={() => setHovered(p.title)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>
      );
    }

    // "All" view: creative asymmetric layout
    return (
      <div className="pf-creative-layout">
        {/* Row 1: Hero (large) + Tall */}
        <div className="pf-row-1">
          <HeroCard p={projects[0]} idx={0}
            isHovered={hovered === projects[0].title}
            onHover={() => setHovered(projects[0].title)}
            onLeave={() => setHovered(null)}
          />
          <TallCard p={projects[1]} idx={1} delay={0.1}
            isHovered={hovered === projects[1].title}
            onHover={() => setHovered(projects[1].title)}
            onLeave={() => setHovered(null)}
          />
        </div>

        {/* Row 2: 3 compact cards with stagger offset */}
        <div className="pf-row-2">
          {projects.slice(2, 4).map((p, i) => (
            <CompactCard key={p.title} p={p} idx={i + 2} delay={0.15 + i * 0.07}
              isHovered={hovered === p.title}
              onHover={() => setHovered(p.title)}
              onLeave={() => setHovered(null)}
            />
          ))}
          <CompactCard p={projects[5]} idx={5} delay={0.3}
            isHovered={hovered === projects[5].title}
            onHover={() => setHovered(projects[5].title)}
            onLeave={() => setHovered(null)}
          />
        </div>

        {/* Row 3: Wide card */}
        <div className="pf-row-3">
          <WideCard p={projects[4]} delay={0.3}
            isHovered={hovered === projects[4].title}
            onHover={() => setHovered(projects[4].title)}
            onLeave={() => setHovered(null)}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="section" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div className="orange-glow" style={{ width: 500, height: 500, top: '10%', right: '-8%', opacity: 0.15 }} />

      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <Bubble size={10} left={8} delay={0} duration={17} />
        <Bubble size={14} left={25} delay={3} duration={20} color="rgba(96,165,250,0.04)" />
        <Bubble size={8} left={42} delay={6} duration={14} />
        <Bubble size={18} left={58} delay={1.5} duration={21} color="rgba(249,115,22,0.04)" />
        <Bubble size={7} left={72} delay={8} duration={15} />
        <Bubble size={12} left={88} delay={4} duration={18} color="rgba(34,197,94,0.04)" />
      </div>

      <div className="pf-container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          className="pf-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="pill" style={{ marginBottom: 16 }}>Our Work</div>
            <h2 className="pf-heading">
              Projects We're<br /><span style={{ color: 'var(--text2)' }}>Proud Of</span>
            </h2>
          </div>

          <div className="pf-header-right">
            <p className="pf-subtitle">Real results for real businesses — from startups to enterprise.</p>
            <div className="pf-filters">
              {cats.map(cat => {
                const isAct = active === cat;
                return (
                  <motion.button
                    key={cat}
                    className={`pf-filter ${isAct ? 'pf-filter-on' : ''}`}
                    onClick={() => setActive(cat)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {isAct && (
                      <motion.div className="pf-filter-pill" layoutId="pfFilter" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                    )}
                    <span style={{ position: 'relative', zIndex: 1 }}>{cat}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Count */}
        <motion.div className="pf-countbar" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
          <span className="pf-countbar-num">{filtered.length}</span>
          <span className="pf-countbar-label">project{filtered.length !== 1 ? 's' : ''}</span>
          <div className="pf-countbar-line" />
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {renderCards()}
          </motion.div>
        </AnimatePresence>

        {/* Bottom */}
        <motion.div className="pf-bottom" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}>
          <div className="pf-bottom-line" />
          <span className="pf-bottom-text">Have a project in mind?</span>
          <motion.button className="btn btn-orange" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ fontSize: 14, padding: '13px 32px' }}>
            Start a Project <FiArrowUpRight size={15} />
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @keyframes pfDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .pf-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
        }

        /* ========== HEADER ========== */
        .pf-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        .pf-heading { font-size: clamp(1.8rem, 3.5vw, 3rem); }
        .pf-header-right { display: flex; flex-direction: column; align-items: flex-end; gap: 14px; }
        .pf-subtitle { color: var(--text2); font-size: 0.95rem; line-height: 1.75; max-width: 300px; text-align: right; }

        /* Filters */
        .pf-filters { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
        .pf-filter {
          position: relative; padding: 8px 20px; border-radius: 50px; cursor: pointer;
          border: 1px solid rgba(255,255,255,0.08); background: transparent;
          color: rgba(255,255,255,0.45); font-size: 13px; font-weight: 600;
          font-family: inherit; transition: color 0.3s;
        }
        .pf-filter:hover { color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.12); }
        .pf-filter-on { color: #F97316 !important; border-color: transparent !important; }
        .pf-filter-pill {
          position: absolute; inset: 0; border-radius: 50px;
          background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.25);
        }

        /* Count */
        .pf-countbar { display: flex; align-items: center; gap: 10px; margin-bottom: 28px; padding-top: 20px; }
        .pf-countbar-num { font-size: 18px; font-weight: 900; color: #F97316; }
        .pf-countbar-label { font-size: 13px; color: rgba(255,255,255,0.3); font-weight: 500; }
        .pf-countbar-line { flex: 1; height: 1px; background: rgba(255,255,255,0.05); }

        /* ========== CREATIVE LAYOUT (All view) ========== */
        .pf-creative-layout { display: flex; flex-direction: column; gap: 16px; }

        /* Row 1: Hero + Tall */
        .pf-row-1 { display: grid; grid-template-columns: 1.6fr 1fr; gap: 16px; }

        /* Row 2: 3 equal cards */
        .pf-row-2 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

        /* Row 3: Wide */
        .pf-row-3 { display: grid; grid-template-columns: 1fr; gap: 16px; }

        /* Uniform grid (filtered) */
        .pf-uniform-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

        /* ========== SHARED ========== */
        .pf-card-topglow {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          z-index: 3; box-shadow: 0 0 20px currentColor;
        }

        /* ========== HERO CARD ========== */
        .pf-hero-card {
          background: var(--card, #111); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; overflow: hidden; position: relative; cursor: pointer;
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .pf-hero-card:hover { border-color: rgba(255,255,255,0.1); transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.4); }
        .pf-hero-glow { position: absolute; top: 0; left: 0; right: 0; height: 2px; z-index: 3; box-shadow: 0 0 20px currentColor; }

        .pf-hero-inner { display: grid; grid-template-columns: 1.2fr 1fr; min-height: 360px; }
        .pf-hero-img-side { position: relative; overflow: hidden; }
        .pf-hero-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.5; }
        .pf-hero-card:hover .pf-hero-img { opacity: 0.65; }
        .pf-hero-img-ov { position: absolute; inset: 0; background: linear-gradient(135deg, transparent 40%, var(--card, #111) 100%); }

        .pf-hero-float {
          position: absolute; top: 16px; right: 16px; border: 1px solid;
          border-radius: 14px; padding: 12px 18px; backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px); text-align: center; z-index: 2;
        }
        .pf-hero-float-val { display: block; font-size: 24px; font-weight: 900; line-height: 1.2; }
        .pf-hero-float-label { font-size: 9px; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.7; }

        .pf-hero-content { padding: 32px 28px; display: flex; flex-direction: column; justify-content: center; position: relative; }
        .pf-hero-cat {
          display: inline-flex; align-items: center; gap: 7px; border: 1px solid;
          border-radius: 50px; padding: 5px 14px; font-size: 10px; font-weight: 700;
          letter-spacing: 0.6px; text-transform: uppercase; width: fit-content; margin-bottom: 16px;
        }
        .pf-hero-num {
          font-size: 100px; font-weight: 900; position: absolute; top: 10px; right: 20px;
          line-height: 1; letter-spacing: -4px; pointer-events: none; user-select: none;
        }
        .pf-hero-title { font-size: 1.4rem; font-weight: 800; color: white; margin-bottom: 10px; position: relative; z-index: 1; }
        .pf-hero-desc { font-size: 14px; color: var(--text2); line-height: 1.8; margin-bottom: 16px; position: relative; z-index: 1; }
        .pf-hero-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; position: relative; z-index: 1; }
        .pf-htag { font-size: 11px; font-weight: 500; padding: 4px 12px; border-radius: 50px; background: rgba(255,255,255,0.04); border: 1px solid; color: rgba(255,255,255,0.4); }
        .pf-hero-bottom { margin-top: auto; position: relative; z-index: 1; }
        .pf-hero-link { font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 6px; transition: color 0.3s; }

        /* ========== TALL CARD ========== */
        .pf-tall-card {
          background: var(--card, #111); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; overflow: hidden; position: relative; cursor: pointer;
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
          display: flex; flex-direction: column;
        }
        .pf-tall-card:hover { border-color: rgba(255,255,255,0.1); transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.4); }

        .pf-tall-img-wrap { height: 200px; overflow: hidden; position: relative; background: #0a0a0a; }
        .pf-tall-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.5; }
        .pf-tall-card:hover .pf-tall-img { opacity: 0.65; }
        .pf-tall-img-ov { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 40%, var(--card, #111) 100%); }
        .pf-tall-cat {
          position: absolute; bottom: 12px; left: 12px; border: 1px solid;
          border-radius: 50px; padding: 4px 12px; font-size: 10px; font-weight: 700;
          letter-spacing: 0.5px; text-transform: uppercase; display: flex; align-items: center;
          gap: 6px; z-index: 2; backdrop-filter: blur(8px);
        }

        .pf-tall-content { padding: 20px 22px 24px; flex: 1; display: flex; flex-direction: column; }
        .pf-tall-result { display: flex; align-items: baseline; gap: 6px; margin-bottom: 12px; }
        .pf-tall-rv { font-size: 28px; font-weight: 900; }
        .pf-tall-rl { font-size: 11px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.5px; }
        .pf-tall-title { font-size: 1.1rem; font-weight: 800; color: white; margin-bottom: 8px; }
        .pf-tall-desc { font-size: 13.5px; color: var(--text2); line-height: 1.7; margin-bottom: 14px; }
        .pf-tall-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 16px; }
        .pf-ttag { font-size: 10.5px; font-weight: 500; padding: 4px 10px; border-radius: 50px; background: rgba(255,255,255,0.03); border: 1px solid; color: rgba(255,255,255,0.35); }
        .pf-tall-arrow {
          width: 34px; height: 34px; border-radius: 10px; border: 1px solid;
          display: flex; align-items: center; justify-content: center;
          margin-top: auto; margin-left: auto; transition: all 0.3s;
        }

        /* ========== COMPACT CARD ========== */
        .pf-compact {
          background: var(--card, #111); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px; overflow: hidden; position: relative; cursor: pointer;
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
          display: flex; flex-direction: column;
        }
        .pf-compact:hover { border-color: rgba(255,255,255,0.1); transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }

        .pf-compact-img-wrap { height: 180px; overflow: hidden; position: relative; background: #0a0a0a; }
        .pf-compact-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.5; }
        .pf-compact:hover .pf-compact-img { opacity: 0.65; }
        .pf-compact-img-ov { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 35%, var(--card, #111) 100%); }

        .pf-compact-result {
          position: absolute; top: 12px; right: 12px;
          background: rgba(0,0,0,0.5); backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 10px;
          padding: 8px 14px; text-align: center; z-index: 2;
        }
        .pf-cr-val { display: block; font-size: 18px; font-weight: 900; line-height: 1.2; }
        .pf-cr-label { font-size: 8px; text-transform: uppercase; letter-spacing: 0.4px; opacity: 0.6; }

        .pf-compact-content { padding: 18px 20px 20px; flex: 1; display: flex; flex-direction: column; }
        .pf-compact-cat { font-size: 10px; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase; margin-bottom: 6px; }
        .pf-compact-title { font-size: 1.05rem; font-weight: 800; color: white; margin-bottom: 6px; }
        .pf-compact-desc { font-size: 13px; color: var(--text2); line-height: 1.7; margin-bottom: 14px; }

        .pf-compact-bottom { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }
        .pf-compact-tags { display: flex; gap: 4px; }
        .pf-ctag { font-size: 10px; font-weight: 500; padding: 3px 9px; border-radius: 50px; background: rgba(255,255,255,0.03); border: 1px solid; color: rgba(255,255,255,0.3); }
        .pf-compact-arrow {
          width: 30px; height: 30px; border-radius: 8px; border: 1px solid;
          display: flex; align-items: center; justify-content: center; transition: all 0.3s;
        }

        /* ========== WIDE CARD ========== */
        .pf-wide {
          background: var(--card, #111); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; overflow: hidden; position: relative; cursor: pointer;
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .pf-wide:hover { border-color: rgba(255,255,255,0.1); transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.4); }

        .pf-wide-inner { display: grid; grid-template-columns: 1fr 1.3fr; min-height: 220px; }
        .pf-wide-img-wrap { overflow: hidden; position: relative; }
        .pf-wide-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.5; }
        .pf-wide:hover .pf-wide-img { opacity: 0.65; }
        .pf-wide-img-ov { position: absolute; inset: 0; background: linear-gradient(to right, transparent 40%, var(--card, #111) 100%); }

        .pf-wide-content { padding: 28px 28px 28px 20px; display: flex; flex-direction: column; justify-content: center; }
        .pf-wide-cat {
          display: inline-flex; align-items: center; gap: 6px; border: 1px solid;
          border-radius: 50px; padding: 4px 12px; font-size: 10px; font-weight: 700;
          letter-spacing: 0.5px; text-transform: uppercase; width: fit-content; margin-bottom: 12px;
        }
        .pf-wide-title { font-size: 1.2rem; font-weight: 800; color: white; margin-bottom: 8px; }
        .pf-wide-desc { font-size: 13.5px; color: var(--text2); line-height: 1.7; margin-bottom: 14px; }
        .pf-wide-stats { margin-bottom: 12px; }
        .pf-wide-stat { display: flex; align-items: baseline; gap: 8px; }
        .pf-wide-stat-label { font-size: 11px; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 0.3px; }
        .pf-wide-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .pf-wtag { font-size: 10.5px; font-weight: 500; padding: 4px 10px; border-radius: 50px; background: rgba(255,255,255,0.03); border: 1px solid; color: rgba(255,255,255,0.35); }

        /* ========== BOTTOM ========== */
        .pf-bottom { display: flex; align-items: center; gap: 20px; margin-top: 40px; padding-top: 24px; }
        .pf-bottom-line { flex: 1; height: 1px; background: rgba(255,255,255,0.05); }
        .pf-bottom-text { color: rgba(255,255,255,0.4); font-size: 14px; font-weight: 500; white-space: nowrap; }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 1024px) {
          .pf-row-1 { grid-template-columns: 1fr !important; }
          .pf-hero-inner { grid-template-columns: 1fr !important; }
          .pf-hero-img-side { height: 220px; }
          .pf-hero-num { font-size: 60px; }
          .pf-row-2 { grid-template-columns: repeat(2, 1fr) !important; }
          .pf-wide-inner { grid-template-columns: 1fr !important; }
          .pf-wide-img-wrap { height: 180px; }
          .pf-wide-img-ov { background: linear-gradient(to bottom, transparent 40%, var(--card, #111) 100%); }
          .pf-uniform-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .pf-header { flex-direction: column; align-items: flex-start; }
          .pf-header-right { align-items: flex-start; }
          .pf-subtitle { text-align: left; }
          .pf-filters { justify-content: flex-start; }
        }

        @media (max-width: 640px) {
          .pf-container { padding: 0 16px; }
          .pf-row-1, .pf-row-2, .pf-row-3, .pf-uniform-grid {
            grid-template-columns: 1fr !important;
          }
          .pf-hero-inner { min-height: auto; }
          .pf-hero-img-side { height: 200px; }
          .pf-hero-content { padding: 22px; }
          .pf-hero-num { font-size: 50px; right: 14px; }
          .pf-heading { font-size: 1.8rem !important; }
          .pf-compact-img-wrap { height: 160px; }
          .pf-tall-img-wrap { height: 170px; }
          .pf-filter { padding: 7px 16px; font-size: 12px; }
          .pf-bottom { flex-direction: column; text-align: center; gap: 14px; }
          .pf-bottom-line { display: none; }
          .pf-bottom .btn { width: 100%; justify-content: center; }
        }

        @media (max-width: 380px) {
          .pf-compact-img-wrap { height: 140px; }
          .pf-hero-img-side { height: 170px; }
          .pf-compact-result { display: none; }
          .pf-hero-float { display: none; }
          .pf-hero-tags, .pf-compact-tags { display: none; }
        }
      `}</style>
    </section>
  );
}
