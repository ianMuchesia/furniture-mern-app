import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Shop, About, Contact, Home, SingleProduct } from "./pages";
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
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
