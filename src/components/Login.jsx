import React from 'react';

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="mb-4 flex items-center justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className='h-20 w-20' alt="" />
        </div>
        <p className="text-lg font-semibold">Sign into</p>
        <h1 className="text-3xl font-bold mb-4">SAP Learning</h1>
        <input type="password" placeholder="Password" className="block w-64 px-4 py-2 mb-4 rounded border border-gray-300" />
        <button className="block w-64 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
        <p className='text-blue-400 py-4'>Create an SAP universal ID</p>
      </div>
    </div>
  );
}

export default Login;
