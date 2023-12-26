import { StaticImageData } from "next/image";

import AdoptingBitcoinImage from "@/assets/images/projects/adopting-bitcoin.jpg";

type Project = {
  title: string;
  slug: string;
  tagline: string;
  tags: string[];
  image: StaticImageData;
  backgroundColor?: string;
  backgroundImage?: string;
};

export const projects: Project[] = [
  {
    title: "Adopting bitcoin el salvador 2023",
    slug: "adopting-bitcoin",
    tagline: "branding freedom money",
    tags: ["experience", "brand"],
    backgroundColor: "#EADC72",
    image: AdoptingBitcoinImage,
  },
];
