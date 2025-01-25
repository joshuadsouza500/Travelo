import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/Shadui/accordion";
import Image from "next/image";
import { Bounded } from "../components/layout/Bounded";

const statistics = [
  {
    value: "4+",
    label: "years of experience",
  },
  {
    value: "200+",
    label: "Happy Clients",
  },
  {
    value: "100+",
    label: "Destinations",
  },
];
const Steps = () => {
  return (
    <div className="h-auto  pt-2 md:pt-16  pb-10  xl:pb-16    bg-center bg-cover ">
      <Bounded>
        <div className="w-full grid  md:grid-cols-2  md:justify-between   items-start gap-x-4 lg:gap-x-8 2xl:gap-x-28 pb-4">
          <figure className=" hidden md:block rounded-xl h-[450px] max-2xl:mx-auto 2xl:place-self-end w-full lg:w-[85%] 2xl:w-[80%]  shadow-xl relative ">
            <Image
              alt="Traveler"
              height={400}
              width={400}
              src="/stepOrange.jpeg"
              className="h-full w-full object-cover object-center rounded-xl"
            />

            <div className="flex justify-between items-center divide-x-2  mx-auto rounded-xl py-2 rounded-b-xl text-white bg-white/95 shadow-md backdrop-blur-sm absolute bottom-1 left-1 w-[98.5%]">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center w-1/3">
                  <span className="block text-Orange text-3xl leading-tight font-semibold font-DM_serif tracking-wider">
                    {stat.value}
                  </span>
                  <span className="text-xs text-black/70 ">{stat.label}</span>
                </div>
              ))}
            </div>
          </figure>
          <section className="max-md:pb-8 ">
            <div className=" space-y-1 max-md:text-center pb-8">
              <h6 className="md:text-lg text-Orange">How it works</h6>
              <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-text-black ">
                3 Simple Steps
              </h2>
            </div>
            <div className="max-md:mx-auto max-md:w-[95%]">
              {" "}
              <Accordion
                type="single"
                collapsible
                defaultValue="explore"
                className=" "
              >
                <AccordionItem value="explore" className="">
                  <AccordionTrigger className="t">
                    01/ Explore Destination
                  </AccordionTrigger>
                  <AccordionContent className="  ">
                    Explore our wide range of destinations and find the perfect
                    tour package for you. Browse through destinations and
                    activities to find the perfect adventure for you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="plan">
                  <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold">
                    02/ Select A Tour Plan
                  </AccordionTrigger>
                  <AccordionContent>
                    Choose from our carefully curated selection of tour packages
                    designed to provide unforgettable experiences and memories
                    that will last a lifetime.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="book">
                  <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold">
                    03/ Book and Enjoy your Adventure
                  </AccordionTrigger>
                  <AccordionContent>
                    Book your tour package and get ready to embark on an
                    unforgettable journey. Our team will be there to assist you
                    every step of the way.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
          <figure className=" md:hidden rounded-xl h-[350px] max-h-[360px] mx-auto w-[95%] shadow-lg relative ">
            <Image
              alt="Traveler"
              height={400}
              width={400}
              src="/step1.jpeg"
              className="h-full w-full object-cover object-center rounded-xl "
            />
            <div className="flex  justify-between items-center divide-x-2  py-2   rounded-xl  bg-white/95 backdrop-blur-sm absolute bottom-1.5 left-1.5 w-[97%] ">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center w-1/3 py-1">
                  <span className="block text-Orange text-2xl leading-none font-semibold font-DM_serif tracking-wider">
                    {stat.value}
                  </span>
                  <span className="text-xs text-black/70 ">{stat.label}</span>
                </div>
              ))}
            </div>
          </figure>
        </div>
      </Bounded>
    </div>
  );
};

export default Steps;

{
  /**<Accordion type="single" collapsible className="space-y-4">
  <AccordionItem value="item-1" className="border-none">
    <AccordionTrigger className="hover:no-underline">
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-black transform scale-0 transition-transform data-[state=open]:scale-100" />
        </div>
        <div className="flex gap-2">
          <span className="font-medium">01/</span>
          <span className="font-medium">Explore Destination</span>
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent className="pl-10">
      Encapsulates the experience of travel that merges the serenity of nature
      with the dynamism of city
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2" className="border-none">
    <AccordionTrigger className="hover:no-underline">
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-black transform scale-0 transition-transform data-[state=open]:scale-100" />
        </div>
        <div className="flex gap-2">
          <span className="font-medium">02/</span>
          <span className="font-medium">Select A Tour Plan</span>
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent className="pl-10">
      Choose from our carefully curated selection of tour packages designed to
      provide unforgettable experiences
    </AccordionContent>
  </AccordionItem>
</Accordion>; */
}
