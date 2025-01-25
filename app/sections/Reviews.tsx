"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/Shadui/carousel";
import { Quote } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { type CarouselApi } from "../components/Shadui/carousel";
import { Bounded } from "../components/layout/Bounded";

const testimonials = [
  {
    id: 1,
    text: "Travelo made my dream vacation to Bali a reality! From seamless booking to an unforgettable itinerary, every detail was perfect. Highly recommend their services!",
    reviewer: "Sophia Wilson",
    image: "/people/sophia.svg",
    role: "Adventurer",
  },
  {
    id: 2,
    text: "I booked a family trip to Switzerland through Travelo, and it was the best travel experience we’ve ever had. Everything was well-organized!",
    reviewer: "James Brown",
    image: "/people/james.svg",
    role: "Family Traveler",
  },
  {
    id: 3,
    text: "The Tokyo Discovery Tour I booked with Travelo was amazing! the entire process was hassle-free. I can’t wait to book my next trip with them.",
    reviewer: "Emily Chen",
    image: "/people/emily.svg",
    role: "Solo Explorer",
  },
  {
    id: 4,
    text: "I’ve used Travelo for multiple vacations, and they never disappoint. Their customer service is excellent, and the tour packages are well-curated!",
    reviewer: "Michael Carter",
    image: "/people/michael.svg",
    role: "Frequent Traveler",
  },
];

const Reviews = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProfileClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
      setCurrentIndex(index);
    }
  };

  const handleSelect = () => {
    if (api) {
      setCurrentIndex(api.selectedScrollSnap());
    }
  };

  useEffect(() => {
    if (!api) return;

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className=" py-16 2xl:py-24 bg-Bg-green rounded-xl mx-1">
      <Bounded>
        {" "}
        <div className="relative flex flex-col items-center justify-between h-auto max-w-3xl mx-auto ">
          {/* Quote mark */}

          <Quote className="rotate-180 absolute top-0 left-0 md:-left-9 2xl:-left-10 size-14 2xl:size-20 text-Text opacity-25" />

          {/* Testimonial carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full "
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="space-y-8 px-8 pt-8 ">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed text-white testimonial-transition  text-pretty text-center pl-1 ">
                      {testimonial.text}
                    </p>
                    <div className="testimonial-transition w-full text-center">
                      <h3 className="font-semibold 2xl:text-lg text-white">
                        {testimonial.reviewer}
                      </h3>
                      <p className="text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Profile images navigation */}
          <div className="pt-4 lg:pt-8 2xl:pt-12 flex items-center gap-8 md:gap-10  2xl:gap-14">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => handleProfileClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "opacity-100 scale-125 "
                    : "opacity-40 hover:opacity-75"
                }`}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.reviewer}
                  width={40}
                  height={40}
                  className={`size-8  md:size-12 2xl:size-14 rounded-full object-cover shadow-inner  ${
                    index === currentIndex
                      ? "bg-Orange/80 "
                      : "bg-Orange/50 hover:bg-Orange/70"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </Bounded>
    </div>
  );
};

export default Reviews;
