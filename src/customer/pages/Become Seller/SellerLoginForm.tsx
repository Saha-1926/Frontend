import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { Button } from '@mui/material'
import { useAppDispatch } from '../../../State/Store'
import { sendLoginSignupOtp, signin } from '../../../State/seller/AuthSlice'

const SellerLoginForm = () => {
      const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues:{
            email:"",
            otp:""
        },
        onSubmit:(values) => {
            console.log("form data ", values)
            dispatch(signin(values))
        }
    })
    const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }))
  }

    return (
        <div>
            <h1 className="text-center font-bold text-xl text-primary-color pb-5">
                Login As Seller
            </h1>

            <div className='space-y-5'>
                <TextField fullWidth name="email" label="Email"
                         value={formik.values.email}
                         onChange={formik.handleChange}
                       />
                {true && 
                <div className='space-y-2'>
                    <TextField fullWidth name="otp" label="Otp"
                             value={formik.values.otp}
                             onChange={formik.handleChange}
                           />
                </div>}
                <Button           onClick={handleSendOtp}
  fullWidth variant='contained' sx={{ py: '11px' }}>
  SenD OTP
</Button>

  <Button   onClick={() => formik.handleSubmit()}
 fullWidth variant='contained' sx={{ py: '11px' }}>
  Login
</Button>
            </div>
        </div>
    )
}

export default SellerLoginForm