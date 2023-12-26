"use client";
import { useLayoutEffect } from "react";

interface Props {
  backgroundColor: string;
  textColor: string;
  frameColor: string;
}

export default function SetPageColor({
  backgroundColor,
  textColor,
  frameColor,
}: Props) {
  useLayoutEffect(() => {
    document.body.style.setProperty("--page-bg-color", backgroundColor);
    document.body.style.setProperty("--text-color", textColor);
    document.body.style.setProperty("--frame-color", frameColor);

    return () => {
      document.body.style.setProperty("--page-bg-color", "");
      document.body.style.setProperty("--text-color", "");
      document.body.style.setProperty("--frame-color", "");
    };
  }, []);

  return null;
}
