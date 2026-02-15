import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
    return (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-serif mb-4">The Collection</h2>
                <div className="w-12 h-0.5 bg-black mx-auto" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
