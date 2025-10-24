import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userData = localStorage.getItem("user");

    if (!isLoggedIn || !userData) {
      navigate("/signin");
    } else {
      try {
        const parsedUser = JSON.parse(userData);
        if (parsedUser && parsedUser.name && parsedUser.email) {
          setUser(parsedUser);
        } else {
          throw new Error("Invalid user data");
        }
      } catch (err) {
        console.error("Error parsing user data:", err);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        navigate("/signin");
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear(); // clears all keys for safety
    navigate("/signin");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h1 className="text-3xl font-extrabold text-highlight text-center mb-6">
          👤 Profile Overview
        </h1>

        <div className="space-y-4 text-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">Name:</span>
            <span>{user.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Email:</span>
            <span>{user.email}</span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 w-full py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
