import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Memories() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const memories = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3NzA2Nzg4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Our first sunset together",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1688421937759-7c2b066d8371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHMlMjBiZWFjaHxlbnwxfHx8fDE3NzA3MjI0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Beach day memories",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1595791125402-86d500754116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGRhdGV8ZW58MXx8fHwxNzcwNzI5MzgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Date night magic",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1766974888376-3697b53495f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsYXVnaGluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MDcyNTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Laughter and joy",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1561076476-38378f4c669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwaWNuaWMlMjBwYXJrfGVufDF8fHx8MTc3MDY5OTQwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Picnic in the park",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1763916844907-ad09b2b9978a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzdGFyZ2F6aW5nJTIwbmlnaHR8ZW58MXx8fHwxNzcwNzE2Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Under the stars",
    },
  ];

  return (
    <>
      <div className="min-h-full bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EE] to-[#FFD4E0] px-6 pt-8 pb-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgb(255,107,157,0.15)] mb-4">
            <span className="text-3xl">📸</span>
          </div>
          <h1 className="text-3xl mb-2" style={{ fontWeight: 600 }}>
            Our Memories
          </h1>
          <p className="text-muted-foreground">
            Every moment with you is precious
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-4">
          {memories.map((memory, index) => (
            <motion.button
              key={memory.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              className="aspect-square rounded-[18px] overflow-hidden shadow-[0_4px_20px_rgb(255,107,157,0.12)] active:scale-95 transition-transform"
            >
              <ImageWithFallback
                src={memory.url}
                alt={memory.caption}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            "Collecting moments, not things" ✨
          </p>
        </motion.div>
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center px-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white active:scale-95 transition-transform z-10"
            >
              <X className="w-6 h-6" strokeWidth={2} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[390px]"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={memories[selectedImage].url}
                alt={memories[selectedImage].caption}
                className="w-full rounded-[18px] shadow-2xl"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-white text-center mt-6 text-lg"
                style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
              >
                {memories[selectedImage].caption}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
