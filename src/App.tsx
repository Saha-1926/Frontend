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
import { CheckOutlined } from '@mui/icons-material';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import Order from './customer/pages/Account/Order';
import { Routes, Route } from 'react-router-dom';
import BecomeSeller from './customer/pages/Become Seller/BecomeSeller';
import SellerDashboard from './seller/Pages/SellerDashboard/SellerDashboard';
import AdminDashboard from './admin/Pages/AdminDashboard/AdminDashboard';
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<Product/>}/>
        <Route path="/review/:productId" element={<Review/>}/>
        <Route path="/product-details/:categoryId/:name/:productId" element=
        {<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/account/*' element={<Account/>}>  </Route>
          <Route path="/become-seller" element={<BecomeSeller />} />
      
          <Route path="/seller" element={<SellerDashboard />} />
          <Route path="/seller/*" element={<SellerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;