import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Star, Tag } from 'lucide-react';

function FeedCard({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 text-white"
    >
      <div className="flex items-start gap-3">
        <img
          src={`https://api.dicebear.com/7.x/shapes/svg?seed=${encodeURIComponent(post.author)}`}
          alt="avatar"
          className="w-10 h-10 rounded-xl border border-white/10"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold leading-tight">{post.author}</h3>
              <p className="text-xs text-white/50">{post.time} • {post.role}</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-400/20 inline-flex items-center gap-1">
              <Tag className="w-3 h-3" /> {post.topic}
            </span>
          </div>
          <p className="mt-3 text-sm text-white/80">{post.content}</p>
          {post.image && (
            <div className="mt-3 overflow-hidden rounded-xl border border-white/10">
              <img src={post.image} alt="post visual" className="w-full object-cover" />
            </div>
          )}
          <div className="mt-4 flex items-center gap-4 text-sm">
            <button
              onClick={() => setLiked((v) => !v)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition ${
                liked ? 'border-pink-400/30 bg-pink-500/20 text-pink-300' : 'border-white/10 hover:bg-white/10 text-white/80'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-pink-400 text-pink-400' : ''}`} /> {liked ? 'Liked' : 'Like'}
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-white/80">
              <MessageCircle className="w-4 h-4" /> Comment
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-white/80">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function CommunityFeed() {
  const posts = useMemo(
    () => [
      {
        id: 1,
        author: 'Ayesha Khan',
        role: 'CSE • 3rd Year',
        time: '2h ago',
        topic: 'Web Dev',
        content: 'Just shipped a responsive dashboard with React + Tailwind and learned so much about accessibility along the way! Any tips on color contrast tools?',
        image:
          'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop',
      },
      {
        id: 2,
        author: 'Rahul Mehta',
        role: 'ECE • 2nd Year',
        time: '4h ago',
        topic: 'AI/ML',
        content: 'Converted a classical ML pipeline into a PyTorch Lightning module. Confusion matrix finally looks decent! 🙌',
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
      },
      {
        id: 3,
        author: 'Mira Santosh',
        role: 'IT • 1st Year',
        time: '1d ago',
        topic: 'Open Source',
        content: 'Made my first PR to an open-source docs site. If you want to start, pick typos and broken links first — super welcoming!',
        image: '',
      },
    ],
    []
  );

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 text-white">
        <div className="flex items-start gap-3">
          <img
            src={`https://api.dicebear.com/7.x/shapes/svg?seed=You`}
            alt="avatar"
            className="w-10 h-10 rounded-xl border border-white/10"
          />
          <div className="flex-1">
            <input
              placeholder="Share something you learned today..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="mt-2 flex items-center justify-between">
              <div className="text-xs text-white/50">Tip: Add tags like #webdev or #ml to reach more people.</div>
              <button className="px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-medium inline-flex items-center gap-1">
                <Star className="w-3.5 h-3.5" /> Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {posts.map((p) => (
        <FeedCard key={p.id} post={p} />
      ))}
    </div>
  );
}
