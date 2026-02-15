import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, CreditCard, Lock } from 'lucide-react';

const Checkout = () => {
    const { cartTotal } = useCart();
    const [step, setStep] = useState(1); // 1: Info, 2: Payment

    return (
        <div className="min-h-screen bg-white">
            {/* Simple Checkout Header */}
            <div className="border-b border-gray-100 py-6 px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-serif font-bold tracking-widest">JUTE & CO.</Link>
                <div className="flex items-center gap-2 text-green-700">
                    <Lock size={14} />
                    <span className="text-xs font-bold uppercase tracking-widest">Secure Checkout</span>
                </div>
            </div>

            <div className="w-full px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 py-12">

                {/* Left Column: Form */}
                <div className="space-y-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                        <Link to="/cart" className="flex items-center hover:text-black">
                            <ArrowLeft size={14} className="mr-1" /> Return to Cart
                        </Link>
                    </div>

                    <h2 className="text-xl font-serif">Contact Information</h2>
                    <input type="email" placeholder="Email" className="w-full border border-gray-300 p-3 outline-none focus:border-black transition-colors" />

                    <h2 className="text-xl font-serif pt-4">Shipping Address</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First name" className="w-full border border-gray-300 p-3 outline-none focus:border-black transition-colors" />
                        <input type="text" placeholder="Last name" className="w-full border border-gray-300 p-3 outline-none focus:border-black transition-colors" />
                        <input type="text" placeholder="Address" className="w-full col-span-2 border border-gray-300 p-3 outline-none focus:border-black transition-colors" />
                        <input type="text" placeholder="City" className="w-full border border-gray-300 p-3 outline-none focus:border-black transition-colors" />
                        <input type="text" placeholder="Postal Code" className="w-full border border-gray-300 p-3 outline-none focus:border-black transition-colors" />
                    </div>

                    <div className="pt-8">
                        <button className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm hover:bg-gray-900 transition-colors">
                            Continue to Payment
                        </button>
                    </div>
                </div>

                {/* Right Column: Mini Summary */}
                <div className="bg-gray-50 p-8 rounded-sm h-fit">
                    <h3 className="font-serif text-lg mb-6">Order Summary</h3>
                    <div className="space-y-4 pb-6 border-b border-gray-200">
                        {/* Placeholder Items */}
                        <p className="text-sm text-gray-500 italic">Items from cart...</p>
                    </div>
                    <div className="pt-6 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span className="text-green-600">Calculated next</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-4">
                            <span>Total</span>
                            <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
