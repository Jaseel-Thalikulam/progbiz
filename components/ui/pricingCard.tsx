import React from "react";
import { IoFlashOutline } from "react-icons/io5";
import { Button } from "@ui/button";
import { RxCaretRight } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
interface PricingCardProps {
  card: { plan: string; price: string; request: string; isFaster: boolean };
}
function PricingCard({ card }: PricingCardProps) {
  const features = [
    "Unlimited requests",
    "~48 hour delivery",
    "Unlimited brands",
    "Weekly meetings",
    "Pause or cancel anytime",
    "Managed via Slack and Trello",
    "All services except Webflow",
  ];
  return (
    <div className="relative md:min-h-[34rem] md:w-[22rem] bg-customGrey border border-cardBorder rounded-2xl">
      {/* Optional */}
      {card.isFaster && (
        <div className="absolute bg-customLightYellowShade  p-2 rounded-b-lg right-7 justify-center items-center">
          <p className="text-customYellow md:text-base text-xs flex justify-center items-center">
            Faster <IoFlashOutline />
          </p>
        </div>
      )}

      <div className="md:p-8 sm:p-5 p-3 flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-customGreyText md:text-sm text-xs">{card.plan}</p>
          <h1 className="text-white text-3xl">
            {card.price}
            <span className="text-white text-lg font-light">/month</span>
          </h1>
          <p className="text-xs underline">{card.request}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-customGreyText text-xs">Whats included:</p>
          <ul className="list-none p-0">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2 font-light text-white">
                <FaCheck className="text-customYellow mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <Button className=" rounded-full bg-customYellow font-medium text-black flex justify-center items-center">
            Subscribe <RxCaretRight />
          </Button>
          <Button className="border rounded-full border-cardBorder font-medium">
            Book a demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
