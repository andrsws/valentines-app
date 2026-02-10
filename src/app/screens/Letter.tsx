import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";

export function Letter() {
  const navigate = useNavigate();
  const { type } = useParams();

  const letters = {
    sad: {
      title: "When You're Sad",
      content: `My Dearest Love,

I know sometimes the world feels heavy, and clouds seem to cover your sunshine. But please remember this - you are never alone in your sadness.

Your feelings are valid, your emotions matter, and I'm here for you, always. Even when we're apart, my love wraps around you like a warm blanket.

Take your time to feel what you need to feel. Cry if you must. But know that after every storm comes a rainbow, and I'll be right here waiting to see you smile again.

You are stronger than you know, more beautiful than you can imagine, and more loved than you could ever understand.

This too shall pass, my love.

Forever yours,
With all my heart ❤️`,
    },
    miss: {
      title: "When You Miss Me",
      content: `My Beautiful Darling,

Distance means so little when someone means so much. Right now, as you read these words, know that I'm missing you just as much.

Close your eyes and feel my arms around you. Listen closely and you'll hear my heartbeat syncing with yours. We may be apart, but our souls are forever intertwined.

Every moment away from you makes me appreciate our time together even more. Every second apart makes the reunion even sweeter.

Look at the sky - we're under the same stars, breathing the same air, and thinking of each other. You're always with me, in my heart, in my thoughts, in my dreams.

Soon, my love. Soon we'll be together again.

Missing you endlessly,
Your forever love 💕`,
    },
    alone: {
      title: "When You Feel Alone",
      content: `My Precious One,

You are never, ever alone. Even in your quietest moments, even in your darkest hours, I am with you.

My love for you transcends physical presence. It lives in every breath you take, every beat of your heart, every thought in your mind.

When loneliness creeps in, remember all our beautiful memories. Remember the laughter, the joy, the moments that made time stand still. Those memories are proof that you are deeply loved and cherished.

You have touched my life in ways words cannot express. You have made my world infinitely brighter. And that light doesn't fade just because we're not in the same room.

Reach out to me anytime. I'm just a message away. And when words aren't enough, close your eyes and feel my love surrounding you.

You are loved beyond measure.

Always by your side,
Your devoted heart 🤗`,
    },
    sleep: {
      title: "When You Can't Sleep",
      content: `My Sweet Love,

The night can feel so long when sleep won't come. But let me help you find peace in these quiet hours.

Take a deep breath. Slowly in... and slowly out. Feel the tension leaving your body with each exhale.

Imagine us together, in our favorite place. Feel the warmth of my hand in yours. Hear the gentle rhythm of our breathing. See the soft smile on my face as I look at you with endless adoration.

Let go of the worries of today and the anxieties of tomorrow. Right now, in this moment, you are safe. You are loved. You are enough.

Count not sheep, but blessings - and know that you are my greatest blessing of all.

Let these words be your lullaby. Let my love be your comfort. Close your eyes, my darling, and drift into peaceful dreams.

I'll be there waiting for you.

Sweet dreams, my love,
Forever yours 🌙✨`,
    },
  };

  const currentLetter = letters[type as keyof typeof letters] || letters.sad;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-full relative"
    >
      {/* Paper texture background */}
      <div 
        className="absolute inset-0 bg-[#FFF9F0]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255, 107, 157, 0.02) 1px, transparent 1px),
            linear-gradient(rgba(255, 107, 157, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-full">
        {/* Header with Back Button */}
        <div className="sticky top-0 bg-[#FFF9F0]/80 backdrop-blur-sm border-b border-[#FFE8EE] px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2} />
            <span style={{ fontWeight: 600 }}>Back</span>
          </button>
        </div>

        {/* Letter Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-8 py-8"
        >
          {/* Letter Title */}
          <h2
            className="text-2xl mb-8 text-center text-primary"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 700,
            }}
          >
            {currentLetter.title}
          </h2>

          {/* Letter Body */}
          <div
            className="text-[#4A4A4A] leading-relaxed whitespace-pre-line"
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '1.8',
            }}
          >
            {currentLetter.content}
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center gap-2">
            <span className="text-2xl opacity-60">❤️</span>
            <span className="text-2xl opacity-60">✨</span>
            <span className="text-2xl opacity-60">💕</span>
          </div>
        </motion.div>
      </div>

      {/* Shadow overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 100px rgba(255, 107, 157, 0.05)',
        }}
      />
    </motion.div>
  );
}
