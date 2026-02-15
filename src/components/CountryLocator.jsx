import React, { useEffect, useRef, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const COUNTRIES = [
    { id: 'india', name: 'India', lat: 20.5937, lng: 78.9629 },
    { id: 'usa', name: 'USA', lat: 37.0902, lng: -95.7129 },
    { id: 'uk', name: 'UK', lat: 55.3781, lng: -3.4360 },
    { id: 'france', name: 'Europe', lat: 46.2276, lng: 2.2137 },
    { id: 'australia', name: 'Australia', lat: -25.2744, lng: 133.7751 },
    { id: 'canada', name: 'Canada', lat: 56.1304, lng: -106.3468 },
    { id: 'germany', name: 'Germany', lat: 51.1657, lng: 10.4515 },
    { id: 'japan', name: 'Japan', lat: 36.2048, lng: 138.2529 },
    { id: 'brazil', name: 'Brazil', lat: -14.2350, lng: -51.9253 },
    { id: 'uae', name: 'UAE', lat: 23.4241, lng: 53.8478 },
];

const CountryLocator = ({ isOpen, onClose, selectedCountry, onSelectCountry }) => {
    const globeEl = useRef();
    const [activeCountry, setActiveCountry] = useState(COUNTRIES[0]);

    useEffect(() => {
        if (selectedCountry) {
            const country = COUNTRIES.find(c => c.name === selectedCountry);
            if (country) setActiveCountry(country);
        }
    }, [selectedCountry, isOpen]);

    // Update Globe Position
    useEffect(() => {
        if (globeEl.current && activeCountry) {
            globeEl.current.pointOfView({
                lat: activeCountry.lat,
                lng: activeCountry.lng,
                altitude: 2
            }, 1000);
        }
    }, [activeCountry, isOpen]);

    // Prevent body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleConfirm = () => {
        onSelectCountry(activeCountry.name);
        onClose();
    };

    const globeData = useMemo(() => {
        return COUNTRIES.map(c => ({
            lat: c.lat,
            lng: c.lng,
            name: c.name,
            color: c.name === activeCountry?.name ? '#D2B48C' : '#ffffff'
        }));
    }, [activeCountry]);

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
                        className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-black text-white w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto border border-white/10">

                            {/* Left Panel: List */}
                            <div className="w-full md:w-1/3 bg-[#1C1C1C] flex flex-col z-10">
                                {/* Header */}
                                <div className="p-8 pb-4 flex justify-between items-center shrink-0">
                                    <h3 className="text-xl font-serif tracking-widest text-[#D2B48C]">SELECT REGION</h3>
                                    <button onClick={onClose} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Scrollable List */}
                                <div className="flex-1 overflow-y-auto px-8 py-2 space-y-3 custom-scrollbar">
                                    {COUNTRIES.map((country) => (
                                        <button
                                            key={country.id}
                                            onClick={() => setActiveCountry(country)}
                                            className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-all duration-300 border border-transparent ${activeCountry.id === country.id
                                                    ? 'bg-[#D2B48C] text-black font-bold shadow-lg'
                                                    : 'hover:bg-white/5 text-gray-400 hover:text-white hover:border-white/10'
                                                }`}
                                        >
                                            <span className="text-lg tracking-wide">{country.name}</span>
                                            {activeCountry.id === country.id && <Check size={18} />}
                                        </button>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="p-8 pt-6 bg-[#1C1C1C] shrink-0 border-t border-white/5">
                                    <button
                                        onClick={handleConfirm}
                                        className="w-full bg-[#D2B48C] text-black font-bold py-4 rounded-lg tracking-widest hover:bg-white transition-colors uppercase mb-4 shadow-lg hover:shadow-[#D2B48C]/20"
                                    >
                                        Confirm Location
                                    </button>
                                    <div className="text-xs text-gray-500 text-center">
                                        Shipping available to selected regions only.
                                    </div>
                                </div>
                            </div>

                            {/* Right Panel: Globe */}
                            <div className="w-full md:w-2/3 relative bg-black flex items-center justify-center overflow-hidden cursor-move border-l border-white/10">
                                <Globe
                                    ref={globeEl}
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                                    backgroundColor="rgba(0,0,0,0)"
                                    width={800}
                                    height={800}
                                    htmlElementsData={globeData}
                                    htmlLat="lat"
                                    htmlLng="lng"
                                    htmlElement={d => {
                                        const el = document.createElement('div');
                                        el.innerHTML = `
                                            <div style="
                                                color: ${d.color}; 
                                                transform: translate(-50%, -50%);
                                                display: flex;
                                                flex-direction: column;
                                                align-items: center;
                                                cursor: pointer;
                                                pointer-events: none;
                                            ">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <span style="
                                                    font-size: 12px;
                                                    font-weight: bold;
                                                    text-shadow: 0 2px 4px rgba(0,0,0,0.8);
                                                    margin-top: 4px;
                                                    background: rgba(0,0,0,0.6);
                                                    padding: 2px 6px;
                                                    border-radius: 4px;
                                                ">${d.name}</span>
                                            </div>
                                        `;
                                        return el;
                                    }}
                                />
                                <div className="absolute bottom-8 right-8 text-xs text-gray-600 pointer-events-none">
                                    Interactive 3D Map
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CountryLocator;
