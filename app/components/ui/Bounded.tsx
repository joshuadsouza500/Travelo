import { CSSProperties, ElementType, ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "px-2 md:px-6 mx-auto w-full max-w-5xl  xl:max-w-7xl  2xl:max-w-8xl",
        className
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
