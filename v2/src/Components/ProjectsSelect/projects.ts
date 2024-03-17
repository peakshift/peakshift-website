import { StaticImageData } from "next/image";

import HUB21Image from "@/assets/images/projects/hub21.jpg";
import AdoptingBitcoinImage from "@/assets/images/projects/adopting-bitcoin.jpg";
import AI4ALLImage from "@/assets/images/projects/ai4all.jpg";
import BoltFunImage from "@/assets/images/projects/bolt-fun.jpg";

type Project = {
  title: string;
  slug: string;
  tagline: string;
  tags: string[];
  image: StaticImageData;
  backgroundColor: string;
  frameColor: string;
  backgroundImage?: string;
  externalLink?: string;
};

export const projects: Project[] = [
  {
    title: "HUB21 hackerspace in Belgrade",
    slug: "hub21",
    tagline: "innovation space",
    tags: ["interior design", "brand", "vibes"],
    backgroundColor: "#E8FA48",
    frameColor: "#000",
    image: HUB21Image,
  },
  {
    title: "Adopting bitcoin el salvador 2023",
    slug: "adopting-bitcoin",
    tagline: "branding freedom money",
    tags: ["experience", "brand"],
    backgroundColor: "#EADC72",
    frameColor: "#000",
    image: AdoptingBitcoinImage,
  },
  {
    title: "AI4ALL",
    slug: "ai4all",
    tagline: "DEMOCRATISING ACCESS TO AI",
    tags: ["experience", "brand"],
    backgroundColor: "#FF6B00",
    frameColor: "#FF6B00",
    image: AI4ALLImage,
    externalLink: "https://bolt.fun/tournaments/ai4all",
  },
  {
    title: "BOLT.FUN",
    slug: "bolt-fun",
    tagline: "BUILDING A VIRTUAL INCUBATOR HELPING FOUNDERS GO FROM 0-1",
    tags: ["experience", "community"],
    backgroundColor: "#AF59FE",
    frameColor: "#AF59FF",
    image: BoltFunImage,
    externalLink: "https://bolt.fun",
  },
];
