import React from "react";
import { Bounded } from "../components/ui/Bounded";

const Destinations = () => {
  return (
    <Bounded className="h-auto  py-12 md:py-16  ">
      <div className="w-full flex justify-center md:justify-between items-end pb-4">
        <div className=" space-y-1 max-md:text-center">
          <h6 className="md:text-lg text-Orange">Best location</h6>
          <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-text-black ">
            Popular Destinations
          </h2>
        </div>
        <p className="hidden md:block text-lg leading-snug text-Text w-[45%] lg:w-[35%] 2xl:w-[30%]">
          Explore some of the most booked and toured packages in our collection
        </p>
      </div>
      <section className="flex  md:flex-col  gap-3 lg:gap-5 mx-2 lg:mx-10 2xl:mx-20 pt-10 lg:pt-16">
        <div className="flex max-md:flex-col  w-full h-72 md:min-h-64 xl:min-h-80 gap-3 lg:gap-5">
          <div className="bg-[url('/destination/Bromo.jpeg')] bg-no-repeat bg- bg-cover rounded-xl basis-1 md:basis-[60%] bg-red-200"></div>
          <div className="bg-[url('/destination/Java.jpeg')] bg-no-repeat bg- bg-cover rounded-xl basis-1 md:basis-[40%] bg-blue-200"></div>
        </div>
        <div className="flex max-md:flex-col  w-fullh-72 md:min-h-64 xl:min-h-80 gap-3 lg:gap-5">
          <div className="bg-[url('/destination/Japan.jpeg')] bg-no-repeat bg-center bg-cover rounded-xl basis-1 md:basis-[40%] bg-blue-200"></div>
          <div className="bg-[url('/destination/Mountains.jpeg')] bg-no-repeat bg-center bg-cover rounded-xl basis-1 md:basis-[60%] bg-red-200"></div>
        </div>
      </section>
    </Bounded>
  );
};

export default Destinations;
