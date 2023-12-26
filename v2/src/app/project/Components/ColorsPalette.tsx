import { condensedHeadings } from "@/assets/fonts";
import React from "react";

interface Props {
  colors: {
    backgroundInCYMK: [number, number, number, number];
    textInHex: string;
    borderInHex?: string;
  }[];
}

export default function ColorsPalette({ colors }: Props) {
  return (
    <ul
      className={`${condensedHeadings.className} grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] font-light`}
    >
      {colors.map(({ backgroundInCYMK, textInHex, borderInHex }, idx) => {
        const rgb = convertCYMKToRGB(backgroundInCYMK);
        const hex = convertRGBToHex(rgb);

        return (
          <li
            key={idx}
            style={{
              backgroundColor: hex,
              color: textInHex,
              ...(borderInHex && { border: `1px solid ${borderInHex}` }),
              fontSize: "clamp(0.7rem, 0.56rem + 1.2vw, 2rem)",
            }}
            className="p-8 md:p-16 lg:p-48 uppercase flex-1 break-words"
          >
            <p>
              CMYK {backgroundInCYMK[0]}-{backgroundInCYMK[1]}-
              {backgroundInCYMK[2]}-{backgroundInCYMK[3]}
            </p>
            <p>
              RGB {rgb[0]}-{rgb[1]}-{rgb[2]}
            </p>
            <p>HEX {hex.startsWith("#") ? hex.slice(1) : hex}</p>
          </li>
        );
      })}
    </ul>
  );
}

function convertCYMKToRGB(cmyk: readonly [number, number, number, number]) {
  const [c, m, y, k] = cmyk.map((v) => v / 100);
  const r = Math.round(255 * (1 - c) * (1 - k));
  const g = Math.round(255 * (1 - m) * (1 - k));
  const b = Math.round(255 * (1 - y) * (1 - k));
  return [r, g, b] as const;
}

function convertRGBToHex(rgb: readonly [number, number, number]) {
  const [r, g, b] = rgb;
  const hex =
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}
