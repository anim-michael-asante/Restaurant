import Wallpaper from "./Asset/Wallpaper.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${Wallpaper})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl text-secondary">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-highlight drop-shadow-lg">
          Welcome to Bitescape 🍝
        </h1>
        <p className="text-lg md:text-xl font-body mb-8 drop-shadow-sm">
          Savor the handcrafted flavors of tradition. Culinary artistry, served
          fresh.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-highlight text-white px-6 py-3 rounded hover:bg-primary transition font-semibold">
            View Menu
          </button>
          <button className="border border-light text-light px-6 py-3 rounded hover:bg-light hover:text-dark transition font-semibold">
            Book a Table
          </button>
        </div>
      </div>
    </section>
  );
}
