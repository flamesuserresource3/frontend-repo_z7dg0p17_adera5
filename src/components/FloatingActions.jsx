import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Sparkles, Upload, PenTool } from 'lucide-react';

export default function FloatingActions({ onCreatePost }) {
  const [open, setOpen] = useState(false);

  const actions = [
    { label: 'Create Post', icon: PenTool, onClick: () => onCreatePost?.() },
    { label: 'Add Skill', icon: Sparkles, onClick: () => alert('Mock: Add Skill') },
    { label: 'Sync Activity', icon: Upload, onClick: () => alert('Mock: Sync Activity') },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-3 space-y-2"
          >
            {actions.map((a) => {
              const Icon = a.icon;
              return (
                <motion.button
                  key={a.label}
                  whileHover={{ x: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { a.onClick(); setOpen(false); }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 shadow-lg"
                >
                  <Icon className="h-4 w-4 text-cyan-300" />
                  <span className="text-sm">{a.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        className="h-14 w-14 grid place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-xl shadow-cyan-500/30 border border-white/10"
      >
        <Plus className="h-6 w-6 text-white" />
      </motion.button>
    </div>
  );
}
