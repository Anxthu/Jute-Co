import React, { useState } from 'react';
import SearchOverlay from './SearchOverlay';
import MenuOverlay from './MenuOverlay';
import CountryLocator from './CountryLocator';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartItems } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCountryLocatorOpen, setIsCountryLocatorOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('India');
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <CountryLocator
                isOpen={isCountryLocatorOpen}
                onClose={() => setIsCountryLocatorOpen(false)}
                selectedCountry={selectedCountry}
                onSelectCountry={setSelectedCountry}
            />
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--color-border)]">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">

                    {/* Mobile Menu & Search */}
                    <div className="flex items-center gap-4 lg:hidden">
                        <Menu onClick={() => setIsMenuOpen(true)} className="w-5 h-5 cursor-pointer" />
                        <Search onClick={() => setIsSearchOpen(true)} className="w-5 h-5 cursor-pointer" />
                    </div>

                    {/* Desktop Links (Left) */}
                    <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
                        <Link to="/new-arrivals" className="hover:underline underline-offset-4">New</Link>
                        <Link to="/collection" className="hover:underline underline-offset-4">Collection</Link>
                        <Link to="/women" className="hover:underline underline-offset-4">Women</Link>
                        <Link to="/men" className="hover:underline underline-offset-4">Men</Link>
                        <Link to="/art-of-living" className="hover:underline underline-offset-4">Living</Link>
                        <Link to="/our-story" className="hover:underline underline-offset-4">Our Story</Link>
                    </div>

                    {/* Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
                        <Link to="/">
                            <h1 className="text-xl tracking-[0.2em] font-serif font-bold cursor-pointer">JUTE & CO.</h1>
                        </Link>
                    </div>

                    {/* Desktop Links (Right) - Icons */}
                    <div className="hidden lg:flex items-center gap-6">
                        <div
                            onClick={() => setIsCountryLocatorOpen(true)}
                            className="hidden xl:flex items-center gap-2 text-sm font-medium cursor-pointer hover:opacity-70"
                        >
                            <span>{selectedCountry}</span>
                        </div>
                        <Search onClick={() => setIsSearchOpen(true)} className="w-5 h-5 cursor-pointer hover:opacity-70" />
                        <Link to="/login">
                            <User className="w-5 h-5 cursor-pointer hover:opacity-70" />
                        </Link>
                        <Link to="/cart" className="relative group">
                            <ShoppingBag className="w-5 h-5 cursor-pointer hover:opacity-70" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Cart */}
                    <div className="lg:hidden flex gap-4">
                        <Link to="/cart" className="relative">
                            <ShoppingBag className="w-5 h-5 cursor-pointer" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
