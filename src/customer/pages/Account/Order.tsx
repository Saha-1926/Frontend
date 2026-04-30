import React from 'react'
import OrderItem from './OrderItem'

const Orders = () => {
  return (
    <div className='text-sm min-h-screen lg:px-10 px-5 py-10'>
      
      <div className='pb-5'>
        <h1 className='font-semibold'>All Orders</h1>
        <p>from anytime</p>
      </div>

      <div className='space-y-3'>
        {[1,1,1,1,1,1].map((item)=><OrderItem />)}
      </div>

    </div>
  )
}

export default Orders