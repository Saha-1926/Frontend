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
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
       <Checkout />
      </div>
    </ThemeProvider>
  );
}

export default App;