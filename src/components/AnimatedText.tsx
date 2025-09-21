import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ Typewriter + Scroll Reveal + Gradient Shift + Neon Glow
interface AnimatedTextProps {
  text: string;
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // --- Typewriter Effect ---
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  // --- Scroll Reveal ---
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
  }, [controls, inView]);

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="relative text-4xl md:text-6xl font-bold text-transparent bg-clip-text
                 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                 animate-gradient-x drop-shadow-[0_0_15px_rgba(255,0,255,0.6)]
                 tracking-tight leading-tight"
      style={{ backgroundSize: "200% 200%" }} // For gradient animation
    >
      {displayedText}
    </motion.h1>
  );
}
