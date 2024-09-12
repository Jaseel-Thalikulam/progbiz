import Image, { StaticImageData } from "next/image";
import React from "react";
interface PortfolioCardProps {
  imgSrc: StaticImageData;
  title: string;
}
function PortfolioCard({ imgSrc, title }: PortfolioCardProps) {
  return (
    <div className=" md:w-[25rem] md:h-[25rem] sm:w-[18rem] sm:h-[18rem] w-[15rem] h-[15rem] rounded-3xl relative overflow-hidden ">
      <Image
        src={imgSrc}
        alt="portfolioImg"
        className="absolute inset-0 object-cover z-10"
      />
      <h1 className="absolute md:bottom-10 md:left-7 sm:bottom-7 sm:left-5 bottom-5 left-3 text-white z-20 md:max-w-80 sm:max-w-60 max-w-56 ">
        {title}
      </h1>
    </div>
  );
}

export default PortfolioCard;
