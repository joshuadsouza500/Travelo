import React from "react";
import { Bounded } from "../components/ui/Bounded";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Steps = () => {
  return (
    <div className="h-auto  pt-6 md:pt-16    bg-center bg-cover">
      <Bounded>
        <div className="w-full grid md:grid-cols-2  md:justify-between items-start gap-x-4 lg:gap-x-8 pb-4">
          <figure className="hidden md:block  rounded-xl h-[450px] mx-auto w-[80%] shadow-lg relative">
            <Image
              alt="Traveler"
              height={400}
              width={400}
              src="/stepOrange.jpeg"
              className="h-full w-full object-cover object-center rounded-xl"
            />
            <div className="w-auto px-4 py-2 rounded-xl text-white font-semibold text-lg text-center  h-16 bg-white/25 backdrop-blur-md absolute bottom-0">
              <h3>
                200+
                <br />
                Happy Customers
              </h3>
            </div>
          </figure>
          <section className="">
            <div className=" space-y-1 max-md:text-center pb-4 xl:pb-6">
              <h6 className="md:text-lg text-Orange">How it works</h6>
              <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-text-black ">
                3 Simple Steps
              </h2>
            </div>
            <div className=" ">
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
        </div>
      </Bounded>
    </div>
  );
};

export default Steps;
