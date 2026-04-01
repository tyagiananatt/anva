import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
  { value: 50, suffix: '+', label: 'Happy Clients', icon: '😊' },
  { value: 5, suffix: '★', label: 'Average Rating', icon: '⭐' },
  { value: 99, suffix: '%', label: 'Client Retention', icon: '🔄' },
  { value: 3, suffix: 'yrs', label: 'Industry Experience', icon: '📅' },
  { value: 24, suffix: '/7', label: 'Support Available', icon: '🛡️' },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section style={{ padding: '60px 0', position: 'relative', zIndex: 2 }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(255,101,132,0.05))',
        borderTop: '1px solid rgba(108,99,255,0.15)',
        borderBottom: '1px solid rgba(108,99,255,0.15)',
        padding: '60px 0',
      }}>
        <div className="container" ref={ref}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 32,
          }}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>{stat.icon}</div>
                <div style={{
                  fontSize: '2.5rem', fontWeight: 800,
                  background: 'var(--gradient)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  lineHeight: 1,
                }}>
                  {inView && <CountUp end={stat.value} duration={2.5} delay={i * 0.1} />}
                  {stat.suffix}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 6 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
