"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(" w-full pb-1 ", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1  gap-x-4 md:gap-x-6 2xl:gap-x-8 items-center justify-start py-2  transition-all hover:underline [&[data-state=open]>svg]:rotate-180  text-xl lg:text-2xl font-semibold ",
        className
      )}
      {...props}
    >
      <span className="size-3.5 md:size-5 rounded-full ring-1 ring-black   flex items-center justify-center">
        {" "}
        <span className="size-2 md:size-3 rounded-full transition-colors duration-200  [&[data-state=open]]: bg-text-black "></span>
      </span>
      {children}
      {/**    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" /> */}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className=" overflow-hidden border-l-4 border-text-black   pt-2 ml-1 md:ml-2 pl-6 lg:pl-10 text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down  tracking-wide md:text-base text-text-black/75 max-md:mr-3"
    {...props}
  >
    <div className={cn("pb-2 xl:pb-5 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
