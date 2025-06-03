import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Confetti from 'react-confetti';

const ChillZone = () => {
  // Game state
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [muted, setMuted] = useState(true);

  // Cute animal emojis for the cards
  const emojis = ["🐶", "🐱", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"];

  // Initialize the game
  useEffect(() => {
    startGame();
  }, []);

  // Check if all matches are found
  useEffect(() => {
    if (matched.length === emojis.length * 2) {
      setGameWon(true);
    }
  }, [matched]);

  // Start a new game
  const startGame = () => {
    const doubledEmojis = [...emojis, ...emojis];
    const shuffledCards = doubledEmojis
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, flipped: false }));

    setCards(shuffledCards);
    setFlipped([]);
    setMatched([]);
    setGameWon(false);
  };

  // Handle card click
  const handleCardClick = (id) => {
    // Don't allow more than 2 cards flipped at once
    if (flipped.length >= 2 || matched.includes(id) || flipped.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    // If two cards are flipped, check for a match
    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find(card => card.id === firstId);
      const secondCard = cards.find(card => card.id === secondId);

      if (firstCard.emoji === secondCard.emoji) {
        setMatched([...matched, firstId, secondId]);
      }

      // Flip back after a delay if no match
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 font-sans overflow-hidden relative">
      {/* Floating elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 40, opacity: [0, 0.3, 0], x: Math.random() * 100 - 50 }}
          transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, delay: Math.random() * 5 }}
          className="absolute text-xl"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        >
          {["🌸", "✨", "🍃", "🦋"][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}

      {/* Confetti on win */}
      {gameWon && <Confetti recycle={false} numberOfPieces={500} />}

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              background: "linear-gradient(45deg, #FF9A8B, #FF6B95, #FF8E53)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Chill Zone 🧊
          </motion.h1>
          <p className="text-lg text-gray-600">
            {gameWon ? "You won! 🎉 Play again?" : "Match the cute animals to win!"}
          </p>
        </motion.div>

        {/* Game board */}
        <motion.div
          className="grid grid-cols-4 gap-3 md:gap-4 max-w-md mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`aspect-square flex items-center justify-center rounded-xl cursor-pointer text-4xl transition-all duration-300 ${
                flipped.includes(card.id) || matched.includes(card.id)
                  ? "bg-white shadow-lg rotate-y-180"
                  : "bg-pink-100 hover:bg-pink-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {(flipped.includes(card.id) || matched.includes(card.id)) ? (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  {card.emoji}
                </motion.span>
              ) : (
                <span className="text-pink-300">❔</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <motion.button
            onClick={startGame}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-pink-500 text-white rounded-lg shadow-md"
          >
            {gameWon ? "Play Again" : "Restart"}
          </motion.button>

          <motion.button
            onClick={() => setMuted(!muted)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-indigo-500 text-white rounded-lg shadow-md"
          >
            {muted ? "🔇 Sound Off" : "🔊 Sound On"}
          </motion.button>
        </div>

        {/* Optional: Add relaxing background music */}
        {!muted && (
          <audio autoPlay loop>
            <source src="/music.mp3" type="audio/mpeg" />
          </audio>
        )}

        {/* Back to home */}
        <motion.div className="text-center mt-10">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg"
            >
              ← Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ChillZone;