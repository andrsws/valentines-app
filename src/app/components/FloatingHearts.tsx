import { motion } from "motion/react";

export function FloatingHearts() {
  const hearts = [
    { delay: 0, x: "10%", duration: 8 },
    { delay: 2, x: "30%", duration: 10 },
    { delay: 4, x: "60%", duration: 9 },
    { delay: 1, x: "80%", duration: 11 },
    { delay: 3, x: "50%", duration: 7 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          initial={{ y: "120%", opacity: 0 }}
          animate={{
            y: "-20%",
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-2xl"
          style={{
            left: heart.x,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
