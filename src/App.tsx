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
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
       <Account />
      </div>
    </ThemeProvider>
  );
}

export default App;