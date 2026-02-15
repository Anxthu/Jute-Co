import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-light-gray)] pt-16 pb-8 border-t border-[var(--color-border)] mt-20">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs tracking-wider">
                <div className="space-y-4">
                    <h4 className="font-bold uppercase">Help</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li><Link to="/faq" className="hover:text-black transition-colors">FAQ</Link></li>
                        <li><Link to="/info/product-care" className="hover:text-black transition-colors">Product Care</Link></li>
                        <li><Link to="/info/stores" className="hover:text-black transition-colors">Stores</Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold uppercase">Services</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li><Link to="/info/repairs" className="hover:text-black transition-colors">Repairs</Link></li>
                        <li><Link to="/info/personalization" className="hover:text-black transition-colors">Personalization</Link></li>
                        <li><Link to="/info/gifting" className="hover:text-black transition-colors">Art of Gifting</Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold uppercase">About Jute & Co.</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li><Link to="/our-story" className="hover:text-black transition-colors">Our Heritage</Link></li>
                        <li><Link to="/magazine" className="hover:text-black transition-colors">Arts & Culture</Link></li>
                        <li><Link to="/sustainability" className="hover:text-black transition-colors">Sustainability</Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold uppercase">Email Sign-up</h4>
                    <p className="text-gray-600">Sign up for Jute & Co. emails and receive the latest news from the Atelier.</p>
                    <div className="flex border-b border-gray-400 focus-within:border-black transition-colors">
                        <input type="email" placeholder="Email Address" className="w-full bg-transparent py-2 focus:outline-none" />
                        <button className="text-xs uppercase font-bold px-2 hover:text-gray-500">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="text-center text-[10px] text-gray-400 mt-16 uppercase">
                <Link to="/" className="hover:text-black mx-2">© Jute & Co. 2023</Link>
                <Link to="/info/legal" className="hover:text-black mx-2">Privacy Policy</Link>
                <Link to="/info/legal" className="hover:text-black mx-2">Terms of Service</Link>
            </div>
        </footer>
    );
};

export default Footer;
