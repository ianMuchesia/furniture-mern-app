import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Shop, About, Contact, Home, SingleProduct, Cart, Checkout } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Shop/:SingleProduct" element={<SingleProduct />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Checkout" element={<Checkout />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
