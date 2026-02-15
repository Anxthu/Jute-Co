import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-left focus:outline-none py-2"
            >
                <span className="text-lg font-medium font-serif">{question}</span>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-600 mt-2 pb-4 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#FDFBF7] px-6 md:px-20 pb-20 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif mb-12 fade-in">Frequently Asked Questions.</h1>
            <div className="space-y-2">
                <FAQItem
                    question="Where are your products made?"
                    answer="All our products are handcrafted by skilled artisans in Kolkata and Bangladesh, the heartland of the world's finest jute."
                />
                <FAQItem
                    question="How do I care for my Jute bag?"
                    answer="Jute is a natural fiber. Avoid machine washing. Spot clean with a damp cloth and mild soap. Keep it dry and aired to prevent mold."
                />
                <FAQItem
                    question="Do you ship internationally?"
                    answer="Yes, we ship to over 50 countries worldwide. Shipping times and rates vary by location and will be calculated at checkout."
                />
                <FAQItem
                    question="What is your return policy?"
                    answer="We accept returns within 30 days of delivery. The item must be unused, in its original packaging, and accompanied by the receipt."
                />
                <FAQItem
                    question="Is your packaging eco-friendly?"
                    answer="Absolutely. We use 100% recycled paper and compostable mailers. We use zero plastic in our packaging."
                />
            </div>
        </div>
    );
};

export default FAQ;
