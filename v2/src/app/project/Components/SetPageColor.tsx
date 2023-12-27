"use client";
import { useLayoutEffect } from "react";

interface Props {
  pageBackgroundColor: string;
  textColor: string;
  frameColor: string;
  footerBackgroundColor: string;
  footerTextColor: string;
}

export default function SetPageColor({
  pageBackgroundColor,
  textColor,
  frameColor,
  footerBackgroundColor,
  footerTextColor,
}: Props) {
  useLayoutEffect(() => {
    document.body.style.setProperty("--page-bg-color", pageBackgroundColor);
    document.body.style.setProperty("--text-color", textColor);
    document.body.style.setProperty("--frame-color", frameColor);
    document.body.style.setProperty("--footer-bg-color", footerBackgroundColor);
    document.body.style.setProperty("--footer-text-color", footerTextColor);

    return () => {
      document.body.style.setProperty("--page-bg-color", "");
      document.body.style.setProperty("--text-color", "");
      document.body.style.setProperty("--frame-color", "");
      document.body.style.setProperty("--footer-bg-color", "");
      document.body.style.setProperty("--footer-text-color", "");
    };
  }, [
    footerBackgroundColor,
    footerTextColor,
    frameColor,
    pageBackgroundColor,
    textColor,
  ]);

  return null;
}
