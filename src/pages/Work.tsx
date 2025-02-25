import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <div className="min-h-screen pt-16 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 max-w-6xl mx-auto"
      >
        <h1 className="text-7xl font-bold leading-tight">
          Strategic Thinker.<br />
          Business Innovator.<br />
          Future Leader.
        </h1>
      </motion.div>
    </div>
  );
};

export default Work