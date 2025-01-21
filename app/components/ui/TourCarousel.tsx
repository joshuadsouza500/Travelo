import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

type TourProp = {
  title: string;
  duration: string;
  price: string;
  image: string;
};

const destinations: TourProp[] = [
  {
    title: "Amazon Rainforest Expedition",
    duration: "7 days, 6 nights",
    price: "$ 799",
    image: "/amazon.jpeg",
  },

  {
    title: " Shengsi Islands Tour",
    duration: "6 days, 5 nights",
    price: "$ 899",
    image: "/china.jpeg",
  },
  {
    title: "Roma City Adventure",
    duration: "5 days, 4 nights",
    price: "$ 799",
    image:
      "https://images.unsplash.com/photo-1603199766980-fdd4ac568a11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvbWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Tokyo Discovery",
    duration: "8 days, 7 nights",
    price: "$ 1299",
    image:
      "https://i.pinimg.com/564x/eb/70/35/eb7035f9e4bf534e48d90741ed71e994.jpg", //https://t3.ftcdn.net/jpg/02/65/23/70/360_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg
  },
];
const TourCarousel = () => {
  return (
    <Carousel>
      <CarouselContent className="space-x-4 md:space-x-6 lg:space-x-8">
        {destinations.map((destination, index) => (
          <CarouselItem
            key={index}
            className="relative  basis-1/2 md:basis-1/3 2xl:basis-1/4  rounded-xl overflow-hidden group   "
          >
            <Image
              src={destination.image}
              alt="Tour package"
              height={400}
              width={400}
              className=" object-center object-cover  h-full w-full group-hover:scale-105 transition-transform duration-300 aspect-[3/4] max-h-[250px] md:max-h-[350px] lg:max-h-[450px]  "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-xl" />
            <div className="flex  justify-between items-end  text-white p-2   absolute bottom-0 left-0 md:p-4  w-full">
              <div>
                <h5 className="text-lg md:text-xl  font-DM_serif ">
                  {destination.title}
                </h5>
                <p className="text-sm text-white/80">{destination.duration}</p>
              </div>
              <h6 className="md:text-lg font-medium">{destination.price}</h6>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TourCarousel;
