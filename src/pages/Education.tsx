import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col pt-16 pb-20 overflow-y-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="p-8 max-w-6xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-12 text-center"
        >
          Education & Qualifications
        </motion.h1>

        <div className="space-y-16">
          <motion.div
            variants={itemVariants}
            className="bg-yellow-300 p-8 hover-scale"
          >
            <h2 className="text-3xl font-bold mb-4">Master of Business Administration</h2>
            <p className="text-xl mb-4">Top Business School • 2022-2024</p>
            <ul className="space-y-2">
              <li>• Specialization in Digital Transformation</li>
              <li>• Advanced Business Strategy</li>
              <li>• Leadership and Innovation</li>
              <li>• International Business Management</li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-black text-white p-8 hover-scale">
              <h3 className="text-2xl font-bold mb-4">Professional Certifications</h3>
              <ul className="space-y-2">
                <li>• Digital Strategy & Innovation</li>
                <li>• Project Management Professional (PMP)</li>
                <li>• Business Analytics</li>
                <li>• Agile Leadership</li>
              </ul>
            </div>

            <div className="bg-yellow-300 p-8 hover-scale">
              <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
              <ul className="space-y-2">
                <li>• Strategic Planning</li>
                <li>• Digital Transformation</li>
                <li>• Business Development</li>
                <li>• Market Analysis</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white border-2 border-black p-8 hover-scale"
          >
            <h2 className="text-3xl font-bold mb-4">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xl font-bold mb-2">Academic Excellence</h4>
                <p>Dean's List • Top 5% of Class • Research Award</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Leadership</h4>
                <p>Student Body President • Case Competition Winner</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;