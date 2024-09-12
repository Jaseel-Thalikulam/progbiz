import React from 'react'
import { Badge } from "@ui/badge";
import { FaStar } from 'react-icons/fa';
import { Button } from "@ui/button";
import { RxCaretRight } from 'react-icons/rx';

function HeroSection() {
  const rating = 5.0;
  const reviewCount = 11;
  return (
    <div className="  text-center flex flex-col items-center justify-center md:pt-10 md:py-10 py-5 relative md:top-5">
      <div className="flex flex-col items-center justify-center relative z-50">
        {/* Rating */}
        <Badge
          variant="outline"
          className="rounded-3xl flex items-center space-x-1 font-thin gap-1 border-gray-700 h-6"
        >
          <span className="text-white">{rating.toFixed(1)}</span>
          <div className="flex items-center text-yellow-500">
            {/* Render 5 stars based on the rating */}
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="text-white">{reviewCount} reviews</span>
        </Badge>

        {/* Hero Title */}
        <h1 className="text-white sm:text-3xl text-xl md:text-6xl mx-16 sm:m-32 md:mx-64 md:leading-tight mt-2 sm:mt-5 sm:mb-5 m-0">
          Partner with a Full-Service Design Team for All Your Creative Needs
        </h1>

        {/* Hero Sub-title */}
        <p className="my-5 text-xs text-white">
          Skip the hassle of finding the perfect full-time designer or studio
        </p>
        <Button className="bg-customYellow rounded-full hover:bg-customYellow text-black">
          Connect - us <RxCaretRight />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection