import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, name, price, colors }) => {
    return (
        <Link to={`/products/${id}`} className="group cursor-pointer flex flex-col gap-3">
            <div className="relative aspect-[4/5] bg-[var(--color-light-gray)] overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain mix-blend-multiply transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs tracking-widest uppercase border border-black px-2 py-1 bg-white">Shop</span>
                </div>
            </div>

            <div className="space-y-1">
                <h3 className="font-bold text-sm tracking-wide">{name}</h3>
                <p className="text-xs text-gray-600">{price}</p>
                <div className="flex gap-1 pt-1">
                    {colors.map((c, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full border border-gray-300`} style={{ backgroundColor: c }}></div>
                    ))}
                    {colors.length > 0 && <span className="text-[10px] text-gray-500 ml-1">+{colors.length} colors</span>}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
