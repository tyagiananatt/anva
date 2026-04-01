import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const plans = [
  { name: 'Individual', price: '$999', note: 'one-time', desc: 'For personal & small business websites', features: ['Up to 5 pages', 'Mobile-friendly design', 'Contact form', 'Basic SEO setup', 'Google Analytics'], cta: 'Get Started Free', highlight: false },
  { name: 'Team', price: '$2,999', note: 'one-time', desc: 'For small teams who move fast', features: ['Up to 20 pages', 'Custom design', 'CMS integration', 'E-commerce ready', 'Payment integration', 'Advanced SEO', '3 months support', 'Productivity insights'], cta: 'Start Team Trial', highlight: true },
  { name: 'Business', price: '$120', note: '/month', desc: 'For growing teams and organizations', features: ['Unlimited scope', 'Custom web application', 'API & integrations', 'Dedicated PM', '12 months support', 'Role & permission controls', 'Priority support'], cta: 'Contact Sales', highlight: false },
];

const bottomBadges = ['Up to 30% less time spent planning', 'Fewer missed deadlines', 'Higher focus consistency'];

export default function Pricing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="pricing" className="section" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div className="orange-glow" style={{ width: 600, height: 600, top: '-10%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="pill" style={{ margin: '0 auto 24px' }}>Pricing</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', maxWidth: 480, margin: '0 auto 16px' }}>
            Clear Pricing,<br /><span style={{ color: 'var(--text2)' }}>No Surprises</span>
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '1.05rem', maxWidth: 440, margin: '0 auto' }}>
            Every project is different. Here's a starting point — we'll give you an exact quote after a free call.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'start', marginBottom: 40 }} className="price-grid">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: plan.highlight ? 'var(--orange)' : 'var(--card)',
                border: `1px solid ${plan.highlight ? 'var(--orange)' : 'var(--border)'}`,
                borderRadius: 20, padding: '32px 28px',
                position: 'relative',
                boxShadow: plan.highlight ? '0 20px 60px rgba(249,115,22,0.3)' : 'none',
              }}>
              {plan.highlight && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--card2)', color: 'white', padding: '5px 18px', borderRadius: 50, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', border: '1px solid var(--border2)' }}>Most Popular</div>
              )}

              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: plan.highlight ? 'rgba(255,255,255,0.8)' : 'var(--text2)', marginBottom: 16, letterSpacing: '0.02em' }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
                  <span style={{ fontWeight: 900, fontSize: '3rem', letterSpacing: '-0.04em', color: plan.highlight ? 'white' : 'white', lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ fontSize: 14, color: plan.highlight ? 'rgba(255,255,255,0.6)' : 'var(--text3)' }}>{plan.note}</span>
                </div>
                <p style={{ fontSize: 14, color: plan.highlight ? 'rgba(255,255,255,0.75)' : 'var(--text2)' }}>{plan.desc}</p>
              </div>

              <Link to="contact" smooth duration={600} offset={-68}>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className={plan.highlight ? 'btn btn-white' : 'btn btn-orange'}
                  style={{ width: '100%', justifyContent: 'center', fontSize: 14, marginBottom: 28 }}>
                  {plan.cta}
                </motion.button>
              </Link>

              <div>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                    <FiCheck size={14} style={{ color: plan.highlight ? 'rgba(255,255,255,0.9)' : 'var(--orange)', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 14, color: plan.highlight ? 'rgba(255,255,255,0.8)' : 'var(--text2)', lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badges */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          {bottomBadges.map(b => (
            <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text3)', fontSize: 14 }}>
              <FiCheck size={14} color="var(--orange)" /> {b}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`@media(max-width:900px){.price-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
