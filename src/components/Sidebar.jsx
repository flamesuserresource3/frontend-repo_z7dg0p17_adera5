import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, LayoutDashboard, Compass, BarChart3, Users, ClipboardList, Settings, ChevronsLeft, ChevronsRight } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Community Feed' },
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: ClipboardList, label: 'Skills Tracker' },
  { icon: Compass, label: 'Roadmaps' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Users, label: 'Faculty Reports' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar({ current, onNavigate }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`h-full sticky top-16 ${collapsed ? 'w-[74px]' : 'w-64'} transition-all duration-300`}>
      <div className="h-[calc(100vh-4rem)] overflow-hidden rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl p-3 flex flex-col">
        <button
          onClick={() => setCollapsed((v) => !v)}
          className="mb-2 flex items-center justify-between rounded-xl bg-slate-800/70 border border-white/10 px-3 py-2 hover:border-cyan-400/40"
        >
          <span className={`text-slate-300 text-sm ${collapsed ? 'hidden' : 'block'}`}>Navigation</span>
          {collapsed ? (
            <ChevronsRight className="h-4 w-4 text-slate-400" />
          ) : (
            <ChevronsLeft className="h-4 w-4 text-slate-400" />
          )}
        </button>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = current === item.label;
            return (
              <motion.button
                key={item.label}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate(item.label)}
                className={`group w-full flex items-center gap-3 px-3 py-2 rounded-xl border ${
                  active ? 'bg-gradient-to-r from-indigo-500/30 to-cyan-500/20 border-cyan-400/40' : 'bg-slate-800/40 border-white/10'
                } hover:border-indigo-400/40`}
              >
                <Icon className={`h-5 w-5 ${active ? 'text-cyan-300' : 'text-slate-300'} drop-shadow`} />
                <span className={`text-sm ${collapsed ? 'hidden' : 'block'} ${active ? 'text-white' : 'text-slate-300'}`}>{item.label}</span>
              </motion.button>
            );
          })}
        </nav>

        <div className="mt-auto">
          <div className={`mt-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/10 border border-violet-400/30 p-3 ${collapsed ? 'hidden' : 'block'}`}>
            <p className="text-xs text-violet-100/90">Pro Tip</p>
            <p className="text-xs text-slate-300 mt-1">Use the quick add button to post activities and log skills faster.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
