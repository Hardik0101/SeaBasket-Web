import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/Login";
import HomePage from "./Pages/HomePage/HomePage";
import SignUpPage from "./Pages/SignUpPage/SignUp";
import NavBar from "./components/NavBar/Navbar";
import CartPage from "./Pages/CartPage/Cart";
import ProductPage from "./Pages/ProductPage/Product";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
