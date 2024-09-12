import React from "react";
import Link from "next/link"; // Import the Link component from Next.js

function NavLinks() {
  const navLinks = [
    { label: "Home", path: "/" }, // Update the path to "/" for the home page
    { label: "Portfolio", path: "/portfolio" },
    { label: "Benefits", path: "/benefits" },
    { label: "Services", path: "/services" },
    { label: "Pricing", path: "/pricing" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    // <nav className="">
    <div className="flex space-x-6">
      {navLinks.map((link, index) => (
        <Link key={index} href={link.path} passHref className="">
          {link.label}
        </Link>
      ))}
    </div>
    // </nav>
  );
}

export default NavLinks;
