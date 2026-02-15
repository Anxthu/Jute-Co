import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Section = ({ title, children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay }}
            className="mb-16"
        >
            <h2 className="text-2xl font-serif mb-6">{title}</h2>
            <div className="text-gray-600 leading-relaxed max-w-2xl text-justify">
                {children}
            </div>
        </motion.div>
    );
};

const Sustainability = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#FDFBF7] px-6 md:px-20 pb-20">
            <h1 className="text-5xl md:text-7xl font-serif mb-12 fade-in">Conscious Future.</h1>
            <div className="w-20 h-1 bg-black mb-16" />

            <Section title="Our Commitment">
                <p>
                    At Jute & Co., sustainability is not an afterthought; it is the very foundation of our existence.
                    We believe that true luxury should not come at the cost of our planet. By harnessing the
                    potential of Jute—the "Golden Fiber"—we are championing a material that is 100% biodegradable,
                    recyclable, and carbon-negative.
                </p>
            </Section>

            <Section title="Ethical Sourcing" delay={0.2}>
                <p>
                    We work directly with farmers in the Bengal delta, ensuring fair wages and safe working conditions.
                    Our supply chain is transparent, from the moment the seed is sown to the final stitch.
                    We exclude middlemen to ensure that the artisans and farmers receive the lion's share
                    of the value they create.
                </p>
            </Section>

            <Section title="Zero Waste Production" delay={0.4}>
                <p>
                    Our manufacturing process is designed to minimize waste. Off-cuts are repurposed into smaller
                    accessories or packaging material. We use natural dyes derived from plants and minerals,
                    eliminating the release of toxic chemicals into water bodies. Even our packaging is
                    plastic-free and compostable.
                </p>
            </Section>

            <Section title="Circular Economy" delay={0.6}>
                <p>
                    We design for longevity. Our bags are crafted to last a lifetime, but when they do reach the
                    end of their journey, they return to the earth without leaving a trace. We also offer a
                    repair service to extend the life of your beloved items, because the most sustainable
                    product is the one you already own.
                </p>
            </Section>
        </div>
    );
};

export default Sustainability;
