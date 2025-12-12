import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { CartSidebar } from './components/layout/CartSidebar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { UserProfile } from './pages/UserProfile';
import { Legal } from './pages/Legal';
import { Cart } from './pages/Cart';
import { Domaine } from './pages/Domaine';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans text-stone-100 selection:bg-gold-500 selection:text-stone-900">
          <Header />
          <CartSidebar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/domaine" element={<Domaine />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;