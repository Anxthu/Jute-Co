import React from 'react';
import { Link } from 'react-router-dom';
import jute5 from '../assets/jute5.png'; // Using 'Sustainable Chic' image for the vibe

const AuthLayout = ({ title, subtitle, children, image }) => (
    <div className="min-h-screen flex fade-in">
        {/* Left Side - Image */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#F5F5DC] items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black/10 z-10" /> {/* Subtle overlay */}
            <img
                src={image}
                alt="Brand Lifestyle"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
            />
            <div className="relative z-20 text-center p-12 text-black/80">
                <h2 className="text-4xl font-serif mb-4 tracking-wide">Nature's Essence</h2>
                <p className="text-sm tracking-[0.2em] uppercase">Sustainable Luxury</p>
            </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 sm:p-12 lg:p-24">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-serif tracking-wide text-gray-900">{title}</h1>
                    {subtitle && <p className="mt-2 text-sm text-gray-500">{subtitle}</p>}
                </div>
                {children}
            </div>
        </div>
    </div>
);

const InputField = ({ type, placeholder }) => (
    <div className="group">
        <input
            type={type}
            placeholder={placeholder}
            className="w-full border-b border-gray-300 py-4 text-sm focus:outline-none focus:border-black transition-all bg-transparent placeholder-gray-400 font-light"
        />
    </div>
);

export const Login = () => (
    <AuthLayout title="Welcome Back" subtitle="Please enter your details." image={jute5}>
        <form className="space-y-8 mt-8">
            <div className="space-y-6">
                <InputField type="email" placeholder="Email Address" />
                <InputField type="password" placeholder="Password" />
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500">
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                    <span>Remember me</span>
                </label>
                <a href="#" className="underline hover:text-black transition-colors">Forgot password?</a>
            </div>

            <button className="w-full bg-black text-white py-4 uppercase tracking-[0.15em] text-xs font-medium hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Sign In
            </button>

            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest">
                    <span className="bg-white px-2 text-gray-400">Or continue with</span>
                </div>
            </div>

            {/* Social Placeholder Buttons - Visual Only */}
            <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center py-2.5 border border-gray-300 hover:bg-gray-50 transition-colors text-xs uppercase tracking-wider text-gray-600">
                    Google
                </button>
                <button type="button" className="flex items-center justify-center py-2.5 border border-gray-300 hover:bg-gray-50 transition-colors text-xs uppercase tracking-wider text-gray-600">
                    Apple
                </button>
            </div>

            <div className="text-center text-xs text-gray-500 mt-8">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-black underline hover:no-underline transition-all ml-1">
                    Sign up
                </Link>
            </div>
        </form>
    </AuthLayout>
);

export const Register = () => (
    <AuthLayout title="Create Account" subtitle="Join our sustainable community." image={jute5}>
        <form className="space-y-8 mt-8">
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <InputField type="text" placeholder="First Name" />
                    <InputField type="text" placeholder="Last Name" />
                </div>
                <InputField type="email" placeholder="Email Address" />
                <InputField type="password" placeholder="Password" />
            </div>

            <button className="w-full bg-black text-white py-4 uppercase tracking-[0.15em] text-xs font-medium hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Create Account
            </button>

            <div className="text-center text-xs text-gray-500 mt-8">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-black underline hover:no-underline transition-all ml-1">
                    Log in
                </Link>
            </div>
        </form>
    </AuthLayout>
);
