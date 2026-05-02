import React, { useState } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { uploadToCoudinary } from "../../../Util/uploadToCloudinary";
import { createProduct } from "../../../State/seller/SellerProductSlice";
import { useAppDispatch } from "../../../State/Store";

const AddProducts = () => {
  const [uploadImage, setUploadingImage] = useState(false);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: "",
      sellingPrice: "",
      quantity: "",
      color: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      sizes: "",
    },
    onSubmit: (values) => {
      console.log("FINAL DATA:", values);
            dispatch(createProduct({ request: values, jwt: localStorage.getItem("jwt") }));

    },
  });

  // ✅ IMAGE UPLOAD
  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];


    if (!file) return;

    setUploadingImage(true);

    const imageUrl = await uploadToCoudinary(file);

    console.log("Uploaded URL:", imageUrl);

    if (imageUrl) {
      formik.setFieldValue("images", [
        ...formik.values.images,
        imageUrl,
      ]);
    }

    setUploadingImage(false); // ✅ loader stops here
  };

  // ✅ REMOVE IMAGE
  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="p-6 w-full">
      <form onSubmit={formik.handleSubmit} className="space-y-5">

        {/* IMAGE UPLOAD */}
        <div className="flex flex-wrap gap-5">

          {/* hidden input */}
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />

          {/* upload box */}
          <label htmlFor="fileInput" className="relative">
            <span className="w-24 h-24 border flex items-center justify-center cursor-pointer">
              <AddPhotoAlternateIcon />
            </span>

            {/* loader */}
            {uploadImage && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/60">
                <CircularProgress />
              </div>
            )}
          </label>

          {/* IMAGE PREVIEW */}
          <div className="flex gap-3 flex-wrap">
            {formik.values.images.map((image: any, index: number) => (
              <div className="relative" key={index}>
                <img
                  src={image}
                  alt="product"
                  className="w-24 h-24 object-cover border rounded"
                />

                <IconButton
                  onClick={() => handleRemoveImage(index)}
                  size="small"
                  color="error"
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: "white",
                  }}
                >
                  X
                </IconButton>
              </div>
            ))}
          </div>
        </div>

        {/* TITLE */}
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />

        {/* DESCRIPTION */}
        <TextField
          fullWidth
          multiline
          rows={3}
          id="description"
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />

        {/* PRICE */}
        <div className="flex gap-4 flex-wrap">
          <TextField
            fullWidth
            id="mrp_price"
            name="mrpPrice"
            label="MRP Price"
            type="number"
            value={formik.values.mrpPrice}
            onChange={formik.handleChange}
          />

          <TextField
            fullWidth
            id="selling_price"
            name="sellingPrice"
            label="Selling Price"
            type="number"
            value={formik.values.sellingPrice}
            onChange={formik.handleChange}
          />
        </div>

        {/* COLOR + SIZE */}
        <div className="flex gap-4 flex-wrap">
          <TextField
            fullWidth
            id="color"
            name="color"
            label="Color"
            value={formik.values.color}
            onChange={formik.handleChange}
          />

          <TextField
            fullWidth
            id="sizes"
            name="sizes"
            label="Sizes"
            value={formik.values.sizes}
            onChange={formik.handleChange}
          />
        </div>

        {/* CATEGORY */}
        <div className="flex gap-4 flex-wrap">
          <TextField
            fullWidth
            id="category"
            name="category"
            label="Category"
            value={formik.values.category}
            onChange={formik.handleChange}
          />

          <TextField
            fullWidth
            id="category2"
            name="category2"
            label="Second Category"
            value={formik.values.category2}
            onChange={formik.handleChange}
          />

          <TextField
            fullWidth
            id="category3"
            name="category3"
            label="Third Category"
            value={formik.values.category3}
            onChange={formik.handleChange}
          />
        </div>

        {/* SUBMIT */}
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "#0f766e" }}
        >
          ADD PRODUCT
        </Button>

      </form>
    </div>
  );
};

export default AddProducts;