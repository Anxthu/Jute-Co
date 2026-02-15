import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center fade-in">
                <h2 className="text-3xl font-serif mb-6">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
                <Link to="/collection" className="bg-black text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-12 pb-24 w-full px-6 md:px-12 lg:px-24 fade-in">
            <h1 className="text-4xl font-serif mb-12">Shopping Cart</h1>

            <div className="flex flex-col xl:flex-row gap-16 xl:gap-24">
                {/* Cart Items List */}
                <div className="lg:w-2/3 space-y-8">
                    {cartItems.map(item => (
                        <div key={`${item.id}-${item.color}`} className="flex gap-8 border-b border-gray-100 pb-8">
                            {/* Product Image */}
                            <div className="w-32 h-40 bg-gray-50 flex items-center justify-center p-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                                />
                            </div>

                            {/* Details */}
                            <div className="flex-1 flex flex-col justify-between py-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-serif mb-2">{item.name}</h3>
                                        <p className="text-sm text-gray-500 mb-1">Color: {item.color}</p>
                                        <p className="text-sm text-gray-500">{item.price}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id, item.color)}
                                        className="text-gray-400 hover:text-black transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Quantity Control */}
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="flex items-center border border-gray-200">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.color, -1)}
                                            className="p-2 hover:bg-gray-50"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.color, 1)}
                                            className="p-2 hover:bg-gray-50"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-gray-50 p-8 sticky top-24">
                        <h2 className="text-xl font-serif mb-8">Order Summary</h2>

                        <div className="space-y-4 mb-8 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Shipping</span>
                                <span className="text-gray-400">Calculated at next step</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Tax</span>
                                <span className="text-gray-400">Calculated at next step</span>
                            </div>
                            <div className="border-t border-gray-200 pt-4 flex justify-between font-medium text-lg mt-4">
                                <span>Total</span>
                                <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                            </div>
                        </div>

                        <Link
                            to="/checkout"
                            className="block w-full bg-black text-white text-center py-4 uppercase tracking-widest text-sm hover:bg-gray-900 transition-all hover:scale-[1.02] shadow-xl shadow-black/10"
                        >
                            Proceed to Checkout
                        </Link>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            Secure Checkout - SSL Encrypted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
