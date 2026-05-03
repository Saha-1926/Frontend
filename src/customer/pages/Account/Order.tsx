import React, { useEffect } from 'react'
import { fetchUserOrderHistory } from '../../../State/Customer/OrderSlice'
import { useAppDispatch, useAppSelector } from '../../../State/Store'
import OrderItemCard from './OrderItemCard'

const Orders = () => {
  const dispatch = useAppDispatch()
  const { orders } = useAppSelector(store => store.orders)

  useEffect(() => {
    dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""))
  }, [dispatch])

  return (
    <div className='text-sm min-h-screen lg:px-10 px-5 py-10'>

      <div className='pb-5'>
        <h1 className='font-semibold'>All Orders</h1>
        <p>from anytime</p>
      </div>

      <div className='space-y-3'>
        {orders?.map((order) =>
          order.orderItems?.map((item) => (
            <OrderItemCard  key={item.id} item={item} order={order} />
          ))
        )}
      </div>

    </div>
  )
}

export default Orders