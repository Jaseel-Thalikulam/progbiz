import Image from 'next/image';
import React from 'react'
import Logo from "@assets/logo.svg";
import { Button } from "@ui/button";
import NavLinks from "@ui/navLinks";
import nav from "@assets/hero-bg.svg";
import { RxCaretRight } from 'react-icons/rx';
function NavBar() {
  return (
    <div
      className="w-full md:h-72 sm:h-40 h-28 bg-cover bg-center pt-9 relative"
      style={{ backgroundImage: `url(${nav.src})` }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
        aria-hidden="true"
      />

      <div className="flex flex-row justify-between items-center mb-10 relative z-10">
        {/* Logo Section (2/10) */}
        <div className="flex-2 flex justify-center md:pl-10 sm:pl-5 pl-2">
          <Image src={Logo} alt="Logo" className="left-16 top-10" />
        </div>

        {/* Navbar Section (6/10) */}
        <div className="flex-4 hidden md:block">
          <NavLinks />
        </div>

        {/* Button Section (2/10) */}
        <div className="flex-2 sm:pr-2 pr-2 ">
          <Button className="border rounded-full border-customYellow font-medium">
            Book a demo <RxCaretRight className="text-customYellow" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar