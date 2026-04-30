import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import { useFormik } from 'formik'

const BecomeSellerFormStep4 = ({ formik }: any) => {

    return (
    <Box className="max-w-xl mx-auto p-5">

      <p className="text-xl font-bold text-center pb-5">
PickUp Address      </p>

      <form onSubmit={formik.handleSubmit} className="space-y-4">

        <TextField fullWidth name="Bussiness name" label="Bussiness Name"
          value={formik.values.businessName}
          onChange={formik.handleChange}
        />

        <TextField fullWidth name="Seller name" label="Seller Name"
          value={formik.values.sellerName}
          onChange={formik.handleChange}
        />

        <TextField fullWidth name="email" label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextField fullWidth name="password" label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />

         

        
      </form>
    </Box>
  )
}

export default BecomeSellerFormStep4