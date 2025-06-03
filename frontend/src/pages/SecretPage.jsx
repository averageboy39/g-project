import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const SecretPage = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentQuote, setCurrentQuote] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const [magicRevealed, setMagicRevealed] = useState(false);

    // Correct video path (use forward slashes)
    const videoPath = "/video.mp4"; // Ensure this path is correct

    const magicalQuotes = useMemo(() => [
        "✨ Every day you choose to keep going is a day you choose magic ✨",
        "🌙 Your soul sparkles brighter than all the stars combined 🌙",
        "🦋 You turn ordinary moments into extraordinary memories 🦋",
        "💫 The universe conspired to create someone exactly like you 💫",
        "🌸 Your kindness creates ripples of beauty everywhere you go 🌸"
    ], []);

    // Optimized animation values
    const floatingElements = useMemo(() =>
        Array.from({ length: 20 }, (_, i) => ({
            id: i,
            emoji: ["✨", "🌟", "💎", "🔮", "🌙", "⭐", "💫"][Math.floor(Math.random() * 7)],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100 + 100}%`,
            duration: Math.random() * 4 + 3,
            delay: Math.random() * 3,
            y: -150 - Math.random() * 100,
            x: Math.random() * 200 - 100
        }))
        , []);

    const confettiElements = useMemo(() =>
        Array.from({ length: 30 }, (_, i) => ({
            id: i,
            color: ["#ec4899", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"][Math.floor(Math.random() * 5)],
            x: (Math.random() - 0.5) * 800,
            y: (Math.random() - 0.5) * 600,
            duration: Math.random() * 2 + 2,
            rotate: Math.random() * 720
        }))
        , []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % magicalQuotes.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [magicalQuotes.length]);

    const handleSurpriseClick = () => {
        setShowConfetti(true);
        setMagicRevealed(true);
        setTimeout(() => {
            setShowVideoModal(true);
            setShowConfetti(false); // Remove confetti when modal appears
        }, 800);
    };

    const closeVideoModal = () => {
        setShowVideoModal(false);
    };

    return (
        <div className="min-h-screen bg-black text-gray-100 font-sans overflow-hidden relative">
            {/* Optimized Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-pink-950/70 to-black" />

            {/* Reduced complexity aurora effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"
            />

            {/* Optimized Floating Elements - Reduced quantity and complexity */}
            {floatingElements.map((element) => (
                <motion.div
                    key={`magic-${element.id}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        y: [0, element.y],
                        x: [0, element.x],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: element.duration,
                        delay: element.delay,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                    className="absolute text-2xl pointer-events-none"
                    style={{
                        left: element.left,
                        top: element.top,
                        filter: "drop-shadow(0 0 8px currentColor)",
                        willChange: "transform, opacity" // Optimize for GPU
                    }}
                >
                    {element.emoji}
                </motion.div>
            ))}

            {/* Optimized Confetti - Reduced quantity */}
            <AnimatePresence>
                {showConfetti && confettiElements.map((confetti) => (
                    <motion.div
                        key={`confetti-${confetti.id}`}
                        initial={{
                            x: window.innerWidth / 2,
                            y: window.innerHeight / 2,
                            opacity: 1,
                            scale: 0
                        }}
                        animate={{
                            x: window.innerWidth / 2 + confetti.x,
                            y: window.innerHeight / 2 + confetti.y,
                            opacity: 0,
                            scale: [0, 1, 0],
                            rotate: confetti.rotate
                        }}
                        transition={{
                            duration: confetti.duration,
                            ease: "easeOut"
                        }}
                        className="absolute w-2 h-2 rounded-full pointer-events-none z-30"
                        style={{
                            backgroundColor: confetti.color,
                            willChange: "transform, opacity" // Optimize for GPU
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Main Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 py-12">

                {/* Header with reduced animations */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-6xl sm:text-8xl mb-4 sm:mb-6"
                    >
                        🏰
                    </motion.div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Secret Enchanted Realm
                    </h1>

                    <p className="text-xl sm:text-2xl text-pink-300 font-medium">
                        You've discovered the most magical place! 🎭✨
                    </p>
                </motion.div>

                {/* Rotating Quotes with simpler animation */}
                <motion.div
                    key={currentQuote}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-md border border-purple-500/30 rounded-xl sm:rounded-full p-6 sm:p-8 max-w-3xl mx-auto">
                        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200">
                            {magicalQuotes[currentQuote]}
                        </p>
                    </div>
                </motion.div>

                {/* Main Surprise Section */}
                <div className="relative">
                    <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/40 backdrop-blur-lg p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-purple-500/40 relative overflow-hidden">
                        <div className="text-6xl sm:text-8xl mb-6">
                            🎪
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                            Your Personal Magic Show
                        </h3>

                        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                            Behind this curtain lies something special crafted just for you -
                            a moment of pure joy, a surprise that will make you smile,
                            and a reminder of how absolutely wonderful you are! 🎭💖
                        </p>

                        {/* Magic Reveal Section */}
                        <AnimatePresence>
                            {magicRevealed && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-pink-800/30 to-purple-800/30 rounded-xl border border-pink-500/30"
                                >
                                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">
                                        🌟
                                    </div>
                                    <p className="text-base sm:text-lg text-pink-200">
                                        The magic has been activated! Your special surprise is ready to unfold... ✨
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.button
                            onClick={handleSurpriseClick}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl text-white shadow-lg border border-white/20 w-full sm:w-auto"
                        >
                            🎩 ✨ Reveal the Magic ✨ 🎩
                        </motion.button>
                    </div>
                </div>

                {/* Navigation Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 rounded-full text-base sm:text-lg border border-purple-500/30 shadow-md transition-colors"
                    >
                        <span className="mr-2">🌙</span>
                        Return to the Realm
                        <span className="ml-2">✨</span>
                    </button>
                </div>
            </div>

            {/* Optimized Video Modal */}
            <AnimatePresence>
                {showVideoModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 overflow-y-auto p-4 flex justify-center items-start"
                        onClick={closeVideoModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-2xl sm:max-w-3xl w-full mt-8"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="relative p-6 bg-gradient-to-br from-pink-900/50 to-purple-900/50 rounded-xl border border-purple-500/50 shadow-lg">
                                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-white">
                                    🎬 Your Special Surprise! 🎬
                                </h2>

                                <div className="relative overflow-hidden rounded-lg border border-white/20">
                                    <video
                                        controls
                                        autoPlay
                                        playsInline
                                        className="w-auto h-full max-h-[90vh] max-w-[100vw] object-contain mx-auto"
                                    >
                                        <source src={videoPath} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                <button
                                    onClick={closeVideoModal}
                                    className="absolute -top-3 -right-3 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow border border-white/30"
                                >
                                    ×
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default SecretPage;