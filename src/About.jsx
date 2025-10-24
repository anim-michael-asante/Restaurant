import { Sparkles, Leaf, Timer } from "lucide-react";
import aboutImage from "./Asset/About.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white text-dark py-16 px-4 sm:px-6 lg:px-12"
    >
      {/* Premium Marquee */}
      <div className="relative overflow-hidden w-full mb-16">
        <div className="premium-marquee">
          <ul className="flex animate-premium-marquee text-gray-600 text-sm sm:text-base font-medium uppercase tracking-wider gap-12">
            <li>Fast Delivery 🚀</li>
            <li>Fresh Ingredients 🥬</li>
            <li>Homemade Desserts 🍰</li>
            <li>Expert Chefs 👨‍🍳</li>
            <li>Locally Sourced 🌍</li>
            <li>Fast Delivery 🚀</li>
            <li>Fresh Ingredients 🥬</li>
            <li>Homemade Desserts 🍰</li>
          </ul>
        </div>
      </div>

      {/* Main About Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src={aboutImage}
            alt="About us"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-highlight">
            About Bitescape
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At Bitescape, we blend culinary passion with innovation to bring you
            unforgettable dining experiences. Whether you're here for a hearty
            meal or a quick bite, our team ensures every plate is served fresh,
            fast, and flavorful.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="flex items-center gap-2">
              <Sparkles className="text-highlight" />
              <span className="text-sm sm:text-base font-medium">
                Unique Recipes
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="text-highlight" />
              <span className="text-sm sm:text-base font-medium">
                Fresh Ingredients
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="text-highlight" />
              <span className="text-sm sm:text-base font-medium">
                Fast Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
