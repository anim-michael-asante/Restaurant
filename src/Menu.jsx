import { useState, useEffect } from "react";
import {
  UtensilsCrossed,
  GlassWater,
  CakeSlice,
  Soup,
  Sparkle,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

// Imported images for Food
import GrilledChicken from "./images/grilled-chicken.jpg";
import JollofBeef from "./images/jollof-beef.jpg";
import Fufu from "./images/Fufu.webp";
import FriedRice from "./images/FriedRice.jpeg";

// Imported images for Drinks
import Smoothie from "./images/Smoothie.jpeg";
import HerbalTea from "./images/Herbal Tea.jpeg";
import SparklingMocktail from "./images/Sparkling Mocktail.jpeg";
import ColdBrewCoffee from "./images/Cold Brew Coffee.webp";

// Imported images for Desserts
import ChocolateCake from "./images/chocolate-cake.jpg";
import Cheesecake from "./images/CheeseCake.jpeg";
import FruitTart from "./images/Fruit Tart.avif";
import IceCreamSundae from "./images/Sundae.jpg";

// Imported images for Pizzas
import Margherita from "./images/Margherita.jpeg";
import Pepperoni from "./images/PepperoniPizza.jpeg";
import BBQChicken from "./images/BBQChickenPizza.webp";
import VeggieDelight from "./images/VeggieDelightPizza.jpg";

export default function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Food");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category && categories.some((cat) => cat.label === category)) {
      setActivePage(category);
    }
  }, [location.search]);

  const handleCategoryClick = (label) => {
    setActivePage(label);
    navigate(`/menu?category=${label}`);
  };

  const categories = [
    { label: "Food", icon: <UtensilsCrossed size={16} /> },
    { label: "Drinks", icon: <GlassWater size={16} /> },
    { label: "Desserts", icon: <CakeSlice size={16} /> },
    { label: "Pizzas", icon: <Soup size={16} /> },
  ];

  const foodItems = [
    { name: "Grilled Chicken", price: "₵35", img: GrilledChicken, isNew: true },
    { name: "Jollof Rice & Beef", price: "₵30", img: JollofBeef, isNew: true },
    { name: "Fufu & Light Soup", price: "₵28", img: Fufu },
    { name: "Fried Rice Combo", price: "₵32", img: FriedRice },
  ];

  const drinksItems = [
    { name: "Smoothie", price: "₵12", img: Smoothie, isNew: true },
    { name: "Herbal Tea", price: "₵8", img: HerbalTea },
    { name: "Sparkling Mocktail", price: "₵15", img: SparklingMocktail },
    { name: "Cold Brew Coffee", price: "₵10", img: ColdBrewCoffee },
  ];

  const dessertItems = [
    { name: "Chocolate Cake", price: "₵18", img: ChocolateCake, isNew: true },
    { name: "Cheesecake", price: "₵20", img: Cheesecake, isNew: true },
    { name: "Fruit Tart", price: "₵16", img: FruitTart },
    { name: "Ice Cream Sundae", price: "₵14", img: IceCreamSundae },
  ];

  const pizzaItems = [
    { name: "Margherita Pizza", price: "₵40", img: Margherita, isNew: true },
    { name: "Pepperoni Pizza", price: "₵45", img: Pepperoni },
    { name: "BBQ Chicken Pizza", price: "₵48", img: BBQChicken },
    { name: "Veggie Delight Pizza", price: "₵42", img: VeggieDelight },
  ];

  const renderItemCard = (item) => (
    <div
      key={item.name}
      className="bg-white rounded-xl shadow-md overflow-hidden text-left relative transition-transform duration-300 hover:scale-[1.02] w-full max-w-[90%] sm:max-w-full mx-auto"
    >
      {item.isNew && (
        <div
          className="absolute top-3 left-3 flex items-center gap-1 bg-gradient-to-r from-pink-500 via-red-600 to-yellow-400 text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg animate-pulse cursor-default select-none transition-transform transform hover:scale-110 z-50"
          title="New Item"
        >
          <Sparkle size={14} strokeWidth={2} className="animate-spin-slow" />
          NEW
        </div>
      )}
      {item.img && (
        <img
          src={item.img}
          alt={item.name}
          className="h-52 sm:h-56 w-full object-cover"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
          }}
        />
      )}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-highlight">{item.name}</h3>
        <p className="text-gray-700">{item.price}</p>
        <button className="mt-2 self-start px-4 py-2 text-sm bg-highlight text-white rounded-full hover:bg-opacity-90 transition">
          Order Now
        </button>
      </div>
    </div>
  );

  const renderItems = (items) => (
    items.length === 0 ? (
      <p className="text-gray-500">No items available right now.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
        {items.map(renderItemCard)}
      </div>
    )
  );

  return (
    <section id="menu" className="bg-background text-dark py-12 px-4 sm:px-6 lg:px-12 min-h-[33vh] md:min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-highlight mb-4 sm:mb-6">
          Our Signature Menu
        </h2>
        <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg">
          Discover our handpicked selection of gourmet dishes and refreshing beverages crafted with love.
        </p>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-2 rounded-xl shadow-md border border-gray-300 bg-white p-3 sm:p-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => handleCategoryClick(cat.label)}
              className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                activePage === cat.label
                  ? "bg-highlight text-white"
                  : "text-dark hover:bg-gray-100"
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        <div className="text-base sm:text-lg text-gray-700 px-2 sm:px-0">
          {activePage === "Food" && renderItems(foodItems)}
          {activePage === "Drinks" && renderItems(drinksItems)}
          {activePage === "Desserts" && renderItems(dessertItems)}
          {activePage === "Pizzas" && renderItems(pizzaItems)}
        </div>
      </div>
    </section>
  );
}
