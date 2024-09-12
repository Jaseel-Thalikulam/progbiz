import React from 'react'
import CustomBadge from "@ui/customBadge";
import benefits1 from "@assets/benefits1.png";
import benefits2 from "@assets/benefits2.png";
import benefits3 from "@assets/benefits3.png";
import benefits4 from "@assets/benefits4.png";
import benefits5 from "@assets/benefits5.png";
import benefits6 from "@assets/benefits6.png";
import BenefitCard from "@ui/benefitCard";

export default function BenefitsSections() {
      const benefitsCards = [
        {
          imgSrc: benefits1,
          title: "Fast turnaround",
          description:
            "Expect the first draft within 48-72 hours, from Monday to Saturday.",
        },
        {
          imgSrc: benefits2,
          title: "Unlimited requests",
          description:
            "Enjoy the freedom of unlimited designs, tailored to meet your every need.",
        },
        {
          imgSrc: benefits3,
          title: "Always in sync",
          description:
            "Stay in sync with real-time updates and seamless communication, all via Slack.",
        },
        {
          imgSrc: benefits4,
          title: "Pause or cancel anytime",
          description:
            "Flexibility at your fingertips—pause or cancel your subscription anytime.",
        },
        {
          imgSrc: benefits5,
          title: "Trello task management",
          description:
            "Expertise in crafting designs that not only captivate but also drive results.",
        },
        {
          imgSrc: benefits6,
          title: "Worry free pricing",
          description:
            "Get all your design needs covered for just 2,150/month.",
        },
      ];
  return (
    <>
      <CustomBadge text="Benefits" />
      <div className="sm:mx-16 mx-5 md:mb-10 sm:mb-5 mb-3">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-4xl md:max-w-[27rem] sm:max-w-[20rem] max-w-[15rem] font-thin  text-center text-white">
            Unlock a world of design potential with us
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center md:gap-5 gap-2">
          {/* Benefits Card */}

          {benefitsCards.map(({ imgSrc, title, description }, index) => (
            <BenefitCard
              imgSrc={imgSrc}
              title={title}
              description={description}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
