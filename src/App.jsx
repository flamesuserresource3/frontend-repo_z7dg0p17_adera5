import { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import CommunityFeed from './components/CommunityFeed.jsx';
import FloatingActions from './components/FloatingActions.jsx';

const gradientBg = 'bg-[radial-gradient(1200px_600px_at_0%_0%,rgba(79,70,229,0.15),transparent_60%),radial-gradient(1200px_600px_at_100%_0%,rgba(6,182,212,0.12),transparent_60%),linear-gradient(180deg,#0f172a,#1e293b)]';

export default function App() {
  const [page, setPage] = useState('Community Feed');

  const renderPage = () => {
    switch (page) {
      case 'Community Feed':
        return <CommunityFeed />;
      default:
        return (
          <div className="rounded-2xl p-6 bg-slate-900/60 border border-white/10 text-slate-300">
            This section is coming soon with full animations.
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen ${gradientBg} text-white`}> 
      <Navbar />

      {/* Hero Spline Cover */}
      <section className="relative h-[320px] sm:h-[380px] md:h-[440px]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent pointer-events-none" />
        <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-end pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl px-4 py-3 bg-slate-900/60 border border-white/10 backdrop-blur-xl"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
              Welcome to Campus Tech Tracker
            </h1>
            <p className="text-slate-300 text-sm md:text-base">Track skills, join roadmaps, and shine with your streaks. Learn together, level up faster.</p>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-3">
            <Sidebar current={page} onNavigate={setPage} />
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-9">
            {renderPage()}
          </div>
        </div>
      </main>

      <FloatingActions onCreatePost={() => alert('Mock: Create Post')} />
    </div>
  );
}
