import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// 👇 import your slices
import authReducer from "./seller/AuthSlice";
import sellerReducer from "./seller/SellerSlice";
import { fetchSellerProducts } from "./seller/SellerProductSlice";
import sellerProductReducer from "./seller/SellerProductSlice";
import customerAuthReducer from "./Customer/CustomerAuthSlice";
import cartReducer from "./Customer/CartSlice";
import ordersReducer from "./Customer/OrderSlice";
import sellerOrdersReducer from "./seller/SellerOrderSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  seller: sellerReducer,
  sellerProduct: sellerProductReducer,
    customerAuth: customerAuthReducer,
cart:cartReducer,
orders:ordersReducer,
sellerOrders:sellerOrdersReducer});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;