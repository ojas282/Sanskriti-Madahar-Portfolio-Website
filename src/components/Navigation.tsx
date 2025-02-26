import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const profileImage = "/sans.JPG";

  // Check if the current page is the About section
  const isAboutPage = location.pathname === "/about";

  return (
    <>
      {/* Top Marquee Bar */}
      <div className={`fixed top-0 w-full py-2 overflow-hidden transition-all duration-300 ${isAboutPage ? 'bg-white text-black' : 'bg-black text-white'} z-[9999]`}>
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <img src={profileImage} alt="Sanskriti Madahar" className="w-8 h-8 rounded-full mx-4" />
          <span className="mx-4">MBA BY DEGREE</span>
          <X className="inline-block mx-4" />
          <span>STRATEGIST BY MINDSET</span>
          <X className="inline-block mx-4" />
          <span>DREAMER BY DEFAULT</span>
          <X className="inline-block mx-4" />
          <span>HI ! I’M SANSKRITI MADAHAR !</span>
          <X className="inline-block mx-4" />
          <span className="mx-4">SANSKRITI MADAHAR</span>
          <X className="inline-block mx-4" />
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-black z-[9999]">
        <div className="grid grid-cols-5 text-[10px] sm:text-xs md:text-sm">
          {['WORK', 'ABOUT', '', 'EDUCATION', 'CONNECT'].map((item, index) => (
            item ? (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="relative flex-1 flex items-center justify-center py-3 border-r border-black last:border-r-0 group transition-all duration-300"
              >
                {/* Active Tab Background Indicator */}
                {location.pathname === `/${item.toLowerCase()}` && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-yellow-300"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                {/* Text with Overflow Fix */}
                <motion.span
                  className="relative z-10 px-1 py-1 transition-all duration-300 group-hover:text-yellow-700 overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {item}
                </motion.span>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 border border-black transition-opacity opacity-0 group-hover:opacity-100"
                />
              </Link>
            ) : (
              <Link
                key={index}
                to="/"
                className="flex-1 flex items-center justify-center border-r border-black last:border-r-0 group"
              >
                <motion.span
                  className="font-bold text-lg md:text-xl transition-all duration-500 ease-out"
                  whileHover={{
                    scale: 1.2,
                    opacity: 0.8,
                    y: -2,
                    filter: "blur(1px)"
                  }}
                  transition={{ duration: 0.1, ease: "easeInOut" }}
                >
                  SM
                </motion.span>
              </Link>
            )
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;