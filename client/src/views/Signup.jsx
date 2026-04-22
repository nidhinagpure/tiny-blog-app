import React from 'react'
import { Link } from 'react-router';

function Signup() {
  return (
    <div>
      <h1 className="text-center text-2xl mt-4 font-bold">SignUp</h1>
      <div className='max-w-[400px] mx-auto border-1 border-gray-300 py-4 px-4 rounded-md mt-6'>
        <input 
            type="name" 
            placeholder='Enter your name'
            className='border p-2 rounder w-full mb-4 rounded-sm '/>
        <input 
            type="email" 
            placeholder='Enter Your Email'
            className='border p-2 rounder w-full mb-4 rounded-sm '/>
        <input 
            type="password" 
            placeholder='Confirm your password'
            className='border p-2 rounder w-full mb-4 rounded-sm '
            />
        <button className='bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600'>Signup</button>
        <p className='mt-2'>Already have an account?{""}
            <Link to="/login" className='text-blue-500 underline'className="text-blue-500 pl-1 underline">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
