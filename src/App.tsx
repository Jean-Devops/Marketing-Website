import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PoliciesPage from './pages/PoliciesPage';
import AboutPage from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { IndexPage } from './pages/IndexPage';

function App() {
  

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">

        <Header />

        <Routes>
          <Route path="/marketing-website" element={<IndexPage />} />

          <Route path="/marketing-website/allproducts" element={<ProductsPage />} />

          <Route path="/marketing-website/about" element={<AboutPage />} />

          <Route path="/marketing-website/policies" element={<PoliciesPage />} />

        </Routes>

        <CookieBanner />

      </div>

      <Footer />
    </Router>
  );
}

export default App;
