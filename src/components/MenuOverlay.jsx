import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenuOverlay = ({ isOpen, onClose }) => {
    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const menuItems = [
        { label: 'New Arrivals', path: '/new-arrivals' },
        { label: 'Collection', path: '/collection' },
        { label: 'Women', path: '/women' },
        { label: 'Men', path: '/men' },
        { label: 'Living', path: '/art-of-living' },
        { label: 'Our Story', path: '/our-story' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

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

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 h-screen w-full md:w-[400px] bg-[#FDFBF7] z-[60] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-8 py-8 border-b border-gray-200">
                            <span className="text-sm uppercase tracking-widest font-bold">Menu</span>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex-1 overflow-y-auto px-8 py-12">
                            <motion.nav
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                className="flex flex-col space-y-8"
                            >
                                {menuItems.map((item) => (
                                    <motion.div key={item.path} variants={itemVariants}>
                                        <Link
                                            to={item.path}
                                            onClick={onClose}
                                            className="text-4xl font-serif text-black hover:italic hover:text-gray-600 transition-all duration-300 block"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.nav>
                        </div>

                        {/* Footer */}
                        <div className="p-8 border-t border-gray-200">
                            <div className="flex gap-4 text-sm text-gray-500 uppercase tracking-widest">
                                <Link to="/login" onClick={onClose} className="hover:text-black transition-colors">Login</Link>
                                <span className="text-gray-300">|</span>
                                <Link to="/cart" onClick={onClose} className="hover:text-black transition-colors">Cart</Link>
                            </div>
                        </div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MenuOverlay;
