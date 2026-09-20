import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lista from './pages/Lista';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<Lista />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* Rota Bônus 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}