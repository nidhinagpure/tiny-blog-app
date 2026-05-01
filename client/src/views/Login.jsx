import React, { useState } from 'react'
import { Link } from 'react-router';
import axios from 'axios';

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const loginUser = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/login`,
      user
    );
    alert(response.data.message); // 👈 show success
  } catch (error) {
    alert(error.response?.data?.message || "Login failed");
  }
};

  return (
    <div>
      <h1 className="text-center text-2xl mt-4 font-bold">Login</h1>
      <div className='max-w-[400px] mx-auto border-1 border-gray-300 py-4 px-4 rounded-md mt-6'>
        <input 
            type="email" 
            placeholder='Enter Your Email'
            value={user.email}
            onChange={(e)=> setUser({...user, email: e.target.value})}
            className='border p-2 rounded w-full mb-4 rounded-sm '/>
        <input 
            type="password" 
            placeholder='Enter your password'
            value={user.password}
            onChange={(e)=> setUser({...user, password: e.target.value})}
            className='border p-2 rounded w-full mb-4 rounded-sm '
            />
        <button className='bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-600' onClick={loginUser}>Login</button>
        <p className='mt-2'>Don't have an account?{""}
            <Link to="/signup" className='text-blue-500 underline'>Signup</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
