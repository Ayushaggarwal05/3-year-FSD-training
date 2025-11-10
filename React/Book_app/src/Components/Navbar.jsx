import { useState } from "react";
import { BookOpen, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="bg-indigo-700 text-white shadow-md sticky top-0 z-50">
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50 pt-5 pb-5">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          <h1 className="text-xl font-semibold tracking-wide">Book Haven</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="#" className="hover:text-yellow-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center space-x-5">
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-yellow-300 transition" />
          <button className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-800 px-6 pb-4 space-y-3 font-medium animate-fadeIn">
          <a href="#" className="block hover:text-yellow-300">
            Home
          </a>
          <a href="#" className="block hover:text-yellow-300">
            Shop
          </a>
          <a href="#" className="block hover:text-yellow-300">
            Categories
          </a>
          <a href="#" className="block hover:text-yellow-300">
            About
          </a>
          <a href="#" className="block hover:text-yellow-300">
            Contact
          </a>

          <div className="flex items-center justify-between mt-4">
            <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-yellow-300" />
            <button className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
