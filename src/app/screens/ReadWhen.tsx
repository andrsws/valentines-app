import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { FloatingHearts } from "../components/FloatingHearts";

export function ReadWhen() {
  const navigate = useNavigate();

  const letters = [
    {
      type: "sad",
      emoji: "😢",
      title: "Read when you're sad",
      gradient: "from-[#FFE8EE] to-[#FFD4E0]",
      delay: 0,
    },
    {
      type: "miss",
      emoji: "💭",
      title: "Read when you miss me",
      gradient: "from-[#FFD4E0] to-[#FFC9DB]",
      delay: 0.1,
    },
    {
      type: "alone",
      emoji: "🤗",
      title: "Read when you feel alone",
      gradient: "from-[#FFC9DB] to-[#FFE8EE]",
      delay: 0.2,
    },
    {
      type: "sleep",
      emoji: "🌙",
      title: "Read when you can't sleep",
      gradient: "from-[#FFE8EE] to-[#FFD4E0]",
      delay: 0.3,
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EE] to-[#FFD4E0] px-6 pt-8 pb-8">
      <FloatingHearts />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgb(255,107,157,0.15)] mb-4">
          <span className="text-3xl">💌</span>
        </div>
        <h1 className="text-3xl mb-2" style={{ fontWeight: 600 }}>
          Letters for You
        </h1>
        <p className="text-muted-foreground">
          Words from my heart, whenever you need them
        </p>
      </motion.div>

      {/* Letter Cards */}
      <div className="space-y-4">
        {letters.map((letter) => (
          <motion.button
            key={letter.type}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: letter.delay }}
            onClick={() => navigate(`/letter/${letter.type}`)}
            className="w-full bg-white rounded-[18px] p-6 shadow-[0_8px_30px_rgb(255,107,157,0.12)] active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${letter.gradient} flex items-center justify-center flex-shrink-0 shadow-[0_4px_15px_rgb(255,107,157,0.2)]`}>
                <span className="text-2xl">{letter.emoji}</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-lg" style={{ fontWeight: 600 }}>
                  {letter.title}
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Tap to open
                </p>
              </div>
              <svg
                className="w-6 h-6 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Bottom Decorative Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-muted-foreground italic">
          "Every word written with love" ✨
        </p>
      </motion.div>
    </div>
  );
}