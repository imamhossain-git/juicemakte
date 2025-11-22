
import React from 'react';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductVideo from './components/ProductVideo';
import Specifications from './components/Specifications';
import HowToUse from './components/HowToUse';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import StickyMobileBar from './components/StickyMobileBar';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <CartProvider>
        <div className="min-h-screen bg-white font-sans text-gray-800 scroll-smooth pb-20 md:pb-0">
          <Header />
          <CartDrawer />
          <main>
            <Hero />
            <ProductVideo />
            <Features />
            <Specifications />
            <HowToUse />
            <Reviews />
            <FAQ />
            <OrderForm />
          </main>
          <Footer />
          <StickyMobileBar />
        </div>
      </CartProvider>
    </ToastProvider>
  );
};

export default App;
