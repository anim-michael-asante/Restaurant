// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Menu from "./Menu.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import Terms from "./pages/T&C.jsx";
import Profile from "./pages/Profile.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Global Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/terms" element={<Terms />} />

            {/* Protected Route */}
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
