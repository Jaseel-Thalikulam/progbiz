import Image from "next/image";
import React from "react";
import dribble from "@assets/dribble.svg";
import behance from "@assets/behance.svg";
import cssDesignAwards from "@assets/cssDesignAwards.svg";
import awwwards from "@assets/awwwards.svg";
function AsSeenInSection() {
  const asSeenAndLovedProfiles = [
    {
      alt: "dribble",
      src: dribble,
    },
    {
      alt: "awwwards",
      src: awwwards,
    },
    {
      alt: "behance",
      src: behance,
    },
    {
      alt: "cssDesignAwards",
      src: cssDesignAwards,
    },
    {
      alt: "dribble",
      src: dribble,
    },
  ];
  return (
    <div className="sm:mx-10 mx-5">
      <div className="flex justify-center mt-10">
        <p className="md:mb-10 font-thin text-white">As seen and loved on:</p>
      </div>

      <div className="relative flex justify-center items-center min-h-36 overflow-x-auto sm:px-10 md:mb-10">
        <div className="flex space-x-28">
          {asSeenAndLovedProfiles.map(({ src, alt }, index) => (
            <Image key={index} src={src} alt={alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AsSeenInSection;
