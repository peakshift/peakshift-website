"use client";
import { useLayoutEffect } from "react";

interface Props {
  color: string;
}

export default function SetPageColor({ color }: Props) {
  useLayoutEffect(() => {
    // set color of --page-bg-color to yellow
    document.body.style.setProperty("--page-bg-color", color);
    // set color of --text-color to black
    document.body.style.setProperty("--text-color", "black");

    return () => {
      // set color of --page-bg-color to white
      document.body.style.setProperty("--page-bg-color", "white");
      // set color of --text-color to black
      document.body.style.setProperty("--text-color", "black");
    };
  }, [color]);

  return null;
}
