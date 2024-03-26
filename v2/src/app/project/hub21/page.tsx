import Container from "@/Components/Container/Container";
import React from "react";
import SetPageColor from "../Components/SetPageColor";
import Image from "next/image";
import { MdBolt } from "react-icons/md";
import FirstPhotoImage from "./assets/first-photo.png";
import CrossHairsImage from "./assets/cross-hairs.svg";
import AsterixLogo from "./assets/asterix-logo.svg";
import WebsiteImage from "./assets/website.png";
import Logo from "./assets/logo-design.svg";
import LogoWireframe from "./assets/logo-design--wireframe.svg";
import AdoptingBitcoinPosterImage from "./assets/adopting-bitcoin-poster.jpg";
import ScatteredCardsImage from "./assets/scattered-cards.png";
import MerchImage from "./assets/merch.png";
import "./page.styles.css";

import { condensedHeadings, monoText, serifText } from "@/assets/fonts";
import ColorsPalette from "../Components/ColorsPalette";
import { Metadata } from "next";
import ProjectsSelect from "@/Components/ProjectsSelect/ProjectsSelect";
import FadeIn from "../Components/FadeIn";

export const metadata: Metadata = {
  title: "HUB21",
  description: "Designing a physical innovation space",
};

export default function HUB21Page() {
  return (
    <FadeIn>
      <Container id="hub21-page" className="overflow-hidden">
        <section
          id="project-header"
          className={`${monoText.className} uppercase flex flex-col gap-36 py-80`}
        >
          <h1 className={`text-body1 md:text-[72px]`}>
            Designing a hackerspace
            <br />
            in the center of Belgrade
          </h1>
          <ul className={`flex text-body5 md:text-h2 gap-36`}>
            {projectData.tags.map((tag, idx) => (
              <li key={idx}>
                <span className="mb-36">/</span> <span>{tag}</span>
              </li>
            ))}
          </ul>
          <p className="flex text-body5 md:text-body2 font-medium">
            <span
              className="origin-top-left"
              style={{
                transform: "rotate(90deg) translate(4px,-100%)",
              }}
            >
              {projectData.year}
            </span>{" "}
            <span>client &mdash; {projectData.client}</span>
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-x-100 gap-y-24 py-40 relative">
          <div>
            <Image src={FirstPhotoImage} alt="Photo of the space" />
            <Image
              src={CrossHairsImage}
              alt="Lines"
              className="absolute top-0 left-0 md:left-100 md:-translate-x-1/2 md:-translate-y-1/4 pointer-events-none"
            />
          </div>
          <div className="col-span-2">
            <p
              className={`${serifText.className} text-body4 md:text-body1 pb-24`}
            >
              HUB21 is a non-profit association in Belgrade dedicated to
              education, training, and community-building within the global
              Bitcoin design and development ecosystem. Founded by 2 prominant
              local bitcoiners and Johns, the founder of PEAK SHIFT, HUB21 aims
              to provide a welcoming space for professionals and creatives from
              various fields to collaborate and innovate.
            </p>
            <p
              className={`${serifText.className} text-body4 md:text-body1 pb-2`}
            >
              During the planning phase of HUB21, we encountered several unique
              challenges that required creative solutions. One significant
              challenge was the constraint of a limited budget, coupled with the
              nascent Bitcoin ecosystem in Belgrade. Unlike more established
              tech hubs, such as Silicon Valley, Belgrade primarily relies on
              outsourced tech talent, limiting the local entrepreneur
              landscape's innovation potential.
            </p>
            <div className="flex justify-end mt-24">
              <Image src={AsterixLogo} alt="Asterix Logo" />
            </div>
          </div>
        </section>
        <section className="py-40 full-bleed">
          <div className="max-w-[1440px] mx-auto">
            <ColorsPalette
              colors={[
                {
                  backgroundInCYMK: [7, 0, 70, 2],
                  textInHex: "#000",
                  borderInHex: "#000",
                },
                {
                  backgroundInCYMK: [0, 0, 0, 100],
                  textInHex: "#E8FA48",
                  borderInHex: "#000",
                },
                {
                  backgroundInCYMK: [0, 0, 0, 0],
                  textInHex: "#000",
                  borderInHex: "#000",
                },
              ]}
            />
          </div>
        </section>
        <section className="py-80">
          <div
            className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
          >
            <h2
              className={`${condensedHeadings.className} text-h3 md:text-[48px] uppercase`}
            >
              How Might We Establish HUB21 as the Premier Destination for
              Freedom Tech in Belgrade?
            </h2>
            <p className="text-body4 md:text-body1">
              To address the challenges of limited budget and the nascent
              Bitcoin ecosystem in Belgrade, the HUB21 team adopted a strategic
              approach focused on inclusivity and approachability in the
              branding. Recognizing the importance of creating an environment
              that appeals to individuals beyond the deeply technical, vibrant
              and youthful colors, such as bright green and yellow, coupled with
              a strong black for typography, were selected. This choice aimed to
              create a welcoming atmosphere for individuals from diverse
              backgrounds, regardless of their familiarity with Bitcoin.
            </p>
          </div>
        </section>
        <section className="py-40 md:py-80">
          <div className="flex justify-center">
            <div className="w-[120%] shrink-0 flex gap-24 ">
              <Image src={LogoWireframe} alt="Wireframe" className="min-w-0" />
              <Image src={Logo} alt="Logo" className="min-w-0" />
              <Image src={LogoWireframe} alt="Wireframe" className="min-w-0" />
            </div>
          </div>
        </section>
        <section className="md:py-80 flex flex-col justify-center items-center">
          <Image
            src={WebsiteImage}
            alt="HUB21 Website Design"
            className="w-full max-w-[1440px]"
          />
        </section>
        <section className="py-80">
          <h2
            className={`${condensedHeadings.className} text-h3 md:text-[48px] uppercase`}
          >
            Enhancing Well-being and Productivity with Biophilic Design
          </h2>
          <div
            className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
          >
            <h3 className="font-light italic text-body4 md:text-h1 leading-[1]">
              Biophilic Design Elements
            </h3>
            <p className="text-body4 md:text-body1">
              Recognizing the positive impact of nature on well-being and
              productivity, HUB21 made deliberate efforts to incorporate
              biophilic design elements throughout the space, despite challenges
              with natural light. In an older building situated in the center of
              the city, accessibility was prioritized, but limitations in
              natural light penetration were addressed creatively.
            </p>
          </div>
          <div
            className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
          >
            <h3 className="font-light italic text-body4 md:text-h1 leading-[1]">
              Innovative Solutions in a Challenging Environment
            </h3>
            <p className="text-body4 md:text-body1">
              Despite the limited natural light due to neighboring buildings
              obstructing windows on three sides of the main workspace, HUB21
              implemented innovative solutions to create a welcoming and
              inspiring environment. Indoor plants were strategically placed to
              bring elements of nature indoors and improve air quality. Mirrors
              were strategically positioned to reflect available natural light,
              enhancing the perception of space and brightness.
            </p>
          </div>
          <div
            className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
          >
            <h3 className="font-light italic text-body4 md:text-h1 leading-[1]">
              Integration of Artificial Lighting
            </h3>
            <p className="text-body4 md:text-body1">
              To compensate for the lack of natural light, HUB21 invested in
              high-quality artificial lighting solutions. LED lighting fixtures
              with adjustable brightness and color temperature were installed
              throughout the space to mimic natural daylight as closely as
              possible. Task lighting was also provided to ensure optimal
              visibility and comfort for members working on detailed tasks.
            </p>
          </div>
          <div
            className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
          >
            <h3 className="font-light italic text-body4 md:text-h1 leading-[1]">
              Materials Inspired by Nature
            </h3>
            <p className="text-body4 md:text-body1">
              In addition to incorporating living elements such as plants, HUB21
              selected materials and finishes inspired by nature to create a
              sense of connection to the outdoors. Earthy tones, natural wood
              accents, and textured surfaces were used to evoke a sense of
              warmth and tranquility, despite the limitations of the building's
              environment.
            </p>
          </div>
          <div
            className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
          >
            <h3 className="font-light italic text-body4 md:text-h1 leading-[1]">
              Creating a Calming and Inspiring Environment
            </h3>
            <p className="text-body4 md:text-body1">
              Despite the challenges posed by the building's location and
              limited natural light, HUB21 succeeded in creating a calming and
              inspiring environment for its members. By carefully integrating
              biophilic design elements, leveraging innovative lighting
              solutions, and selecting materials that evoke nature, HUB21
              transformed its space into a welcoming oasis in the heart of the
              city, where creativity and productivity flourish.
            </p>
          </div>
        </section>
        <section className="py-80">
          {" "}
          <h2
            className={`${condensedHeadings.className} text-h3 md:text-[48px] uppercase mb-24`}
          >
            OTHER PROJECTS
          </h2>
          <ProjectsSelect excludeProjects={["hub21"]} />
        </section>
      </Container>
    </FadeIn>
  );
}

const projectData = {
  tags: ["brand", "space", "strategy"],
  client: "HUB21 (NON-PROFIT)",
  year: "2023",
};
