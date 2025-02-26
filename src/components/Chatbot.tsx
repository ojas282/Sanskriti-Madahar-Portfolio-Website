import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ChevronRight, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string;
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "What's my approach to digital transformation?",
    category: "Strategy",
    options: [
      "Technical implementation only",
      "Holistic strategy combining innovation and cultural change",
      "Cost-cutting focus",
      "Traditional methods only"
    ],
    answer: "I believe in a holistic approach to digital transformation that goes beyond just technical implementation. It's about creating meaningful change through innovation while preserving core business values and cultural identity."
  },
  {
    id: 2,
    text: "How do I view the future of creative agencies?",
    category: "Vision",
    options: [
      "Traditional advertising only",
      "Digital-first approach",
      "Purpose-driven creativity with digital excellence",
      "Social media focused"
    ],
    answer: "I envision creative agencies as purpose-driven entities that combine digital excellence with meaningful impact. It's not just about creating content, but about shaping culture and driving positive change through strategic innovation."
  },
  {
    id: 3,
    text: "What's my philosophy on community engagement?",
    category: "Community",
    options: [
      "Online presence only",
      "Traditional networking",
      "Integrated community building",
      "Project-based collaboration"
    ],
    answer: "I believe in building genuine connections through integrated community engagement. This means creating spaces for collaboration, learning, and growth while fostering meaningful relationships that extend beyond traditional business boundaries."
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(questions.map(q => q.category)));

  const handleQuestionClick = (question: Question) => {
    setCurrentQuestion(question);
    setShowAnswer(false);
  };

  const handleOptionClick = () => {
    setShowAnswer(true);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Blur Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-30"
              onClick={() => {
                setIsOpen(false);
                setCurrentQuestion(null);
                setShowAnswer(false);
              }}
            ></motion.div>

            {/* Chatbot Panel */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-24 right-6 w-[90vw] sm:w-[450px] bg-white shadow-xl  z-40 border-2 border-black max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center p-4 border-b-2 border-black bg-yellow-300">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-black" size={24} />
                  <h3 className="text-xl font-bold">Ask Sanskriti</h3>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setCurrentQuestion(null);
                    setShowAnswer(false);
                  }}
                  className="hover:bg-yellow-400 p-2  transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="h-[500px] overflow-y-auto p-4 bg-gray-50">
                {!currentQuestion ? (
                  <div className="space-y-6">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {categories.map((category) => (
                        <motion.button
                          key={category}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-full whitespace-nowrap ${selectedCategory === category
                            ? "bg-yellow-300 text-black"
                            : "bg-gray-200 text-gray-700"
                            }`}
                        >
                          {category}
                        </motion.button>
                      ))}
                    </div>

                    <div className="space-y-4">
                      {questions
                        .filter((q) => !selectedCategory || q.category === selectedCategory)
                        .map((q) => (
                          <motion.button
                            key={q.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleQuestionClick(q)}
                            className="w-full text-left p-6 bg-white  shadow-md hover:shadow-lg transition-all border-l-4 border-yellow-300"
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <span className="text-sm text-gray-500 mb-1 block">
                                  {q.category}
                                </span>
                                <span className="text-lg">{q.text}</span>
                              </div>
                              <ChevronRight size={20} className="text-yellow-500" />
                            </div>
                          </motion.button>
                        ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        setCurrentQuestion(null);
                        setShowAnswer(false);
                      }}
                      className="mb-4 px-4 py-2 bg-black text-white flex items-center gap-2"
                    >
                      <ChevronRight className="rotate-180" size={16} />
                      Back to Questions
                    </motion.button>

                    <div className="bg-white p-6  shadow-md">
                      <span className="text-sm text-yellow-600 font-medium">{currentQuestion.category}</span>
                      <h4 className="font-bold text-xl mt-1 mb-4">{currentQuestion.text}</h4>

                      {!showAnswer ? (
                        <div className="space-y-3">
                          {currentQuestion.options.map((option, index) => (
                            <motion.button
                              key={index}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={handleOptionClick}
                              className="w-full p-4 bg-gray-50  hover:bg-yellow-300 transition-colors text-left"
                            >
                              {option}
                            </motion.button>
                          ))}
                        </div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-6 bg-yellow-300 "
                        >
                          {currentQuestion.answer}
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;