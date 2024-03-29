"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link>;

type Props = LinkProps & {
  activeClassName?: string | undefined;
  isExternal?: boolean;
};

export default function NavLink({
  className,
  isExternal,
  activeClassName,
  children,
  ...props
}: Props) {
  const currentRoute = usePathname();

  const finalClasses = `${className} ${
    currentRoute === props.href ? activeClassName : ""
  }`;

  return (
    <Link
      {...props}
      className={finalClasses}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </Link>
  );
}
