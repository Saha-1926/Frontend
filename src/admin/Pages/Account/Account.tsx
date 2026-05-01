import React, { useState } from 'react'
import { useFormik } from 'formik'
import ProfileFieldCard from '../../../component/ProfileFieldCard'
import { Button, TextField } from '@mui/material'

const UserDetails = () => {

  const [edit, setEdit] = useState(false)

  const formik = useFormik({
    initialValues: {
      // Personal
      name: "Zosh",
      email: "zosh@gmail.com",
      mobile: "8765487701",

      // Business
      businessName: "Zosh Pvt Ltd",
      gst: "29ABCDE1234F1Z5",
      address: "Bangalore, India",

      // Bank
      accountHolder: "Zosh",
      accountNumber: "1234567890",
      ifsc: "HDFC0001234"
    },
    onSubmit: (values) => {
      console.log(values)
      setEdit(false)
    }
  })

  const handleCancel = () => {
    formik.resetForm()
    setEdit(false)
  }

  return (
    <div className='flex justify-center py-10'>
      <div className="w-full lg:w-[70%] space-y-10">

        {/* ================= PERSONAL DETAILS ================= */}
        <div>
          <div className='flex justify-between items-center pb-4'>
            <h1 className='text-2xl font-bold text-gray-600'>
              Personal Details
            </h1>

            {!edit ? (
              <Button variant="outlined" onClick={() => setEdit(true)}>
                Edit
              </Button>
            ) : (
              <div className='space-x-2'>
                <Button variant="contained" onClick={() => formik.handleSubmit()}>
                  Save
                </Button>
                <Button variant="outlined" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            )}
          </div>

          <div className='space-y-5'>

            {edit ? (
              <TextField fullWidth label="Name" name="name"
                value={formik.values.name} onChange={formik.handleChange} />
            ) : (
              <ProfileFieldCard keys="Name" value={formik.values.name} />
            )}

            {edit ? (
              <TextField fullWidth label="Email" name="email"
                value={formik.values.email} onChange={formik.handleChange} />
            ) : (
              <ProfileFieldCard keys="Email" value={formik.values.email} />
            )}

            {edit ? (
              <TextField fullWidth label="Mobile" name="mobile"
                value={formik.values.mobile} onChange={formik.handleChange} />
            ) : (
              <ProfileFieldCard keys="Mobile" value={formik.values.mobile} />
            )}

          </div>
        </div>

        {/* ================= BUSINESS DETAILS ================= */}
        <div>
          <h1 className='text-2xl font-bold text-gray-600 pb-4'>
            Business Details
          </h1>

          <div className='space-y-5'>

            {edit ? (
              <TextField fullWidth label="Business Name" name="businessName"
                value={formik.values.businessName} onChange={formik.handleChange} />
            ) : (
              <ProfileFieldCard keys="Business Name" value={formik.values.businessName} />
            )}

            {edit ? (
              <TextField fullWidth label="GST Number" name="gst"
                value={formik.values.gst} onChange={formik.handleChange} />
            ) : (
              <ProfileFieldCard keys="GST Number" value={formik.values.gst} />
            )}

            {edit ? (
              <TextField fullWidth label="Address" name="address"
                value={formik.values.address} onChange={formik.handleChange} />
            ) : (
              <ProfileFieldCard keys="Address" value={formik.values.address} />
            )}

          </div>
        </div>

        {/* ================= BANK DETAILS ================= */}
        <div>
          <h1 className='text-2xl font-bold text-gray-600 pb-4'>
            Bank Details
          </h1>

          <div className='space-y-5'>

            {edit ? (
              <TextField fullWidth label="Account Holder" name="accountHolder"
                value={formik.values.accountHolder} onChange={formik.handleChange} />
            ) : (
              <ProfileFieldCard keys="Account Holder" value={formik.values.accountHolder} />
            )}

            {edit ? (
              <TextField fullWidth label="Account Number" name="accountNumber"
                value={formik.values.accountNumber} onChange={formik.handleChange} />
            ) : (
              <ProfileFieldCard keys="Account Number" value={formik.values.accountNumber} />
            )}

            {edit ? (
              <TextField fullWidth label="IFSC Code" name="ifsc"
                value={formik.values.ifsc} onChange={formik.handleChange} />
            ) : (
              <ProfileFieldCard keys="IFSC Code" value={formik.values.ifsc} />
            )}

          </div>
        </div>

      </div>
    </div>
  )
}

export default UserDetails