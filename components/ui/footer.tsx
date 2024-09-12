import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import footer from "@assets/footerbg1.svg";
import { RxCaretRight } from "react-icons/rx";
import be from "@assets/be.svg";
import linkedin from "@assets/linkedinLogo.svg";
import socialMedia1 from "@assets/socialmedia1.svg";
import socialMedia2 from "@assets/socialmedia22.svg";
import instagram from "@assets/instagram.svg";
function Footer() {
  const socialMediaLogos = [
    {
      label: "LinkedIn",
      logo: linkedin,
    },
    {
      label: "Instagram",
      logo: instagram,
    },
    {
      label: "Behance",
      logo: be,
    },
    {
      label: "Social Media 1",
      logo: socialMedia1,
    },
    {
      label: "Social Media 2",
      logo: socialMedia2,
    },
  ];
  return (
    <div className="flex flex-col md:gap-10 sm:gap-10 gap-10 md:pt-15 sm:pt-10">
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-5xl md:max-w-[28rem] sm:max-w-[22rem] max-w-[18rem] font-thin  text-center text-white">
          Need more clarity? Get in touch!
        </h1>
      </div>
      <div
        className="w-full md:h-72 sm:h-40 h-28 bg-cover bg-center pt-9 relative"
        style={{ backgroundImage: `url(${footer.src})` }}
      >
        {/* Button at the top center */}
        <div className="absolute top-0 left-0 right-0 flex justify-center mt-3">
          <Button className="bg-customYellow rounded-full hover:bg-customYellow text-black">
            Book a demo <RxCaretRight />
          </Button>
        </div>

        {/* Footer content with copyright and social media icons */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-5">
          {/* Copyright at bottom left */}
          <p className="text-customGreyText font-light text-xs">
            © 2024 All Rights Reserved
          </p>

          {/* Social media icons at bottom right */}
          <div className="flex flex-wrap md:space-x-4 space-x-2 items-center justify-end">
            {socialMediaLogos.map(({ label, logo }, index) => (
              <Image
                src={logo}
                alt={label}
                key={index}
                className="w-6 h-6 md:w-8 md:h-8" // Adjust size for small and medium screens
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
