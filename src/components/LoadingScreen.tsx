import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const [circleExpanded, setCircleExpanded] = useState(false);
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    const expandTimer = setTimeout(() => setCircleExpanded(true), 1800);
    const exitTimer = setTimeout(() => setStartExit(true), 2800);
    const finalTimer = setTimeout(() => onFinish(), 3500);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(exitTimer);
      clearTimeout(finalTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      initial={{ backgroundColor: "#000000" }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Expanding Circle Effect */}
      <motion.div
        initial={{ scale: 0, backgroundColor: "#FFD700" }}
        animate={{ scale: circleExpanded ? 30 : 0 }}  // Fully covers screen
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="absolute w-24 h-24 rounded-full"
      />

      {/* "SM" Letter Animation */}
      <div className="flex text-9xl font-bold tracking-tight relative">
        <motion.span
          initial={{ y: "100%", opacity: 0, color: "#FFD700" }}
          animate={{
            y: ["100%", "0%", "-10%", "0%"],
            opacity: [0, 1, 1, 1],
            color: circleExpanded ? "#000000" : "#FFD700", // Turns black after expansion
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          exit={startExit ? { x: "-120%", opacity: 0 } : {}}
        >
          S
        </motion.span>

        <motion.span className="w-1" />

        <motion.span
          initial={{ y: "-100%", opacity: 0, color: "#FFD700" }}
          animate={{
            y: ["-100%", "0%", "10%", "0%"],
            opacity: [0, 1, 1, 1],
            color: circleExpanded ? "#000000" : "#FFD700",
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          exit={startExit ? { x: "120%", opacity: 0 } : {}}
        >
          M
        </motion.span>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;