import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroShowcase from './components/HeroShowcase.jsx';
import CommunityFeed from './components/CommunityFeed.jsx';
import FloatingActions from './components/FloatingActions.jsx';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar onToggleSidebar={() => setSidebarOpen((v) => !v)} />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <HeroShowcase />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12">
          <div className="lg:col-span-2">
            <CommunityFeed />
          </div>
          <aside className="space-y-4">
            <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Trending Skills</h3>
              <ul className="mt-3 space-y-3 text-sm">
                {[
                  { label: 'React', value: 82, color: 'bg-indigo-500' },
                  { label: 'Python', value: 76, color: 'bg-emerald-500' },
                  { label: 'Cloud', value: 61, color: 'bg-cyan-500' },
                ].map((s) => (
                  <li key={s.label}>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">{s.label}</span>
                      <span className="text-white/50 text-xs">{s.value}%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className={`h-full ${s.color}`} style={{ width: `${s.value}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Upcoming Events</h3>
              <ul className="mt-3 space-y-3 text-sm text-white/80">
                <li className="flex items-center justify-between">
                  <span>Hack Night • FOSS Club</span>
                  <span className="text-white/50 text-xs">Fri</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>AI Study Jam • GDSC</span>
                  <span className="text-white/50 text-xs">Mon</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Cloud Bootcamp • AWSUG</span>
                  <span className="text-white/50 text-xs">Next Wed</span>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </main>

      <FloatingActions />
    </div>
  );
}
