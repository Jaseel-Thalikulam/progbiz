import { Parallax } from "@/components/ui/parallax";
import { Badge } from "@ui/badge";
import CustomBadge from "@ui/customBadge";

export default function ServicesSection() {
  const services = [
    "UI/UX Design",
    "Graphic Design",
    "Logo Design",
    "Branding",
    "Animation",
  ];

  return (
    <>
      {/* Services */}
      <CustomBadge text="Services" />
      <div className="sm:mx-16 mx-5 md:mb-10 sm:mb-5 mb-3">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-4xl md:max-w-[24rem] sm:max-w-[20rem] max-w-[15rem] font-thin  text-center text-white">
            All you want, delivered on time
          </h1>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        {/* Left and right black gradients */}

        <div
          className="relative flex flex-col md:gap-5 gap-3 md:max-w-[37rem] sm:max-w-[20rem] max-w-[14rem] z-0"
          style={{
            backgroundSize: "100% 100%", // ensures gradient covers the full height
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 pointer-events-none z-50">
            <div className="absolute left-0 top-0 bottom-0 md:w-16 sm:w-10 w-8 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 md:w-16 sm:w-10 w-8 bg-gradient-to-l from-black to-transparent"></div>
          </div>
          
          <Parallax baseVelocity={-5} >
            <span className="flex md:gap-10 gap-5">
              {services.map((service, index) => (
                <Badge
                  className="h-10 w-full font-light text-white bg-customGrey border border-cardBorder rounded-lg"
                  key={index}
                >
                  {service}
                </Badge>
              ))}
            </span>
          </Parallax>
          <Parallax baseVelocity={5}>
            <span className="flex md:gap-10 gap-5">
              {services.map((service, index) => (
                <Badge
                  className="h-10 w-full font-light text-white bg-customGrey border border-cardBorder rounded-lg"
                  key={index}
                >
                  {service}
                </Badge>
              ))}
            </span>
          </Parallax>
        </div>
      </div>
    </>
  );
}
