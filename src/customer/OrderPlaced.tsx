import { Button } from '@mui/material'
import React from 'react'

const OrderPlaced = () => {
  return (
    <div className='min-h-[90vh] flex justify-center items-center'>
      <div className='bg-primary-color text-white p-8 w-[90%] lg:w-[25%] border rounded-md h-[40vh] flex flex-col gap-7 items-center justify-center'>

        <h1 className="text-3xl font-semibold">Congratulations!</h1>
        <h1 className="text-2xl font-semibold">your order get success</h1>

        <div>
          <Button>Shopping More</Button>
        </div>

      </div>
    </div>
  )
}

export default OrderPlaced;