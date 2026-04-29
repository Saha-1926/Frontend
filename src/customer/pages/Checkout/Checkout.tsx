import { Button, Modal, Box } from '@mui/material'
import React from 'react'
import AddressCard from './AddressCard'
import AddressForm from './AddressForm';
import PricingCard from '../Cart/PricingCard';
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = React.useState("razorpay");


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen'>

        <div className='space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9'>

          {/* ✅ LEFT SIDE */}
          <div className='col-span-2 space-y-5'>

            <div className='flex justify-between items-center'>
              <h1 className='font-semibold'>Select Address</h1>

              <Button onClick={handleOpen}>
                Add new Address
              </Button>
            </div>

            <div className='text-xs font-medium space-y-5'>
              <p>Saved Addresses</p>
              <div>
                {
                  [1,1,1].map((item, index)=> (
                    <AddressCard key={index} />
                  ))
                }
              </div>

              <div className='py-4 px-5 rounded-md border'>
                <Button onClick={handleOpen}>
                  Add new Address
                </Button>
              </div>
            </div>

          </div>

          {/* ✅ RIGHT SIDE */}
          <div className='col-span-1 border rounded-md p-5'>
            <div>
              <PricingCard />
            </div>

            <div className='p-5'>
              <Button
                fullWidth
                variant='contained'
                sx={{ py: "11px" }}
              >
                PAY NOW
              </Button>
            </div>
            <div className='border rounded-md p-5 mt-4 space-y-3'>
  <h1 className='text-sm font-medium'>Choose Payment Gateway</h1>

  <div className='flex items-center gap-3'>
    <input
      type="radio"
      name="payment"
      value="razorpay"
      checked={paymentMethod === "razorpay"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    <span>Razorpay</span>
  </div>
</div>
          </div>

        </div>

      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>
    </>
  )
}

export default Checkout