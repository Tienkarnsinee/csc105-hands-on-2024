import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-red-600 text-2xl font-bold">404 - Page Not Found</h1>
        <p className="text-gray-700 mt-2">Oops! The page you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
