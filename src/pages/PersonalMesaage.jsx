import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PersonalMessage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans overflow-hidden relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 opacity-95" />

      {/* Delicate floating elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -10, opacity: 0 }}
          animate={{ 
            y: 40, 
            opacity: [0, 0.2, 0], 
            x: Math.random() * 100 - 50 
          }}
          transition={{ 
            duration: Math.random() * 12 + 10, 
            repeat: Infinity,
            delay: Math.random() * 3
          }}
          className="absolute text-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {["🌸", "✨", "🦋", "💖"][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(45deg, #e0c3fc, #a78bfa)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            For Your Eyes Only
          </motion.h1>
          <p className="text-gray-400">(Because you deserve this and more)</p>
        </motion.div>

        {/* Your Heartfelt Messages */}
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Message 1 */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-violet-900/40 to-indigo-900/40 p-8 rounded-xl border border-violet-700/30 backdrop-blur-sm"
          >
            <div className="text-3xl mb-4">🌼</div>
            <h3 className="text-2xl font-semibold mb-4 text-violet-300">You Are a Garden of Grace</h3>
            <p className="text-gray-300 leading-relaxed">
              Sweet soul, you are like a beautiful garden that has weathered storms but continues to bloom. 
              Every challenge you've faced has only made your roots stronger and your flowers more vibrant. 
              The way you laugh, the kindness in your eyes, the gentle strength you carry - these are gifts 
              that make the world brighter just by your presence in it.
            </p>
          </motion.div>

          {/* Message 2 */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-8 rounded-xl border border-blue-700/30 backdrop-blur-sm"
          >
            <div className="text-3xl mb-4">💎</div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Your Light Cannot Be Dimmed</h3>
            <p className="text-gray-300 leading-relaxed">
              Darling, there's a light inside you that burns so bright, it could guide ships home through 
              the darkest nights. Someone who couldn't appreciate that light was simply not meant to be 
              your harbor. You are destined for a love that celebrates your radiance, not one that tries 
              to dim it. Your worth was never up for debate.
            </p>
          </motion.div>

          {/* Message 3 */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 p-8 rounded-xl border border-purple-700/30 backdrop-blur-sm"
          >
            <div className="text-3xl mb-4">🦢</div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Transformation is Your Superpower</h3>
            <p className="text-gray-300 leading-relaxed">
              Beautiful butterfly, you're in your cocoon moment right now - and that's exactly where 
              magic happens. Every tear you've cried is watering the seeds of your strength. Every 
              night you've survived is proof of your resilience. You're not broken; you're breaking 
              through to become the most magnificent version of yourself.
            </p>
          </motion.div>

          {/* Message 4 */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-rose-900/40 to-pink-900/40 p-8 rounded-xl border border-rose-700/30 backdrop-blur-sm"
          >
            <div className="text-3xl mb-4">🌹</div>
            <h3 className="text-2xl font-semibold mb-4 text-rose-300">Your Heart is Pure Magic</h3>
            <p className="text-gray-300 leading-relaxed">
              Precious heart, the way you love is pure magic - deep, genuine, and transformative. 
              That capacity for love isn't a weakness; it's your greatest strength. The right person 
              will treasure that gift and love you back with the same intensity and devotion. 
              Until then, pour that beautiful love into yourself, because you deserve it most of all.
            </p>
          </motion.div>
        </motion.div>

        {/* Hidden "Back" Button (Easter Egg) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="inline-block px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 text-sm font-medium border border-gray-700 transition-all"
            >
              ← Return to Your Kingdom
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalMessage;