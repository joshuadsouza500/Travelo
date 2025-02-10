import React from "react";

import Image from "next/image";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../Shadui/carousel";

type TourProp = {
  title: string;
  duration: string;
  price: string;
  image: string;
  rating: number;
};

const destinations: TourProp[] = [
  {
    title: "Amazons Expedition",
    duration: "6 days, 5 nights",
    price: "$ 799",
    image: "/amazon.jpeg",
    rating: 4.9,
  },
  {
    title: "Tokyo Discovery",
    duration: "8 days, 7 nights",
    price: "$ 1299",
    image: "/Tokyo.jpg", //https://t3.ftcdn.net/jpg/02/65/23/70/360_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg
    rating: 4.8,
  },

  {
    title: " Shengsi Islands Tour",
    duration: "6 days, 5 nights",
    price: "$ 899",
    image: "/china.jpeg",
    rating: 5.0,
  },
  {
    title: "Roma City Adventure",
    duration: "5 days, 4 nights",
    price: "$ 799",
    image: "/Rome.avif",
    rating: 4.5,
  },
];
const TourCarousel = () => {
  return (
    <Carousel>
      <CarouselContent className=" pl-4 space-x-4 md:space-x-6 lg:space-x-8">
        {destinations.map((destination, index) => (
          <CarouselItem
            key={index}
            className="relative basis-1/2 md:basis-1/3 2xl:basis-1/4  rounded-xl overflow-hidden group   shadow-md"
          >
            <div className=" bg-white/30 backdrop-blur-lg rounded-full  px-2 md:px-3 py-0.5 md:py-1   absolute top-4 right-2  flex items-center gap-x-1 md:gap-x-1.5 z-10 shadow-sm">
              <Star className="text-yellow-500 fill-yellow-500 size-3.5 md:size-4 " />
              <h6 className="max-md:text-sm font-medium  text-white">
                {destination.rating}
              </h6>
            </div>
            <Image
              src={destination.image}
              alt="Tour package"
              height={400}
              width={400}
              className=" object-center object-cover  h-full w-full group-hover:scale-105 transition-transform duration-300 md:aspect-[3/4] aspect-[2.5/3.5]  max-h-[300px] md:max-h-[350px] lg:max-h-[450px]  "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-xl" />
            <div className="  text-white p-2   absolute bottom-0 left-0 md:p-4  w-full">
              <h5 className="leading-tight tracking-wider pb-1 font-DM_serif md:text-xl ">
                {destination.title}
              </h5>
              <div className="flex  justify-between items-center w-full pr-0.5">
                <p className="text-xs md:text-sm text-white/90">
                  {destination.duration}
                </p>

                <h6 className="text-sm md:text-lg font-medium">
                  {destination.price}
                </h6>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TourCarousel;
