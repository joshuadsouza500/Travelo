import React from "react";
import { TravelSearch } from "../components/ui/TravelSearch";
import { MotionDiv, Motionh1 } from "../components/ui/Motion";

const Hero = () => {
  return (
    <section className="bg-[url('/hero.jpeg')] h-[70vh] lg:h-screen  bg-no-repeat bg-center bg-cover relative mx-1 md:mx-2 rounded-xl ">
      {" "}
      {/*Z index only works if the position of the element is not static */}
      <div className="absolute inset-0 rounded-xl bg-black/25 h-full w-full z-0" />
      <div className=" flex flex-col justify-center items-center  h-full gap-y-2 font-DM_serif z-10 relative ">
        {" "}
        <MotionDiv
          className="backdrop-blur-lg bg-white/25 py-1 md:py-1.5 px-4  md:px-6 text-[#F9FAFB]/90 rounded-3xl z-10 w-auto -mt-6 lg:-mt-8 xl:-mt-14 max-md:text-xs"
          initial={{ y: "40%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.6,
          }}
          viewport={{ once: true }}
        >
          The Best Place to Start Your Adventure
        </MotionDiv>
        <span className=" inline-block overflow-hidden pb-1">
          <Motionh1
            className="  text-white text-4xl md:text-6xl  xl:text-7xl leading-tight md:leading-none text-center pb-1  "
            initial={{ y: "200%", opacity: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            Escape the Ordinary,
          </Motionh1>

          <Motionh1
            className="  text-white text-4xl md:text-6xl  xl:text-7xl leading-tight md:leading-none text-center pb-1  "
            initial={{ y: "100%", opacity: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            Book your Adventure Now
          </Motionh1>
        </span>
      </div>
      <div className="  h-auto  absolute left-1/2 -bottom-36  md:-bottom-10 transform -translate-x-1/2  rounded-3xl z-10 w-[90%] 2xl:w-[70%] ">
        <TravelSearch />
      </div>
    </section>
  );
};

export default Hero;

{
  /**
    <span className="inline-block overflow-hidden">
      <MotionP
        className={cn(className)}
       
      >
        {text}
      </MotionP>
    </span> */
}
