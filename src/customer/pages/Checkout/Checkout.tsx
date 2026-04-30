import React from "react";
import { Button } from "@mui/material";
import AddressCard from "./AddressCard";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AdressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
 
const style = {
  position: 'absolute',
  top: '50%',                // ✅ center properly
  left: '50%',
  transform: 'translate(-50%, -50%)',

  width: '90%',
  maxWidth: 400,

  maxHeight: '90vh',        // ✅ more height
  overflowY: 'auto',        // ✅ scroll inside

  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
};
const Checkout = () => {
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState("female");

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
};
  return (
    <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen'>
      
      <div className='space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9'>
        
        <div className='col-span-2 space-y-5'>
          
          <div className='flex justify-between items-center'>
            <h1 className="font-semibold">Select Address</h1>
            <Button onClick={handleOpen}>
              Add new Address
            </Button>
          </div>

          <div className='text-xs font-medium space-y-5'>
            <p>Saved Addresses</p>
            <div className='space-y-3'>
              {[1, 1, 1].map((item) => <AddressCard />)}
            </div>
          </div>
           <div className='border rounded-md'>
            <div className='px-5 py-3'>
                 <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Razor Pay" control={<Radio />} label="Razor Pay" />
      </RadioGroup>
            </div>
              <PricingCard />

              <div className='p-5'>
                <Button
                  fullWidth
                  variant='contained'
                  sx={{ py: "11px" }}
                >
                  Checkout
                </Button>
              </div>

            </div>

          
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <AdressForm/>
  </Box>
</Modal>
        </div>


      </div>

    </div>
   
  );
};

export default Checkout;