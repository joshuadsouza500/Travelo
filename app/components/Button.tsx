import clsx from "clsx";
import React, { CSSProperties, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  color?: "black" | "white";
};

//if a user passes a prop like onClick or disabled to the Button component, it would be captured by restProps and passed to the underlying button element.
const Button = ({
  children,
  className,
  color = "black",
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-3xl px-3 lg:px-6 py-2 font-sans font-medium hover:scale-[.98] transition-all duration-200 ease-in-out z-10 relative shadow-lg $",
        color === "black"
          ? "bg-text-black hover:bg-black/80 text-white"
          : "bg-white hover:bg-zinc-200 text-text-black",
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
