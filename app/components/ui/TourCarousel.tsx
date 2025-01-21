import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TourCarousel = () => {
  return (
    <Carousel>
      <CarouselContent className="space-x-4 md:space-x-10">
        <CarouselItem className="relative  basis-1/3 xl:basis-1/4  rounded-xl overflow-hidden group  ">
          <div className="bg-[url('/amazon.jpeg')] bg-center bg-cover bg-no-repeat h-full w-full group-hover:scale-105 min-h-[300px] transition-transform duration-300">
            <div className="absolute inset-0 rounded-xl bg-black/20 h-full w-full z-0" />
            <div className="flex  justify-between items-end  text-white p-2  h-full relative z-10">
              <div>
                <h5 className="md:text-lg font-medium"></h5>
                <p></p>
              </div>
              <h6>$950</h6>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="relative  basis-1/3 xl:basis-1/4  rounded-xl overflow-hidden group  ">
          <div className="bg-[url('/china.jpeg')] bg-center bg-cover bg-no-repeat h-full w-full group-hover:scale-105 min-h-[300px] transition-transform duration-300">
            <div className="absolute inset-0 rounded-xl bg-black/20 h-full w-full z-0" />
            <div className="flex  justify-between items-end  text-white p-2  h-full relative z-10">
              <div>
                <h5 className="md:text-lg font-medium">
                  Houtouwan village Tour
                </h5>
                <p>6 days, 5 nights</p>
              </div>
              <h6>$899</h6>
            </div>
          </div>
        </CarouselItem>{" "}
        <CarouselItem className="relative  basis-1/3 xl:basis-1/4  rounded-xl overflow-hidden group  ">
          <div className="bg-[url('/mountain.jpeg')] bg-center bg-cover bg-no-repeat h-full w-full group-hover:scale-105 min-h-[300px] transition-transform duration-300">
            <div className="absolute inset-0 rounded-xl bg-black/20 h-full w-full z-0" />
            <div className="flex  justify-between items-end  text-white p-2  h-full relative z-10">
              <div>
                <h5 className="md:text-lg font-medium">
                  {" "}
                  Tiblis Mountains Tour
                </h5>
                <p>5 days, 4 nights</p>
              </div>
              <h6>$599</h6>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="relative  basis-1/3 xl:basis-1/4  rounded-xl overflow-hidden group   ">
          <div className="bg-[url('/china.jpeg')] bg-center bg-cover bg-no-repeat h-full w-full group-hover:scale-105 min-h-[300px] transition-transform duration-300">
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
        </CarouselItem>
        <CarouselItem className="relative  basis-1/3 xl:basis-1/4  rounded-xl overflow-hidden group  ">
          <div className="bg-[url('/mountain.jpeg')] bg-center bg-cover bg-no-repeat h-full w-full group-hover:scale-105 min-h-[300px] transition-transform duration-300">
            <div className="absolute inset-0 rounded-xl bg-black/20 h-full w-full z-0" />
            <div className="flex  justify-between items-end  text-white p-2  h-full relative z-10">
              <div>
                <h5 className="md:text-lg font-medium">
                  Houtouwan village Tour
                </h5>
                <p>6 days, 5 nights</p>
              </div>
              <h6>$899</h6>
            </div>
          </div>
        </CarouselItem>{" "}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TourCarousel;
