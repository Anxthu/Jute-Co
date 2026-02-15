import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

const Women = () => {
    const [activeSort, setActiveSort] = useState('default');
    const [priceFilter, setPriceFilter] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState(products.filter(p => p.category === 'Women'));

    useEffect(() => {
        let result = products.filter(p => p.category === 'Women');

        // Price Filter
        if (priceFilter !== 'all') {
            result = result.filter(product => {
                const price = parseInt(product.price.replace(/[^\d]/g, ''));
                if (priceFilter === 'under-1000') return price < 1000;
                if (priceFilter === '1000-2000') return price >= 1000 && price <= 2000;
                if (priceFilter === '2000-plus') return price > 2000;
                return true;
            });
        }

        // Sorting
        if (activeSort === 'price-asc') {
            result.sort((a, b) => {
                const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
                const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
                return priceA - priceB;
            });
        } else if (activeSort === 'price-desc') {
            result.sort((a, b) => {
                const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
                const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
                return priceB - priceA;
            });
        }

        setFilteredProducts(result);
    }, [activeSort, priceFilter]);

    return (
        <div className="fade-in pt-16">
            <Hero
                title="Women's Collection"
                subtitle="Elegant & Sustainable"
                activeSort={activeSort}
                onSortChange={setActiveSort}
                priceFilter={priceFilter}
                onFilterChange={setPriceFilter}
                totalProducts={filteredProducts.length}
            />
            <div className="bg-white relative z-10">
                <ProductGrid products={filteredProducts} />
            </div>
        </div>
    );
};

export default Women;
