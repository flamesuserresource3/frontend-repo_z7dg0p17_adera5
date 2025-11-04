import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Search, User, ChevronDown, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-30 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-cyan-500/20">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">Campus Tech Tracker</span>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex items-center gap-3 flex-1 max-w-lg mx-6"
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search skills, roadmaps, people..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-800/70 border border-white/10 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
          </motion.div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -1 }}
              className="relative p-2 rounded-xl bg-slate-800/70 border border-white/10 hover:border-cyan-400/50"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 text-slate-200" />
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 12, delay: 0.4 }}
                className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              />
            </motion.button>

            <div className="relative">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl bg-slate-800/70 border border-white/10 hover:border-indigo-400/50"
              >
                <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-violet-500 to-indigo-500 grid place-items-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-200 text-sm">Alex</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </motion.button>

              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute right-0 mt-2 w-48 rounded-xl bg-slate-900/95 border border-white/10 shadow-xl"
                >
                  <button className="w-full text-left px-3 py-2 text-slate-200 hover:bg-white/5 rounded-xl">Profile</button>
                  <button className="w-full text-left px-3 py-2 text-slate-200 hover:bg-white/5 rounded-xl">Settings</button>
                  <button className="w-full text-left px-3 py-2 text-slate-200 hover:bg-white/5 rounded-xl">Logout</button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
