import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const profileImage = "/sans.JPG";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-16 pb-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          variants={itemVariants}
          className="space-y-6"
        >
          <h1 className="text-6xl font-bold leading-tight">
            Sanskriti<br />
            <span className="text-yellow-400">Madahar</span><br />
            MBA Scholar
          </h1>
          <p className="text-xl">
            MBA Scholar specializing in Digital Transformation
            and Strategic Business Innovation
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-300 px-8 py-3 text-black font-bold"
          >
            View My Work →
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-yellow-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.img
            src={profileImage}
            alt="Sanskriti Madahar"
            className="relative z-10 w-full h-[400px] object-cover object-center"
            style={{ transform: 'translateX(-5px) translateY(20px)' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-300 p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Strategic Thinking</h3>
          <p>Developing innovative solutions for complex business challenges</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-black text-white p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Digital Innovation</h3>
          <p>Leveraging technology to transform traditional business models</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-300 p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Leadership</h3>
          <p>Guiding teams towards achieving exceptional results</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;