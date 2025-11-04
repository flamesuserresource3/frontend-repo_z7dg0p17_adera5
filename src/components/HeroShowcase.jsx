import { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Image as ImageIcon, Cuboid } from 'lucide-react';

const collageImages = [
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541014871-0bdf6c5735e0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
];

export default function HeroShowcase() {
  const [mode, setMode] = useState('collage'); // 'collage' | '3d'

  return (
    <section className="relative">
      <div className="relative h-[360px] sm:h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-indigo-900">
        {mode === '3d' ? (
          <div className="h-full w-full">
            <Spline
              scene="https://prod.spline.design/8n9F0yM7Yzq2KxQx/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
          </div>
        ) : (
          <div className="h-full w-full p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {collageImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 120 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
              >
                <img src={src} alt="tech collage" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            ))}
          </div>
        )}

        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-6 sm:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Track Your Campus Tech Journey
              </h1>
              <p className="mt-3 text-white/70 max-w-xl">
                Discover skills, share projects, and see your growth with a beautiful, distraction-free dashboard.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <button className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium shadow-sm">
                  Get Started
                </button>
                <button
                  onClick={() => setMode((m) => (m === '3d' ? 'collage' : '3d'))}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium border border-white/15"
                >
                  {mode === '3d' ? (
                    <span className="inline-flex items-center gap-2"><ImageIcon className="w-4 h-4" /> Collage</span>
                  ) : (
                    <span className="inline-flex items-center gap-2"><Cuboid className="w-4 h-4" /> 3D Scene</span>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
