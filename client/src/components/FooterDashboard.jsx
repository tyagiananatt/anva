// import { useEffect, useState } from 'react';
// import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

// const genData = () =>
//   Array.from({ length: 12 }, (_, i) => ({
//     name: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i],
//     revenue: Math.floor(Math.random() * 60 + 40),
//     clients: Math.floor(Math.random() * 40 + 20),
//   }));

// const tasks = [
//   { label: 'Website Redesign', status: 'In Progress', pct: 78, color: '#F97316' },
//   { label: 'Campaign Planning', status: 'In Progress', pct: 45, color: '#06B6D4' },
//   { label: 'Q3 Roadmap Execution', status: 'Not Started', pct: 12, color: '#525252' },
//   { label: 'Mobile App MVP', status: 'In Progress', pct: 61, color: '#F97316' },
// ];

// export default function FooterDashboard() {
//   const [data, setData] = useState(genData());

//   useEffect(() => {
//     const id = setInterval(() => setData(genData()), 3500);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <div style={{
//       background: '#0D0D0D', borderRadius: 14, overflow: 'hidden',
//       border: '1px solid rgba(255,255,255,0.08)',
//       height: '100%', minHeight: 260,
//     }}>
//       {/* Mini top bar */}
//       <div style={{ background: '#111', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
//         <div style={{ display: 'flex', gap: 5 }}>
//           {['#FF5F57','#FFBD2E','#28CA41'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
//         </div>
//         <span style={{ fontSize: 11, color: '#525252', marginLeft: 6 }}>All Tasks</span>
//       </div>

//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 'calc(100% - 37px)' }}>
//         {/* Left — task list */}
//         <div style={{ padding: '14px 16px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
//           <div style={{ fontSize: 10, color: '#525252', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Active Projects</div>
//           {tasks.map((t, i) => (
//             <div key={i} style={{ marginBottom: 12 }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
//                 <span style={{ fontSize: 11, color: '#D4D4D4', fontWeight: 500 }}>{t.label}</span>
//                 <span style={{ fontSize: 10, color: t.color, fontWeight: 600 }}>{t.pct}%</span>
//               </div>
//               <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
//                 <div style={{ height: '100%', width: `${t.pct}%`, background: t.color, borderRadius: 2, transition: 'width 0.8s ease' }} />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right — mini chart */}
//         <div style={{ padding: '14px 12px' }}>
//           <div style={{ fontSize: 10, color: '#525252', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Revenue Trend</div>
//           <div style={{ height: 120 }}>
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={data} margin={{ top: 4, right: 0, left: -32, bottom: 0 }}>
//                 <defs>
//                   <linearGradient id="footerGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#F97316" stopOpacity={0.3} />
//                     <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//                 <XAxis dataKey="name" tick={{ fontSize: 8, fill: '#525252' }} axisLine={false} tickLine={false} interval={2} />
//                 <YAxis hide />
//                 <Tooltip
//                   contentStyle={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, fontSize: 11 }}
//                   labelStyle={{ color: '#A3A3A3' }}
//                   itemStyle={{ color: '#F97316' }}
//                 />
//                 <Area type="monotone" dataKey="revenue" stroke="#F97316" strokeWidth={2} fill="url(#footerGrad)" dot={false} animationDuration={800} />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//           {/* Live badge */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 8 }}>
//             <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
//             <span style={{ fontSize: 10, color: '#525252' }}>Live · auto-updating</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, BarChart, Bar } from 'recharts';

const genData = () =>
  Array.from({ length: 12 }, (_, i) => ({
    name: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i],
    revenue: Math.floor(Math.random() * 60 + 40),
    clients: Math.floor(Math.random() * 40 + 20),
  }));

const genMiniBar = () =>
  Array.from({ length: 7 }, (_, i) => ({
    name: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i],
    value: Math.floor(Math.random() * 80 + 20),
  }));

const tasks = [
  { label: 'Website Redesign', status: 'In Progress', pct: 78, color: '#F97316', icon: '🌐' },
  { label: 'Campaign Planning', status: 'In Progress', pct: 45, color: '#60A5FA', icon: '📊' },
  { label: 'Q3 Roadmap', status: 'Review', pct: 92, color: '#22C55E', icon: '🗺️' },
  { label: 'Mobile App MVP', status: 'In Progress', pct: 61, color: '#A78BFA', icon: '📱' },
];

const metrics = [
  { label: 'Revenue', value: '\$48.2k', change: '+12.5%', up: true, color: '#F97316' },
  { label: 'Clients', value: '54', change: '+8', up: true, color: '#22C55E' },
  { label: 'Projects', value: '12', change: '3 active', up: true, color: '#60A5FA' },
];

const activities = [
  { text: 'NexaShop went live', time: '2m ago', dot: '#22C55E' },
  { text: 'New client onboarded', time: '18m ago', dot: '#F97316' },
  { text: 'FlowDesk CRM updated', time: '1h ago', dot: '#60A5FA' },
  { text: 'SEO audit completed', time: '3h ago', dot: '#A78BFA' },
];

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : '249,115,22';
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10,
      padding: '10px 14px', fontSize: 11,
    }}>
      <div style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 4, fontWeight: 600 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color, fontWeight: 700 }}>
          {p.name}: {p.value}
        </div>
      ))}
    </div>
  );
};

export default function FooterDashboard() {
  const [data, setData] = useState(genData());
  const [barData, setBarData] = useState(genMiniBar());
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [taskPcts, setTaskPcts] = useState(tasks.map(t => t.pct));

  useEffect(() => {
    const id = setInterval(() => {
      setData(genData());
      setBarData(genMiniBar());
      setTaskPcts(tasks.map(t => Math.min(100, t.pct + Math.floor(Math.random() * 6 - 2))));
    }, 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateStr = currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <div className="fd-root">
      {/* ===== TOP BAR ===== */}
      <div className="fd-topbar">
        <div className="fd-topbar-left">
          <div className="fd-traffic-lights">
            <span style={{ background: '#FF5F57' }} />
            <span style={{ background: '#FFBD2E' }} />
            <span style={{ background: '#28CA41' }} />
          </div>
          <div className="fd-topbar-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Vaan Tech Dashboard</span>
          </div>
        </div>

        <div className="fd-topbar-tabs">
          {['overview', 'projects', 'activity'].map(tab => (
            <button
              key={tab}
              className={`fd-tab ${activeTab === tab ? 'fd-tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && <motion.div className="fd-tab-line" layoutId="fdTab" />}
            </button>
          ))}
        </div>

        <div className="fd-topbar-right">
          <div className="fd-live-badge">
            <span className="fd-live-dot" />
            Live
          </div>
          <span className="fd-time">{timeStr}</span>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            className="fd-content"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Metrics row */}
            <div className="fd-metrics">
              {metrics.map((m, i) => (
                <div key={i} className="fd-metric">
                  <div className="fd-metric-label">{m.label}</div>
                  <div className="fd-metric-value" style={{ color: m.color }}>{m.value}</div>
                  <div className="fd-metric-change" style={{ color: m.up ? '#22C55E' : '#EF4444' }}>
                    {m.up ? '↑' : '↓'} {m.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="fd-charts">
              <div className="fd-chart-main">
                <div className="fd-chart-header">
                  <span className="fd-chart-title">Revenue Trend</span>
                  <span className="fd-chart-badge">12 months</span>
                </div>
                <div style={{ height: 110 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 4, right: 4, left: -30, bottom: 0 }}>
                      <defs>
                        <linearGradient id="fdGrad1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F97316" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="fdGrad2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.15} />
                          <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" tick={{ fontSize: 8, fill: 'rgba(255,255,255,0.2)' }} axisLine={false} tickLine={false} interval={1} />
                      <YAxis hide />
                      <Tooltip content={<CustomTooltip />} />
                      <Area type="monotone" dataKey="revenue" stroke="#F97316" strokeWidth={2} fill="url(#fdGrad1)" dot={false} animationDuration={600} name="Revenue" />
                      <Area type="monotone" dataKey="clients" stroke="#60A5FA" strokeWidth={1.5} fill="url(#fdGrad2)" dot={false} animationDuration={600} name="Clients" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="fd-chart-side">
                <div className="fd-chart-header">
                  <span className="fd-chart-title">Weekly</span>
                  <span className="fd-chart-badge">This week</span>
                </div>
                <div style={{ height: 110 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} margin={{ top: 4, right: 4, left: -30, bottom: 0 }}>
                      <XAxis dataKey="name" tick={{ fontSize: 7, fill: 'rgba(255,255,255,0.2)' }} axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="value" fill="#F97316" radius={[3, 3, 0, 0]} opacity={0.7} animationDuration={600} name="Tasks" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'projects' && (
          <motion.div
            key="projects"
            className="fd-content"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="fd-projects-grid">
              {tasks.map((t, i) => {
                const rgb = hexToRgb(t.color);
                const pct = taskPcts[i];
                return (
                  <div key={i} className="fd-project-card" style={{ borderColor: `rgba(${rgb}, 0.1)` }}>
                    <div className="fd-pc-top">
                      <span className="fd-pc-emoji">{t.icon}</span>
                      <span className="fd-pc-status" style={{
                        color: pct > 80 ? '#22C55E' : t.color,
                        background: pct > 80 ? 'rgba(34,197,94,0.1)' : `rgba(${rgb}, 0.08)`,
                        borderColor: pct > 80 ? 'rgba(34,197,94,0.2)' : `rgba(${rgb}, 0.15)`,
                      }}>
                        {pct > 80 ? 'Almost Done' : t.status}
                      </span>
                    </div>
                    <div className="fd-pc-name">{t.label}</div>
                    <div className="fd-pc-bar-wrap">
                      <div className="fd-pc-bar">
                        <motion.div
                          className="fd-pc-bar-fill"
                          style={{ background: t.color }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                      <span className="fd-pc-pct" style={{ color: t.color }}>{pct}%</span>
                    </div>

                    {/* Mini sparkle on high progress */}
                    {pct > 75 && (
                      <motion.div
                        className="fd-pc-glow"
                        style={{ background: `radial-gradient(circle, rgba(${rgb}, 0.08) 0%, transparent 70%)` }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'activity' && (
          <motion.div
            key="activity"
            className="fd-content"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="fd-activity">
              <div className="fd-activity-timeline">
                {activities.map((a, i) => (
                  <motion.div
                    key={i}
                    className="fd-activity-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="fd-ai-line-wrap">
                      <span className="fd-ai-dot" style={{ background: a.dot, boxShadow: `0 0 8px ${a.dot}40` }} />
                      {i < activities.length - 1 && <div className="fd-ai-line" />}
                    </div>
                    <div className="fd-ai-content">
                      <span className="fd-ai-text">{a.text}</span>
                      <span className="fd-ai-time">{a.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="fd-activity-stats">
                <div className="fd-as-card">
                  <div className="fd-as-label">Uptime</div>
                  <div className="fd-as-value" style={{ color: '#22C55E' }}>99.9%</div>
                  <div className="fd-as-dots">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <span key={i} className="fd-as-dot" style={{
                        background: Math.random() > 0.1 ? '#22C55E' : '#EF4444',
                        opacity: 0.3 + (i / 14) * 0.7,
                      }} />
                    ))}
                  </div>
                </div>
                <div className="fd-as-card">
                  <div className="fd-as-label">Response</div>
                  <div className="fd-as-value" style={{ color: '#F97316' }}>142ms</div>
                  <div className="fd-as-mini">avg last 24h</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== BOTTOM STATUS BAR ===== */}
      <div className="fd-statusbar">
        <div className="fd-sb-left">
          <span className="fd-sb-dot" />
          <span>All systems operational</span>
        </div>
        <span className="fd-sb-date">{dateStr}</span>
      </div>

      <style>{`
        .fd-root {
          background: #0A0A0A;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          height: 100%;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          font-family: inherit;
        }

        /* ========== TOP BAR ========== */
        .fd-topbar {
          background: rgba(255,255,255,0.02);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .fd-topbar-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .fd-traffic-lights {
          display: flex;
          gap: 5px;
        }
        .fd-traffic-lights span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        .fd-topbar-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          font-weight: 600;
        }

        /* Tabs */
        .fd-topbar-tabs {
          display: flex;
          gap: 2px;
          background: rgba(255,255,255,0.03);
          border-radius: 8px;
          padding: 2px;
        }
        .fd-tab {
          position: relative;
          padding: 5px 14px;
          border: none;
          background: none;
          color: rgba(255,255,255,0.3);
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          border-radius: 6px;
          transition: color 0.3s;
        }
        .fd-tab:hover { color: rgba(255,255,255,0.5); }
        .fd-tab-active {
          color: white !important;
          background: rgba(255,255,255,0.06);
        }
        .fd-tab-line {
          position: absolute;
          bottom: 1px;
          left: 20%;
          right: 20%;
          height: 2px;
          background: #F97316;
          border-radius: 2px;
        }

        .fd-topbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .fd-live-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          color: #22C55E;
          font-weight: 600;
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.15);
          padding: 3px 10px;
          border-radius: 50px;
        }
        .fd-live-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #22C55E;
          animation: fdPulse 2s infinite;
        }
        @keyframes fdPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(34,197,94,0); }
        }
        .fd-time {
          font-size: 10px;
          color: rgba(255,255,255,0.2);
          font-weight: 500;
          font-variant-numeric: tabular-nums;
        }

        /* ========== CONTENT ========== */
        .fd-content {
          flex: 1;
          padding: 14px 16px;
          overflow: hidden;
        }

        /* ===== OVERVIEW TAB ===== */
        .fd-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 14px;
        }
        .fd-metric {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 10px;
          padding: 10px 12px;
        }
        .fd-metric-label {
          font-size: 9px;
          color: rgba(255,255,255,0.25);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .fd-metric-value {
          font-size: 18px;
          font-weight: 900;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }
        .fd-metric-change {
          font-size: 10px;
          font-weight: 600;
          margin-top: 2px;
        }

        .fd-charts {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 10px;
        }
        .fd-chart-main, .fd-chart-side {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 10px;
          padding: 12px;
        }
        .fd-chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .fd-chart-title {
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .fd-chart-badge {
          font-size: 9px;
          color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.03);
          padding: 2px 8px;
          border-radius: 50px;
          font-weight: 500;
        }

        /* ===== PROJECTS TAB ===== */
        .fd-projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .fd-project-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid;
          border-radius: 12px;
          padding: 14px;
          position: relative;
          overflow: hidden;
        }
        .fd-pc-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .fd-pc-emoji { font-size: 16px; }
        .fd-pc-status {
          font-size: 9px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 50px;
          border: 1px solid;
          letter-spacing: 0.3px;
        }
        .fd-pc-name {
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.8);
          margin-bottom: 10px;
        }
        .fd-pc-bar-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .fd-pc-bar {
          flex: 1;
          height: 4px;
          background: rgba(255,255,255,0.05);
          border-radius: 4px;
          overflow: hidden;
        }
        .fd-pc-bar-fill {
          height: 100%;
          border-radius: 4px;
        }
        .fd-pc-pct {
          font-size: 11px;
          font-weight: 800;
          min-width: 32px;
          text-align: right;
        }
        .fd-pc-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* ===== ACTIVITY TAB ===== */
        .fd-activity {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 14px;
          height: 100%;
        }
        .fd-activity-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .fd-activity-item {
          display: flex;
          gap: 12px;
          align-items: stretch;
        }
        .fd-ai-line-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 12px;
          flex-shrink: 0;
          padding-top: 4px;
        }
        .fd-ai-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .fd-ai-line {
          width: 1px;
          flex: 1;
          background: rgba(255,255,255,0.06);
          margin: 4px 0;
        }
        .fd-ai-content {
          padding: 4px 0 16px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .fd-ai-text {
          font-size: 12px;
          color: rgba(255,255,255,0.7);
          font-weight: 500;
        }
        .fd-ai-time {
          font-size: 10px;
          color: rgba(255,255,255,0.2);
        }

        .fd-activity-stats {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .fd-as-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 10px;
          padding: 14px;
          flex: 1;
        }
        .fd-as-label {
          font-size: 9px;
          color: rgba(255,255,255,0.25);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .fd-as-value {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.5px;
          margin-bottom: 6px;
        }
        .fd-as-mini {
          font-size: 10px;
          color: rgba(255,255,255,0.2);
        }
        .fd-as-dots {
          display: flex;
          gap: 3px;
          margin-top: 4px;
        }
        .fd-as-dot {
          width: 8px;
          height: 14px;
          border-radius: 2px;
          display: block;
        }

        /* ========== STATUS BAR ========== */
        .fd-statusbar {
          border-top: 1px solid rgba(255,255,255,0.04);
          padding: 8px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.01);
        }
        .fd-sb-left {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          color: rgba(255,255,255,0.25);
          font-weight: 500;
        }
        .fd-sb-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #22C55E;
        }
        .fd-sb-date {
          font-size: 10px;
          color: rgba(255,255,255,0.15);
          font-weight: 500;
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 640px) {
          .fd-topbar { padding: 8px 12px; }
          .fd-topbar-tabs { display: none; }
          .fd-topbar-right .fd-time { display: none; }
          .fd-metrics { grid-template-columns: repeat(3, 1fr); gap: 6px; }
          .fd-metric { padding: 8px 10px; }
          .fd-metric-value { font-size: 14px; }
          .fd-charts { grid-template-columns: 1fr; }
          .fd-chart-side { display: none; }
          .fd-projects-grid { grid-template-columns: 1fr; }
          .fd-activity { grid-template-columns: 1fr; }
          .fd-activity-stats { flex-direction: row; }
          .fd-content { padding: 10px 12px; }
        }

        @media (max-width: 380px) {
          .fd-metrics { grid-template-columns: 1fr; }
          .fd-traffic-lights { display: none; }
        }
      `}</style>
    </div>
  );
}