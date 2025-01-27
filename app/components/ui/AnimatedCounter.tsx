import React, { useRef } from "react";

type CounterProps = {
  from: number;
  to: number;
};

const AnimatedCounter = ({ from, to }: CounterProps) => {
  const CounterRef = useRef<HTMLSpanElement>(null);
  return <span ref={CounterRef} />;
};

export default AnimatedCounter;
