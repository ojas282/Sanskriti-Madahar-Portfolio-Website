import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Connect = () => {
  return (
    <div className="min-h-screen pt-16 pb-20 grid grid-cols-1 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-yellow-300 p-8"
      >
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">NAME</label>
            <input type="text" className="w-full p-2 border border-black" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">ORGANIZATION</label>
            <input type="text" className="w-full p-2 border border-black" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">EMAIL ADDRESS</label>
            <input type="email" className="w-full p-2 border border-black" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">MESSAGE</label>
            <textarea className="w-full p-2 border border-black h-32"></textarea>
          </div>
          <button className="bg-black text-white px-8 py-2">SUBMIT</button>
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-8 flex flex-col justify-between"
      >
        <div className="grid grid-cols-2 gap-8">
          <a href="#" className="text-center">
            <Linkedin size={48} className="mx-auto mb-2" />
            <span>LINKEDIN</span>
          </a>
          <a href="#" className="text-center">
            <Mail size={48} className="mx-auto mb-2" />
            <span>EMAIL</span>
          </a>
          <a href="#" className="text-center">
            <Instagram size={48} className="mx-auto mb-2" />
            <span>INSTAGRAM</span>
          </a>
          <a href="#" className="text-center">
            <Twitter size={48} className="mx-auto mb-2" />
            <span>TWITTER</span>
          </a>
        </div>
        <p className="text-center text-sm mt-8">© 2024 SANSKRITI MADAHAR</p>
      </motion.div>
    </div>
  );
};

export default Connect;