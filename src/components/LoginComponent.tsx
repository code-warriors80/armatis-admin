'use client';

import { useState, useEffect } from "react";
// import apiClient from "@/api/api-client";

const LoginComponent = () => {
  const [loading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {

  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Admin
        </h2>

        {error && (
          <p className="text-sm text-center mb-4 text-red-600">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-[#EE2A55] focus:border-[#EE2A55] outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              maxLength={15}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-blue-400 hover:from-red-600 hover:to-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-[#EE2A55] transition-all duration-300"
          >
            {loading ? "Loading..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
