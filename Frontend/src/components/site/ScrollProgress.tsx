import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX: w }}
      className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left bg-gold-gradient"
    />
  );
}
