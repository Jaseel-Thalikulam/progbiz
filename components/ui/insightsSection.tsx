"use client"

import React, { useState } from "react";
import CustomBadge from "@ui/customBadge";
import { Accordion } from "@ui/accordion";

function InsightsSection() {
  const [expanded, setExpanded] = useState<false | number>(0);
  const FAQs = [
    {
      question: "Is it really unlimited?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
      question: "Why wouldn't I just hire a freelancer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Why wouldn't I just hire a full-time designer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
    },
    {
      question: "Can I pause, renew or cancel at any time?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod urna vitae metus efficitur, id lobortis sapien gravida.",
    },
    {
      question: "Are there any contracts?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, lorem ut sollicitudin pretium, sapien turpis vehicula orci.",
    },
    {
      question: "How do we communicate?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis massa vel metus varius vehicula.",
    },
    {
      question: "What if I only have one design task?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui quis lacus gravida viverra.",
    },
    {
      question: "What is an active task?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum metus id dolor egestas, nec ultricies nisi interdum.",
    },
    {
      question: "Who are the designers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc non mi fermentum tempor.",
    },
    {
      question: "How many designs can be done in a single month?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper felis eget lacus vulputate varius.",
    },
    {
      question: "Are there any refunds if I don't like the designs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante eget metus eleifend vehicula.",
    },
  ];
  return (
    <>
      <CustomBadge text="Insights" />
      <div className="sm:mx-16 mx-5 md:mb-10 sm:mb-5 mb-3">
        <div className="flex flex-col justify-center items-center mb-10 gap-10">
          <h1 className="text-4xl md:max-w-[28rem] sm:max-w-[22rem] max-w-[18rem] font-thin  text-center text-white">
            Frequently asked questions
          </h1>

          <div className="md:w-[36rem] sm:w-[27rem] flex flex-col justify-center ">
            {FAQs.map(({ question, answer }, index) => (
              <Accordion
                question={question}
                answer={answer}
                key={index}
                i={index}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InsightsSection;
