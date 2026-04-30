import React from 'react'
import { Routes, Route } from 'react-router-dom'

// ✅ import all pages
import Coupons from '../admin/Pages/Coupons/Coupons'
import AddCoupon from '../admin/Pages/AddCoupon/AddCoupon'
import Homepage from '../admin/Pages/Deals/Deals'
import ShopByCategory from '../admin/Pages/ShopByCategory/ShopByCategory'
import Account from '../admin/Pages/Account/Account' 
import Dashboard from '../seller/Pages/SellerDashboard/Dashboard'
import AdminDashboard from '../admin/Pages/AdminDashboard/AdminDashboard'
import Deals from '../admin/Pages/Deals/Deals'
const AdminRoutes = () => {
  return (
    <Routes>
      <Route index element={<AdminDashboard />} />
      <Route path='coupons' element={<Coupons />} />
      <Route path='add-coupon' element={<AddCoupon />} />
      <Route path='deals' element={<Deals />} />
      <Route path='shop-by-category' element={<ShopByCategory />} />
      <Route path='account' element={<Account />} />
    </Routes>
  )
}

export default AdminRoutes