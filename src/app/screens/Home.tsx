import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Home() {
  const startDate = new Date("2024-08-25");
  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());

  function calculateTimeElapsed() {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return { days, hours };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-full relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFE8EE] via-[#FFF5F7] to-[#FFD4E0]" />
      
      {/* Content */}
      <div className="relative z-10 px-6 pt-8 pb-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl mb-2" style={{ fontWeight: 600 }}>
            My Love ❤️
          </h1>
          <p className="text-muted-foreground">Our Journey Together</p>
        </motion.div>

        {/* Counter Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[18px] p-8 mb-6 shadow-[0_8px_30px_rgb(255,107,157,0.12)]"
        >
          <div className="text-center">
            <div className="mb-4">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-[#FF8FB4] mb-4"
              >
                <span className="text-4xl">❤️</span>
              </motion.div>
            </div>
            <h2 className="text-3xl mb-2" style={{ fontWeight: 700, color: '#FF6B9D' }}>
              {timeElapsed.days}
            </h2>
            <p className="text-lg mb-1">days together</p>
            <p className="text-sm text-muted-foreground">
              + {timeElapsed.hours} hours
            </p>
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-[14px] p-5 shadow-[0_4px_20px_rgb(255,107,157,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FFE8EE] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📅</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-0.5">Started</p>
                <p style={{ fontWeight: 600 }}>August 25, 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[14px] p-5 shadow-[0_4px_20px_rgb(255,107,157,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FFE8EE] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💕</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-0.5">Status</p>
                <p style={{ fontWeight: 600 }}>Deeply in love</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[14px] p-5 shadow-[0_4px_20px_rgb(255,107,157,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FFE8EE] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-0.5">Total Memories</p>
                <p style={{ fontWeight: 600 }}>6 special moments</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}