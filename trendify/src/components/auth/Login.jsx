import React from "react";

const Login = ({ openSignUp }) => {
  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
        Login
      </h2>
      <form action="" className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="remember" className="inline-flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-red-600"
            />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-red-600 hover:underline text-sm">
            Forgot Password
          </a>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center mt-3">
        <span className="text-gray-700">Don't have an account?</span>
        <button
          className="text-red-600 hover:underline ml-2"
          onClick={openSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
