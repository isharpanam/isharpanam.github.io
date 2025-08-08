import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import PoojaPage from './pages/PoojaPage';
import CartPage from './pages/CartPage';
import VratListPage from './pages/VratListPage';
import VratPage from './pages/VratPage';
import ReturnPolicyPage from './pages/ReturnPolicyPage';
import GanapatiKitPage from './pages/GanapatiKitPage';
import Header from './components/Header';
import Footer from './components/Footer';

// A component to automatically scroll to the top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App(): React.ReactNode {
  return (
    <CartProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-body text-brand-dark bg-brand-bg">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pooja/:poojaId" element={<PoojaPage />} />
              <Route path="/vrats" element={<VratListPage />} />
              <Route path="/vrat/:vratId" element={<VratPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/return-policy" element={<ReturnPolicyPage />} />
              <Route path="/ganapati-kit" element={<GanapatiKitPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </CartProvider>
  );
}

export default App;