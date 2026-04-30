import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import { useFormik } from 'formik'

const BecomeSellerFormStep3 = ({ formik }: any) => {

    return (
    <Box className="max-w-xl mx-auto p-5">

      <p className="text-xl font-bold text-center pb-5">
PickUp Address      </p>

      <form onSubmit={formik.handleSubmit} className="space-y-4">

        <TextField fullWidth name="Account number" label="Account Number"
          value={formik.values.accountNumber}
          onChange={formik.handleChange}
        />

        <TextField fullWidth name="IFSC code" label="IFSC Code"
          value={formik.values.ifscCode}
          onChange={formik.handleChange}
        />

        <TextField fullWidth name="Account holder name" label="Account Holder Name"
          value={formik.values.accountHolderName}
          onChange={formik.handleChange}
        />

         

        
      </form>
    </Box>
  )
}

export default BecomeSellerFormStep3