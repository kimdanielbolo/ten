
// App.js

import React from 'react';
import './index.css'; // Import Tailwind CSS file

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      
      {/* Top Navigation Bar */}
      <div className="bg-gray-500 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">Your App Name</h1>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => {
              // Add your logout logic here
              alert('Logout clicked!');
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Side Bar */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-1/5 bg-zinc-400 p-4 rounded-lg">
        <nav>
         <a href="/" className="text-2xl font-bold">Dashboard</a><br></br><br></br>
           <a href="/insert" className="text-2xl font-bold">Insert Student Applicant</a>
             </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          <h1 className=" text-6xl font-bold underline">Hello world!</h1>
          {/* Add your main content here */}
        </div>
      </div>
    </div>
  );
}