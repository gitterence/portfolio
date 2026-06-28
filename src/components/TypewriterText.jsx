"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypewriterText({ text, as: Component = "span", className = "", delay = 0 }) {
  const [displayText, setDisplayText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayText(""); // Reset text on mount or text change
    setIsFinished(false);
    setIsStarted(false);
    
    const timeout = setTimeout(() => {
      setIsStarted(true);
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, index + 1));
        index++;
        if (index >= text.length) {
          clearInterval(interval);
          setIsFinished(true);
        }
      }, 50); // Speed of typing (50ms per character)
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <Component className={className}>
      {displayText}
      {isStarted && !isFinished && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block ml-1 w-[3px] h-[0.85em] bg-teal-500 align-baseline"
        />
      )}
    </Component>
  );
}
