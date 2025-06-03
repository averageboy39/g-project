import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Adventures = () => {
    const [answers, setAnswers] = useState({});
    const [allAnswered, setAllAnswered] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState(null);
    
    // Initialize EmailJS
    useEffect(() => {
        emailjs.init("nHgdzW3ASna3qJ37V");
    }, []);

    const questions = [
        {
            id: "q1",
            question: "What's the most adventurous thing you've ever done? 🌍",
            placeholder: "Tell me about your wildest adventure..."
        },
        {
            id: "q2",
            question: "What do you want in a boy? 🐣",
            placeholder: "Describe what you look for in a guy..."
        },
        {
            id: "q3",
            question: "What’s a dream you have that you don’t talk about much?🎯",
            placeholder: "I would love to listen"
        },
        {
            id: "q4",
            question: "If you are going through any tension or something just write it here to lighten your mind, Gunjan. I am a normal and pure heated boy who will never share any of your talks with anyone because I forget it after 1 hour 😭.",
            placeholder: "What moment stands out the most?"
        },
        {
            id: "q5",
            question: "What's something about you that would surprise me? 🐥",
            placeholder: "That anonymous story boy was me, please dont be mad. "
        }
    ];

    // Check if all questions are answered
    useEffect(() => {
        const answered = questions.every(q => answers[q.id]?.trim());
        setAllAnswered(answered);
    }, [answers]);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const [userInfo] = useState({
        name: 'Someone',
        email: 'vanshpandey5161@gmail.com',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!allAnswered) {
            setError("Please complete all fields correctly");
            return;
        }

        setIsSending(true);

        try {
            const response = await emailjs.send(
                "service_n0jrzso",
                "template_tpuadwr",
                {
                    name: userInfo.name,
                    email: userInfo.email,
                    q1: answers.q1,
                    q2: answers.q2,
                    q3: answers.q3,
                    q4: answers.q4,
                    q5: answers.q5,
                    date: new Date().toLocaleString()
                }
            );

            if (response.status === 200) {
                setSubmitted(true);
            } else {
                throw new Error(`EmailJS responded with status ${response.status}`);
            }
        } catch (error) {
            console.error("Email sending failed:", error);
            setError("Failed to send your answers. Please check your connection and try again.");
            if (error.text) {
                console.error("EmailJS error details:", error.text);
            }
        } finally {
            setIsSending(false);
        }
    };

    const renderError = () => (
        error && (
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 15 }}
                className="bg-rose-900/50 border border-rose-700 rounded-lg p-4 mb-6"
            >
                <div className="flex items-center">
                    <motion.svg 
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.6 }}
                        className="w-5 h-5 mr-2 text-rose-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                    >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </motion.svg>
                    <span className="text-rose-200">{error}</span>
                </div>
            </motion.div>
        )
    );

    // Floating adventure elements
    const AdventureParticle = ({ delay, emoji }) => (
        <motion.div
            initial={{ y: -10, opacity: 0, scale: 0 }}
            animate={{ 
                y: [0, -40, -80],
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0.5],
                x: Math.random() * 100 - 50,
                rotate: Math.random() * 360
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
            {emoji}
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 font-sans overflow-hidden relative">
            {/* Animated gradient background */}
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
                <AdventureParticle 
                    key={i} 
                    delay={i * 0.2} 
                    emoji={["🌎", "✈️", "🏔", "🛳", "🗺", "🧭", "⛺", "🌋"][Math.floor(Math.random() * 8)]}
                />
            ))}

            <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
                {/* Header with enhanced animations */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-center mb-16"
                >
                    <motion.div
                        animate={{ 
                            scale: [1, 1.02, 1],
                            rotate: [0, 1, -1, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut"
                        }}
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold mb-6"
                            style={{
                                background: "linear-gradient(45deg, #e0c3fc, #8b5cf6, #6366f1)",
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
                            Adventure Log
                        </motion.h1>
                    </motion.div>
                    <motion.p
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {submitted ?
                            "Your answers have been recorded! More adventures await..." :
                            "Share your truth for memories made and those yet to come"}
                    </motion.p>
                </motion.div>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", bounce: 0.4 }}
                        className="text-center py-12"
                    >
                        <motion.div
                            animate={{ 
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut"
                            }}
                            className="text-6xl mb-6"
                        >
                            🌠
                        </motion.div>
                        <motion.h2 
                            className="text-3xl font-bold mb-4"
                            animate={{
                                textShadow: ["0 0 0px #fff", "0 0 8px #a78bfa", "0 0 0px #fff"]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            Thank You!
                        </motion.h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Your adventure log has been safely stored in the vault of awesome memories.
                        </p>
                        <Link to="/">
                            <motion.button
                                whileHover={{ 
                                    scale: 1.05,
                                    background: "linear-gradient(to right, #8b5cf6, #6366f1)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg font-medium relative overflow-hidden"
                            >
                                <motion.span
                                    className="relative z-10"
                                    animate={{
                                        color: ["#fff", "#f0abfc", "#fff"],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    Return Home
                                </motion.span>
                                <motion.div 
                                    className="absolute inset-0 bg-white opacity-0"
                                    animate={{ 
                                        opacity: [0, 0.1, 0],
                                        top: ["100%", "-10%", "100%"]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.button>
                        </Link>
                    </motion.div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-8"
                    >
                        {renderError()}
                        {questions.map((q, i) => (
                            <motion.div
                                key={q.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    delay: 0.2 + i * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="relative"
                                whileHover={{ scale: 1.01 }}
                            >
                                <motion.label 
                                    className="block text-xl font-medium mb-3"
                                    whileHover={{ x: 5 }}
                                >
                                    {q.question}
                                    {answers[q.id]?.trim() && (
                                        <motion.span 
                                            className="ml-2 text-green-400"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring" }}
                                        >
                                            ✓
                                        </motion.span>
                                    )}
                                </motion.label>
                                <motion.textarea
                                    value={answers[q.id] || ""}
                                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                                    placeholder={q.placeholder}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 min-h-[100px]"
                                    required
                                    whileFocus={{
                                        scale: 1.01,
                                        boxShadow: "0 0 0 2px rgba(139, 92, 246, 0.5)",
                                        borderColor: "#8b5cf6"
                                    }}
                                />
                            </motion.div>
                        ))}

                        <div className="pt-6">
                            <motion.button
                                type="submit"
                                disabled={!allAnswered || isSending}
                                whileHover={{ 
                                    scale: allAnswered ? 1.05 : 1,
                                    boxShadow: allAnswered ? "0 5px 15px rgba(139, 92, 246, 0.3)" : "none"
                                }}
                                whileTap={{ scale: allAnswered ? 0.95 : 1 }}
                                className={`px-8 py-3 rounded-lg font-medium text-lg w-full relative overflow-hidden ${allAnswered
                                    ? "bg-gradient-to-r from-violet-600 to-indigo-600"
                                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                {isSending ? (
                                    <motion.span 
                                        className="flex items-center justify-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <motion.svg 
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="-ml-1 mr-3 h-5 w-5 text-white" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="none" 
                                            viewBox="0 0 24 24"
                                        >
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </motion.svg>
                                        Sending...
                                    </motion.span>
                                ) : allAnswered ? (
                                    <motion.span
                                        animate={{
                                            textShadow: ["0 0 0px #fff", "0 0 8px #fff", "0 0 0px #fff"]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        Submit Adventure Log 🚀
                                    </motion.span>
                                ) : (
                                    "Answer all questions to continue"
                                )}
                                {allAnswered && !isSending && (
                                    <motion.div 
                                        className="absolute inset-0 bg-white opacity-0"
                                        animate={{ 
                                            opacity: [0, 0.1, 0],
                                            left: ["-100%", "120%", "120%"]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                )}
                            </motion.button>

                            {!allAnswered && (
                                <motion.p 
                                    className="text-center mt-4 text-rose-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    Complete all questions to unlock submission
                                </motion.p>
                            )}
                        </div>
                    </motion.form>
                )}
            </div>
        </div>
    );
};

export default Adventures;