import React from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";

const AddCoupon = () => {

  const formik = useFormik({
    initialValues: {
      code: "",
      discount: "",
      startDate: "",
      endDate: "",
      minValue: ""
    },

    onSubmit: (values) => {
      console.log("Coupon Data:", values);
    }
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <form onSubmit={formik.handleSubmit} className="space-y-5">

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-5">

          <TextField
            fullWidth
            label="Coupon Code"
            name="code"
            value={formik.values.code}
            onChange={formik.handleChange}
          />

          <TextField
            fullWidth
            label="Discount Percentage"
            name="discount"
            type="number"
            value={formik.values.discount}
            onChange={formik.handleChange}
          />

        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-5">

          <TextField
            fullWidth
            label="Validity Start Date"
            name="startDate"
            type="date"
            value={formik.values.startDate}
            onChange={formik.handleChange}
            slotProps={{
              inputLabel: { shrink: true }
            }}
          />

          <TextField
            fullWidth
            label="Validity End Date"
            name="endDate"
            type="date"
            value={formik.values.endDate}
            onChange={formik.handleChange}
            slotProps={{
              inputLabel: { shrink: true }
            }}
          />

        </div>

        {/* Row 3 */}
        <TextField
          fullWidth
          label="Minimum Order Value"
          name="minValue"
          type="number"
          value={formik.values.minValue}
          onChange={formik.handleChange}
        />

        {/* Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#009688",
            padding: "12px",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#00796b"
            }
          }}
        >
          CREATE COUPON
        </Button>

      </form>
    </div>
  );
};

export default AddCoupon;