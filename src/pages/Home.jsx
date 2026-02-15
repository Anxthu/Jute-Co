import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import ThreeDCarousel from '../components/ThreeDCarousel';
import { products } from '../data/products';

const Home = () => {
    const [activeSort, setActiveSort] = React.useState('default');
    const [priceFilter, setPriceFilter] = React.useState('all');
    const [filteredProducts, setFilteredProducts] = React.useState(products);

    React.useEffect(() => {
        let result = [...products];

        // 1. Filter by Price
        if (priceFilter !== 'all') {
            result = result.filter(p => {
                const price = parseInt(p.price.replace(/[₹,]/g, ''));
                if (priceFilter === 'under-1000') return price < 1000;
                if (priceFilter === '1000-2000') return price >= 1000 && price <= 2000;
                if (priceFilter === '2000-plus') return price > 2000;
                return true;
            });
        }

        // 2. Sort by Price
        if (activeSort !== 'default') {
            result.sort((a, b) => {
                const priceA = parseInt(a.price.replace(/[₹,]/g, ''));
                const priceB = parseInt(b.price.replace(/[₹,]/g, ''));
                return activeSort === 'price-asc' ? priceA - priceB : priceB - priceA;
            });
        }

        setFilteredProducts(result);
    }, [activeSort, priceFilter]);

    return (
        <div className="fade-in">
            {/* Scrollytelling Section */}
            <ThreeDCarousel />

            <div className="bg-white relative z-10">
                <Hero
                    title="Handcrafted Collection"
                    subtitle="Eco-Friendly"
                    activeSort={activeSort}
                    onSortChange={setActiveSort}
                    priceFilter={priceFilter}
                    onFilterChange={setPriceFilter}
                    totalProducts={filteredProducts.length}
                />
                <ProductGrid products={filteredProducts} />
            </div>
        </div>
    );
};

export default Home;
