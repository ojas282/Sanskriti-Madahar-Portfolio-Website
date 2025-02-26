import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const ResumeButton = () => {
  const handleDownload = () => {
    // This is a placeholder URL - replace with actual resume PDF URL
    const resumeUrl = '/sanskriti_madahar_resume.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sanskriti_Madahar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      className="flex items-center gap-2 bg-yellow-300 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors mt-6"
    >
      <FileDown size={20} />
      Download Resume
    </motion.button>
  );
};

export default ResumeButton;