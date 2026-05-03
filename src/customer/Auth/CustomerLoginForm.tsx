import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

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

  return (
    <form onSubmit={formik.handleSubmit} className="p-5 flex flex-col gap-3">

      <TextField
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        fullWidth
      />

      <Button
        variant="outlined"
        onClick={() => alert("OTP Sent (Dummy)")}
      >
        Send OTP
      </Button>

      <TextField
        label="OTP"
        name="otp"
        value={formik.values.otp}
        onChange={formik.handleChange}
        fullWidth
      />

      <Button type="submit" variant="contained">
        Login
      </Button>

    </form>
  );
};

export default CustomerLoginForm;