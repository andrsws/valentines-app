import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-[#FFE8EE] via-[#FFF5F7] to-[#FFD4E0] flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-8xl mb-4">❤️</div>
          <h1 className="text-3xl" style={{ fontWeight: 700, color: '#FF6B9D' }}>
            My Love
          </h1>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-[#FFE8EE] via-[#FFF5F7] to-[#FFD4E0] flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: 0,
            ease: "easeInOut",
          }}
          className="text-8xl mb-4"
        >
          ❤️
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl"
          style={{ fontWeight: 700, color: '#FF6B9D' }}
        >
          My Love
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
