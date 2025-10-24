import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-background text-dark pt-16 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-highlight mb-6">
          Contact Us
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-10">
          We'd love to hear from you! Whether it's feedback, questions, or just
          a hello — reach out anytime.
        </p>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left mb-16">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <Mail className="text-highlight" />
            <h4 className="font-semibold text-base">Email</h4>
            <p className="text-gray-600 text-sm">hello@bitescape.com</p>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3">
            <Phone className="text-highlight" />
            <h4 className="font-semibold text-base">Phone</h4>
            <p className="text-gray-600 text-sm">+233 55 123 4567</p>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3">
            <MapPin className="text-highlight" />
            <h4 className="font-semibold text-base">Location</h4>
            <p className="text-gray-600 text-sm">UMaT Campus, Tarkwa, Ghana</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1f2937] text-gray-300 py-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-4">
          {/* Copyright */}
          <div className="text-sm text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Group 5</span>. All
            rights reserved.
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-highlight transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-highlight transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-highlight transition"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
