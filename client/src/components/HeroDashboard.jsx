// import { useEffect, useState, useRef } from 'react';
// import {
//   AreaChart, Area, BarChart, Bar,
//   XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
// } from 'recharts';

// // --- Generate random-ish but realistic data ---
// const genBounceData = () =>
//   Array.from({ length: 14 }, (_, i) => ({
//     x: (i * 1.0).toFixed(1),
//     users: Math.floor(Math.random() * 60000 + 5000),
//     bounce: Math.max(10, Math.min(95, 80 - i * 4 + Math.random() * 10)),
//   }));

// const genRenderData = () =>
//   Array.from({ length: 14 }, (_, i) => ({
//     x: (i * 0.5).toFixed(1),
//     users: Math.floor(Math.random() * 35000 + 3000),
//     bounce: Math.max(25, Math.min(100, 95 - i * 4 + Math.random() * 8)),
//   }));

// // Animated counter hook
// function useCounter(target, duration = 1800, start = false) {
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let startTime = null;
//     const step = (ts) => {
//       if (!startTime) startTime = ts;
//       const progress = Math.min((ts - startTime) / duration, 1);
//       setVal(Math.floor(progress * target));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [target, duration, start]);
//   return val;
// }

// // Custom tooltip
// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload?.length) {
//     return (
//       <div style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '8px 12px', fontSize: 12 }}>
//         <div style={{ color: '#A3A3A3' }}>Bounce Rate</div>
//         <div style={{ color: 'white', fontWeight: 700 }}>{payload[0]?.value?.toFixed(1)}%</div>
//       </div>
//     );
//   }
//   return null;
// };

// export default function HeroDashboard() {
//   const [bounceData, setBounceData] = useState(genBounceData());
//   const [renderData, setRenderData] = useState(genRenderData());
//   const [started, setStarted] = useState(false);
//   const [tick, setTick] = useState(0);
//   const ref = useRef(null);

//   // Intersection observer to start animation
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);

//   // Live data refresh every 3s
//   useEffect(() => {
//     const id = setInterval(() => {
//       setBounceData(genBounceData());
//       setRenderData(genRenderData());
//       setTick(t => t + 1);
//     }, 3000);
//     return () => clearInterval(id);
//   }, []);

//   const revenue = useCounter(340, 1600, started);
//   const projects = useCounter(200, 1400, started);

//   return (
//     <div ref={ref} style={{ width: '100%', maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
//       {/* Glow behind */}
//       <div style={{ position: 'absolute', inset: -60, background: 'radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

//       {/* Browser chrome */}
//       <div style={{
//         background: '#141414', border: '1px solid rgba(255,255,255,0.1)',
//         borderRadius: 20, overflow: 'hidden',
//         boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(249,115,22,0.08)',
//         position: 'relative', zIndex: 1,
//       }}>
//         {/* Top bar */}
//         <div style={{ background: '#0F0F0F', padding: '11px 20px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
//           <div style={{ display: 'flex', gap: 6 }}>
//             {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
//               <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
//             ))}
//           </div>
//           <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 6, padding: '4px 14px', fontSize: 12, color: '#525252', textAlign: 'center' }}>
//             ANVA web solutions.com
//           </div>
//           <div style={{ display: 'flex', gap: 8 }}>
//             {['⊞', '⊡', '↗'].map((ic, i) => (
//               <span key={i} style={{ fontSize: 13, color: '#525252', cursor: 'pointer' }}>{ic}</span>
//             ))}
//           </div>
//         </div>

//         {/* Dashboard content */}
//         <div style={{ background: '#0D0D0D', padding: '0' }}>
//           {/* Dashboard header */}
//           <div style={{ padding: '14px 20px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//               <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 900, color: 'white' }}>V</div>
//               <span style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>Vaan Tech Analytics</span>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//               <span style={{ fontSize: 12, color: '#525252' }}>USERS: LAST 7 DAYS USING MEDIAN</span>
//               <span style={{ fontSize: 12, color: '#A3A3A3' }}>▾</span>
//             </div>
//           </div>

//           {/* Two charts side by side */}
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
//             {/* Chart 1 — Load Time vs Bounce Rate */}
//             <div style={{ padding: '16px 20px 12px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
//                 <span style={{ fontSize: 11, color: '#525252', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Load Time vs Bounce Rate</span>
//                 <div style={{ display: 'flex', gap: 6 }}>
//                   <span style={{ fontSize: 10, color: '#525252' }}>⊙ OPTIONS</span>
//                 </div>
//               </div>

//               {/* Median label */}
//               <div style={{ fontSize: 10, color: 'var(--orange)', marginBottom: 8, fontWeight: 600 }}>
//                 ◆ Median Page Load (LUX): 2.068s
//               </div>

//               <div style={{ height: 160, position: 'relative' }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={bounceData} margin={{ top: 0, right: 0, left: -28, bottom: 0 }} barCategoryGap="10%">
//                     <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
//                     <XAxis dataKey="x" tick={{ fontSize: 9, fill: '#525252' }} axisLine={false} tickLine={false} interval={2} />
//                     <YAxis tick={{ fontSize: 9, fill: '#525252' }} axisLine={false} tickLine={false} />
//                     <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
//                     <Bar dataKey="users" fill="#06B6D4" radius={[2, 2, 0, 0]} animationDuration={800} />
//                   </BarChart>
//                 </ResponsiveContainer>

//                 {/* Bounce rate line overlay */}
//                 <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <AreaChart data={bounceData} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
//                       <defs>
//                         <linearGradient id="bounceGrad1" x1="0" y1="0" x2="0" y2="1">
//                           <stop offset="5%" stopColor="#F97316" stopOpacity={0.15} />
//                           <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
//                         </linearGradient>
//                       </defs>
//                       <XAxis dataKey="x" hide />
//                       <YAxis hide domain={[0, 100]} />
//                       <Area type="monotone" dataKey="bounce" stroke="#F97316" strokeWidth={2} fill="url(#bounceGrad1)" dot={false} animationDuration={800} />
//                     </AreaChart>
//                   </ResponsiveContainer>
//                 </div>

//                 {/* Bounce rate tooltip bubble */}
//                 <div style={{
//                   position: 'absolute', top: '35%', left: '28%',
//                   background: 'rgba(26,26,26,0.95)', border: '1px solid rgba(255,255,255,0.15)',
//                   borderRadius: 8, padding: '6px 10px', fontSize: 11,
//                 }}>
//                   <div style={{ color: '#A3A3A3', fontSize: 10 }}>Bounce Rate</div>
//                   <div style={{ color: 'white', fontWeight: 800, fontSize: 15 }}>57.1%</div>
//                 </div>
//               </div>

//               {/* Legend */}
//               <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: '#525252' }}>
//                   <div style={{ width: 12, height: 3, background: '#06B6D4', borderRadius: 2 }} /> Page Load
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: '#525252' }}>
//                   <div style={{ width: 12, height: 2, background: '#F97316', borderRadius: 2 }} /> Bounce Rate
//                 </div>
//               </div>
//             </div>

//             {/* Chart 2 — Start Render vs Bounce Rate */}
//             <div style={{ padding: '16px 20px 12px' }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
//                 <span style={{ fontSize: 11, color: '#525252', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Start Render vs Bounce Rate</span>
//                 <span style={{ fontSize: 10, color: '#525252' }}>⊙ OPTIONS</span>
//               </div>

//               <div style={{ fontSize: 10, color: 'var(--orange)', marginBottom: 8, fontWeight: 600 }}>
//                 ◆ Median Start Render (LUX): 1.021s
//               </div>

//               <div style={{ height: 160, position: 'relative' }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={renderData} margin={{ top: 0, right: 0, left: -28, bottom: 0 }} barCategoryGap="10%">
//                     <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
//                     <XAxis dataKey="x" tick={{ fontSize: 9, fill: '#525252' }} axisLine={false} tickLine={false} interval={2} />
//                     <YAxis tick={{ fontSize: 9, fill: '#525252' }} axisLine={false} tickLine={false} />
//                     <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
//                     <Bar dataKey="users" fill="#06B6D4" radius={[2, 2, 0, 0]} animationDuration={800} />
//                   </BarChart>
//                 </ResponsiveContainer>

//                 <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <AreaChart data={renderData} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
//                       <defs>
//                         <linearGradient id="bounceGrad2" x1="0" y1="0" x2="0" y2="1">
//                           <stop offset="5%" stopColor="#F97316" stopOpacity={0.15} />
//                           <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
//                         </linearGradient>
//                       </defs>
//                       <XAxis dataKey="x" hide />
//                       <YAxis hide domain={[0, 100]} />
//                       <Area type="monotone" dataKey="bounce" stroke="#F97316" strokeWidth={2} fill="url(#bounceGrad2)" dot={false} animationDuration={800} />
//                     </AreaChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: '#525252' }}>
//                   <div style={{ width: 12, height: 3, background: '#06B6D4', borderRadius: 2 }} /> Start Render
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: '#525252' }}>
//                   <div style={{ width: 12, height: 2, background: '#F97316', borderRadius: 2 }} /> Bounce Rate
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating card — Revenue (left) */}
//       <div
//         style={{
//           position: 'absolute', top: '22%', left: -36,
//           background: 'rgba(20,20,20,0.95)', backdropFilter: 'blur(20px)',
//           border: '1px solid rgba(249,115,22,0.3)', borderRadius: 14,
//           padding: '14px 18px', boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
//           zIndex: 10,
//           animation: 'float 4s ease-in-out infinite',
//         }}
//       >
//         <div style={{ fontSize: 10, color: '#525252', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Revenue</div>
//         <div style={{ fontWeight: 900, fontSize: '1.6rem', color: 'var(--orange)', letterSpacing: '-0.02em', lineHeight: 1 }}>
//           +{revenue}%
//         </div>
//         <div style={{ fontSize: 11, color: '#22C55E', marginTop: 5, display: 'flex', alignItems: 'center', gap: 4 }}>
//           <span>↑</span> vs last quarter
//         </div>
//       </div>

//       {/* Floating card — Projects (right) */}
//       <div
//         style={{
//           position: 'absolute', top: '14%', right: -36,
//           background: 'rgba(20,20,20,0.95)', backdropFilter: 'blur(20px)',
//           border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14,
//           padding: '14px 18px', boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
//           zIndex: 10,
//           animation: 'float 5s ease-in-out infinite 1s',
//         }}
//       >
//         <div style={{ fontSize: 10, color: '#525252', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Projects</div>
//         <div style={{ fontWeight: 900, fontSize: '1.6rem', color: 'white', letterSpacing: '-0.02em', lineHeight: 1 }}>
//           {projects}+
//         </div>
//         <div style={{ fontSize: 11, color: 'var(--orange)', marginTop: 5 }}>Delivered on time</div>
//       </div>

//       {/* Live indicator */}
//       <div style={{
//         position: 'absolute', bottom: -16, left: '50%', transform: 'translateX(-50%)',
//         background: 'rgba(20,20,20,0.95)', border: '1px solid rgba(255,255,255,0.1)',
//         borderRadius: 50, padding: '6px 16px', fontSize: 11, color: '#A3A3A3',
//         display: 'flex', alignItems: 'center', gap: 6, zIndex: 10,
//         backdropFilter: 'blur(12px)',
//       }}>
//         <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block', animation: 'pulse-orange 2s infinite' }} />
//         Live data · Updates every 3s
//       </div>
//     </div>
//   );
// }



import { useEffect, useState, useRef } from 'react';
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

const genBounceData = () =>
  Array.from({ length: 14 }, (_, i) => ({
    x: (i * 1.0).toFixed(1),
    users: Math.floor(Math.random() * 60000 + 5000),
    bounce: Math.max(10, Math.min(95, 80 - i * 4 + Math.random() * 10)),
  }));

const genRenderData = () =>
  Array.from({ length: 14 }, (_, i) => ({
    x: (i * 0.5).toFixed(1),
    users: Math.floor(Math.random() * 35000 + 3000),
    bounce: Math.max(25, Math.min(100, 95 - i * 4 + Math.random() * 8)),
  }));

function useCounter(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return val;
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div style={{
        background: 'rgba(8,8,8,0.96)', backdropFilter: 'blur(16px)',
        border: '1px solid rgba(249,115,22,0.15)', borderRadius: 10,
        padding: '10px 14px', boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
      }}>
        <div style={{ color: '#525252', fontSize: 10, fontWeight: 600 }}>Bounce Rate</div>
        <div style={{ color: 'white', fontWeight: 800, fontSize: 14, marginTop: 2 }}>{payload[0]?.value?.toFixed(1)}%</div>
      </div>
    );
  }
  return null;
};

export default function HeroDashboard() {
  const [bounceData, setBounceData] = useState(genBounceData());
  const [renderData, setRenderData] = useState(genRenderData());
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(new Date());
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setBounceData(genBounceData());
      setRenderData(genRenderData());
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const revenue = useCounter(340, 1600, started);
  const projects = useCounter(200, 1400, started);

  return (
    <div ref={ref} style={{ width: '100%', maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', inset: -80, background: 'radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: -60, right: -60, width: 400, height: 400, background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{
        background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 22, overflow: 'hidden',
        boxShadow: '0 50px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(249,115,22,0.05), inset 0 1px 0 rgba(255,255,255,0.03)',
        position: 'relative', zIndex: 1,
      }}>

        {/* ===== Browser bar ===== */}
        <div style={{
          background: '#060606', padding: '9px 18px',
          display: 'flex', alignItems: 'center', gap: 12,
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
            ))}
          </div>
          <div style={{
            flex: 1, background: 'rgba(255,255,255,0.025)', borderRadius: 7,
            padding: '4px 14px', fontSize: 11, color: '#2A2A2A', textAlign: 'center',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            border: '1px solid rgba(255,255,255,0.025)',
          }}>
            <span style={{ color: '#22C55E', fontSize: 9 }}>🔒</span>
            ANVA web solutions.com/analytics
          </div>
          <span style={{ fontSize: 9, color: '#1E1E1E', fontFamily: 'monospace' }}>
            {time.toLocaleTimeString()}
          </span>
        </div>

        {/* ===== Dashboard header ===== */}
        <div style={{
          padding: '12px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 24, height: 24, borderRadius: 7,
              background: 'linear-gradient(135deg, #F97316, #EA580C)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 900, color: 'white',
              boxShadow: '0 2px 8px rgba(249,115,22,0.3)',
            }}>V</div>
            <span style={{ fontSize: 13, fontWeight: 800, color: 'white', letterSpacing: '-0.01em' }}>ANVA web solutions Analytics</span>
            <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.06)' }} />
            <span style={{ fontSize: 10, color: '#303030' }}>Performance Monitor</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 10, color: '#303030' }}>USERS: LAST 7 DAYS · MEDIAN</span>
            <span style={{ fontSize: 10, color: '#404040' }}>▾</span>
          </div>
        </div>

        {/* ===== KPI strip ===== */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {[
            { label: 'Revenue Growth', value: `+${revenue}%`, sub: 'vs last quarter', color: '#F97316' },
            { label: 'Projects Delivered', value: `${projects}+`, sub: 'on time delivery', color: '#06B6D4' },
            { label: 'Avg Load Time', value: '0.8s', sub: '4x industry avg', color: '#22C55E' },
            { label: 'Client Satisfaction', value: '4.9/5', sub: '98% retention rate', color: '#A78BFA' },
          ].map((kpi, i, a) => (
            <div key={kpi.label} style={{
              padding: '14px 18px',
              borderRight: i < a.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, ${kpi.color}18, transparent)` }} />
              <div style={{ fontSize: 9, color: '#303030', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>{kpi.label}</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>{kpi.value}</div>
              <div style={{ fontSize: 10, color: '#353535', marginTop: 5, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ color: '#22C55E', fontWeight: 700 }}>↑</span> {kpi.sub}
              </div>
            </div>
          ))}
        </div>

        {/* ===== Two charts side by side ===== */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>

          {/* Chart 1 — Load Time vs Bounce Rate */}
          <div style={{ padding: '16px 20px 14px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <div>
                <span style={{ fontSize: 12, color: 'white', fontWeight: 700 }}>Load Time vs Bounce Rate</span>
                <div style={{ fontSize: 10, color: '#F97316', marginTop: 3, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#F97316' }} />
                  Median Page Load (LUX): 2.068s
                </div>
              </div>
              <div style={{
                padding: '3px 8px', borderRadius: 6,
                background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)',
                fontSize: 9, color: '#22C55E', fontWeight: 700,
              }}>↓ 23% improved</div>
            </div>

            <div style={{ height: 160, position: 'relative', marginTop: 8 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bounceData} margin={{ top: 0, right: 0, left: -28, bottom: 0 }} barCategoryGap="10%">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                  <XAxis dataKey="x" tick={{ fontSize: 8, fill: '#2A2A2A' }} axisLine={false} tickLine={false} interval={2} />
                  <YAxis tick={{ fontSize: 8, fill: '#2A2A2A' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(249,115,22,0.03)' }} />
                  <Bar dataKey="users" fill="#06B6D4" fillOpacity={0.75} radius={[3, 3, 0, 0]} animationDuration={800} />
                </BarChart>
              </ResponsiveContainer>

              {/* Bounce overlay */}
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={bounceData} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
                    <defs>
                      <linearGradient id="bounceGrad1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F97316" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="x" hide />
                    <YAxis hide domain={[0, 100]} />
                    <Area type="monotone" dataKey="bounce" stroke="#F97316" strokeWidth={2} fill="url(#bounceGrad1)" dot={false} animationDuration={800} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Tooltip bubble */}
              <div style={{
                position: 'absolute', top: '30%', left: '26%',
                background: 'rgba(8,8,8,0.95)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(249,115,22,0.2)', borderRadius: 10,
                padding: '7px 11px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}>
                <div style={{ color: '#525252', fontSize: 9 }}>Bounce Rate</div>
                <div style={{ color: '#F97316', fontWeight: 900, fontSize: 16, lineHeight: 1 }}>57.1%</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, marginTop: 8 }}>
              {[{ c: '#06B6D4', l: 'Page Load' }, { c: '#F97316', l: 'Bounce Rate' }].map(x => (
                <div key={x.l} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 9, color: '#404040' }}>
                  <div style={{ width: 10, height: 2.5, background: x.c, borderRadius: 2 }} />{x.l}
                </div>
              ))}
            </div>
          </div>

          {/* Chart 2 — Start Render vs Bounce Rate */}
          <div style={{ padding: '16px 20px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <div>
                <span style={{ fontSize: 12, color: 'white', fontWeight: 700 }}>Start Render vs Bounce Rate</span>
                <div style={{ fontSize: 10, color: '#06B6D4', marginTop: 3, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#06B6D4' }} />
                  Median Start Render (LUX): 1.021s
                </div>
              </div>
              <div style={{
                padding: '3px 8px', borderRadius: 6,
                background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.15)',
                fontSize: 9, color: '#F97316', fontWeight: 700,
              }}>↑ 2.3x faster</div>
            </div>

            <div style={{ height: 160, position: 'relative', marginTop: 8 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={renderData} margin={{ top: 0, right: 0, left: -28, bottom: 0 }} barCategoryGap="10%">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                  <XAxis dataKey="x" tick={{ fontSize: 8, fill: '#2A2A2A' }} axisLine={false} tickLine={false} interval={2} />
                  <YAxis tick={{ fontSize: 8, fill: '#2A2A2A' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(6,182,212,0.03)' }} />
                  <Bar dataKey="users" fill="#06B6D4" fillOpacity={0.75} radius={[3, 3, 0, 0]} animationDuration={800} />
                </BarChart>
              </ResponsiveContainer>

              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={renderData} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
                    <defs>
                      <linearGradient id="bounceGrad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F97316" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="x" hide />
                    <YAxis hide domain={[0, 100]} />
                    <Area type="monotone" dataKey="bounce" stroke="#F97316" strokeWidth={2} fill="url(#bounceGrad2)" dot={false} animationDuration={800} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, marginTop: 8 }}>
              {[{ c: '#06B6D4', l: 'Start Render' }, { c: '#F97316', l: 'Bounce Rate' }].map(x => (
                <div key={x.l} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 9, color: '#404040' }}>
                  <div style={{ width: 10, height: 2.5, background: x.c, borderRadius: 2 }} />{x.l}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Status bar ===== */}
        <div style={{
          padding: '8px 20px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'rgba(0,0,0,0.3)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: '#22C55E',
              boxShadow: '0 0 8px rgba(34,197,94,0.5)',
              animation: 'pg 2s infinite',
            }} />
            <span style={{ fontSize: 10, color: '#22C55E', fontWeight: 600 }}>Live</span>
            <span style={{ color: '#1A1A1A', fontSize: 10 }}>·</span>
            <span style={{ fontSize: 10, color: '#303030' }}>Real-time performance data</span>
            <span style={{ color: '#1A1A1A', fontSize: 10 }}>·</span>
            <span style={{ fontSize: 10, color: '#303030', fontFamily: 'monospace' }}>4s refresh</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 9, color: '#252525' }}>Powered by ANVA web solutions</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pg {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
}

