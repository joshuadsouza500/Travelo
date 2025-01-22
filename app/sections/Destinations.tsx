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
      <section className="flex  flex-col  gap-3 lg:gap-5 mx-2 lg:mx-10 2xl:mx-20 pt-10 lg:pt-16 cursor-pointer">
        <div className="flex max-sm:flex-col  w-full  max-sm:h-[75vh] max-md:h-[55vh] md:min-h-64 xl:min-h-80 gap-3 lg:gap-5 ">
          <div className="bg-[url('/destination/Bromo.jpeg')] bg-no-repeat bg- bg-cover rounded-xl shadow-lg basis-full sm:basis-[60%] relative ">
            {" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent  rounded-xl" />
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 z-10">
              <p className="max-md:text-sm text-white/90 pl-0.5  leading-tight ">
                Mount Bromo, Indonesia
              </p>
              <h5 className="text-xl md:text-2xl xl:text-3xl font-medium  text-white ">
                East Java Tour
              </h5>
            </div>
          </div>
          <div className="bg-[url('/destination/Hill.jpeg')] bg-no-repeat bg-center bg-cover rounded-xl shadow-lg basis-full sm:basis-[40%] relative">
            {" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-xl" />
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 z-10">
              <p className="max-md:text-sm text-white/90 pl-0.5  leading-tight ">
                Hang Múa, Vietnam
              </p>
              <h5 className="text-xl md:text-2xl xl:text-3xl font-medium  text-white ">
                Mua Caves Adventure
              </h5>
            </div>
          </div>
        </div>
        <div className="flex max-sm:flex-col  w-full max-sm:h-[75vh] max-md:h-[55vh] md:min-h-64 xl:min-h-80 gap-3 lg:gap-5">
          <div className="bg-[url('/destination/Japan.jpeg')] bg-no-repeat bg-center bg-cover relative rounded-xl basis-full sm:basis-[40%] ">
            {" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-xl" />
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 z-10">
              <p className="max-md:text-sm text-white/90 pl-0.5  leading-tight ">
                Tokyo, Japan
              </p>
              <h5 className="text-xl md:text-2xl xl:text-3xl font-medium  text-white ">
                Tokyo Discovery Tour
              </h5>
            </div>
          </div>

          <div className="bg-[url('/destination/Mountains.jpeg')] bg-no-repeat bg-center bg-cover relative rounded-xl basis-full sm:basis-[60%]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-xl" />
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 z-10">
              <p className="max-md:text-sm text-white/90 pl-0.5  leading-tight ">
                Jura Mountains, Switzerland
              </p>
              <h5 className="text-xl md:text-2xl xl:text-3xl font-medium  text-white ">
                Swiss Alps Tour
              </h5>
            </div>
          </div>
        </div>
      </section>
    </Bounded>
  );
};

export default Destinations;
