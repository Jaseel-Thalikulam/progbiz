import Image from 'next/image';
import React from 'react'
import leaf from "@assets/leaf_illustration.svg";

function FounderSection() {
  return (
    <div className="flex flex-wrap flex-col min-h-[128px] gap-5 md:px-10 sm:px-1 px-1 sm: ">
      <div className="flex-1 flex gap-5 flex-wrap">
        <div className="flex-[4] w-full h-full bg-customGrey min-h-80 rounded-3xl border border-cardBorder min-w-60 sm:min-w-60"></div>
        <div className="flex-[6] w-full h-full bg-customGrey min-h-80 rounded-3xl flex items-center text-center md:px-16 sm:px-10 px-5  border border-cardBorder md:gap-3 sm:min-w-72  min-w-60">
          <Image src={leaf} alt="illustration" />
          <div className="flex flex-col items-center gap-5">
            <p className="text-xs md:text-sm text-white">
              An absolute professional who consistently delivers exceptional
              work, even under the most demanding deadlines. I appreciated the
              insightful feedback and innovative ideas introduced throughout the
              design process, which greatly enhanced the final product..
            </p>
            <div className="flex md:gap-5  sm:gap-3 gap-2 items-center text-center flex-wrap  font-light text-customGreyText sm:text-sm text-xs">
              <p>Murshid Pulkkada</p>
              <p>Founder @Progbiz</p>
            </div>
          </div>
          <Image
            src={leaf}
            alt="illustration"
            className="transform -scale-x-100"
          />
        </div>
      </div>
      <div className="flex-1 flex bg-customGrey min-h-80 rounded-3xl border border-cardBorder p-10 flex-wrap gap-10">
        <div className="md:flex-1 ">
          <h1 className="text-3xl md:max-w-64 sm:max-w-48 font-thin  text-white">
            Your dedicated in-house design team
          </h1>
        </div>
        <div className="md:flex-1   flex flex-col justify-center gap-5">
          <div className="  flex-1">
            <p className="text-sm text-white">
              We are a global collective of diverse designers and developers,
              partnering with brands of all scales. What distinguishes us is our
              dedication to crafting memorable, user-friendly, and captivating
              experiences — it&apos;s what we excel at. The projects we deliver
              combine creative vision with practical execution, resulting in
              solutions that are both distinctive and impactful.
            </p>
          </div>
          <div className="border-l-2 border-cardBorder flex-1 p-5 flex justify-between">
            <div className="flex flex-col ">
              <p className="text-white">Murshid</p>
              <p className="text-customGreyText">Founder and CEO </p>
            </div>
            <div>
              <Image
                src={leaf}
                alt="illustration"
                className="transform -scale-x-100 rotate-[20deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderSection