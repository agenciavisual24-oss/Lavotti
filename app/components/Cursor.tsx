"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 380, damping: 26 });
  const springY = useSpring(mouseY, { stiffness: 380, damping: 26 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onOver = (e: MouseEvent) => {
      setHover(!!(e.target as HTMLElement).closest("a, button, [role='button']"));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      animate={{ width: hover ? 40 : 10, height: hover ? 40 : 10, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        borderRadius: "50%",
        border: hover ? "1.5px solid var(--color-ink)" : "none",
        background: hover ? "transparent" : "var(--color-sky-deep)",
        mixBlendMode: "multiply",
      }}
    />
  );
}
