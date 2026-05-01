import React, { useState } from 'react'
import { Link } from 'react-router';
import axios from 'axios';

function Signup() {
 
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:""
    })

   const signupUser = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/signup`,
      user
    );
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data); // 👈 THIS LINE IS IMPORTANT
  }
};
  return (
    <div>
      <h1 className="text-center text-2xl mt-4 font-bold">SignUp</h1>
      <div className='max-w-[400px] mx-auto border-1 border-gray-300 py-4 px-4 rounded-md mt-6'>
        <input 
            type="text" 
            placeholder='Enter your name'
            className='border p-2 rounder w-full mb-4 rounded-sm'
            value={user.name} 
            onChange={(e)=>{
                setUser({...user, name: e.target.value})
            }}
            />
        <input 
            type="email" 
            placeholder='Enter Your Email'
            className='border p-2 rounder w-full mb-4 rounded-sm'
            value={user.email}
            onChange={(e)=>{
                setUser({...user, email: e.target.value})
            }}
            />
        <input 
            type="password" 
            placeholder='Confirm your password'
            className='border p-2 rounder w-full mb-4 rounded-sm'
            value={user.password}
            onChange={(e)=>{
                setUser({...user, password: e.target.value})
            }}
            />
        <button 
           className='bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600'
           type="button"
           onClick={signupUser}>
           Signup
        </button>
        <p className='mt-2'>Already have an account?{""}
            <Link to ="/login" className='text-blue-500 underline'>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
