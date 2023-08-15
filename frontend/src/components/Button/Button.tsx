import { ButtonProps } from "@/utils/types";
import { DetailedHTMLProps, forwardRef } from "react";
import tw from "tailwind-styled-components";
import {
  largeSize,
  mediumSize,
  primaryVariant,
  secondaryVariant,
  smallSize,
} from "./styles";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

interface ForwardedRefButtonProps
  extends DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    ButtonProps {}

const Button = forwardRef<HTMLButtonElement, ForwardedRefButtonProps>(
  (
    {
      size = "medium",
      noBorder,
      variant = "primary",
      fullWidth,
      children,
      loading,
      ...restProps
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        $size={size}
        $fullWidth={fullWidth}
        $noBorder={noBorder}
        $variant={variant}
        {...restProps}
      >
        <div>
          {loading ? (
            <ArrowPathIcon className="animate-spin fill-blue-800 w-5 h-5" />
          ) : (
            children
          )}
        </div>
      </StyledButton>
    );
  }
);

const StyledButton = tw.button<{
  $size: ButtonProps["size"];
  $variant: ButtonProps["variant"];
  $fullWidth: ButtonProps["fullWidth"];
  $noBorder: ButtonProps["noBorder"];
}>`
flex items-center justify-center rounded-[6px] transition-all

${({ $fullWidth }) => ($fullWidth ? "w-full" : "")}

${({ $noBorder }) =>
  $noBorder ? "border-0 inline-block" : "border shadow-md px-4"}

${({ $size }) =>
  $size === "small" ? smallSize : $size === "medium" ? mediumSize : largeSize}

${({ $variant }) =>
  $variant === "primary" ? primaryVariant : secondaryVariant}
`;

Button.displayName = "Button";

export default Button;
