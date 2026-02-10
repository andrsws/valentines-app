import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EE] to-[#FFD4E0] px-6 pt-16 pb-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mb-8">
          <span className="text-8xl">💔</span>
        </div>
        
        <h1 className="text-4xl mb-3" style={{ fontWeight: 700 }}>
          Lost in Love
        </h1>
        
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
          This page doesn't exist, but our love does! Let's get you back home.
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-[14px] shadow-[0_4px_20px_rgb(255,107,157,0.3)] active:shadow-[0_2px_10px_rgb(255,107,157,0.3)] transition-shadow"
          style={{ fontWeight: 600 }}
        >
          <Home className="w-5 h-5" strokeWidth={2} />
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}
