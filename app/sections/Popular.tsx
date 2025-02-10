import React from "react";

import Button from "../components/Shadui/Button";
import { Bounded } from "../components/layout/Bounded";
import TourCarousel from "../components/ui/TourCarousel";

const Popular = () => {
  return (
    <div className="h-auto bg-[url('/lines.jpeg')]/10 pt-16  pb-14  xl:pb-16    bg-center bg-cover ">
      <Bounded>
        <div className="w-full flex justify-center md:justify-between items-end pb-4 md:pb-6">
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
        <section className=" w-full h-auto  py-6 md:py-10  lg:px-6 ">
          <TourCarousel />
        </section>
        <div className="w-full flex justify-center pt-2">
          <Button color="black" className="px-6 xl:px-8">
            View All
          </Button>
        </div>
      </Bounded>
    </div>
  );
};

export default Popular;
