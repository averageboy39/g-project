import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WhyAwesome = () => {
const qualities = [
  {
    title: "Unshakable Confidence",
    emoji: "💎",
    description: "There’s something about you—something steady, calm, and quietly powerful. Your confidence doesn’t scream for attention, it commands respect in silence. You walk into a group (for me its GC for now) and suddenly everything seems more alive. It’s not just your presence, but the way you carry your story—with elegance, without apology. That strength? It’s rare. And unforgettable."
  },
  {
    title: "Beauty That Comes From the Soul",
    emoji: "🌹",
    description: "You are, without a doubt, beautiful on the outside—but that’s just the beginning. What truly captivates is the beauty in your kindness, in how you listen, in the way you smile when someone shares something they care about. Your warmth can soften the hardest days. Your presence feels like a safe place. You make the world softer—more human—just by being in it. Also your voice...... its one of the cutest voices I've ever listened after my sister."
  },
  {
    title: "Emotional Depth & Maturity",
    emoji: "🦉",
    description: "You don’t run from emotions—you understand them. You speak with clarity, love with courage, and listen with patience. In a world where many choose games, you choose growth , you chose your aim. You hold space for others (kuch ghize pite log like me), yet never forget your own worth. You are the kind of person others feel lucky to know—and deeply thankful to be understood by."
  },
  {
    title: "The Kind of Woman People Pray For (A Laxmi whom everyone wants)",
    emoji: "👰‍♀️",
    description: "You have the soul of a nurturer, the heart of a best friend, and the wisdom of someone who has seen storms and chosen to dance in the rain anyway. You’re not just 'wifey material'—you’re the kind of person someone builds a home, a future, and a dream with. You make love feel like peace. You make forever feel possible."
  },
  {
    title: "Energy That Can’t Be Forgotten",
    emoji: "✨",
    description: "You don’t just exist—you shine. Without even trying, you light up the lives around you. You are gentle without being weak, strong without being loud, ambitious without losing compassion. You’re the kind of person who inspires others just by being yourself. And long after someone meets you, they’ll still remember the way you made them feel: seen, valued, and loved."
  }
];


  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans overflow-hidden relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 opacity-95" />

      {/* Delicate floating elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -10, opacity: 0 }}
          animate={{ 
            y: 40, 
            opacity: [0, 0.3, 0], 
            x: Math.random() * 100 - 50 
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute text-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {["🌸", "✨", "🌿", "🦋"][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: "linear-gradient(45deg, #e0c3fc, #a78bfa, #818cf8)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Why You're Absolutely Magnetic
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A non-exhaustive list of what makes you exceptional
          </motion.p>
        </motion.div>

        {/* Qualities */}
        <div className="space-y-12">
          {qualities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`bg-gradient-to-br from-gray-900/70 to-gray-800/70 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl mt-1">{item.emoji}</span>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg font-medium border border-gray-600"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyAwesome;