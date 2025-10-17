import './App.css';
import './styles/style.css';
import './styles/contact.css';
import './styles/products.css';
import './styles/shared.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import ContactForm from "./ContactForm";
import Home from './pages/Home';
import Contact from './pages/Contact';
// import Products and Contact when ready

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */
        <Route path="/contact" element={<Contact />} /> }
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
