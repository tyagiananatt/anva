import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import FooterDashboard from './FooterDashboard';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)' }}>
      {/* Taskpad-style CTA — orange left, mockup right */}
      <div style={{ maxWidth: 1160, margin: '80px auto 0', padding: '0 28px' }}>
        <div style={{
          borderRadius: 24, overflow: 'hidden',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          minHeight: 320, border: '1px solid var(--border)',
        }} className="cta-split">
          {/* Left — orange */}
          <div style={{ background: 'var(--orange)', padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
            <div className="pill" style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)', color: 'white', marginBottom: 24, width: 'fit-content' }}>Book a Consultation</div>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@700&family=Bricolage+Grotesque:opsz,wght@12..96,800&display=swap');`}</style>
            <h2 style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
              color: 'white',
              marginBottom: 32,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
            }}>
              Turn Tasks Into<br />Clear Priorities
            </h2>
            <Link to="contact" smooth duration={600} offset={-68}>
              <motion.button className="btn btn-white" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ fontSize: 15, padding: '14px 32px', width: 'fit-content' }}>
                Start Free Trial
              </motion.button>
            </Link>
          </div>

          {/* Right — dynamic dashboard */}
          <div style={{ background: 'var(--card)', position: 'relative', overflow: 'hidden', padding: 20 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(249,115,22,0.06), transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
              <FooterDashboard />
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="footer-cols">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                  <img src="/logo.png" alt="ANVA logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontWeight: 700, fontSize: 17, color: 'white', letterSpacing: '-0.02em' }}><span style={{ color: 'var(--orange)' }}>ANVA</span> web solutions</span>
              </div>
              <p style={{ color: 'var(--text3)', fontSize: 14, lineHeight: 1.8, maxWidth: 260, marginBottom: 28 }}>
                Building professional websites and digital solutions for businesses of all sizes.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {[FiTwitter, FiLinkedin, FiInstagram].map((Icon, i) => (
                  <motion.a key={i} href="#" whileHover={{ borderColor: 'var(--orange)', color: 'var(--orange)' }}
                    style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text3)', textDecoration: 'none', transition: 'all 0.2s' }}>
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>

            {[
              { title: 'Product', links: ['Web Development', 'E-Commerce', 'Mobile Apps', 'UI/UX Design', 'SEO'] },
              { title: 'Company', links: ['About', 'Our Work', 'Process', 'Pricing', 'Blog'] },
              { title: 'Resource', links: ['Get a Quote', 'hello@anvawebsolutions.com', '+1 (555) 123-4567', 'San Francisco, CA'] },
            ].map(col => (
              <div key={col.title}>
                <h4 style={{ fontSize: 12, fontWeight: 700, color: 'var(--text3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>{col.title}</h4>
                <ul style={{ listStyle: 'none' }}>
                  {col.links.map(link => (
                    <li key={link} style={{ marginBottom: 12 }}>
                      <motion.a href="#" whileHover={{ color: 'var(--orange)' }} style={{ color: 'var(--text3)', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}>{link}</motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ color: 'var(--text3)', fontSize: 13 }}>© 2026 ANVA web solutions. All rights reserved.</p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Privacy Policy', 'Terms of Service'].map(l => (
                <a key={l} href="#" style={{ color: 'var(--text3)', fontSize: 13, textDecoration: 'none' }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:860px){.cta-split{grid-template-columns:1fr!important}.footer-cols{grid-template-columns:1fr 1fr!important}}
        @media(max-width:560px){.footer-cols{grid-template-columns:1fr!important}}
      `}</style>
    </footer>
  );
}
