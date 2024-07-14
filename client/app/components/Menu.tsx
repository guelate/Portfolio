"use client";

import { JSX, SVGProps, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button
        className="p-2 rounded-md hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <Plus className="rotate-45" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <Link
              href="#Home"
              className="block px-4 py-2 text-sm rounded .rounded-lg hover:bg-gray-200"
            >
              Home
            </Link>
            <Link
              href="#MyVeepeeExperience"
              className="block px-4 py-2 text-sm rounded .rounded-lg hover:bg-gray-200"
              role="menuitem"
            >
              My Veepee experience
            </Link>
            <Link
              href="#SomeProject"
              className="block px-4 py-2 text-sm rounded .rounded-lg hover:bg-gray-200"
              role="menuitem"
            >
              Some projects
            </Link>
            <Link
              href="#CurrentStack"
              className="block px-4 py-2 text-sm rounded .rounded-lg hover:bg-gray-200"
            >
              Current Stack
            </Link>
            <div className="block px-4 py-2 text-sm rounded .rounded-lg hover:bg-gray-200">
              <p>CV</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
