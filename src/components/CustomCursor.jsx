"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isVisibleRef = useRef(false);
  const isHoveringRef = useRef(false);

  // Initial position off-screen
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (shouldReduceMotion || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateHovering = (nextIsHovering) => {
      if (isHoveringRef.current === nextIsHovering) return;

      isHoveringRef.current = nextIsHovering;
      setIsHovering(nextIsHovering);
    };

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (e.target instanceof Element) {
        updateHovering(
          Boolean(e.target.closest("a, button, input, textarea, select, summary, [role='button']"))
        );
      }

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      updateHovering(false);
      setIsVisible(false);
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("pointerleave", handleMouseLeave);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] -ml-4 -mt-4 hidden size-8 items-center justify-center sm:flex"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "tween", duration: 0.15 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full border border-teal-600/45 dark:border-teal-300/45"
        animate={{
          scale: isHovering ? 1.65 : 1,
          backgroundColor: isHovering ? "rgba(20, 184, 166, 0.1)" : "rgba(20, 184, 166, 0)",
          borderColor: isHovering ? "rgba(20, 184, 166, 0.55)" : "rgba(20, 184, 166, 0.45)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
    </motion.div>
  );
}
