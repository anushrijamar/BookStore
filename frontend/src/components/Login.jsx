import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  // Close modal function
  const closeModal = () => {
    document.getElementById('my_modal_3').close();
  };

  return (
    <div>
      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <label>Email</label><br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border-rounded outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500">Email is required</p>}
            </div>

            <div className="mt-4 space-y-2">
              <label>Password</label><br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border-rounded outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <p className="text-red-500">Password is required</p>}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="signup" className="underline text-blue-500 cursor-pointer">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
