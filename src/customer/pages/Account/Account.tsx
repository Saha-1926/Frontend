import { Divider } from "@mui/material";
import React from "react";
import { useNavigate, useLocation, Routes } from "react-router-dom";
import OrderDetails from "./OrderDetails";
import OrderStepper from "./OrderStepper";
import UserDetails from "./UserDetails";
import Address from "./Address";
import { Route } from "react-router-dom";
import Order from "./Order";
const menu = [
  { name: "orders", path: "/account/orders" },
  { name: "profile", path: "/account" },
  { name: "Saved Cards", path: "/account/saved-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" },
];

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ FIX: add this function
  const handleClick = (item: any) => {
    navigate(item.path);
  };
  const Navigate = useNavigate();

  return (
    <div className="px-5 lg:px-52 min-h-screen mt-10">
      <div>
        <h1 className="text-xl font-bold pb-5">Zosh</h1>
      </div>

      <Divider />

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        
        {/* LEFT SECTION */}
        <section className="col-span-1 lg:border-r lg:pr-5 py-5 h-full">
          {menu.map((item) => (
            <div
              onClick={() => handleClick(item)}
              key={item.name}
              className={`${
                item.path === location.pathname
                  ? "bg-primary-color text-white"
                  : ""
              } py-3 cursor-pointer hover:text-white hover:bg-primary-color px-5 rounded-md border mb-3 text-sm font-medium`}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </section>

        {/* RIGHT SECTION */}
        <section className="col-span-2 py-5 px-5">
          
          <Routes>
        <Route path='/' element={<UserDetails/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/order/:orderId/:orderItemId' element={<OrderDetails/>}/>
        <Route path='/addresses' element={<Address/>}/>
    </Routes>
          
          

        </section>

      </div>
    </div>
  );
};

export default Account;