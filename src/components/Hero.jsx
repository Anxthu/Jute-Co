import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({
    title = "Sustainable Jute",
    subtitle = "Eco Collection",
    activeSort,
    onSortChange,
    priceFilter,
    onFilterChange,
    totalProducts
}) => {
    const [isFilterOpen, setIsFilterOpen] = React.useState(false);
    const [isSortOpen, setIsSortOpen] = React.useState(false);

    const sortOptions = [
        { label: 'Featured', value: 'default' },
        { label: 'Price: Low to High', value: 'price-asc' },
        { label: 'Price: High to Low', value: 'price-desc' },
    ];

    const filterOptions = [
        { label: 'All Prices', value: 'all' },
        { label: 'Under ₹1,000', value: 'under-1000' },
        { label: '₹1,000 - ₹2,000', value: '1000-2000' },
        { label: 'Above ₹2,000', value: '2000-plus' },
    ];

    return (
        <header className="pt-8 pb-12 px-4 text-center space-y-4 fade-in relative">
            <nav className="text-xs text-gray-500 uppercase tracking-widest flex justify-center gap-2">
                <span>Home</span>
                <span>/</span>
                <span>{subtitle}</span>
                <span>/</span>
                <span className="text-black">All Bags</span>
            </nav>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide">{title}</h2>

            {/* Interactive Filters Bar */}
            <div className="flex justify-between items-center max-w-[1440px] mx-auto pt-8 border-b border-gray-100 pb-4 text-sm mt-8 relative">

                {/* Filter Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => { setIsFilterOpen(!isFilterOpen); setIsSortOpen(false); }}
                        className="uppercase tracking-widest font-medium text-xs hover:underline flex items-center gap-1"
                    >
                        Filters {priceFilter !== 'all' && '(1)'}
                    </button>
                    {isFilterOpen && (
                        <div className="absolute top-10 left-0 w-48 bg-white shadow-xl border border-gray-100 z-50 p-2 text-left fade-in">
                            <p className="text-xs uppercase text-gray-400 mb-2 px-2">Price</p>
                            {filterOptions.map(option => (
                                <button
                                    key={option.value}
                                    onClick={() => { onFilterChange(option.value); setIsFilterOpen(false); }}
                                    className={`block w-full text-left px-2 py-2 text-sm hover:bg-gray-50 ${priceFilter === option.value ? 'font-bold' : ''}`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <span className="text-xs text-gray-400">{totalProducts} Products</span>

                {/* Sort Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => { setIsSortOpen(!isSortOpen); setIsFilterOpen(false); }}
                        className="uppercase tracking-widest font-medium text-xs hover:underline flex items-center gap-1"
                    >
                        Sort By
                    </button>
                    {isSortOpen && (
                        <div className="absolute top-10 right-0 w-48 bg-white shadow-xl border border-gray-100 z-50 p-2 text-left fade-in">
                            {sortOptions.map(option => (
                                <button
                                    key={option.value}
                                    onClick={() => { onSortChange(option.value); setIsSortOpen(false); }}
                                    className={`block w-full text-left px-2 py-2 text-sm hover:bg-gray-50 ${activeSort === option.value ? 'font-bold' : ''}`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Hero;
