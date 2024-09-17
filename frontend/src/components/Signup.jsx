import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  return (
    <>
      <div className="container mx-auto mt-10 justify-center ">
        <h3 className="font-bold text-lg mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label>Name</label><br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 border border-gray-300 rounded outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </div>

            {/* Email Field */}
            <div>
              <label>Email</label><br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border border-gray-300 rounded outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500">Email is required</p>}
            </div>

            {/* Password Field */}
            <div>
              <label>Password</label><br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border border-gray-300 rounded outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <p className="text-red-500">Password is required</p>}
            </div>

            {/* Submit Button and Link */}
            <div className="flex justify-between items-center mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>Have an account? <Link to="/" className="underline text-blue-500 cursor-pointer">Login</Link></p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
