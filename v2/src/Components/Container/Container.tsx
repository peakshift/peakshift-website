import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  wide?: boolean;
  containerClassName?: string;
  className?: string;
}

export default function Container({
  children,
  wide,
  className,
  containerClassName,
}: Props) {
  return (
    <div
      className={`page-container 
      ${wide && "wide"} ${containerClassName}`}
    >
      <div className={className}>{children}</div>
    </div>
  );
}
