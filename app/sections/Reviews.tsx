import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "",
    reviwer: "",
    image: "",
    role: "",
  },
];

const Reviews = () => {
  const [api, setApi] = useState<T>(null);
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
    <div className="max-w-4xl mx-auto px-4 py-16 bg-[#E6EBE4] rounded-lg">
      <div className="relative min-h-[300px]">
        {/* Quote mark */}
        <div className="absolute top-0 left-0 text-6xl text-gray-300">Q</div>

        {/* Testimonial carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="space-y-8 px-8 pt-8">
                  <p className="text-xl md:text-2xl leading-relaxed text-gray-700 testimonial-transition">
                    {testimonial.text}
                  </p>
                  <div className="testimonial-transition">
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Profile images navigation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => handleProfileClick(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "opacity-100 scale-110"
                  : "opacity-50 hover:opacity-75"
              }`}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
