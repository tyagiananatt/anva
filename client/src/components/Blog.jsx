// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { FiArrowUpRight } from 'react-icons/fi';

// const posts = [
//   { title: 'Why your business website is losing you customers', excerpt: "Most small business websites have 3 critical problems that drive visitors away. Here's what they are and how to fix them.", category: 'Business', date: 'Mar 28, 2026', readTime: '5 min', img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80' },
//   { title: 'Do you actually need a mobile app, or will a website do?', excerpt: "A question we get asked every week. The honest answer depends on your customers — here's how to decide.", category: 'Strategy', date: 'Mar 15, 2026', readTime: '4 min', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80' },
//   { title: 'How to rank on Google in 2026 without spending a fortune', excerpt: "SEO has changed a lot. Here's what actually works today for small and medium businesses.", category: 'SEO', date: 'Mar 5, 2026', readTime: '7 min', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=700&q=80' },
// ];

// export default function Blog() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

//   return (
//     <section id="blog" className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
//       <div className="container" ref={ref}>
//         <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
//           style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
//           <div>
//             <div className="pill" style={{ marginBottom: 16 }}>From the Blog</div>
//             <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', maxWidth: 400 }}>
//               Practical Advice For<br /><span style={{ color: 'var(--text2)' }}>Business Owners</span>
//             </h2>
//           </div>
//           <motion.button className="btn btn-dark" whileHover={{ scale: 1.03 }} style={{ fontSize: 14 }}>
//             All Articles <FiArrowUpRight size={14} />
//           </motion.button>
//         </motion.div>

//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="blog-grid">
//           {posts.map((post, i) => (
//             <motion.article key={i} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.6 }}
//               className="card-base" style={{ cursor: 'pointer' }} whileHover={{ y: -4 }}>
//               <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
//                 <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75, transition: 'transform 0.5s, opacity 0.3s' }}
//                   onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.opacity = '0.6'; }}
//                   onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.opacity = '0.75'; }} />
//                 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, var(--card) 100%)' }} />
//               </div>
//               <div style={{ padding: '20px 22px 24px' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
//                   <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', background: 'rgba(249,115,22,0.1)', padding: '4px 12px', borderRadius: 50, border: '1px solid var(--orange-border)' }}>{post.category}</span>
//                   <span style={{ fontSize: 12, color: 'var(--text3)' }}>{post.readTime} read</span>
//                 </div>
//                 <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 10, color: 'white' }}>{post.title}</h3>
//                 <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt}</p>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <span style={{ fontSize: 13, color: 'var(--text3)' }}>{post.date}</span>
//                   <motion.span whileHover={{ x: 3 }} style={{ fontSize: 13, fontWeight: 700, color: 'var(--orange)', display: 'flex', alignItems: 'center', gap: 4 }}>
//                     Read <FiArrowUpRight size={13} />
//                   </motion.span>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @media(max-width:900px){.blog-grid{grid-template-columns:repeat(2,1fr)!important}}
//         @media(max-width:560px){.blog-grid{grid-template-columns:1fr!important}}
//       `}</style>
//     </section>
//   );
// }





import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowUpRight, FiClock, FiBookOpen } from 'react-icons/fi';
import { useState } from 'react';

const posts = [
  {
    title: 'Why your business website is losing you customers',
    excerpt: "Most small business websites have 3 critical problems that drive visitors away. Here's what they are and how to fix them.",
    category: 'Business',
    date: 'Mar 28, 2026',
    readTime: '5 min',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80',
    color: '#F97316',
    author: 'ANVA web solutions Team',
  },
  {
    title: 'Do you actually need a mobile app, or will a website do?',
    excerpt: "A question we get asked every week. The honest answer depends on your customers — here's how to decide.",
    category: 'Strategy',
    date: 'Mar 15, 2026',
    readTime: '4 min',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80',
    color: '#60A5FA',
    author: 'ANVA web solutions Team',
  },
  {
    title: 'How to rank on Google in 2026 without spending a fortune',
    excerpt: "SEO has changed a lot. Here's what actually works today for small and medium businesses.",
    category: 'SEO',
    date: 'Mar 5, 2026',
    readTime: '7 min',
    img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=700&q=80',
    color: '#22C55E',
    author: 'ANVA web solutions Team',
  },
];

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : '249,115,22';
}

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const [hovered, setHovered] = useState(null);

  return (
    <section id="blog" className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="orange-glow" style={{ width: 400, height: 400, bottom: '-10%', left: '-5%', opacity: 0.1 }} />

      <div className="bg-container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>

        {/* ===== HEADER — Newspaper masthead style ===== */}
        <motion.div
          className="bg-masthead"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-masthead-top">
            <div className="bg-masthead-left">
              <div className="pill" style={{ marginBottom: 14 }}>From the Blog</div>
              <h2 className="bg-title">
                Practical Advice For<br />
                <span style={{ color: 'var(--text2)' }}>Business Owners</span>
              </h2>
            </div>

            <div className="bg-masthead-right">
              <p className="bg-subtitle">
                Honest, no-fluff articles to help you make smarter digital decisions.
              </p>
              <motion.button
                className="btn btn-dark"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ fontSize: 14 }}
              >
                All Articles <FiArrowUpRight size={14} />
              </motion.button>
            </div>
          </div>

          {/* Double line divider — newspaper style */}
          <div className="bg-double-rule">
            <div className="bg-rule" />
            <div className="bg-rule bg-rule-thin" />
          </div>
        </motion.div>

        {/* ===== ARTICLES — Numbered list style ===== */}
        <div className="bg-articles">
          {posts.map((post, i) => {
            const isHov = hovered === i;
            const rgb = hexToRgb(post.color);

            return (
              <motion.article
                key={i}
                className="bg-article"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Left: Number */}
                <div className="bg-num-col">
                  <span
                    className="bg-num"
                    style={{ color: isHov ? post.color : 'rgba(255,255,255,0.06)' }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Middle: Content */}
                <div className="bg-text-col">
                  <div className="bg-meta-row">
                    <span
                      className="bg-cat"
                      style={{
                        color: post.color,
                        borderColor: `rgba(${rgb}, 0.25)`,
                        background: isHov ? `rgba(${rgb}, 0.08)` : 'transparent',
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="bg-meta-dot" />
                    <span className="bg-date">{post.date}</span>
                    <span className="bg-meta-dot" />
                    <span className="bg-readtime"><FiClock size={11} /> {post.readTime}</span>
                  </div>

                  <h3
                    className="bg-article-title"
                    style={{ color: isHov ? 'white' : 'rgba(255,255,255,0.85)' }}
                  >
                    {post.title}
                  </h3>

                  <p className="bg-excerpt">{post.excerpt}</p>

                  <div className="bg-article-footer">
                    <div className="bg-author">
                      <FiBookOpen size={13} style={{ color: 'rgba(255,255,255,0.25)' }} />
                      <span>{post.author}</span>
                    </div>
                    <motion.span
                      className="bg-read-link"
                      style={{ color: isHov ? post.color : 'rgba(255,255,255,0.2)' }}
                      animate={{ x: isHov ? 3 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      Read Article <FiArrowUpRight size={13} />
                    </motion.span>
                  </div>
                </div>

                {/* Right: Thumbnail */}
                <div className="bg-thumb-col">
                  <div className="bg-thumb" style={{
                    borderColor: isHov ? `rgba(${rgb}, 0.2)` : 'rgba(255,255,255,0.06)',
                  }}>
                    <motion.img
                      src={post.img}
                      alt={post.title}
                      animate={{ scale: isHov ? 1.08 : 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Colored corner accent */}
                    <motion.div
                      className="bg-thumb-accent"
                      style={{ background: post.color }}
                      animate={{ opacity: isHov ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Bottom separator */}
                {i < posts.length - 1 && <div className="bg-separator" />}

                {/* Hover background glow */}
                <motion.div
                  className="bg-row-glow"
                  style={{ background: `radial-gradient(ellipse at center, rgba(${rgb}, 0.03) 0%, transparent 70%)` }}
                  animate={{ opacity: isHov ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.article>
            );
          })}
        </div>

        {/* ===== BOTTOM CTA STRIP ===== */}
        <motion.div
          className="bg-cta-strip"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-cta-left">
            <span className="bg-cta-icon">📬</span>
            <div>
              <span className="bg-cta-title">Stay in the loop</span>
              <span className="bg-cta-desc">Get articles like these in your inbox. No spam, unsubscribe anytime.</span>
            </div>
          </div>
          <div className="bg-cta-form">
            <input type="email" placeholder="your@email.com" className="bg-cta-input" />
            <motion.button
              className="bg-cta-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .bg-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
        }

        /* ========== MASTHEAD ========== */
        .bg-masthead {
          margin-bottom: 0;
        }
        .bg-masthead-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .bg-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          max-width: 420px;
        }
        .bg-masthead-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 14px;
        }
        .bg-subtitle {
          color: var(--text2);
          font-size: 0.92rem;
          line-height: 1.7;
          max-width: 280px;
          text-align: right;
        }

        /* Double rule */
        .bg-double-rule {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 8px;
        }
        .bg-rule {
          height: 2px;
          background: rgba(255,255,255,0.08);
          border-radius: 2px;
        }
        .bg-rule-thin {
          height: 1px;
          background: rgba(255,255,255,0.04);
        }

        /* ========== ARTICLES ========== */
        .bg-articles {
          display: flex;
          flex-direction: column;
        }

        .bg-article {
          display: grid;
          grid-template-columns: 60px 1fr 180px;
          gap: 24px;
          padding: 32px 0;
          position: relative;
          cursor: pointer;
          align-items: start;
        }

        /* Row glow */
        .bg-row-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: 16px;
        }

        /* Separator */
        .bg-separator {
          position: absolute;
          bottom: 0;
          left: 60px;
          right: 0;
          height: 1px;
          background: rgba(255,255,255,0.05);
          grid-column: 1 / -1;
        }

        /* Number */
        .bg-num-col {
          padding-top: 4px;
        }
        .bg-num {
          font-size: 48px;
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 1;
          transition: color 0.4s ease;
          display: block;
          font-variant-numeric: tabular-nums;
        }

        /* Text */
        .bg-text-col {
          position: relative;
          z-index: 1;
        }

        .bg-meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .bg-cat {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 3px 12px;
          border: 1px solid;
          border-radius: 50px;
          transition: all 0.3s;
        }

        .bg-meta-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
        }

        .bg-date {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          font-weight: 500;
        }

        .bg-readtime {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .bg-article-title {
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1.4;
          margin-bottom: 8px;
          transition: color 0.3s;
          max-width: 540px;
        }

        .bg-excerpt {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.75;
          margin-bottom: 14px;
          max-width: 500px;
        }

        .bg-article-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 500px;
        }

        .bg-author {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: rgba(255,255,255,0.25);
          font-weight: 500;
        }

        .bg-read-link {
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.3s;
        }

        /* Thumbnail */
        .bg-thumb-col {
          position: relative;
          z-index: 1;
        }
        .bg-thumb {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid;
          position: relative;
          transition: border-color 0.3s;
        }
        .bg-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
          transition: opacity 0.4s;
        }
        .bg-article:hover .bg-thumb img {
          opacity: 0.75;
        }

        .bg-thumb-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          border-radius: 0 3px 0 0;
        }

        /* ========== CTA STRIP ========== */
        .bg-cta-strip {
          margin-top: 20px;
          padding: 28px 32px;
          background: var(--card, #111);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .bg-cta-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .bg-cta-icon {
          font-size: 28px;
          display: block;
          line-height: 1;
        }
        .bg-cta-title {
          font-size: 15px;
          font-weight: 700;
          color: white;
          display: block;
          margin-bottom: 2px;
        }
        .bg-cta-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          display: block;
        }

        .bg-cta-form {
          display: flex;
          gap: 8px;
        }
        .bg-cta-input {
          padding: 11px 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: white;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          min-width: 220px;
          transition: border-color 0.3s;
        }
        .bg-cta-input:focus {
          border-color: rgba(249,115,22,0.4);
        }
        .bg-cta-input::placeholder {
          color: rgba(255,255,255,0.2);
        }
        .bg-cta-btn {
          padding: 11px 24px;
          background: #F97316;
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.3s;
          white-space: nowrap;
        }
        .bg-cta-btn:hover {
          background: #ea6c10;
          box-shadow: 0 4px 20px rgba(249,115,22,0.3);
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 860px) {
          .bg-article {
            grid-template-columns: 40px 1fr 140px;
            gap: 16px;
            padding: 24px 0;
          }
          .bg-num {
            font-size: 36px;
          }
          .bg-article-title {
            font-size: 1.1rem;
          }
          .bg-masthead-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .bg-masthead-right {
            align-items: flex-start;
          }
          .bg-subtitle {
            text-align: left;
          }
          .bg-cta-strip {
            flex-direction: column;
            text-align: center;
          }
          .bg-cta-left {
            flex-direction: column;
            text-align: center;
          }
          .bg-cta-form {
            width: 100%;
          }
          .bg-cta-input {
            flex: 1;
            min-width: 0;
          }
        }

        @media (max-width: 640px) {
          .bg-container { padding: 0 16px; }
          .bg-article {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 24px 0;
          }
          .bg-num-col {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .bg-num {
            font-size: 28px;
          }
          .bg-thumb-col {
            order: -1;
          }
          .bg-thumb {
            aspect-ratio: 16/8;
            border-radius: 12px;
          }
          .bg-separator {
            left: 0;
          }
          .bg-article-title {
            font-size: 1.05rem;
          }
          .bg-excerpt {
            font-size: 13px;
          }
          .bg-title {
            font-size: 1.7rem !important;
          }
          .bg-cta-form {
            flex-direction: column;
          }
          .bg-cta-input {
            width: 100%;
          }
          .bg-cta-btn {
            width: 100%;
          }
        }

        @media (max-width: 380px) {
          .bg-excerpt {
            display: none;
          }
          .bg-thumb {
            aspect-ratio: 16/7;
          }
          .bg-article-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}
