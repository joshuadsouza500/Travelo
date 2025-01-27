"use client";
import {
  animate,
  useInView,
  useMotionValue,
  motion,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

type CounterProps = {
  from: number;
  to: number;
};

const AnimatedCounter = ({ from, to }: CounterProps) => {
  const CounterRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(CounterRef);
  const count = useMotionValue(from); //Motion val provdes the state of the var
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest);
  }); //function takes the latest value of count and applies the Math.round() to it.

  useEffect(() => {
    if (inView) {
      //can pass in values from and to and it will animate it
      animate(count, to, {
        duration: 1.5,
        ease: "circOut",
      });
    }
  }, [inView, count, to]);

  return (
    <motion.span
      className="text-Orange text-2xl leading-none font-semibold font-DM_serif pr-0.5 overflow-hidden"
      ref={CounterRef}
    >
      {rounded}
    </motion.span>
  );
};

export default AnimatedCounter;
