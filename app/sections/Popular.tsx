import React from "react";
import { Bounded } from "../components/ui/Bounded";

const Popular = () => {
  return (
    <div className="h-screen bg-[url('/lines.jpeg')]/10 pt-16    bg-center bg-cover">
      <Bounded>
        <div className="w-full flex justify-center md:justify-between items-end pb-4">
          <div className=" space-y-1 max-md:text-center">
            <h6 className="md:text-lg text-orange-600">Tour packages</h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-black ">
              Popular Packages
            </h2>
          </div>
          <p className="hidden md:block text-lg leading-snug text-text-light w-[45%] lg:w-[35%] 2xl:w-[30%]">
            Explore some of the most booked and toured packages in our
            collection
          </p>
        </div>
        <section className=" w-full h-auto py-4  lg:py-16 px-4 lg:px-8 flex gap-x-3 md:gap-x-8">
          <div className="bg-[url('/amazon.jpeg')] bg-center bg-cover bg-no-repeat h-[400px] min-w-[290px] max-w-[320px] rounded-xl relative">
            <div className="absolute inset-0 rounded-xl bg-black/20 h-full w-full z-0" />
            <div className="flex  justify-between items-end  text-white p-2  h-full relative z-10">
              <div>
                <h5 className="md:text-lg font-medium">
                  Amazon Rainforest Tour
                </h5>
                <p>4 days, 5 nights</p>
              </div>
              <h6>$799</h6>
            </div>
          </div>
          <div className="bg-[url('/china.jpeg')] bg-center bg-cover bg-no-repeat h-[400px] min-w-[290px] max-w-[320px] rounded-xl relative">
            <div className="absolute inset-0 rounded-xl bg-black/20 h-full w-full z-0" />
            <div className="flex  justify-between items-end  text-white p-2  h-full relative z-10">
              <div>
                <h5 className="md:text-lg font-medium">
                  China Rainforest Tour
                </h5>
                <p>6 days, 5 nights</p>
              </div>
              <h6>$950</h6>
            </div>
          </div>
          <div className="bg-[url('/mountain.jpeg')] bg-center bg-cover bg-no-repeat h-[400px] min-w-[290px] max-w-[320px] rounded-xl relative">
            <div className="absolute inset-0 rounded-xl bg-black/20 h-full w-full z-0" />
            <div className="flex  justify-between items-end  text-white p-2  h-full relative z-10">
              <div>
                <h5 className="md:text-lg font-medium">
                  Tiblis Mountains Tour
                </h5>
                <p>5 days, 4 nights</p>
              </div>
              <h6>$599</h6>
            </div>
          </div>
        </section>
      </Bounded>
    </div>
  );
};

export default Popular;
