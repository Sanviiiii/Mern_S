import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
function Signup() {
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div id="my_modal_3" className="border-[2px] shadow-md p-8 rounded-md relative w-[600px]">
          {/* Close Button */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
            ✕
          </Link>

          <h3 className="font-bold text-lg">Signup</h3>
          {/* Name */}
          <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder='Enter your fullname'
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
          </div>
          {/* Email */}
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder='Enter your email'
              className='w-80 border px-3 py-1 rounded-md outline-none'
            />
          </div>
          {/* Password */}
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder='Enter your password'
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
          </div>
          {/* Button */}
          <div className='flex justify-around mt-4'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>
              Signup
            </button>
            <p>
              Have Account?{" "}
              <button className='underline text-blue-500 cursor-pointer'  
                onClick={()=>document.getElementById("my_modal_3").showModal()}
                    >
                 
                Login
              </button>{" "}
          <Login />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
