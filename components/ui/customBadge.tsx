import React from "react";
import { Badge } from "@ui/badge";

interface CustomBadgeProps {
  text: string;
  positionClass?: string;
}
function CustomBadge({
  text,
  positionClass = "justify-center",
}: CustomBadgeProps) {
  return (
    <div className={`my-10 flex ${positionClass} items-center`}>
      <Badge
        variant="outline"
        className="rounded-3xl flex items-center font-light  bg-customYellowShade border-2 border-customYellowShadeBorder h-10 text-customYellow"
      >
        {text}
      </Badge>
    </div>
  );
}

export default CustomBadge;
