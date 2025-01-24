import React from "react";
import { Bounded } from "../../components/layout/Bounded";
import { ArrowRightFromLine } from "lucide-react";
import Button from "@/components/Shadui/Button";

const Destinations = () => {
  return (
    <Bounded className="h-auto   pt-2 md:pt-16  pb-10  xl:pb-16  xl:space-y-4">
      <div className="w-full flex justify-center md:justify-between items-end pb-4 ">
        <div className=" space-y-1 max-md:text-center ">
          <h6 className="md:text-lg text-Orange">Best location</h6>
          <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-text-black ">
            Popular Destinations
          </h2>
        </div>
        <p className="hidden md:block text-lg leading-snug text-Text w-[45%] lg:w-[35%] 2xl:w-[30%] md:mr-2 2xl:mr-6 ">
          Explore some of the most booked and toured packages in our collection
        </p>
      </div>
      <section className="flex  flex-col  gap-6 lg:gap-5 mx-2 lg:mx-10 2xl:mx-20 pt-10 lg:pt-12 cursor-pointer">
        <div className="flex max-sm:flex-col  w-full  max-sm:h-[75vh] max-md:h-[55vh] md:min-h-64 xl:min-h-80 gap-6 lg:gap-5  ">
          <div className="bg-[url('/destination/Bromo.jpeg')] bg-no-repeat bg- bg-cover group rounded-xl shadow-xl basis-full sm:basis-[60%] relative ">
            {" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent  rounded-xl" />
            <div className="absolute bottom-2 md:bottom-4 left-3 md:left-4 z-10 w-full">
              <p className="max-md:text-sm text-white/90 pl-0.5  leading-tight ">
                Mount Bromo, Indonesia
              </p>

              <div className="w-full   flex justify-between items-center ">
                <h5 className="text-xl md:text-2xl xl:text-3xl font-medium  text-white ">
                  East Java Tour
                </h5>
                <ArrowRightFromLine className="transition-opacity opacity-0 duration-300 ease-in-out text-white/80 size-5 md:size-7 -translate-x-7  md:-translate-x-10 group-hover:opacity-100" />
              </div>
            </div>
          </div>
          <div className="bg-[url('/destination/Hill.jpeg')] bg-no-repeat bg-center bg-cover group rounded-xl shadow-xl basis-full sm:basis-[40%] relative">
            {" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-xl" />
            <div className="absolute bottom-2 md:bottom-4 left-3 md:left-4 z-10 w-full">
              <p className="max-md:text-sm text-white/90 pl-0.5  leading-tight ">
                Hang Múa, Vietnam
              </p>

              <div className="w-full   flex justify-between items-center ">
                <h5 className="text-xl md:text-2xl xl:text-3xl font-medium  text-white ">
                  Mua Caves Adventure
                </h5>
                <ArrowRightFromLine className="transition-opacity opacity-0 duration-300 ease-in-out text-white/80 size-5 md:size-7 -translate-x-7  md:-translate-x-10 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-sm:flex-col  w-full max-sm:h-[75vh] max-md:h-[55vh] md:min-h-64 xl:min-h-80 gap-6 lg:gap-5">
          <div className="bg-[url('/destination/Japan.jpeg')] bg-no-repeat bg-center bg-cover group relative rounded-xl basis-full sm:basis-[40%] ">
            {" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-xl" />
            <div className="absolute bottom-2 md:bottom-4 left-3 md:left-4 z-10 w-full">
              <p className="max-md:text-sm text-white/90 pl-0.5  leading-tight ">
                Tokyo, Japan
              </p>

              <div className="w-full   flex justify-between items-center ">
                <h5 className="text-xl md:text-2xl xl:text-3xl font-medium  text-white ">
                  Tokyo Discovery Tour
                </h5>
                <ArrowRightFromLine className="transition-opacity opacity-0 duration-300 ease-in-out text-white/80 size-5 md:size-7 -translate-x-7  md:-translate-x-10 group-hover:opacity-100" />
              </div>
            </div>
          </div>

          <div className="bg-[url('/destination/Mountains.jpeg')] bg-no-repeat bg-center bg-cover group relative rounded-xl basis-full sm:basis-[60%] ">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-xl" />
            <div className="absolute bottom-2 md:bottom-4 left-3 md:left-4 z-10  w-full ">
              <p className="max-md:text-sm text-white/90 pl-0.5  leading-tight ">
                Jura Mountains, Switzerland
              </p>
              <div className="w-full   flex justify-between items-center ">
                <h5 className="text-xl md:text-2xl xl:text-3xl font-medium   text-white ">
                  Swiss Alps Tour
                </h5>
                <ArrowRightFromLine className="transition-opacity opacity-0 duration-300 ease-in-out text-white/80 size-5 md:size-7 -translate-x-7  md:-translate-x-10 group-hover:opacity-100 " />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" flex justify-center py-8 xl:py-10">
        <Button color="black" className="px-6 xl:px-8">
          View All{" "}
        </Button>
      </div>
    </Bounded>
  );
};

export default Destinations;
