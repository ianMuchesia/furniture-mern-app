import {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import  {MemoizedNavbar} from "./components/Navbar";
import Footer from "./components/Footer";
import { About, Contact, Home, Cart, Checkout, Products, Profile,SingleProduct, NewPassword, ForgotPassword, SignUp, Login, ResetPassword } from "./pages";
import Success from "./pages/Success";
import { useAppDispatch } from './hooks/reduxHooks';
import checkAuthentication from './store/authCheck';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthentication());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      < MemoizedNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="Products/:SelectedProduct" element={<SingleProduct />} /> 
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="Success" element={<Success />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="ForgotPassword" element={<ForgotPassword/>} />
          <Route path="resetpassword/:token" element={<ResetPassword/>} />
          <Route path="NewPassword" element={<NewPassword />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
