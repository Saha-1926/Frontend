import React from 'react'
import { Box, TextField } from '@mui/material'

const BecomeSellerFormStep1 = ({ formik }: any) => {
  return (
    <Box>
      <p className='text-xl font-bold text-center pb-9'>Contact Details</p>

      <div className='space-y-9'>

        <TextField fullWidth name="name" label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
         <TextField fullWidth name="mobile" label="Mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
        />
         <TextField fullWidth name="otp" label="Otp"
          value={formik.values.otp}
          onChange={formik.handleChange}
        />
         <TextField fullWidth name="GSTIN" label="GSTIN"
          value={formik.values.GSTIN}
          onChange={formik.handleChange}
        />
       

      </div>
    </Box>
  )
}

export default BecomeSellerFormStep1