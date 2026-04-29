import React from "react";
import { Avatar, Box, Grid, IconButton, Rating } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { red } from "@mui/material/colors";

const ReviewCard = () => {
  return (
<div className="flex justify-between items-start w-full max-w-[700px]">
      {/* LEFT + MIDDLE CONTENT */}
      <Grid container spacing={9}>

        {/* AVATAR */}
        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              Z
            </Avatar>
          </Box>
        </Grid>

        {/* REVIEW CONTENT */}
        <Grid size={{ xs: 9 }}>
          
          <div className="space-y-2">

            {/* NAME + DATE */}
            <div>
              <p className="font-semibold text-lg">Zosh</p>
              <p className="opacity-70">2024-09-27T23:16:07.478333</p>
            </div>

            {/* RATING */}
            <Rating
              readOnly
              value={4}
              precision={1}
            />

            {/* REVIEW TEXT */}
            <p>value for money product, great product</p>

          </div>
          <div className="mt-2">
  <img
    className="w-24 h-24 object-cover rounded-md border"
    src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727459152/purchased_product_b19fgy.jpg"
    alt="review product"
  />
</div>

        </Grid>

      </Grid>

      {/* DELETE BUTTON */}
      <IconButton>
        <Delete sx={{ color: red[700] }} />
      </IconButton>

    </div>
  );
};

export default ReviewCard;