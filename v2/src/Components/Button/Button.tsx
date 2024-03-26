import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const button = cva(
  ["inline-flex", "items-center", "justify-between", "gap-12"],
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

type HTMLButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "size"
>;
type HTMLAnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "size"
>;

type ButtonVariantsProps = VariantProps<typeof button>;

type Props = (HTMLButtonProps & HTMLAnchorProps) & ButtonVariantsProps;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ className, color, size, children, type, href, ...restProps }, ref) => {
    const isAnchor = !!href;

    if (isAnchor) {
      return (
        <a
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={`${button({ color, size })} ${className}`}
          {...restProps}
        >
          {children}
        </a>
      );
    } else {
      return (
        <button
          type={type}
          ref={ref as React.Ref<HTMLButtonElement>}
          className={`${button({ color, size })} ${className}`}
          {...restProps}
        >
          {children}
        </button>
      );
    }
  }
);

Button.displayName = "Button";

export function getButtonStyleClassNames(props?: ButtonVariantsProps) {
  const { color = "primary", size = "medium" } = props ?? {};
  return button({ color, size });
}

export default Button;
