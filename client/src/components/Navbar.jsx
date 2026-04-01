import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

const links = [
  { label: 'Home', to: 'hero' },
  { label: 'Services', to: 'services' },
  { label: 'Work', to: 'portfolio' },
  { label: 'About', to: 'about' },
  { label: 'Pricing', to: 'pricing' },
  { label: 'Blog', to: 'blog' },
  { label: 'Contact', to: 'contact' },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['hero', 'services', 'portfolio', 'about', 'pricing', 'blog', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(sections[i]); break; }
      }
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNav = (to) => { scrollTo(to); setActive(to); setOpen(false); };

  return (
    <>
      {/* Floating pill navbar */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');`}</style>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <div style={{
          background: scrolled ? 'rgba(14,14,14,0.88)' : 'rgba(14,14,14,0.5)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
          width: '100%',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
          transition: 'all 0.3s ease',
        }}>

          {/* Logo */}
          <motion.div
            onClick={() => handleNav('hero')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', flexShrink: 0 }}
          >
            <div style={{
              width: 30, height: 30, borderRadius: '50%',
              background: 'var(--orange)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 900, color: 'white',
              boxShadow: '0 0 12px rgba(249,115,22,0.5)',
            }}>V</div>
            <span style={{
              fontWeight: 800, fontSize: 16,
              color: 'white', letterSpacing: '-0.03em',
              fontFamily: "'Syne', sans-serif",
            }}>Vaan Tech</span>
          </motion.div>

          {/* Desktop links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative' }} className="desk-nav">
            {links.map((l) => {
              const isActive = active === l.to;
              return (
                <motion.button
                  key={l.to}
                  onClick={() => handleNav(l.to)}
                  whileHover={{ color: 'white' }}
                  style={{
                    position: 'relative',
                    padding: '7px 15px',
                    cursor: 'pointer',
                    fontSize: 13.5,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'white' : 'rgba(255,255,255,0.5)',
                    background: 'none',
                    border: 'none',
                    borderRadius: 50,
                    transition: 'color 0.2s',
                    fontFamily: 'Inter, sans-serif',
                    outline: 'none',
                  }}
                >
                  {/* Active pill bg */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: 50,
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{l.label}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desk-nav">
            <motion.button
              onClick={() => handleNav('contact')}
              whileHover={{ scale: 1.04, boxShadow: '0 6px 24px rgba(249,115,22,0.5)' }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '9px 20px',
                background: 'var(--orange)',
                border: 'none', borderRadius: 50,
                color: 'white', fontWeight: 700, fontSize: 13.5,
                cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                boxShadow: '0 4px 16px rgba(249,115,22,0.35)',
                transition: 'box-shadow 0.2s',
              }}
            >
              Get Started <FiArrowRight size={13} />
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            className="mob-toggle"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%',
              width: 38, height: 38,
              display: 'none',
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'white', fontSize: 18,
              flexShrink: 0,
            }}
          >
            {open ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
              background: 'rgba(14,14,14,0.96)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              padding: '12px 24px 20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
            }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(l.to)}
                style={{
                  padding: '13px 20px',
                  fontSize: 15, fontWeight: 600,
                  cursor: 'pointer',
                  color: active === l.to ? 'var(--orange)' : 'rgba(255,255,255,0.75)',
                  borderRadius: 14,
                  background: active === l.to ? 'rgba(249,115,22,0.08)' : 'transparent',
                  transition: 'all 0.15s',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}
              >
                {l.label}
                {active === l.to && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--orange)' }} />}
              </motion.div>
            ))}
            <div style={{ padding: '8px 0 0', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 8 }}>
              <motion.button
                onClick={() => handleNav('contact')}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: '100%', padding: '13px 20px',
                  background: 'var(--orange)', border: 'none',
                  borderRadius: 12, color: 'white',
                  fontWeight: 700, fontSize: 15,
                  cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                }}
              >
                Get Started <FiArrowRight size={14} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .mob-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
