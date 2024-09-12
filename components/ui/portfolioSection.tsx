import React from 'react'
import { RxCaretRight } from 'react-icons/rx';
import { Button } from "@ui/button";
import CustomBadge from "@ui/customBadge";
import PortfolioCard from "@/components/ui/portfolioCard";
import portfolioImg1 from "@assets/1.jpg";
import portfolioImg2 from "@assets/2.jpg";
import portfolioImg3 from "@assets/3.jpg";
import portfolioImg4 from "@assets/4.jpg";
import portfolioImg5 from "@assets/5.jpg";
import portfolioImg6 from "@assets/6.jpg";
function PortfolioSection() {
  const portfolioCards = [
    {
      imgSrc: portfolioImg1,
      title: "Slipery moneys -e-commerce platform for high risk industries",
    },
    {
      imgSrc: portfolioImg2,
      title: "Hybrid capital - digital currency",
    },
    {
      imgSrc: portfolioImg3,
      title: "Betero - sports betting platform",
    },
    {
      imgSrc: portfolioImg4,
      title: "Exec - employees financial wellness saas",
    },
    {
      imgSrc: portfolioImg5,
      title: "Voltoge - accessible clean energy startup",
    },
    {
      imgSrc: portfolioImg6,
      title: "Hyperbolic - a decentralized data transmission startup",
    },
  ];
  return (
    <div className="sm:mx-16 mx-5 md:mb-10 sm:mb-5 mb-3">
      <CustomBadge text="Portfolio" positionClass="justify-start" />
      <div className="flex justify-between flex-wrap sm:gap-5 gap-5 mb-10">
        <h1 className="text-4xl md:max-w-80 sm:max-w-80 max-w-60 font-thin  text-left text-white">
          Exceptional work you deserve
        </h1>
        <p className="text-sm md:max-w-96 sm:max-w-80 max-w-60 text-left font-thin text-white">
          From tech startups to healthcare giants, e-commerce pioneers to
          edtech, we&apos;ve left our mark on diverse domains.
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly gap-10">
        {/* portfolioCards */}

        {portfolioCards.map(({ imgSrc, title }, index) => (
          <PortfolioCard imgSrc={imgSrc} title={title} key={index} />
        ))}
      </div>
      <div className="md:mt-10 sm:mt-5 mt-3 flex justify-center">
        <Button className="bg-customYellow rounded-full hover:bg-customYellow text-black">
          See all works <RxCaretRight />
        </Button>
      </div>
    </div>
  );
}

export default PortfolioSection;