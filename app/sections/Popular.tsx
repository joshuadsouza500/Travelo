import React from "react";
import { Bounded } from "../components/ui/Bounded";
import TourCarousel from "../components/ui/TourCarousel";
import Button from "../components/Button";

const Popular = () => {
  return (
    <div className="h-auto bg-[url('/lines.jpeg')]/10 py-12 md:py-16    bg-center bg-cover">
      <Bounded>
        <div className="w-full flex justify-center md:justify-between items-end pb-4">
          <div className=" space-y-1 max-md:text-center">
            <h6 className="md:text-lg text-Orange">Tour packages</h6>
            <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-text-black ">
              Popular Packages
            </h2>
          </div>
          <p className="hidden md:block text-lg leading-snug text-Text w-[45%] lg:w-[35%] 2xl:w-[30%]">
            Explore some of the most booked and toured packages in our
            collection
          </p>
        </div>
        <section className=" w-full h-auto  py-4 md:py-10 px-4 lg:px-8 ">
          <TourCarousel />
        </section>
        <div className="w-full flex justify-center">
          <Button color="black">View All</Button>
        </div>
      </Bounded>
    </div>
  );
};

export default Popular;
