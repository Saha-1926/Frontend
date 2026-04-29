import React from 'react'
import { TextField, Button } from '@mui/material'

const AddressForm = () => {
  return (
    <div className="space-y-5">

      <h1 className="text-center font-semibold text-lg">
        Contact Details
      </h1>

      <div className="space-y-3">

        <TextField
          fullWidth
          label="Name"
        />

        <div className="flex gap-3">
          <TextField
            fullWidth
            label="Mobile"
          />
          <TextField
            fullWidth
            label="Pin Code"
          />
        </div>

        <TextField
          fullWidth
          label="Address (House No, Building, Street)"
        />

        <TextField
          fullWidth
          label="Locality/Town"
        />

        <div className="flex gap-3">
          <TextField
            fullWidth
            label="City"
          />
          <TextField
            fullWidth
            label="State"
          />
        </div>

        <Button
          fullWidth
          variant="contained"
          sx={{ py: "12px" }}
        >
          ADD ADDRESS
        </Button>

      </div>

    </div>
  )
}

export default AddressForm