import React from "react";
import { Badge } from "@ui/badge";
interface getStartedCardProps {
  index: number;
  card: {
    title: string;
    description: string;
  };
}
function GetStartedCard({ index, card }: getStartedCardProps) {
  return (
    <div className="p-5 border border-cardBorder bg-customGrey rounded-xl  md:max-w-96 flex flex-col md:gap-5 sm:gap-2 gap-2">
      <Badge
        variant="outline"
        className="rounded-3xl font-light  bg-customYellowShade border-2 border-customYellowShadeBorder text-customYellow  h-8 w-8 items-center justify-center  "
      >
        {index + 1}
      </Badge>
      <div>
        <h1 className="text-white text-lg">{card.title}</h1>
        <p className="text-customGreyText text-base">{card.description}</p>
      </div>
    </div>
  );
}

export default GetStartedCard;
