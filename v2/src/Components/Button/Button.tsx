import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const button = cva(
  [
    "flex",
    "items-center",
    "gap-12",
  ],
  {
    variants: {
      color: {
        primary: [
          "bg-primary-500",
          "text-white",
          "hover:bg-primary-700",
          "active:bg-primary-800",
        ],
        // **or**
        // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
        white: [
          "bg-gray-100",
          "text-primary",
          "hover:bg-gray-300",
          "active:bg-gray-400",
        ],
      },
      size: {
        small: ["px-16", "py-4", "text-body5"],
        medium: ["py-12", "px-20"],
      },
    },
    defaultVariants: {
      color: "primary",
      size: "medium",
    },
  }
);

type HTMLButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, "size">;

type ButtonVariantsProps = VariantProps<typeof button>;

type Props = HTMLButtonProps & ButtonVariantsProps;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    { className, color, size, children, type = "button", ...restProps },
    ref
  ) => {
    return (
      <button
        type={type as any}
        ref={ref}
        className={`${button({ color, size })} ${className}`}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export function getButtonStyleClassNames(props?: ButtonVariantsProps) {
  const { color = "primary", size = "medium" } = props ?? {};
  return button({ color, size });
}

export default Button;
