import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import jute4 from '../assets/jute4.png'; // Background Image

const CAROUSEL_RADIUS = 360;
const CARD_WIDTH = 240;
const CARD_HEIGHT = 320;

const CarouselCard = ({ product, index, total, rotateY }) => {
    const angle = (index / total) * 360;

    return (
        <motion.div
            className="absolute top-1/2 left-1/2"
            style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginLeft: -CARD_WIDTH / 2,
                marginTop: -CARD_HEIGHT / 2,
                transformStyle: "preserve-3d",
                transform: `rotateY(${angle}deg) translateZ(${CAROUSEL_RADIUS}px)`,
            }}
        >
            <Link to={`/products/${product.id}`} className="block w-full h-full bg-white/90 backdrop-blur-sm border border-gray-100 shadow-xl p-4 transition-transform hover:scale-105 duration-300">
                <div className="h-2/3 w-full flex items-center justify-center p-4">
                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
                <div className="h-1/3 flex flex-col justify-end pb-2 text-center">
                    <h3 className="font-serif text-lg truncate">{product.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{product.price}</p>
                    <div className="mt-3 flex justify-center gap-1">
                        {product.colors.map((c, i) => (
                            <div key={i} className="w-2 h-2 rounded-full border border-gray-200" style={{ backgroundColor: c }} />
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

const ThreeDCarousel = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Sequence Animations
    const opacityTitle = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const scaleTitle = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);
    const yTitle = useTransform(scrollYProgress, [0, 0.4], [0, -100]);

    const opacityCarousel = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
    const scaleCarousel = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);

    // Rotation
    const rawRotation = useTransform(scrollYProgress, [0.4, 1], [0, -360]);

    const smoothRotation = useSpring(rawRotation, {
        stiffness: 40,
        damping: 20,
        mass: 1
    });

    return (
        <section
            ref={containerRef}
            className="h-[400vh] relative"
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-1000 bg-gray-50">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                        src={jute4}
                        alt="Background Texture"
                        className="w-full h-full object-cover opacity-60 scale-110 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/60" />
                </div>

                {/* Title Section */}
                <motion.div
                    style={{ opacity: opacityTitle, scale: scaleTitle, y: yTitle }}
                    className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none mix-blend-darken text-black/80"
                >
                    <p className="uppercase tracking-[0.3em] text-sm mb-6">Sustainable Living</p>
                    <h2 className="text-5xl md:text-8xl font-serif mb-8 text-center leading-tight">Nature's Essence</h2>
                    <div className="animate-bounce text-xs tracking-widest opacity-50 mt-12">SCROLL TO EXPLORE</div>
                </motion.div>

                {/* Carousel Section */}
                <motion.div
                    style={{ opacity: opacityCarousel, scale: scaleCarousel }}
                    className="relative w-full max-w-[1000px] h-[600px] flex items-center justify-center perspective-1000 z-10"
                >
                    <motion.div
                        className="relative w-full h-full pointer-events-auto"
                        style={{
                            transformStyle: "preserve-3d",
                            rotateY: smoothRotation,
                            rotateX: 5,
                        }}
                    >
                        {products.map((product, index) => (
                            <CarouselCard
                                key={product.id}
                                product={product}
                                index={index}
                                total={products.length}
                            />
                        ))}
                    </motion.div>

                    <div className="absolute bottom-20 w-[600px] h-[600px] bg-black/5 rounded-full blur-3xl transform rotate-x-90 translate-y-32 -z-10" />
                </motion.div>

            </div>
        </section>
    );
};

export default ThreeDCarousel;
