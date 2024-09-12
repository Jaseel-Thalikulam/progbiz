import React from "react";
import { FaStar } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import defaultProfileImg from "@assets/profiledefault.png";
import clutch from "@assets/clutch.svg";
import upwork from "@assets/upwork.svg";
interface TestimonialsCardProps {
  testimonial: string;
  title: string;
  name: string;
  platform: string;
  profileImg: StaticImageData|null;
}
function TestimonialsCard({
  profileImg ,
  testimonial,
  title,
  name,
  platform,
}: TestimonialsCardProps) {

  return (
    <div className="md:w-[20rem] sm:w-[18rem] w-[16rem] bg-customGrey border border-cardBorder rounded-2xl md:p-7 sm:p-5 p-3 flex flex-col gap-5 z-0">
      <div className="flex  gap-3">
        <div className="w-12">
          <Image
            src={profileImg ? profileImg : defaultProfileImg}
            alt="profileImg"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h5>{name}</h5>

          <p className="text-customGreyText text-xs">{title}</p>
        </div>
      </div>

      <div>
        <p className="text-customGreyText text-xs">{testimonial}</p>
      </div>
      <div className="flex justify-start">
        <div className="flex gap-3">
          <Image src={platform == "upwork" ? upwork : clutch} alt="platform" />
          <p className="text-customGreyText text-sm">5.0</p>
          <div className="flex items-center text-yellow-500">
            {/* Render 5 stars based on the rating */}
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-3" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
