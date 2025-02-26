import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  category: 'education' | 'experience';
}

const timelineData: TimelineItem[] = [
  {
    year: '2024',
    title: 'MBA in Digital Transformation',
    description: 'Top Business School - Specialization in Digital Innovation and Strategy',
    category: 'education'
  },
  {
    year: '2023',
    title: 'Digital Strategy Lead',
    description: 'Led digital transformation initiatives for Fortune 500 clients and more to come.',
    category: 'experience'
  },
  {
    year: '2022',
    title: 'Innovation Fellow',
    description: 'Research and development of emerging technology applications in business',
    category: 'experience'
  },
  {
    year: '2021',
    title: 'Business Analytics Certification',
    description: 'Advanced certification in data-driven decision making as well as in python.',
    category: 'education'
  }
];

const Timeline = () => {
  return (
    <div className="py-16 mt-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Experience & Education</h2>
      <div className="max-w-6xl mx-auto relative">
        {/* Vertical Line (only visible on larger screens) */}


        <div className="lg:flex lg:flex-wrap lg:justify-between space-y-8 lg:space-y-0">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative w-full lg:w-[48%] ${index % 2 === 0 ? 'lg:text-right lg:pl-8' : 'lg:text-left lg:pr-8'}`}
            >
              {/* Dot Indicator */}
              <div
                className={`absolute top-0 ${index % 2 === 1 ? '-left-3' : '-right-3'} w-6 h-6 bg-yellow-300 rounded-full border-4 border-black shadow-lg`}
              />

              <div className="bg-black p-6  shadow-lg hover:shadow-xl transition-shadow border border-yellow-300 hover:scale-105 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-yellow-300 text-black rounded-full text-sm font-medium mb-2">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold mb-2 text-yellow-300">{item.title}</h3>
                <p className="text-yellow-300/80">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;