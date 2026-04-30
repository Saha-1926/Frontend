import React from 'react'

const OrderItem = () => {
  return (
    <div className="border rounded-md p-1 bg-gray-50">
      
      {/* Top status */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 font-semibold">SHIPPED</span>
        <span className="text-gray-500 text-xs">
          Arriving by Fri, Oct 04
        </span>
      </div>

      {/* Product details */}
      <div className="flex gap-4">
        
        {/* Image */}
        <img
src="https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg"          alt="product"
          className="w-20 h-20 object-cover rounded"
        />

        {/* Info */}
        <div>
          <h2 className="font-medium">Raam Clothing</h2>
          
          <p className="text-gray-500 text-sm">
            Cellecor RAY 1.43" AMOLED Display | 700 NITS | AOD |
            BT-Calling | AI Voice | Smartwatch
          </p>

          <p className="text-sm mt-1">size : FREE</p>
        </div>

      </div>

    </div>
  )
}

export default OrderItem