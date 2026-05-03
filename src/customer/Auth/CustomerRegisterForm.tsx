import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

const CustomerRegisterForm = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("Register Data:", values);
      alert("Register button clicked (No API)");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-5 flex flex-col gap-3">

      <TextField
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        fullWidth
      />

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
        Register
      </Button>

    </form>
  );
};

export default CustomerRegisterForm;