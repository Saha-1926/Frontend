import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchOrderById, fetchOrderItemById } from "../../../State/Customer/OrderSlice";

const OrderDetails = () => {

  const [isCanceled, setIsCanceled] = React.useState(false);

  const handleCancelOrder = () => {
    setIsCanceled(true);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { orderId, orderItemId } = useParams();

  // ✅ FIX 1: correct state access (order → currentOrder)
  const order = useAppSelector(store => store.orders.currentOrder);

  // ✅ correct already
  const orderItem = useAppSelector(store => store.orders.orderItem);

  useEffect(() => {
    dispatch(fetchOrderById({
      orderId: Number(orderId),
      jwt: localStorage.getItem("jwt") || ""
    }));

    dispatch(fetchOrderItemById({
      orderItemId: Number(orderItemId),
      jwt: localStorage.getItem("jwt") || ""
    }));
  }, [dispatch, orderId, orderItemId]);

  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">

        <img
          className="w-[100px]"
          src={orderItem?.product?.images[0]}
          alt=""
        />

        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">
            {orderItem?.product?.seller?.businessDetails?.businessName}
          </h1>

          <p>
            {orderItem?.product?.title}
          </p>

          <p>
            <strong>Size:</strong> {orderItem?.size}
          </p>
        </div>

        <div>
          <Button
            onClick={() => navigate(`/reviews/${orderItem?.id}/create`)}
          >
            Write Review
          </Button>
        </div>

        <div>
          <OrderStepper />
        </div>

        <div className="space-y-5 w-full max-w-xl">

          {/* Delivery Address */}
          <div className="border rounded-md p-4">
            <h2 className="font-semibold mb-2">Delivery Address</h2>

            <p className="text-sm">
              {order?.shippingAddress?.name} | {order?.shippingAddress?.mobile}
            </p>

            <p className="text-sm text-gray-500">
              {order?.shippingAddress?.address}, {order?.shippingAddress?.city}, {order?.shippingAddress?.state} - {order?.shippingAddress?.pinCode}
            </p>
          </div>

          {/* Price Details */}
          <div className="border rounded-md p-4 space-y-3">

            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold">Total Item Price</h2>

                {/* ✅ FIX 2: safe calculation */}
                <p className="text-sm text-green-600">
                  You saved ₹{(orderItem?.mrpPrice || 0) - (orderItem?.sellingPrice || 0)} on this item
                </p>
              </div>

              <p className="font-semibold">
                ₹{orderItem?.sellingPrice}
              </p>
            </div>

            <div className="bg-green-50 p-3 rounded-md text-sm">
              Paid on Cash on Delivery
            </div>

            <p className="text-sm text-gray-500">
              Sold by : {orderItem?.product?.seller?.businessDetails?.businessName}
            </p>

          </div>

          {/* Cancel Button */}
          <div className="p-5">
            <Button
              disabled={isCanceled}
              onClick={handleCancelOrder}
              color="error"
              sx={{ py: "0.7rem" }}
              variant="outlined"
              fullWidth
            >
              {isCanceled ? "order canceled" : "Cancel Order"}
            </Button>
          </div>

        </div>

      </section>
    </Box>
  );
};

export default OrderDetails;