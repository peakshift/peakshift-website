import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function FadeIn({ children }: Props) {
  return <div className="fade-in">{children}</div>;
}
