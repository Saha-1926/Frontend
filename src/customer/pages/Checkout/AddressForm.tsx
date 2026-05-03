import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import { useFormik } from 'formik'
import { useAppDispatch } from '../../../State/Store'
import { createOrder } from '../../../State/Customer/OrderSlice'
import { useNavigate } from "react-router-dom"
const AddressForm = () => {
const dispatch = useAppDispatch();
const navigate = useNavigate();
  const formik = useFormik({
  initialValues: {
    name: '',
    mobile: '',
    pinCode: '',
    address: '',
    city: '',
    state: '',
    locality: ''
  },

  onSubmit: async (values) => {
    console.log(values)

    const result = await dispatch(createOrder({
      address: values,
      jwt: localStorage.getItem("jwt") || ""
    }))

    if (result.meta.requestStatus === "fulfilled") {
      navigate("/order-placed")
    }
  }
})
    // ✅ HANDLE SUBMIT (THIS IS THE SAVE LOGIC)

  return (
    <Box className="max-w-xl mx-auto p-5">

      <p className="text-xl font-bold text-center pb-5">
        Contact Details
      </p>

      {/* ✅ THIS TRIGGERS onSubmit */}
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

        {/* ✅ BUTTON TRIGGERS SUBMIT */}
        <Button  type="submit" variant="contained" fullWidth>
          Save Address
        </Button>

      </form>
    </Box>
  )
}

export default AddressForm;