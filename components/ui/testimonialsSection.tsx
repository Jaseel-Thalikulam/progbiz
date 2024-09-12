import React from 'react'
import TestimonialsCard from "@/components/ui/testimonialsCard";
import CustomBadge from "@ui/customBadge";
import profileImg1 from "@assets/profileimg1.png";
import profileImg2 from "@assets/profileimg2.png";
import profileImg3 from "@assets/profileimg3.png";
import profileImg4 from "@assets/profileimg4.png";

function TestimonialsSection() {
      const testimonialsCards = [
        {
          name: "Milos Vidic",
          title: "CEO @goatmarketing",
          testimonial:
            "Thanks to Handmade, we experienced a significant boost in website traffic, conversion rate, and website loading time. We also increased our website accessibility score and decreased the bounce rate. The service provider delivered the project on time and was highly efficient and organized. Additionally, the branding and logo design were exceptional, perfectly capturing our company's identity and leaving a lasting impression on our audience.",
          profileImage: null,
          platform: "clutch",
        },
        {
          name: "Rasesh Seth",
          title: "CEO @nextyn",
          testimonial:
            "Vas was extremely easy to work with. He's a pro at Webflow and is always open to hearing you out and executing exactly the way you want. I'd definitely work with him again in the future.",
          profileImage: profileImg1,
          platform: "upwork",
        },
        {
          name: "Goran Markovic",
          title: "Founder @viziya",
          testimonial:
            "Working with Handmade on our website design was an exceptional experience. As an architect, I needed a site that not only showcased our projects beautifully but also reflected our unique design philosophy. Handmade delivered on all fronts.",
          profileImage: null,
          platform: "clutch",
        },
        {
          name: "Jasper Zhang",
          title: "CEO @hyperbolic",
          testimonial:
            "Vasilije did an outstanding job designing our website. He's highly skilled, professional, and responsive.",
          profileImage: profileImg4,
          platform: "upwork",
        },
        {
          name: "Chris Hjort",
          title: "PM @host",
          testimonial:
            "I highly recommend Vasilije. He is a hard-working guy with great ideas for big or small projects. Very flexible and very fast. I'm very happy I found his profile and I'll definitely hire him again for another project!",
          profileImage: profileImg2,
          platform: "clutch",
        },
        {
          name: "Borgar Erlendsson",
          title: "CEO @kozmoz",
          testimonial:
            "True professional capable of delivering quality work within very tight time constraints. I enjoyed receiving constructive feedback and new ideas he brought up during the design phase of my product.",
          profileImage: profileImg3,
          platform: "clutch",
        },
      ];

  return (
    <>
      <CustomBadge text="Testimonials" />
      <div className="sm:mx-16 mx-5  md:mb-10 sm:mb-5 mb-3">
        <div className=" flex flex-col justify-center items-center mb-10 gap-10">
          <h1 className="text-4xl md:max-w-[28rem] sm:max-w-[22rem] max-w-[18rem] font-thin  text-center text-white">
            Read what our clients are saying about us
          </h1>

          <div className=" md:max-w-[72rem] sm:max-w-[48rem] max-w-[40rem] flex flex-wrap justify-center sm:gap-3 md:gap-5 gap-2">
            {testimonialsCards.map(
              ({ name, platform, profileImage, testimonial, title }, index) => (
                <TestimonialsCard
                  title={title}
                  name={name}
                  platform={platform}
                  profileImg={profileImage}
                  testimonial={testimonial}
                  key={index}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialsSection