import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import Navbar from './customer/components/Navbar/Navbar';
import customTheme from './Theme/customeTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Page Details/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import { Routes, Route } from 'react-router-dom';
import BecomeSeller from './customer/pages/Become Seller/BecomeSeller';
import SellerDashboard from './seller/Pages/SellerDashboard/SellerDashboard';
import AdminDashboard from './admin/Pages/Dashboard/AdminDashboard';
import { useEffect } from 'react';
import { fetchProducs } from './State/FetchProduct'
import { useAppDispatch } from './State/Store';
import { fetchSellerProfile } from './State/seller/SellerSlice';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './State/Store';
import Auth from './customer/Auth/Auth';
import { fetchUserProfile } from './State/Customer/CustomerAuthSlice';
import { useSelector } from "react-redux";
import OrderPlaced from './customer/OrderPlaced';
function App() {
    const { seller } = useAppSelector(store => store)
  const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const customerAuth = useSelector((state: any) => state.customerAuth);

    useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
  }, []);
   useEffect(() => {
    if (seller.profile) {
      navigate("/seller")
    }
  }, [seller.profile]) 

   useEffect(() => {
  const jwt = customerAuth.jwt || localStorage.getItem("jwt");

  if (jwt) {
    dispatch(fetchUserProfile());
  }
}, [customerAuth.jwt]);

  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/order-placed" element={<OrderPlaced/>}/>
          <Route path="/products/:category" element={<Product/>}/>
          <Route path="/review/:productId" element={<Review/>}/>
          <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/account/*' element={<Account/>}/>
          <Route path="/become-seller" element={<BecomeSeller />} />
      
          <Route path="/seller/*" element={<SellerDashboard />} />

          {/* ✅ CHANGE MADE HERE */}
          <Route path="/admin/*" element={<AdminDashboard />} />

        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;