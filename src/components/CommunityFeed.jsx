import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Star, BadgeCheck, Sparkles } from 'lucide-react';

const MOCK_FEED = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  user: ['Aanya', 'Carlos', 'Riya', 'Zane', 'Ishaan', 'Mei', 'Noah', 'Ava'][i % 8],
  avatarHue: (i * 45) % 360,
  branch: ['CSE', 'ECE', 'IT', 'ME'][i % 4],
  year: `${(i % 4) + 1} yr`,
  type: ['completed a skill', 'joined a roadmap', 'synced GitHub activity'][i % 3],
  skill: ['React Basics', 'Data Structures', 'UI Animation', 'Python 101'][i % 4],
  time: `${(i % 6) + 1}h ago`,
  likes: Math.floor(Math.random() * 50) + 10,
  comments: Math.floor(Math.random() * 12) + 1,
}));

const TrendingBar = ({ label, value, color }) => (
  <div>
    <div className="flex items-center justify-between text-xs text-slate-300">
      <span>{label}</span>
      <span>{Math.round(value * 100)}%</span>
    </div>
    <div className="mt-1 h-2 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value * 100}%` }}
        transition={{ duration: 0.8 }}
        className={`h-full bg-gradient-to-r ${color}`}
      />
    </div>
  </div>
);

const ReactionBurst = ({ show }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
        className="pointer-events-none absolute inset-0 grid place-items-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="text-3xl"
        >
          🎉
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function CommunityFeed() {
  const [feed, setFeed] = useState(MOCK_FEED);
  const [liking, setLiking] = useState(null);

  useEffect(() => {
    const floating = setInterval(() => {}, 3000);
    return () => clearInterval(floating);
  }, []);

  const loadMore = () => {
    const next = feed.length + 1;
    const more = Array.from({ length: 4 }).map((_, i) => ({
      ...MOCK_FEED[i % MOCK_FEED.length],
      id: next + i,
      time: `${(i % 6) + 1}h ago`,
    }));
    setFeed((f) => [...f, ...more]);
  };

  const widgets = useMemo(
    () => (
      <div className="space-y-4">
        <div className="rounded-2xl p-4 bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <h3 className="text-slate-100 font-medium">Trending Skills</h3>
          </div>
          <div className="mt-3 space-y-3">
            <TrendingBar label="React" value={0.86} color="from-indigo-500 to-cyan-400" />
            <TrendingBar label="Python" value={0.72} color="from-violet-500 to-indigo-400" />
            <TrendingBar label="UI/UX" value={0.64} color="from-cyan-500 to-teal-400" />
            <TrendingBar label="Data Structures" value={0.58} color="from-fuchsia-500 to-violet-400" />
          </div>
        </div>

        <div className="rounded-2xl p-4 bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <h3 className="text-slate-100 font-medium">Top Learners</h3>
          <div className="mt-3 space-y-2">
            {['Aanya', 'Carlos', 'Riya', 'Zane', 'Mei'].map((n, idx) => (
              <div key={n} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="h-7 w-7 rounded-full"
                    style={{ background: `hsl(${idx * 60} 80% 50% / 0.9)` }}
                  />
                  <span className="text-slate-300 text-sm">{n}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-yellow-300" />
                  <span className="text-xs text-slate-400">{10 - idx}d streak</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-4 bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <h3 className="text-slate-100 font-medium">Upcoming Events</h3>
          <div className="mt-2 overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="flex gap-6 whitespace-nowrap text-sm text-slate-300"
            >
              {['Hackathon Fri', 'AI/ML Workshop Sat', 'Web Dev Meetup Sun', 'CTF Night Mon'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-slate-800/60 border border-white/10">{t}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    ),
    []
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 bg-slate-900/60 border border-white/10 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-500" />
            <input
              placeholder="Share what you're learning..."
              className="flex-1 bg-slate-800/60 border border-white/10 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
            />
            <button className="px-3 py-2 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white text-sm shadow-lg">Create Post</button>
          </div>
        </motion.div>

        <AnimatePresence>
          {feed.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative rounded-2xl p-4 bg-slate-900/70 border border-white/10 backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <div
                  className="h-11 w-11 rounded-xl border border-white/10"
                  style={{ background: `linear-gradient(135deg, hsl(${item.avatarHue} 80% 50% / .9), hsl(${(item.avatarHue + 40) % 360} 80% 50% / .9))` }}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-100 font-medium">{item.user}</span>
                    <BadgeCheck className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs text-slate-400">{item.branch} • {item.year}</span>
                  </div>
                  <p className="mt-1 text-slate-300 text-sm">
                    <span className="text-cyan-300">{item.type}</span> — <span className="text-indigo-200">{item.skill}</span>
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-slate-400 text-sm">
                    <span>{item.time}</span>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" /> {item.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" /> {item.comments}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setLiking(item.id);
                    setTimeout(() => setLiking(null), 600);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-800/60 border border-white/10 text-slate-200 text-sm hover:border-cyan-400/40"
                >
                  ❤️ Like
                </motion.button>
                <motion.button whileTap={{ scale: 0.95 }} className="px-3 py-1.5 rounded-xl bg-slate-800/60 border border-white/10 text-slate-200 text-sm">💬 Comment</motion.button>
                <motion.button whileTap={{ scale: 0.95 }} className="px-3 py-1.5 rounded-xl bg-slate-800/60 border border-white/10 text-slate-200 text-sm">🏅 React</motion.button>
              </div>

              <ReactionBurst show={liking === item.id} />
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="pt-2">
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={loadMore}
            className="w-full py-2 rounded-xl bg-slate-800/70 border border-white/10 text-slate-200"
          >
            Load more
          </motion.button>
        </div>
      </div>

      <div className="lg:col-span-4">{widgets}</div>
    </div>
  );
}
