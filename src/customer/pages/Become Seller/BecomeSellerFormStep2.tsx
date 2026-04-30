import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import { useFormik } from 'formik'

const BecomeSellerFormStep2 = ({ formik }: any) => {

    return (
    <Box className="max-w-xl mx-auto p-5">

      <p className="text-xl font-bold text-center pb-5">
PickUp Address      </p>

      <form onSubmit={formik.handleSubmit} className="space-y-4">

        <TextField fullWidth name="name" label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <TextField fullWidth name="mobile" label="Mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
        />

        <TextField fullWidth name="pinCode" label="Pin Code"
          value={formik.values.pinCode}
          onChange={formik.handleChange}
        />

        <TextField fullWidth name="address" label="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
        />

        <TextField fullWidth name="city" label="City"
          value={formik.values.city}
          onChange={formik.handleChange}
        />

        <TextField fullWidth name="state" label="State"
          value={formik.values.state}
          onChange={formik.handleChange}
        />

        <TextField fullWidth name="locality" label="Locality"
          value={formik.values.locality}
          onChange={formik.handleChange}
        />

        
      </form>
    </Box>
  )
}

export default BecomeSellerFormStep2