import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    // Simulate login (replace this with real API call when ready)
    setTimeout(() => {
      console.log("Simulated login with:", { email, password });

      if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
        // Set simulated login flag
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify({ email }));

        // Optionally redirect or refresh UI
      } else {
        setErrorMsg("Invalid email or password.");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT PANEL – Branding */}
      <div className="md:w-1/2 bg-gradient-to-br from-highlight to-primary text-white flex flex-col justify-center items-center p-10 relative overflow-hidden">
        <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-10 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-2xl bottom-0 -right-24" />
        <div className="z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold">🍝 Bitescape</h1>
          <p className="text-lg sm:text-xl font-light max-w-sm">
            Welcome back to flavor — sign in and continue your food adventure.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL – Sign In Form */}
      <div className="md:w-1/2 bg-background flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-highlight">
              Sign In
            </h2>
            <p className="text-sm text-gray-500 mt-1">Access your account</p>
          </div>

          <form onSubmit={handleSignin} className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight text-sm"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight text-sm"
              />
            </div>

            {errorMsg && (
              <p className="text-sm text-red-600 text-center -mt-2">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2.5 rounded-lg font-semibold transition-all ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-highlight hover:bg-primary text-white"
              }`}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-highlight font-medium hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
