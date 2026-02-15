import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const contentMap = {
    'product-care': {
        title: 'Product Care',
        content: `Your Jute & Co. piece is crafted to last. To maintain its beauty:
        
        1. Keep away from direct moisture and heavy rain. Jute is a natural fiber and can absorb water.
        2. If it gets wet, let it air dry in a shaded area. Do not use direct heat.
        3. For spills, blot gently with a clean, dry cloth immediately.
        4. Store in the provided dust bag when not in use to allow the fibers to breathe.
        5. Occasional loose fibers are natural characteristics of jute and can be trimmed carefully.`
    },
    'stores': {
        title: 'Our Stores',
        content: `Visit us to experience the texture of Jute firsthand.
        
        **New Delhi Flagship**
        12 Khan Market
        New Delhi, 110003
        Open Daily: 10AM - 9PM
        
        **Mumba Boutique**
        Kala Ghoda, Fort
        Mumbai, 400001
        Open Daily: 11AM - 8PM
        
        **Coming Soon**
        Paris (Le Marais)
        New York (SoHo)`
    },
    'repairs': {
        title: 'Repairs',
        showForm: true,
        formType: 'repair',
        content: `We build for longevity, but life happens. If your bag needs a repair, we are here to help.
        
        We offer free repairs for stitching and hardware issues within 1 year of purchase.
        For older items, we offer a paid repair service at cost price to ensure your bag stays in use and out of landfills.
        
        Please fill out the form below to request a repair assessment.`
    },
    'personalization': {
        title: 'Personalization',
        showForm: true,
        formType: 'personalization',
        content: `Make it truly yours. We offer custom embroidery and hand-painted monograms on select products.
        
        Choose from our curated palette of natural dyes. Personalization adds 3-5 business days to your order processing time. 
        Please note that personalized items are final sale.`
    },
    'gifting': {
        title: 'Art of Gifting',
        showForm: true,
        formType: 'gifting',
        content: `A gift from Jute & Co. is a gift to the planet.
        
        Every order arrives in our signature reusable cotton dust bag and recycled paper box. 
        Use the form below to request special gift wrapping or a handwritten note.`
    }
};

const ServiceForm = ({ type }) => {
    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 space-y-6 bg-white p-8 border border-[var(--color-border)] shadow-sm"
        >
            <h3 className="text-xl font-serif mb-6">Submit Request</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-gray-500">First Name</label>
                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-gray-500">Last Name</label>
                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-500">Email Address</label>
                <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
            </div>

            {/* Dynamic Fields based on Type */}
            {type === 'repair' && (
                <>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500">Product Name / ID</label>
                        <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500">Issue Description</label>
                        <textarea rows="4" className="w-full border border-gray-300 p-2 mt-2 focus:outline-none focus:border-black transition-colors" placeholder="Please describe the damage..."></textarea>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500">Upload Image</label>
                        <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800 transition-colors cursor-pointer" />
                    </div>
                </>
            )}

            {type === 'personalization' && (
                <>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500">Monogram Text (Max 3 letters)</label>
                        <input type="text" maxLength="3" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors font-serif text-2xl tracking-widest uppercase" placeholder="ABC" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500">Color Preference</label>
                        <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black bg-transparent">
                            <option>Natural Indigo (Blue)</option>
                            <option>Madder Root (Red)</option>
                            <option>Marigold (Yellow)</option>
                            <option>Charcoal (Black)</option>
                        </select>
                    </div>
                </>
            )}

            {type === 'gifting' && (
                <>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500">Recipient Name</label>
                        <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-gray-500">Gift Message</label>
                        <textarea rows="4" className="w-full border border-gray-300 p-2 mt-2 focus:outline-none focus:border-black transition-colors font-serif italic" placeholder="Write a note..."></textarea>
                    </div>
                </>
            )}

            <button className="w-full bg-black text-white py-4 uppercase tracking-[0.2em] text-sm hover:bg-gray-800 transition-colors mt-8">
                Submit Request
            </button>
        </motion.form>
    );
};

const GenericInfo = () => {
    const { page } = useParams();
    const data = contentMap[page];

    if (!data) {
        return (
            <div className="pt-32 text-center min-h-[50vh]">
                <h1 className="text-3xl font-serif">Page Not Found</h1>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-[#FDFBF7] px-6 md:px-20 pb-20 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-8 capitalize">{data.title}</h1>
            <div className="w-16 h-1 bg-black mb-12" />
            <div className={`text-gray-600 text-lg leading-loose whitespace-pre-line ${data.showForm ? 'mb-12' : ''}`}>
                {data.content}
            </div>

            {data.showForm && <ServiceForm type={data.formType} />}
        </div>
    );
};

export default GenericInfo;
