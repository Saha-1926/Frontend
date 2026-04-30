import React, { useState } from 'react'
import SellerDrawerList from '../../Components/SellerDrawerList/SellerDrawerList'
import SellerRoutes from '../../../Routes/SellerRoutes'

const SellerDashboard = () => {

  const [open, setOpen] = useState(true)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div className='h-screen w-screen flex'>   {/* ✅ FULL SCREEN */}

      {/* ✅ SIDEBAR */}
      {open && (
        <div className='w-[260px] border-r bg-white shadow'>
          <SellerDrawerList toggleDrawer={toggleDrawer} />
        </div>
      )}

      {/* ✅ MAIN CONTENT */}
      <div className='flex-1 overflow-y-auto'>  {/* fills remaining space */}
        
        {/* BUTTON */}
        <button
          onClick={toggleDrawer}
          className='m-4 px-4 py-2 bg-teal-500 text-white rounded'
        >
          Toggle Menu
        </button>

        {/* ROUTES */}
        <div className='p-6'>
          <SellerRoutes />
        </div>

      </div>

    </div>
  )
}

export default SellerDashboard