import Image, { StaticImageData } from "next/image";
import React from "react";


interface BenefitCardProps {
  imgSrc: StaticImageData;
  title: string;
  description: string;
}
function BenefitCard({ imgSrc, title, description }: BenefitCardProps) {
  return (
    <div className="md:w-[25rem] md:h-[25rem] sm:w-[18rem] sm:h-[18rem] w-[15rem] h-[15rem] rounded-3xl relative overflow-hidden md:gap-5 gap-2 flex flex-col  ">
      <Image src={imgSrc} alt="benefitsImg" />
      <div>
        <h1 className="text-white md:text-lg text-sm">{title}</h1>
        <p className="text-customGreyText md:text-base text-xs">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BenefitCard;
