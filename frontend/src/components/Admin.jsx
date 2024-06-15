import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
function Admin() {
  const navigate = useNavigate(); // Correct usage of useNavigate
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Login failed");
      }
  
      const data = await response.json();
  
      if (data.isAdmin === true) {
        navigate("/");
      } else {
        console.log("You are not an admin");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <svg
            className="w-16 h-16 text-indigo-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11.414V14a1 1 0 11-2 0v-1.414l-2.293-2.293a1 1 0 111.414-1.414L10 11.586l2.293-2.293a1 1 0 111.414 1.414L11 13.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md flex flex-col gap-4 shadow-sm -space-y-px">
            <div className="flex items-center border-b border-gray-300">
              <svg
                className="w-5 h-5 text-gray-500 mx-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 2c-3.313 0-6 2.687-6 6 0 3.312 2.687 6 6 6s6-2.688 6-6c0-3.313-2.687-6-6-6zM6 4C2.69 4 0 6.69 0 10s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm12 12c-4.411 0-8 3.589-8 8h2c0-3.309 2.691-6 6-6s6 2.691 6 6h2c0-4.411-3.589-8-8-8zm-12 2c-2.206 0-4 1.794-4 4h2c0-1.105.895-2 2-2s2 .895 2 2h2c0-2.206-1.794-4-4-4z" />
              </svg>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-none placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="flex items-center border-b border-gray-300">
              <svg
                className="w-5 h-5 text-gray-500 mx-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 21.333c-5.148 0-9.333-4.185-9.333-9.333S6.852 2.667 12 2.667 21.333 6.852 21.333 12 17.148 21.333 12 21.333z" />
                <path d="M12 10.666c-.736 0-1.333.597-1.333 1.334 0 .736.597 1.333 1.333 1.333.736 0 1.334-.597 1.334-1.333 0-.737-.598-1.334-1.334-1.334zm0-6.666c-3.682 0-6.667 2.985-6.667 6.667h2c0-2.577 2.09-4.667 4.667-4.667 2.577 0 4.667 2.09 4.667 4.667h2c0-3.682-2.985-6.667-6.667-6.667z" />
              </svg>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-none placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <span className="flex justify-center items-center">
              <button type="submit">login</button>
              {/* <Button type="submit" color="primary" variant="ghost">
                Login
              </Button> */}
            </span>

            {/* <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
               
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
