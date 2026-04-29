import React from 'react'
import { Radio } from '@mui/material'

const AddressCard = () => {

  const handleChange = (event: any) => {
    console.log(event.target.checked)
  }

  return (
    <div className='flex items-start border rounded p-5'>
      <div>
        <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        />
      </div>

      <div className='space-y-3 pt-3 pl-2'>
        <h1>Zosh</h1>

        <p className='w-[320px]'>
          Ambavadi choke,Banglor,Banglor,karnataka - 530068
        </p>

        <p>
          <strong>Mobile :</strong> 9023379136
        </p>
      </div>
    </div>
  )
}

export default AddressCard