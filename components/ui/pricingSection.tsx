import React from 'react'
import { FaCheck } from "react-icons/fa6";
import CustomBadge from "@ui/customBadge";
import PricingCard from "@ui/pricingCard";
import { Button } from "@ui/button";

function PricingSection() {
     const pricingCards = [
       {
         plan: "STANDARD",
         price: "$2,150",
         request: "One request at a time",
         isFaster: false,
       },
       {
         plan: "PRO",
         price: "$3,150",
         request: "Double the requests",
         isFaster: true,
       },
     ];
  return (
    <>
      <CustomBadge text="Pricing" />
      <div className="sm:mx-16 mx-5 md:mb-10 sm:mb-5 mb-3">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-4xl md:max-w-[38rem] sm:max-w-[25rem] max-w-[18rem] font-thin  text-center text-white">
            Choose the relevant plan to build, grow and fasten your team
          </h1>
        </div>

        {/* Pricing Cards */}

        <div className="flex flex-wrap justify-center items-center md:gap-5 sm:gap-3 gap-1">
          {pricingCards.map((card, index) => (
            <PricingCard card={card} key={index}/>
          ))}

          <div className="flex flex-col md:gap-5 sm:gap-3 gap-1 md:min-h-[36rem] md:w-[22rem]">
            <div className="bg-customGrey border border-cardBorder rounded-2xl flex-[6]">
              <div className="md:p-8 sm:p-5 p-3 flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <p className="text-customGreyText md:text-sm text-xs">
                    PROJECT-BASED
                  </p>
                  <p className="font-light text-white max-w-64">
                    For a custom fee delivered in milestones. Ideal for specific
                    goals. Custom project scope.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-customGreyText text-xs">Whats included:</p>
                  <ul className="list-none p-0">
                    {["Fixed scope of work", "Delivered in milestone"].map(
                      (feature, index) => (
                        <li
                          key={index}
                          className="flex items-center mb-2 font-light text-white"
                        >
                          <FaCheck className="text-customYellow mr-2" />
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                  <Button className="border rounded-full border-cardBorder font-medium">
                    Send email
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-customGrey border border-cardBorder rounded-2xl flex-[4] ">
              <div className="md:p-8 sm:p-5 p-3 flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <h1 className="text-white text-3xl"> Refer & earn</h1>
                  <p className="font-light text-white max-w-64">
                    Receive $150 for each referral!
                  </p>
                </div>
                <Button className="border rounded-full border-cardBorder font-medium">
                  Join now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingSection