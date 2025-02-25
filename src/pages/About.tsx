import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-16 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 max-w-6xl mx-auto"
      >
        <h1 className="text-7xl font-bold mb-12">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl">
              I'm Sanskriti Madahar, an MBA scholar with a passion for business strategy
              and digital innovation. My academic journey has equipped me with a unique
              perspective on modern business challenges.
            </p>
            <p className="text-xl">
              With a strong foundation in business administration and a keen interest in
              digital transformation, I bring analytical thinking and creative problem-solving
              to every project I undertake.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-yellow-300 p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Expertise</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span className="text-lg">Business Strategy</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-lg">Digital Transformation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-lg">Market Analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-lg">Project Management</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About