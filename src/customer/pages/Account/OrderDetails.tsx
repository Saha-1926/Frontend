import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";

const OrderDetails = () => {
  const navigate = useNavigate();

  const [isCanceled, setIsCanceled] = React.useState(false);

  const handleCancelOrder = () => {
    setIsCanceled(true);
  };

  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        
        <img
          className="w-[100px]"
          src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727452042/pro-ray-android-ios-cellecor-yes-original-imagydnsrany7qhy_1_m9n9t5.webp"
          alt=""
        />

        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">Virani Clothing</h1>

          <p>
            Cellecor RAY 1.43" AMOLED Display | 700 NITS | AOD | BT-Calling | AI
            Voice | Split Screen Smartwatch (Black Strap, Free Size)
          </p>

          <p>
            <strong>Size:</strong> M
          </p>
        </div>

        <div>
          <Button onClick={() => navigate(`/reviews/${5}/create`)}>
            Write Review
          </Button>
        </div>
<div><OrderStepper/></div>
        <div className="space-y-5 w-full max-w-xl">

          {/* Delivery Address */}
          <div className="border rounded-md p-4">
            <h2 className="font-semibold mb-2">Delivery Address</h2>

            <p className="text-sm">
              Zosh | 9023379136
            </p>

            <p className="text-sm text-gray-500">
              Ambavadi choke, Banglor, karnataka - 530068
            </p>
          </div>

          {/* Price Details */}
          <div className="border rounded-md p-4 space-y-3">

            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold">Total Item Price</h2>
                <p className="text-sm text-green-600">
                  You saved ₹199.00 on this item
                </p>
              </div>

              <p className="font-semibold">₹799.00</p>
            </div>

            <div className="bg-green-50 p-3 rounded-md text-sm">
              Paid on Razor Pay
            </div>

            <p className="text-sm text-gray-500">
              Sold by : Viraani Clothing
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