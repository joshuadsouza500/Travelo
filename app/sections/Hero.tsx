import React from "react";
import Button from "../components/ui/Button";

const Hero = () => {
  return (
    <section className="bg-[url('/hero.jpeg')] h-screen  bg-no-repeat bg-center bg-cover relative m-2 rounded-xl ">
      {" "}
      {/*Z index only works if the position of the element is not static */}
      <div className="absolute inset-0 rounded-xl bg-black/25 h-full w-full z-0" />
      <div className=" flex flex-col justify-center items-center  h-full">
        <div className="backdrop-blur-lg bg-white/25 py-2 px-6 text-white rounded-3xl z-10 w-auto">
          The Best Place to Start Your Adventure
        </div>
        <h1 className="font-DM_serif text-white  text-[72px] leading-none text-center  z-10 relative ">
          Escape the Ordinary,
          <br /> Book your Adventure Now
        </h1>
        <Button color="black" text="Book Now" />
      </div>
      <div className="backdrop-blur-lg bg-white/30 h-32 absolute left-1/2  -bottom-20 transform -translate-x-1/2  rounded-3xl z-10 w-[90%]"></div>
    </section>
  );
};

export default Hero;
