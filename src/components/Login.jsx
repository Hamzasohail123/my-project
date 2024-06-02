import React from "react";
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="mb-4 flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            className="h-20 w-20"
            alt=""
          />
        </div>
        <p className="text-lg font-semibold">Sign into</p>
        <h1 className="text-3xl font-bold mb-4">SAP Learning</h1>
        {/* <input type="password" placeholder="Password" className="block w-64 px-4 py-2 mb-4 rounded border border-gray-300" /> */}
        <label
          htmlFor="Username"
          className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="Username"
            className="peer  p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Username"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Username
          </span>
        </label>
        <button onClick={handleClick} className="block w-64 px-4 py-2 mt-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </button>
        <p className="text-blue-400 py-4">Create an SAP universal ID</p>
      </div>
    </div>
  );
}

export default Login;
