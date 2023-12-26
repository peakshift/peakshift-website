import Container from "@/Components/Container/Container";
import React from "react";
import SetPageColor from "../Components/SetPageColor";
import TicketsRow from "./TicketsRow";
import Image from "next/image";
import { MdBolt } from "react-icons/md";
import ALightningSummitinElSalvadorImage from "./assets/a-lightning-summit-in-el-salvador.png";
import LightningSummitLogo from "./assets/lightning-summit.svg";
import WebsiteImage from "./assets/website.png";
import LogoDesignImage from "./assets/logo-design.jpg";
import AdoptingBitcoingLogoWireframe from "./assets/adopting-bitcoin-logo-wireframe.svg";
import AdoptingBitcoinWireframe from "./assets/adopting-bitcoin-wireframe.svg";
import AdoptingBitcoinPosterImage from "./assets/adopting-bitcoin-poster.jpg";
import ScatteredCardsImage from "./assets/scattered-cards.png";
import MerchImage from "./assets/merch.png";

import { condensedHeadings, monoText, serifText } from "@/assets/fonts";
import ColorsPalette from "../Components/ColorsPalette";
import { Metadata } from "next";
import ProjectsSelect from "@/Components/ProjectsSelect/ProjectsSelect";

export const metadata: Metadata = {
  title: "Adopting Bitcoin",
  description: "Designing the largest Bitcoin conference in El Salvador",
};

export default function AdoptingBitcoinPage() {
  return (
    <>
      <SetPageColor
        backgroundColor={projectData.pageColor}
        frameColor={projectData.frameColor}
        textColor="#000"
      />
      <Container className="overflow-hidden">
        <section
          id="project-header"
          className={`${monoText.className} uppercase flex flex-col gap-36 py-80`}
        >
          <h1 className={`text-body1 md:text-[72px]`}>
            ADOPTING BITCOIN
            <br />
            2023 EL SALVADOR
          </h1>
          <ul className={`flex text-body5 md:text-h2 gap-36`}>
            {projectData.tags.map((tag, idx) => (
              <li key={idx}>
                <span className="mb-36">/</span> <span>{tag}</span>
              </li>
            ))}
          </ul>
          <p className="flex text-body6 md:text-body2 font-medium">
            <span
              className="origin-top-left"
              style={{
                transform: "rotate(90deg) translate(4px,-100%)",
              }}
            >
              {projectData.year}
            </span>{" "}
            <span>client - {projectData.client}</span>
          </p>
        </section>
        <section className="pt-64 pb-100 full-bleed">
          <TicketsRow />
          <p className="uppercase text-body6 md:text-body4 lg:text-h1 -rotate-[4deg] text-center my-36 font-bold flex items-center whitespace-nowrap gap-16 justify-center">
            designing the largest bitcoin conference{" "}
            <span>
              <MdBolt />
            </span>{" "}
            el salvador
          </p>
          <TicketsRow />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-100 gap-y-24 py-80">
          <div>
            <Image
              src={ALightningSummitinElSalvadorImage}
              alt="A Lightning Summit in El Salvador"
            />
          </div>
          <div>
            <p className={`${serifText.className} text-body1`}>
              In 2021, El Salvador sparked a revolution by becoming the first
              country to adopt Bitcoin as a legal tender. Galoy, now known as
              Blink, played a crucial role. Coinciding with the enactment of the
              Bitcoin Law in September 2021, the inaugural Adopting Bitcoin
              conference emerged as the platform.
              <br />
              <br />
              The Adopting Bitcoin 2021 conference was used to introduce, teach,
              and to expand on the prospects of Bitcoin. However, despite its
              success, navigating the complexities of Bitcoin acceptance still
              proved challenging for merchants and businesses. These challenges
              were exacerbated by the time disparity between the law’s
              announcement and its enforcement. It took months for the law to
              come into effect.
              <br />
              <br />
              Peak Shift continues the work of unraveling the complexities of
              Bitcoin to a broader audience through crafting user-friendly UX
              designs.
            </p>
            <div className="flex justify-end mt-24">
              <Image src={LightningSummitLogo} alt="Lightning Summit Logo" />
            </div>
          </div>
        </section>
        <section className="py-80">
          <h2
            className={`${condensedHeadings.className} text-h3 md:text-[48px] uppercase`}
          >
            DESIGNING AND BRANDING
            <br />
            FREEDOM MONEY
          </h2>
          <div
            className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-48`}
          >
            <p className="font-light italic text-body4 md:text-h1 leading-[1]">
              Our process
            </p>
            <p className="text-body4 md:text-body1">
              Peak Shift believes that designing smooth experiences is the key
              to Bitcoin&apos;s adoption. We are continuing the work started by
              Galoy, by focusing on enhancing the user experience needed to
              bring wider acceptance of Bitcoin.
              <br />
              <br />
              We are streamlining UX design that aims at giving merchants
              smoother, naturally flowing experiences tailored to their specific
              needs. Besides fluid experiences, our designs leave a lasting
              impression, and always adhere to the long-term goals and visions
              of our clients.
            </p>
          </div>
        </section>
        <section className="md:py-80 full-bleed flex flex-col justify-center items-center">
          <Image
            src={WebsiteImage}
            alt="Adopting Bitcoin website screenshots"
            className="w-[110%] max-w-[1440px]"
          />
        </section>
        <section className="py-40 md:py-80">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={LogoDesignImage}
              alt="Logo Design"
              className="max-w-[min(100%,600px)] "
            />
          </div>
          <div className="flex justify-center">
            <div className="w-[120%] shrink-0 flex gap-24 ">
              <Image
                src={AdoptingBitcoinWireframe}
                alt="Wireframe"
                className="min-w-0"
              />
              <Image
                src={AdoptingBitcoingLogoWireframe}
                alt="Wireframe"
                className="min-w-0"
              />
              <Image
                src={AdoptingBitcoinWireframe}
                alt="Wireframe"
                className="min-w-0"
              />
            </div>
          </div>
        </section>
        <section className="py-80">
          <h2
            className={`${condensedHeadings.className} text-h3 md:text-[48px] uppercase`}
          >
            LOGO DESIGN
          </h2>
          <div
            className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-48`}
          >
            <p className="font-light italic text-body4 md:text-h1 leading-[1]">
              Exstensibility and future
            </p>
            <p className="text-body4 md:text-body1">
              The client saw the 3 lightning bolts as the most critical part of
              the Adopting Bitcoin Brand design. We therefore designed the logo
              to be modern, fun, and adaptable. Extensibility was an essential
              idea, since the conference could one day be franchised.
              <br />
              <br />
              The other part of the logo, the iconic volcano representation,
              though unique to El Salvador, was designed to be replaceable for
              conferences to other locations.
              <br /> We plan and create not only for the present but also for
              the future.
            </p>
          </div>
        </section>
        <section className="py-80 full-bleed">
          <div className="max-w-[1440px] mx-auto">
            <ColorsPalette
              colors={[
                {
                  backgroundInCYMK: [0, 7, 56, 7],
                  textInHex: "#000",
                  borderInHex: "#BAA51B",
                },

                {
                  backgroundInCYMK: [0, 0, 0, 58],
                  textInHex: "#EEDB5F",
                },

                {
                  backgroundInCYMK: [0, 26, 65, 0],
                  textInHex: "#000",
                },

                {
                  backgroundInCYMK: [0, 0, 0, 100],
                  textInHex: "#EEDB5F",
                },
              ]}
            />
          </div>
        </section>
        <section className="pt-80">
          <h2
            className={`${condensedHeadings.className} text-h3 md:text-[48px] uppercase`}
          >
            SOCIAL MEDIA TEMPLATES
          </h2>
          <div
            className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-48`}
          >
            <p className="font-light italic text-body4 md:text-h1 leading-[1]">
              Designing for presence{" "}
            </p>
            <p className="text-body4 md:text-body1">
              Our client needed to generate graphics for social media by
              themselves. Acknowledging their need for rapid and efficient
              content creation, we developed several custom-tailored templates.
              <br />
              <br />
              These templates will empower the client to generate engaging and
              consistent graphics independently, thus ensuring a strong online
              presence leading up to and during the event.
            </p>
          </div>
        </section>
        <section className="full-bleed max-w-[1440px] mx-auto flex flex-col justify-center items-center">
          <div className="w-[110%]">
            <Image
              src={ScatteredCardsImage}
              alt=""
              className="translate-y-1/4"
            />
            <Image
              src={AdoptingBitcoinPosterImage}
              alt=""
              className="relative"
            />
          </div>
        </section>
        <section className="pt-80 mb-100">
          <h2
            className={`${condensedHeadings.className} text-h3 md:text-[48px] uppercase`}
          >
            Ticketing system and graphics
          </h2>
          <div
            className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-48`}
          >
            <p className="font-light italic text-body4 md:text-h1 leading-[1]">
              Aesthetics + functionality
            </p>
            <p className="text-body4 md:text-body1">
              Our comprehensive brand design strategy extended to not only the
              graphics, but the client’s Pretix ticketing system. We designed a
              ticketing system that seamlessly blends crisp design and
              functionality in one.
              <br />
              <br />
              The result is a cohesive and immersive experience for
              participants, streamlining the registration process that goes
              beyond the eye-catching visuals.
            </p>
          </div>
        </section>
        <section className="py-80 relative mt-48 full-bleed">
          <div className="absolute top-0 left-0 flex flex-col gap-24 -z-10">
            <TicketsRow />
            <TicketsRow />
            <TicketsRow />
            <TicketsRow />
            <div className="py-48"></div>
          </div>
          <Image
            src={MerchImage}
            alt=""
            className="relative max-w-[min(100%,1440px)] mx-auto px-24 z-10"
          />
          <div className="flex flex-col gap-24">
            <TicketsRow />
            <TicketsRow />
          </div>
        </section>
        <section className="py-80">
          {" "}
          <h2
            className={`${condensedHeadings.className} text-h3 md:text-[48px] uppercase mb-24`}
          >
            OTHER PROJECTS
          </h2>
          <ProjectsSelect />
        </section>
      </Container>
    </>
  );
}

const projectData = {
  pageColor: "#EEDB5F",
  frameColor: "#000",
  tags: ["branding", "identity", "website"],
  client: "Galoy INC",
  year: "2023",
};
