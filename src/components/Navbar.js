"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">MyWebsite</h1>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <div /> : <Menu size={24} />}
        </button>

        <div
          className={`fixed top-0 left-0 h-full w-full bg-blue-600 transform transition-transform duration-300 ease-in-out md:static md:h-auto md:w-auto md:bg-transparent ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-white md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-16 md:mt-0">
            <li className="text-white px-4 py-2 md:py-0 hover:bg-blue-700 md:hover:bg-transparent">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="text-white px-4 py-2 md:py-0 hover:bg-blue-700 md:hover:bg-transparent">
              <Link href="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
            </li>
            <li className="text-white px-4 py-2 md:py-0 hover:bg-blue-700 md:hover:bg-transparent">
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li className="text-white px-4 py-2 md:py-0 hover:bg-blue-700 md:hover:bg-transparent">
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
