import React from 'react'
import CustomBadge from "@ui/customBadge";
import GetStartedCard from "@ui/getStartedCard";
function HowItWorks() {
      const getStartedCards = [
        {
          title: "Subscribe to a plan",
          description:
            " Select a plan that fits your needs and jump on a onboarding call.",
        },
        {
          title: "Add a task",
          description:
            "List your first task on our shared Trello board by specifying the requirements.",
        },
        {
          title: "Enjoy results",
          description: "Receive your completed tasks in 2-4business days.",
        },
      ];
  return (
   <>
      <CustomBadge text="How it works?" />
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl md:max-w-96 sm:max-w-80 max-w-60 font-thin  text-center text-white ">
            Pay and get started the same day
          </h1>
          <p className="text-sm md:max-w-96 sm:max-w-80 max-w-60 text-center font-thin text-white">
            No unnecessary bureaucracy. We focus on getting your ideas and
            problems solved.
          </p>
        </div>

        <div className="bg-black flex gap-5 flex-wrap mx-10 justify-center items-center">
          {getStartedCards.map((card, index) => (
            <GetStartedCard card={card} index={index} key={index} />
          ))}
        </div>
      </div>
   </>
  )
}

export default HowItWorks