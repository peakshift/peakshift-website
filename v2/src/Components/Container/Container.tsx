import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  wide?: boolean;
  className?: string;
}

export default function Container({ children, wide, className }: Props) {
  return (
    <div
      className={`page-container 
      ${wide && "wide"} ${className}`}
    >
      {children}
    </div>
  );
}
