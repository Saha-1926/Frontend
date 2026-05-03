import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import { useAppDispatch } from "../../State/Store";
import { sendCustomerOtp } from "../../State/Customer/CustomerAuthSlice";
import { customerSignin } from "../../State/Customer/CustomerAuthSlice";

const CustomerLoginForm = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("Login Data:", values);
      alert("Login button clicked (No API)");
    },
  });
  const dispatch = useAppDispatch();
  const handleSendOtp = () => {
  if (!formik.values.email) {
    alert("Please enter email first");
    return;
  }

  dispatch(sendCustomerOtp({ email: formik.values.email }));
};
const handleLogin = () => {
  // 🔹 validation
  if (!formik.values.email) {
    alert("Please enter email");
    return;
  }

  if (!formik.values.otp) {
    alert("Please enter OTP");
    return;
  }

  // 🔹 dispatch login thunk
  dispatch(
    customerSignin({
      email: formik.values.email,
      otp: formik.values.otp,
    })
  );
};

  return (
    <form onSubmit={formik.handleSubmit} className="p-5 flex flex-col gap-3">

      <TextField
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        fullWidth
      />

      <Button variant="outlined" onClick={handleSendOtp}>
  Send OTP
</Button>

      <TextField
        label="OTP"
        name="otp"
        value={formik.values.otp}
        onChange={formik.handleChange}
        fullWidth
      />

     <Button variant="contained" onClick={handleLogin}>
  Login
</Button>
    </form>
  );
};

export default CustomerLoginForm;