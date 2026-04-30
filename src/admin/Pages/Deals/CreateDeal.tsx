import React from 'react';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';

const CreateDeal = () => {

  const formik = useFormik({
    initialValues: {
      title: '',
      discount: '',
      category: '',
      image: ''
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 max-w-md">

      <TextField
        fullWidth
        label="Deal Title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />

      <TextField
        fullWidth
        label="Discount %"
        name="discount"
        type="number"
        value={formik.values.discount}
        onChange={formik.handleChange}
      />

      <TextField
        fullWidth
        label="Category"
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
      />

      <TextField
        fullWidth
        label="Image URL"
        name="image"
        value={formik.values.image}
        onChange={formik.handleChange}
      />

      <Button type="submit" variant="contained" color="success" fullWidth>
        CREATE DEAL
      </Button>

    </form>
  );
};

export default CreateDeal;