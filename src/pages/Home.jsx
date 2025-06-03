import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [shake, setShake] = useState(false);

  const messages = [
    "GUNJAN-(Graceful Universe’s Nicest Jewel And Nurturer) ✨",
    "Your confidence is contagious—never dim your light 💡",
    "Chill, cool, and unapologetically you—that's your power, Gunjan �",
    "You don't just walk into a room—you own it, queen 👑",
    "Gunjan, your smile could light up galaxies 🌌",
  ];

  // Password check (fun and creative)
  const checkPassword = () => {
    const secretPassword = "08012007"; // Changed to her name
    if (password.toLowerCase() === secretPassword) {
      setIsUnlocked(true);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      // Fun wrong-password responses
      const funResponses = [
        "Nope, try again! 🔐",
        "Not even close! 😆",
        "Psst... it's something uniquely Gunjan",
        "Password hint: It's how you make people feel.",
        "Think of the most beautiful name you know...",
      ];
      setCurrentMessage((prev) => (prev + 1) % funResponses.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Heart particles animation
  const HeartParticle = ({ delay }) => (
    <motion.div
      initial={{ y: -10, opacity: 0, scale: 0 }}
      animate={{ 
        y: [0, -40, -80],
        opacity: [0, 0.8, 0],
        scale: [0, 1.2, 0.5],
        x: Math.random() * 100 - 50
      }}
      transition={{ 
        duration: Math.random() * 8 + 6,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + 2,
        ease: "easeOut"
      }}
      className="absolute text-xl"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      {["💖", "🌸", "✨", "🦋", "🌙"][Math.floor(Math.random() * 5)]}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans overflow-hidden relative">
      {/* Subtle gradient background with animated pulse */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 opacity-95"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />

      {/* Delicate floating elements */}
      {[...Array(20)].map((_, i) => (
        <HeartParticle key={i} delay={i * 0.2} />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Header with personalized animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{
                background: "linear-gradient(45deg, #e0c3fc, #a78bfa, #818cf8)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            >
              Hey, Gunjan 🐣
            </motion.h1>
          </motion.div>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Kursi ki peti baandh lijiye kahi or ho ske to kahi kursi dhundh lijiye... because You might fall in love with this website🐥. 
            This is your space—curated to match your magical vibe.
          </motion.p>
        </motion.div>

        {/* Rotating message with enhanced animation */}
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="text-center mb-20"
        >
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 italic font-medium"
            whileHover={{ scale: 1.03 }}
          >
            "{messages[currentMessage]}"
          </motion.p>
        </motion.div>

        {/* Feature cards with enhanced animations */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, staggerChildren: 0.2 }}
        >
          {[
            {
              title: "Why Gunjan's Awesome",
              emoji: "🌟",
              desc: "GUNJAN-(Graceful Universe’s Nicest Jewel And Nurturer) ",
              color: "from-violet-900/70 to-indigo-900/70",
              border: "border-violet-700/30",
              link: "/why-awesome"
            },
            { 
              title: "Gunjan's Adventure Log",
              emoji: "🌎",
              desc: "For the memories made and those yet to come.",
              color: "from-blue-900/70 to-cyan-900/70",
              border: "border-blue-700/30",
              link: "/adventures"
            },
            {
              title: "Gunjan's Chill Zone",
              emoji: "🧊",
              desc: "Your personal relaxation space.",
              color: "from-slate-900/70 to-gray-800/70",
              border: "border-gray-700/30",
              link: "/chill"
            }
          ].map((item, i) => (
            <Link to={item.link} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className={`bg-gradient-to-br ${item.color} p-8 rounded-xl border ${item.border} backdrop-blur-sm h-full transition-all`}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="text-4xl mb-4"
                >
                  {item.emoji}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Secret Password Section with enhanced animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={shake ? { 
              x: [0, -10, 10, -10, 10, 0],
              rotate: [0, -5, 5, -5, 5, 0]
            } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <motion.input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="🔒 Enter secret password..."
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-center"
              whileFocus={{
                scale: 1.05,
                boxShadow: "0 0 0 2px rgba(167, 139, 250, 0.5)"
              }}
            />
          </motion.div>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(to right, #a78bfa, #818cf8)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={checkPassword}
            className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg font-medium border border-gray-600 relative overflow-hidden"
          >
            <motion.span 
              className="relative z-10"
              animate={isUnlocked ? { 
                color: ["#fff", "#f0abfc", "#fff"],
              } : {}}
              transition={isUnlocked ? { 
                duration: 1.5,
                repeat: Infinity 
              } : {}}
            >
              {isUnlocked ? "Access Granted! 🎉" : "Unlock Secret"}
            </motion.span>
            {isUnlocked && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0"
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.button>
          
          {/* Hidden Link to SecretPage with celebration animation */}
          {isUnlocked && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              >
                <Link
                  to="/secret"
                  className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg font-medium text-white inline-block relative overflow-hidden"
                >
                  <motion.span
                    animate={{
                      textShadow: ["0 0 0px #fff", "0 0 10px #fff", "0 0 0px #fff"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-10"
                  >
                    Enter Gunjan's Secret Zone 🚪
                  </motion.span>
                  <motion.div 
                    className="absolute inset-0 bg-white opacity-0"
                    animate={{ 
                      opacity: [0, 0.1, 0],
                      top: ["100%", "-10%", "100%"]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;