import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span><br/>
        <input
         type="email" 
         placeholder='Enter your email' 
         className='w-80 border px-3 py-1 rounded-md outline-none' />
    </div>
    {/* password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type="password" 
        placeholder='Enter your password'
        className='w-80  px-3 py-1 border rounded-md outline-none' />
    </div>
    {/* button */}
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'> Login</button>
        <p> Not Registered? {" "} 
       <Link to="/signup" >    <span className='underline text-blue-500 cursor-pointer'>Signup</span></Link> {" "}
        </p> 
    </div>
  </div>
</dialog>
    </div>
  );
}

export default Login;
