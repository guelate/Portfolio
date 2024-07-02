"use client";

import { JSX, SVGProps, useState } from "react";
import Link from "next/link";

//TODO: change icon when I clique on Menu button 
export default function Component() {
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
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-muted-foreground"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
              onClick={closeMenu}
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-muted-foreground"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
              onClick={closeMenu}
              prefetch={false}
            >
              My Veepee experience
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-muted-foreground"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-2"
              onClick={closeMenu}
              prefetch={false}
            >
              Some projects
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-muted-foreground"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-3"
              onClick={closeMenu}
              prefetch={false}
            >
              Current Stack
            </Link>
            <div className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-muted-foreground">
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
