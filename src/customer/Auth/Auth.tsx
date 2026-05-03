import React, { useState } from 'react'
import CustomerLoginForm from './CustomerLoginForm';
import CustomerRegisterForm from './CustomerRegisterForm';
import { Button } from '@mui/material';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='flex justify-center h-[90vh] items-center'>
      <div className="max-w-md h-[85vh] rounded-md shadow-lg">
        
       
        {isLogin ? <CustomerLoginForm /> : <CustomerRegisterForm />}

        <div className='flex items-center gap-1 justify-center'>
          <p>{isLogin && "Don't "} have Account</p>
          <Button size='small' onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create Account" : "login"}
          </Button>
        </div>

      </div>
    </div>
  )
}

export default Auth