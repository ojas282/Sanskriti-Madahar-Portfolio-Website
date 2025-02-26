import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Timeline from '../components/Timeline';
import Testimonials from '../components/Testimonials';
import ResumeButton from '../components/ResumeButton';

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-20 bg-black text-yellow-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 max-w-6xl mx-auto"
      >
        <h1 className="text-6xl font-bold mb-12 text-center uppercase">
          About Me
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 md:col-span-1"
          >
            <img
              src="/sans.JPG"
              alt="Profile"
              className="w-full h-auto object-cover max-h-80"
            />
          </motion.div>

          {/* About Text Section */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="text-yellow-300 p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 md:col-span-2"
          >
            <p className="text-xl">
              I'm Sanskriti Madahar, an MBA scholar passionate about business
              strategy and digital innovation. My academic journey has given me
              a unique perspective on modern business challenges.
            </p>
            <p className="text-xl mt-4">
              With a solid foundation in business administration and a keen
              interest in digital transformation, I bring analytical thinking
              and creative problem-solving to every project.
            </p>
            <div className="mt-6">
              <ResumeButton />
            </div>
          </motion.div>
        </div>

        {/* Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-yellow-300 text-black p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
            <ul className="space-y-2 text-lg">
              <li>• Strategic Planning</li>
              <li>• Digital Transformation</li>
              <li>• Business Development</li>
              <li>• Market Analysis</li>
            </ul>
          </div>

          <div className="bg-black text-yellow-300 p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-yellow-300">
            <h3 className="text-2xl font-bold mb-4">Hobbies & Interests</h3>
            <ul className="space-y-2 text-lg">
              <li>• Reading Business Books</li>
              <li>• Public Speaking</li>
              <li>• Exploring New Technologies</li>
              <li>• Mentoring & Teaching</li>
            </ul>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <Timeline />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-yellow-300 text-black p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
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
      </motion.div>
    </div>
  );
};

export default About;