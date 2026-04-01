import { motion } from 'framer-motion';

const clients = [
  'NexaRetail', 'FinFlow Inc.', 'EduSpark', 'PropVision',
  'HealthBridge', 'TradeVault', 'FlowDesk', 'MediCare',
  'NexaRetail', 'FinFlow Inc.', 'EduSpark', 'PropVision',
  'HealthBridge', 'TradeVault', 'FlowDesk', 'MediCare',
];

export default function LogoStrip() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
      `}</style>

      <div style={{
        padding: '44px 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}>
        <p style={{
          textAlign: 'center',
          fontSize: 13,
          color: 'var(--text3)',
          marginBottom: 28,
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.01em',
        }}>
          Trusted by <span style={{ color: 'var(--orange)', fontWeight: 700 }}>500+</span> teams across tech, product, and creative industries
        </p>

        <div style={{ overflow: 'hidden', position: 'relative' }}>
          {/* Left fade */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
            background: 'linear-gradient(to right, var(--bg), transparent)',
            zIndex: 2, pointerEvents: 'none',
          }} />
          {/* Right fade */}
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
            background: 'linear-gradient(to left, var(--bg), transparent)',
            zIndex: 2, pointerEvents: 'none',
          }} />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{
              display: 'flex',
              gap: 0,
              whiteSpace: 'nowrap',
              width: 'max-content',
              alignItems: 'center',
            }}
          >
            {clients.map((name, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                  color: 'rgba(255,255,255,0.18)',
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  padding: '0 40px',
                  transition: 'color 0.2s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => e.target.style.color = 'rgba(249,115,22,0.7)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.18)'}
                >
                  {name}
                </span>
                {/* Separator dot */}
                <span style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: 'rgba(249,115,22,0.35)',
                  display: 'inline-block', flexShrink: 0,
                }} />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
