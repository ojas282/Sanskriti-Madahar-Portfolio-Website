import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "David Chen",
    role: "Chief Innovation Officer",
    company: "TechForward Inc.",
    text: "Sanskriti's strategic vision and deep understanding of digital transformation have been instrumental in our company's evolution. Her ability to blend technical knowledge with business acumen is truly remarkable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Sarah Williams",
    role: "Director of Strategy",
    company: "Global Innovations",
    text: "Working with Sanskriti was transformative for our team. Her innovative approaches and leadership skills helped us navigate complex digital challenges with confidence.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Digital",
    company: "Creative Solutions Co.",
    text: "Sanskriti brings a unique perspective to every project. Her commitment to excellence and ability to drive meaningful change sets her apart in the industry.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-16 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-black rounded-lg shadow-xl p-8 relative border border-yellow-300"
          >
            <Quote className="absolute text-yellow-300 w-12 h-12 -top-6 -left-6" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <p className="text-lg mb-6 text-yellow-300">{testimonials[currentIndex].text}</p>
                <div>
                  <h4 className="font-bold text-xl text-yellow-300">{testimonials[currentIndex].name}</h4>
                  <p className="text-yellow-300/80">{testimonials[currentIndex].role}</p>
                  <p className="text-yellow-300">{testimonials[currentIndex].company}</p>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-yellow-300"
                />
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-2 bg-yellow-300 text-black rounded-full hover:bg-yellow-400 transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-2 bg-yellow-300 text-black rounded-full hover:bg-yellow-400 transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;