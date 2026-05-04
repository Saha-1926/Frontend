import React from 'react'
import DrawerListComponent from '../../component/DrawerListComponent';
import Dashboard from '../Pages/Dashboard/Dashboard';

const menu = [
   { name: "Coupons", path: "/admin/coupons" },
  { name: "Add new coupon", path: "/admin/add-coupon" },
  { name: "Deals", path: "/admin/deals" },
  { name: "Shop BY category", path: "/admin/shop-by-category" },
  { name: "Dashboard", path: "/admin" }
];

const menu2 = [
  { name: "Account", path: "/admin/account" },
  { name: "Logout", path: "/" }
];

const AdminDrawerList = ({ toggleDrawer }: any) => {
  return (
    <div>
      <DrawerListComponent 
        menu={menu} 
        menu2={menu2} 
        toggleDrawer={toggleDrawer} 
      />
    </div>
  )
}

export default AdminDrawerList;