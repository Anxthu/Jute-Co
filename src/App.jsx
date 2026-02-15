import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import NewArrivals from './pages/NewArrivals';
import Collection from './pages/Collection';
import Art from './pages/Art';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import OurStory from './pages/OurStory';
import Sustainability from './pages/Sustainability';
import FAQ from './pages/FAQ';
import GenericInfo from './pages/GenericInfo';
import Checkout from './pages/Checkout';
import { Login, Register } from './pages/Auth';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/art-of-living" element={<Art />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/magazine" element={<Art />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/info/:page" element={<GenericInfo />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
