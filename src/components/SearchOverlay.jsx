import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const SearchOverlay = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 100);
        }
    }, [isOpen]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const filteredProducts = query
        ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
        : [];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-[55] backdrop-blur-sm"
                    />

                    {/* Search Panel */}
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 w-full bg-[#FDFBF7] z-[60] shadow-2xl max-h-[85vh] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
                            <span className="text-sm uppercase tracking-widest font-bold">Search</span>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Input Area */}
                        <div className="px-6 py-8 border-b border-gray-100">
                            <div className="max-w-[1000px] mx-auto relative">
                                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={32} />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search for bags..."
                                    className="w-full pl-12 pr-4 py-3 text-xl md:text-3xl font-serif bg-transparent outline-none placeholder:text-gray-300"
                                />
                            </div>
                        </div>

                        {/* Results */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-12">
                            <div className="max-w-[1440px] mx-auto">
                                {query && filteredProducts.length === 0 ? (
                                    <div className="text-center text-gray-400 py-12">
                                        <p className="text-lg">No results found for "{query}"</p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                                        {filteredProducts.map(product => (
                                            <Link
                                                key={product.id}
                                                to={`/products/${product.id}`}
                                                onClick={onClose}
                                                className="group"
                                            >
                                                <div className="aspect-[4/5] bg-white mb-3 overflow-hidden">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <h4 className="font-bold text-sm">{product.name}</h4>
                                                <p className="text-xs text-gray-500 mt-1">{product.price}</p>
                                            </Link>
                                        ))}
                                    </div>
                                )}

                                {!query && (
                                    <div className="text-center text-gray-400 py-12 text-sm uppercase tracking-widest">
                                        Start typing to see results
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SearchOverlay;
