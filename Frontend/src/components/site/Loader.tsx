import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import crest from "@/assets/crest.png";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[var(--royal-deep)]"
        >
          <div className="text-center">
            <motion.img
              src={crest}
              alt=""
              width={96}
              height={96}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mx-auto drop-shadow-[0_0_24px_rgba(212,175,55,0.7)]"
            />
            <div className="mt-6 font-serif text-xl text-gold-gradient">Royal College of Engineering</div>
            <div className="mx-auto mt-4 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 1.2, ease: "easeInOut" }} className="h-full w-1/2 bg-gold-gradient" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
