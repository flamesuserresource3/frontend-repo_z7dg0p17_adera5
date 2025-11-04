import { useState } from 'react';
import { Search, Bell, User, Rocket, Menu, X } from 'lucide-react';

export default function Navbar({ onToggleSidebar }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            onClick={() => {
              setOpen((v) => !v);
              onToggleSidebar?.();
            }}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-2 font-semibold text-white">
            <Rocket className="w-5 h-5 text-indigo-400" />
            <span>Campus Tech Tracker</span>
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-white/50" />
            </div>
            <input
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search skills, posts, or learners..."
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
