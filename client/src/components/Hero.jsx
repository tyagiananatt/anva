import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiPlay } from 'react-icons/fi';
import HeroDashboard from './HeroDashboard';

const f = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="dot-grid"
      style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 28px 100px',
        position: 'relative', overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Warm orange glow center */}
      <div style={{
        position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 500,
        background: 'radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Scattered orange dots */}
      {[
        { top: '12%', left: '8%' }, { top: '20%', right: '10%' },
        { top: '35%', left: '15%' }, { top: '15%', right: '25%' },
        { top: '45%', left: '5%' }, { top: '8%', left: '45%' },
      ].map((pos, i) => (
        <div key={i} style={{ position: 'absolute', width: 3, height: 3, borderRadius: '50%', background: 'rgba(249,115,22,0.4)', pointerEvents: 'none', ...pos }} />
      ))}

      {/* Text content */}
      <div style={{ maxWidth: 820, position: 'relative', zIndex: 2 }}>
        <motion.div {...f(0)} style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <div className="pill">Built for Modern Businesses</div>
        </motion.div>

        <motion.h1
          {...f(0.1)}
          style={{ fontSize: 'clamp(3rem, 7vw, 5.8rem)', marginBottom: 24, lineHeight: 1.05, color: 'white' }}
        >
          We Build Websites<br />
          <span style={{ color: 'var(--text2)' }}>That Win Clients.</span>
        </motion.h1>

        <motion.p
          {...f(0.2)}
          style={{ fontSize: '1.15rem', color: 'var(--text2)', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 44px', fontWeight: 400 }}
        >
          ANVA web solutions designs and builds professional websites, web apps, and business systems for startups and growing companies — no tech knowledge needed.
        </motion.p>

        <motion.div {...f(0.3)} style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 80 }}>
          <Link to="contact" smooth duration={600} offset={-68}>
            <motion.button className="btn btn-orange" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ fontSize: 15, padding: '15px 36px' }}>
              Start Free Consultation
            </motion.button>
          </Link>
          <Link to="portfolio" smooth duration={600} offset={-68}>
            <motion.button className="btn btn-dark" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ fontSize: 15, padding: '15px 32px' }}>
              <FiPlay size={14} /> Watch Demo
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Dynamic dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '100%', position: 'relative', zIndex: 2, paddingBottom: 32 }}
      >
        <HeroDashboard />
      </motion.div>
    </section>
  );
}
