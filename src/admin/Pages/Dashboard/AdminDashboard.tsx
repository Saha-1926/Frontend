import React, { useState } from 'react'
import AdminDrawerList from '../../Component/AdminDrawerList'
import AdminRoutes from '../../../Routes/AdminRoutes'
import { useAppDispatch } from '../../../State/Store'
import { useEffect } from 'react'
import { fetchHomeCategories } from '../../../State/adminSlice'
const AdminDashboard = () => {

  const [open, setOpen] = useState(true)

  const toggleDrawer = () => {
    setOpen(!open)
  }
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHomeCategories())
  }, [])

  return (
    <div className='h-screen w-screen flex'>

      {/* SIDEBAR */}
      {open && (
        <div className='w-[260px] border-r bg-white shadow'>
          <AdminDrawerList toggleDrawer={toggleDrawer} />
        </div>
      )}

      {/* MAIN */}
      <div className='flex-1 overflow-y-auto'>

        <button
          onClick={toggleDrawer}
          className='m-4 px-4 py-2 bg-teal-500 text-white rounded'
        >
          Toggle Menu
        </button>

        <div className='p-4'>
          <AdminRoutes />
        </div>

      </div>

    </div>
  )
}

export default AdminDashboard