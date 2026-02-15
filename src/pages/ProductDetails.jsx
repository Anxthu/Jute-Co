import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    const product = products?.find(p => p.id === parseInt(id));

    // Get Related Products: Same category, exclude current product, limit to 4
    const relatedProducts = product
        ? products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
        : [];

    if (!product) return <div className="pt-32 text-center">Product not found</div>;

    return (
        <div className="pt-20 pb-12 fade-in">
            <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-[var(--color-light-gray)] aspect-[4/5] flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="max-h-[80%] max-w-[80%] object-contain mix-blend-multiply" />
                </div>

                <div className="space-y-8 pt-8">
                    <nav className="text-xs text-gray-500 uppercase tracking-widest">
                        <span>Sustainable</span> / <span>Jute Bags</span>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-serif">{product.name}</h1>
                    <p className="text-xl">{product.price}</p>

                    <div className="space-y-4 pt-8 border-t border-gray-200">
                        <p className="text-sm leading-relaxed text-gray-600">
                            {product.name} is crafted from 100% natural golden jute fiber. Designed for the eco-conscious individual, it combines durability with rustic elegance. Perfect for daily use or market runs.
                        </p>
                        <ul className="text-xs space-y-2 text-gray-500 list-disc pl-4">
                            <li>100% Biodegradable Jute</li>
                            <li>Handwoven by artisans</li>
                            <li>Reinforced cotton handles</li>
                        </ul>
                    </div>

                    <button
                        onClick={() => addToCart({ ...product, color: product.colors[0] })}
                        className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm hover:bg-black/80 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <div className="max-w-[1440px] mx-auto px-4 mt-32 mb-16 border-t border-gray-100 pt-16">
                    <h2 className="text-2xl font-serif mb-12 text-center tracking-wide">You May Also Like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} {...p} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
