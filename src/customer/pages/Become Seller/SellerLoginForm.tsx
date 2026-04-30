import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const SellerLoginForm = () => {
    const formik = useFormik({
        initialValues:{
            email:"",
            otp:""
        },
        onSubmit:(values) => {
            console.log("form data ", values)
        }
    })

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
            </div>
        </div>
    )
}

export default SellerLoginForm