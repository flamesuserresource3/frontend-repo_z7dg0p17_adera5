import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, PenSquare, Sparkles, Upload } from 'lucide-react';

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  const actions = [
    { label: 'Create Post', icon: PenSquare, color: 'bg-indigo-500/90 hover:bg-indigo-500' },
    { label: 'Add Skill', icon: Sparkles, color: 'bg-emerald-500/90 hover:bg-emerald-500' },
    { label: 'Upload Project', icon: Upload, color: 'bg-pink-500/90 hover:bg-pink-500' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mb-3 space-y-2"
            >
              {actions.map(({ label, icon: Icon, color }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-white text-sm shadow-lg ${color}`}
                    onClick={() => {
                      setOpen(false);
                      // Mock handler
                      alert(label);
                    }}
                  >
                    <Icon className="w-4 h-4" /> {label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`h-12 w-12 rounded-2xl flex items-center justify-center text-white shadow-xl transition active:scale-95 ${
            open ? 'bg-white/15 border border-white/20' : 'bg-indigo-600 hover:bg-indigo-500'
          }`}
          aria-label="Toggle quick actions"
        >
          <motion.span
            initial={false}
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <Plus className="w-6 h-6" />
          </motion.span>
        </button>
      </div>
    </div>
  );
}
