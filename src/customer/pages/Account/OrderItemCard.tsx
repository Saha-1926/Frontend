import React from 'react'
import { OrderItem as OrderItemType } from '../../../Type/OrderTypes'
import { Order,OrderItem } from '../../../Type/OrderTypes'
import { useNavigate } from 'react-router-dom'
const OrderItemCard = ({ item,order }: { item: OrderItemType ,order:Order }) => {
  const navigate =useNavigate()
    return (
    <div onClick={()=>navigate(`/account/order/${order.id}/${item.id}`)} className="border rounded-md p-1 bg-gray-50">

      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-600 font-semibold">PENDING</span>
        <span className="text-gray-500 text-xs">
          Arriving By {order.deliverDate}
        </span>
      </div>

      <div className="p-5 bg-teal-50 flex gap-3">

        <div>
          <img className="w-[70px]" src={item.product.images[0]} alt="" />
        </div>

        <div className="w-full space-y-2">
          <h1 className="font-bold">
            {item.product.seller?.businessDetails.businessName}
          </h1>

          <p>{item.product.title}</p>

          <p>
            <strong>size : </strong>
            FREE
          </p>
        </div>

      </div>

    </div>
  )
}

export default OrderItemCard