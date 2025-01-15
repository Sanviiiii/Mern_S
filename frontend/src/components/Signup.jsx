import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
function Signup() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen  bg-gray-100">
        <div id="my_modal_3" className="w-[600px] px-4 ">
          <div className="modal-box border-[2px] shadow-md p-9 rounded-md bg-white">
            <form method="dialog">
              {/* Close button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            </form>
            {/* Heading */}
            <h3 className="font-bold text-lg text-center">Signup</h3>
            {/*Name */}
            <div className="mt-4 space-y-2">
              <label className="block">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border px-3 py-2 rounded-md outline-none"
              />
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <label className="block">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border px-3 py-2 rounded-md outline-none"
              />
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border px-3 py-2 rounded-md outline-none"
              />
            </div>
            {/* Button and Signup link */}
            <div className='flex justify-around mt-4'>
                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'> Signup</button>
                    <p>Have Account? {" "} 
                   <button className='underline text-blue-500 cursor-pointer'
                             onClick={()=>document.getElementById("my_modal_3").showModal()} >

                   Login
                   </button>  {" "}
                   <Login />
                    </p> 
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
