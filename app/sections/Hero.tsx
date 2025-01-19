import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('/hero.jpeg')] h-screen  bg-no-repeat bg-center bg-cover relative m-2 rounded-xl">
      <div className="absolute inset-0 rounded-xl bg-black/25 h-full w-full z-0" />
      <h1 className="font-DM_serif text-white  text-[72px] leading-tight text-center w-[70%] ">
        Escape the Ordinary, Book your Adventure Now
      </h1>
    </section>
  );
};

export default Hero;
