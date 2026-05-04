import React from 'react'
import DrawerListComponent from '../../../component/DrawerListComponent';

const menu = [
  
  {
    name: "Orders",
    path: "/seller/orders",
  },
  {
    name: "Products",
    path: "/seller/products",
  },
  {
    name: "Add Product",
    path: "/seller/add-product",
  },
  
 
];

const menu2 = [
  {
    name: "Account",
    path: "/seller/account",
  },
  {
    name: "Logout",
    path: "/",
  }
];

const SellerDrawerList = ({ toggleDrawer }: any) => {

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

export default SellerDrawerList