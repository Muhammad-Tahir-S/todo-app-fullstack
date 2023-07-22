import { CSSProperties, ReactNode } from "react";
import { clsx } from "clsx";

type TextVariant =
  | "L1"
  | "L2"
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "p1"
  | "p2"
  | "p3"
  | "p4";

type TextColor =
  | "white"
  | "black"
  | "text-gray-100"
  | "text-gray-200"
  | "text-gray-300"
  | "text-gray-400"
  | "text-gray-500"
  | "text-gray-600"
  | "text-gray-700"
  | "text-gray-800"
  | "text-gray-900"
  | "text-gray-800";

interface IText {
  children: ReactNode;
  variant?: TextVariant;
  color: TextColor;
  className?: string;
  uppercase?: boolean;
  style?: CSSProperties;
}
export default function Text({
  children,
  variant = "p1",
  color = "text-gray-500",
  className,
  uppercase,
  style,
}: IText) {
  return (
    <p
      style={style}
      className={clsx(
        "ease-in transition-colors duration-100",
        className,
        variant && getVariant(variant),
        color,
        uppercase && "uppercase"
      )}
    >
      {children}
    </p>
  );
}

const getVariant = (variant: TextVariant) => {
  switch (variant) {
    case "L1":
      return "text-[32px] md:text-[48px] lg:text-[60px]";
    case "L2":
      return "text-[24px] md:text-[36px] lg:text-[48px]";
    case "H1":
      return "text-[36px]";
    case "H2":
      return "text-[32px]";
    case "H3":
      return "text-[24px]";
    case "H4":
      return "text-[18px]";
    case "H5":
      return "text-[16px]";
    case "p1":
      return "text-[14px]";
    case "p2":
      return "text-[12px]";
    case "p3":
      return "text-[10px]";
    case "p4":
      return "text-[9px]";

    default:
      break;
  }
};
