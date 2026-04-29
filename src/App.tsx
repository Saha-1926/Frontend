import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import Navbar from './customer/components/Navbar/Navbar';
import customTheme from './Theme/customeTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Page Details/ProductDetails';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
       <ProductDetails />
      </div>
    </ThemeProvider>
  );
}

export default App;