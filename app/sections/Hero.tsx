import React from "react";
import { TravelSearch } from "../components/ui/TravelSearch";

const Hero = () => {
  return (
    <section className="bg-[url('/hero.jpeg')] h-[70vh] lg:h-screen  bg-no-repeat bg-center bg-cover relative mx-1 md:mx-2 rounded-xl ">
      {" "}
      {/*Z index only works if the position of the element is not static */}
      <div className="absolute inset-0 rounded-xl bg-black/25 h-full w-full z-0" />
      <div className=" flex flex-col justify-center items-center  h-full gap-y-2 font-DM_serif z-10 relative ">
        <div className="backdrop-blur-lg bg-white/25 py-1 md:py-1.5 px-4  md:px-6 text-[#F9FAFB]/90 rounded-3xl z-10 w-auto -mt-6 lg:-mt-8 xl:-mt-14 max-md:text-xs">
          The Best Place to Start Your Adventure
        </div>
        <h1 className=" text-white text-4xl md:text-6xl  xl:text-7xl leading-tight md:leading-none text-center pb-1  ">
          Escape the Ordinary,
          <br /> Book your Adventure Now
        </h1>
        {/**<Button color="black" /> */}
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
        initial={{ y: "100%", opacity: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: delay || 0.5,
          duration: duration || 0.4,
        }}
        viewport={{ once: true }}
      >
        {text}
      </MotionP>
    </span> */
}
