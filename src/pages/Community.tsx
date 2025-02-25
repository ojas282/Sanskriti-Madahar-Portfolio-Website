import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  return (
    <div className="min-h-screen pt-16 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-8 max-w-6xl mx-auto"
      >
        <h1 className="text-7xl font-bold mb-12">Research</h1>
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-xl leading-relaxed">
              My research focuses on the intersection of digital transformation and
              traditional business models. I explore how organizations can adapt and
              thrive in an increasingly digital world while maintaining their core values
              and business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-yellow-300 p-8"
            >
              <h2 className="text-3xl font-bold mb-4">Digital Transformation Study</h2>
              <p className="mb-4">
                A comprehensive analysis of digital transformation strategies in
                traditional industries, focusing on:
              </p>
              <ul className="space-y-2">
                <li>• Implementation Challenges</li>
                <li>• Change Management</li>
                <li>• ROI Analysis</li>
                <li>• Best Practices</li>
                <li>• Case Studies</li>
              </ul>
              <button className="mt-6 bg-black text-white px-6 py-2">READ MORE →</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-yellow-300 p-8"
            >
              <h2 className="text-3xl font-bold mb-4">Business Innovation Research</h2>
              <p className="mb-4">
                Exploring innovative business models and their impact on traditional
                markets, with a focus on sustainability and scalability.
              </p>
              <button className="mt-6 bg-black text-white px-6 py-2">LEARN MORE →</button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Research;