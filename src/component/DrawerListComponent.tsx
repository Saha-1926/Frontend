import { Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface DrawerListProp {
  menu: any[],
  menu2: any[],
  toggleDrawer: () => void
}

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProp) => {

  const navigate = useNavigate()

  return (
    <div className='h-full'>
      <div className='flex flex-col justify-between h-full w-[260px] border-r bg-white py-6 shadow-sm border-green-200 px-3 boder-rounded container'>

        {/* TOP MENU */}
        <div className='space-y-2'>
          {menu.map((item, index: number) => (
            <div
              key={index}
              onClick={() => {
                navigate(item.path)
                toggleDrawer()   // ✅ FIXED
              }}
              className='mx-3 px-4 py-2 rounded-md cursor-pointer 
              text-gray-700 font-medium 
              hover:bg-blue-50 hover:text-teal-600 transition'
            >
              {item.name}
            </div>
          ))}
        </div>
<Divider className='my-2' />
        {/* BOTTOM MENU */}
        <div className='space-y-2'>
          {menu2.map((item, index: number) => (
            <div
              key={index}
              onClick={() => {
                navigate(item.path)   // ✅ ADD THIS
                toggleDrawer()
              }}
              className='mx-3 px-4 py-2 rounded-md cursor-pointer 
              text-gray-600 
              hover:bg-red-50 hover:text-red-500 transition'
            >
              {item.name}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default DrawerList