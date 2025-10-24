import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const location = useLocation();

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);
    const interval = setInterval(checkLoginStatus, 500);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
      clearInterval(interval);
    };
  }, []);

  // Auto-close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-secondary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            🍝 Bitescape
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`cursor-pointer text-dark hover:text-primary transition ${
                  location.pathname === link.path
                    ? "text-primary font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to={isLoggedIn ? "/profile" : "/signup"}
              className="bg-highlight text-white px-4 py-2 rounded hover:bg-primary transition cursor-pointer"
            >
              {isLoggedIn ? "View Profile" : "Create Account"}
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-dark"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-secondary px-4 pb-4 shadow space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-dark hover:text-primary cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={isLoggedIn ? "/profile" : "/signup"}
              className="block bg-highlight text-white py-2 px-4 rounded text-center hover:bg-primary transition cursor-pointer"
            >
              {isLoggedIn ? "View Profile" : "Create Account"}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
