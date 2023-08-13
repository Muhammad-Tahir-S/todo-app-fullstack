import { ButtonProps } from "@/utils/types";
import { DetailedHTMLProps, ReactNode, forwardRef } from "react";
import tw from "tailwind-styled-components";
import {
  largeSize,
  linkDisabledPrimary,
  linkDisabledSecondary,
  mediumSize,
  primaryVariant,
  secondaryVariant,
  smallSize,
} from "./styles";

interface LinkButtonProps
  extends DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  ButtonProps {
  disabled?: boolean;
  children?: ReactNode;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      size = "medium",
      noBorder,
      variant = "primary",
      fullWidth,
      children,
      disabled,
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
        $disabled={disabled}
        {...restProps}
      >
        {children}
      </StyledButton>
    );
  }
);

const StyledButton = tw.a<{
  $size: ButtonProps["size"];
  $variant: ButtonProps["variant"];
  $fullWidth: ButtonProps["fullWidth"];
  $noBorder: ButtonProps["noBorder"];
  $disabled?: boolean;
}>`
flex items-center justify-center rounded-[6px] transition-all

${({ $fullWidth }) => ($fullWidth ? "w-full" : "")}

${({ $noBorder }) =>
    $noBorder ? "border-0 inline-block" : "border shadow-md px-4"}

${({ $size }) =>
    $size === "small" ? smallSize : $size === "medium" ? mediumSize : largeSize}

${({ $variant, $disabled }) =>
    $variant === "primary" && !$disabled
      ? primaryVariant
      : $variant === "primary" && $disabled
        ? primaryVariant + linkDisabledPrimary
        : $variant === "secondary" && !$disabled
          ? secondaryVariant
          : $variant === "secondary" && $disabled
            ? secondaryVariant + linkDisabledSecondary
            : primaryVariant}
`;

LinkButton.displayName = "LinkButton";

export default LinkButton;
