import React from 'react'
import { Routes, Route } from 'react-router-dom'

// ✅ pages
import Coupons from '../admin/Pages/Coupons/Coupons'
import AddCoupon from '../admin/Pages/AddCoupon/AddCoupon'
import Deals from '../admin/Pages/Deals/Deals'
import ShopByCategory from '../admin/Pages/ShopByCategory/ShopByCategory'
import Account from '../admin/Pages/Account/Account'

// ✅ NEW DASHBOARD PAGE (IMPORTANT)
import Dashboard from '../admin/Pages/Dashboard/Dashboard'

const AdminRoutes = () => {
  return (
    <Routes>

      {/* ✅ CHANGE MADE HERE (FIXED RECURSION) */}
      <Route index element={<Dashboard />} />

      <Route path='coupons' element={<Coupons />} />
      <Route path='add-coupon' element={<AddCoupon />} />
      <Route path='deals' element={<Deals />} />
      <Route path='shop-by-category' element={<ShopByCategory />} />
      <Route path='account' element={<Account />} />

    </Routes>
  )
}

export default AdminRoutes;