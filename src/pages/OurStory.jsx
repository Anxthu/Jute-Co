import React from 'react';
import { motion } from 'framer-motion';
import jute1 from '../assets/jute1.png';
import jute3 from '../assets/jute3.png';
import jute5 from '../assets/jute5.png';

const Section = ({ title, text, image, reverse = false }) => (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center min-h-[80vh] py-20 px-6 md:px-20`}>
        <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 p-8"
        >
            <img src={image} alt={title} className="w-full h-full object-cover shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700" />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 p-8 md:pl-20 space-y-6"
        >
            <h2 className="text-4xl md:text-5xl font-serif">{title}</h2>
            <div className="w-20 h-1 bg-black/80" />
            <p className="text-gray-600 text-lg leading-relaxed font-light text-justify">
                {text}
            </p>
        </motion.div>
    </div>
);

const OurStory = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#fffefc]">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center py-20 px-4"
            >
                <p className="text-xs uppercase tracking-[0.4em] mb-4 text-gray-500">Since 2023</p>
                <h1 className="text-6xl md:text-8xl font-serif mb-6">The Golden Fiber.</h1>
                <p className="max-w-xl mx-auto text-gray-500 italic">"Weaving nature into everyday elegance."</p>
            </motion.div>

            {/* Content Sections */}
            <Section
                title="Origins of Earth"
                text="Born from the fertile deltas of the Ganges, our jute is harvested at peak maturity to ensure the strongest, silkiest golden fibers. We believe in honoring the earth that provides for us, which is why every strand is 100% biodegradable and naturally grown without harsh pesticides. This is not just a material; it is a legacy of the land."
                image={jute1}
            />

            <Section
                title="Artisan Hands"
                text="In a world of mass production, we choose the slow, soulful path of the artisan. Our bags are handwoven by master craftsmen and women who have inherited techniques passed down through generations. The imperfections in the weave are not flaws—they are the signatures of human hands, making every Jute & Co. bag distinctly unique."
                image={jute3}
                reverse={true}
            />

            <Section
                title="Sustainable Luxury"
                text="True luxury is conscious. It cares for the future as much as the present. By choosing Jute & Co., you are rejecting fast fashion and embracing a lifestyle that values longevity, biodegradability, and ethical production. We are redefining modern aesthetics with ancient wisdom, proving that style and sustainability can coexist beautifully."
                image={jute5}
            />

            {/* Footer Quote */}
            <div className="py-32 text-center bg-black text-white px-4">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-3xl md:text-5xl font-serif leading-tight"
                >
                    "Sustainability is not a trend.<br />It is our only future."
                </motion.h3>
                <div className="mt-8 text-sm uppercase tracking-widest text-gray-400">- Jute & Co.</div>
            </div>
        </div>
    );
};

export default OurStory;
