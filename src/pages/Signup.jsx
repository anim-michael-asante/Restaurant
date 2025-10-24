import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

export default function Signup() {
  const [agreed, setAgreed] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;

    setLoading(true);
    setError("");

    // This is where you'd normally send data to a backend
    console.log("Form submitted:", {
      fullName,
      email,
      password,
    });

    setTimeout(() => {
      setLoading(false);
      alert("Signup simulated. Backend not connected.");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Branding Panel */}
      <div className="md:w-1/2 bg-gradient-to-br from-highlight to-primary text-white flex flex-col justify-center items-center p-10 relative overflow-hidden">
        <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-10 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-2xl bottom-0 -right-24" />
        <div className="z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold">🍝 Bitescape</h1>
          <p className="text-lg sm:text-xl font-light max-w-sm">
            Flavor meets experience — join our food journey and enjoy
            hand-crafted meals made with love.
          </p>
        </div>
      </div>

      {/* Signup Form */}
      <div className="md:w-1/2 bg-background flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-highlight">
              Create Account
            </h2>
            <p className="text-sm text-gray-500 mt-1">Join us in seconds</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight text-sm"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight text-sm"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight text-sm"
              />
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                id="agree"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="accent-highlight"
              />
              <label htmlFor="agree" className="text-gray-600">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-highlight underline hover:text-primary"
                >
                  Terms & Conditions
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreed || loading}
              className={`w-full py-2.5 rounded-lg font-semibold transition-all ${
                !agreed || loading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-highlight hover:bg-primary text-white"
              }`}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-highlight underline hover:text-primary font-medium"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
