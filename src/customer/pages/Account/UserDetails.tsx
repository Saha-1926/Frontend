import React from 'react'
import ProfileFieldCard from '../../../component/ProfileFieldCard'
import { useAppSelector } from '../../../State/Store'
const UserDetails = () => {
    const { customerAuth } = useAppSelector(store => store);

  return (
    <div className='flex justify-center py-10'>
      <div className="w-full lg:w-[70%]">
        <div className='flex items-center pb-3 justify-between'>
          <h1 className='text-2xl font-bold text-gray-600'>Persional Details</h1>
        </div>

        <div className='space-y-5'>
          <ProfileFieldCard keys='Name' value={customerAuth.user?.fullName || ""} />
          <ProfileFieldCard keys='Email' value={customerAuth.user?.email || ""} />
          <ProfileFieldCard keys='Mobile' value={customerAuth.user?.mobile || ""} />
        </div>

      </div>
    </div>
  )
}

export default UserDetails;