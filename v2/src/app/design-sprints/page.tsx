"use client";
import React, { useState } from "react";
import Container from "@/Components/Container/Container";
import { condensedHeadings, monoText, serifText } from "@/assets/fonts";
import Button from "@/Components/Button/Button";
import { FiChevronRight } from "react-icons/fi";
import TrackAndFieldImage from "./assets/track-and-field.svg";
import ClientLogos from "./assets/logos.png";
import QuoteBumi from "./assets/bumi.jpg";
import Image from "next/image";
import DiagramImage from "./assets/diagram.svg";
import DoodleImage from "./assets/long-term-goals.svg";
import PatentImage from "./assets/patent.svg";
import RedefineSprintImage from "./assets/redefine-sprints.svg";

const sprintSchedule = [
  {
    day: "01",
    name: "Define the challenge",
    duration: "3 hours",
    durationISO: "PT3H",
  },
  {
    day: "02",
    name: "Mapping + customer journey + focus",
    duration: "3 hours",
    durationISO: "PT3H",
  },
  {
    day: "03",
    name: "Focus + story board",
    duration: "3 hours",
    durationISO: "PT3H",
  },
  {
    day: "04",
    name: "Prototype",
    duration: "8 hours",
    durationISO: "PT8H",
  },
  {
    day: "05",
    name: "Prototype",
    duration: "8 hours",
    durationISO: "PT8H",
  },
  {
    day: "06",
    name: "Prototype",
    duration: "8 hours",
    durationISO: "PT8H",
  },
  {
    day: "07",
    name: "User testing",
    duration: "2 days",
    durationISO: "P2D",
  },
  {
    day: "10",
    name: "Deliver Report",
    duration: "",
    durationISO: "",
  },
];

enum Service {
  ProductDesignSprint = "Product Design Sprint",
  VisionSprint = "Vision Sprint",
  BrandSprint = "Brand Sprint",
  DesignSprint = "Design Sprint",
  Branding = "Branding",
  WebsiteDesign = "Website Design",
  DesignContribution = "Design Contribution",
  WebsiteDevelopment = "Website Development",
  Hackathon = "Hackathon",
  Grant = "Grant",
  Design = "Design",
  WebDevelopment = "Web Development",
  ProductDevelopment = "Product Development",
  PitchDeck = "Pitch Deck",
  SmartContractTesting = "Smart Contract Testing",
}

type Client = {
  title: string;
  year: string;
  services: Service[];
  tags: string[];
  status: string;
  exitTo?: string;
  externalLink?: string;
};

const clients: Client[] = [
  {
    title: "THE BITCOIN COMPANY",
    year: "2021-2022",
    services: [
      Service.ProductDesignSprint,
      Service.VisionSprint,
      Service.BrandSprint,
    ],
    tags: ["Bitcoin"],
    status: "Active",
  },
  {
    title: "ALBY",
    year: "2021",
    services: [Service.DesignSprint],
    tags: [],
    status: "Active",
  },
  {
    title: "BITCOIN CONNECT",
    year: "2024",
    services: [Service.DesignSprint],
    tags: ["Bitcoin"],
    status: "Active",
  },
  {
    title: "GALOY",
    year: "2023",
    services: [Service.Branding, Service.WebsiteDesign],
    tags: ["Bitcoin"],
    status: "Active",
  },
  {
    title: "HUB21",
    year: "2022",
    services: [Service.DesignSprint],
    tags: ["Bitcoin"],
    status: "Active",
  },
  {
    title: "FEDI",
    year: "2023",
    services: [Service.DesignSprint],
    tags: ["AI"],
    status: "Active",
    externalLink: "https://bolt.fun/tournaments/ai4all",
  },
  {
    title: "NOSTR.WORLD",
    year: "2023",
    services: [Service.Hackathon],
    tags: ["Bitcoin"],
    status: "Active",
    externalLink: "https://bolt.fun/tournaments/nostr-world",
  },
  {
    title: "OPEN SATS",
    year: "2021",
    services: [Service.DesignContribution],
    tags: ["Bitcoin"],
    status: "Active",
    externalLink: "https://opensats.org",
  },
  {
    title: "HRF",
    year: "2023",
    services: [Service.WebsiteDevelopment, Service.Branding],
    tags: ["CBDC"],
    status: "Active",
  },
  {
    title: "SPIRAL",
    year: "2020",
    services: [Service.Grant],
    tags: ["Bitcoin"],
    status: "Active",
  },
  {
    title: "BOLT.OBSERVER",
    year: "2023",
    services: [Service.DesignSprint],
    tags: [],
    status: "Active",
  },
  {
    title: "PROMOTUS",
    year: "2023",
    services: [Service.WebDevelopment],
    tags: [],
    status: "Active",
  },
  {
    title: "SSUP IMAGE",
    year: "2016",
    services: [Service.Design, Service.Branding, Service.WebDevelopment],
    tags: [],
    status: "Active",
  },
  {
    title: "DIEGO VERGES",
    year: "2016",
    services: [Service.Branding, Service.WebDevelopment],
    tags: [],
    status: "Active",
  },
  {
    title: "LEMARIKU",
    year: "2015",
    services: [Service.Branding, Service.ProductDevelopment, Service.PitchDeck],
    tags: [],
    status: "Active",
  },
  {
    title: "DIGITALES WIEN",
    year: "2019",
    services: [Service.SmartContractTesting],
    tags: [],
    status: "Active",
  },
  {
    title: "RAISE AFRICA",
    year: "2020-2022",
    services: [Service.DesignSprint],
    tags: [],
    status: "Active",
  },
];

type Props = {
  data: Client[];
};

const ClientList: React.FC<Props> = ({ data }) => {
  const [filter, setFilter] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  const years = Array.from(new Set(data.map((item) => item.year))).filter(
    Boolean
  );

  const filteredData = data.filter((item) => {
    if (!filter && !selectedYear) return true;
    if (filter && selectedYear) {
      return (
        item.services.includes(filter as Service) &&
        item.year.includes(selectedYear)
      );
    } else if (filter) {
      return item.services.includes(filter as Service);
    } else if (selectedYear) {
      return item.year.includes(selectedYear);
    }
    return true;
  });

  return (
    <section className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <h4
        className={`${serifText.className} text-6xl font-light leading-loose italic text-center`}
      >
        Past Clients <span className="inline-block amp">&amp;</span>{" "}
        Collaborators
      </h4>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="columns-1 sm:columns-2">
          <div>
            <div className="mb-4">
              <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter by services"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="">All Years</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ul>
            {filteredData.map((item, index) => (
              <li key={index} className="flex justify-between py-2">
                <div>
                  <strong>{item.title}</strong>
                  {item.status && <span className="badge">{item.status}</span>}
                  {item.services.length > 0 &&
                    item.services.map((service, index) => (
                      <span key={index} className="badge">
                        {service}
                      </span>
                    ))}
                  {item.tags.length > 0 &&
                    item.tags.map((tag, index) => (
                      <span key={index} className="badge">
                        {tag}
                      </span>
                    ))}
                </div>
                <div className="text-right">
                  {item.year && <span>{item.year}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type Sprint = {
  type: String;
  duration: String;
  title: String;
  backgroundColour: "black" | "primary" | "white";
  backgroundImage: any;
  diagramImage: any;
  doodleImage: any;
};

const SprintType: React.FC<Sprint> = ({
  type,
  duration,
  title,
  backgroundColour,
  backgroundImage,
  diagramImage,
  doodleImage,
}) => {
  const textColorClass =
    backgroundColour === "black" || backgroundColour === "primary"
      ? "text-white"
      : "text-black";

  return (
    <section
      className={`w-full bg-${backgroundColour} ${textColorClass} box-border overflow-hidden flex flex-col items-start justify-start pt-[30px] px-[21px] pb-[21px] gap-[275px] tracking-[normal] border-[1px] border-solid border-black mq302:gap-[137px_275px]`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full text-left text-[34.3px] font-ibm-plex-sans-condensed mq562:gap-[22px_44px]">
        <header className="self-stretch h-[13px] relative text-lg leading-[120%] uppercase font-bold font-ibm-plex-mono text-left flex items-center whitespace-nowrap z-[1]">
          {type}
        </header>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <p className="flex-1 relative leading-[110%] uppercase flex items-center max-w-full z-[1]">
            {title}
          </p>
          <div className="h-[512px] w-[382px] !m-[0] absolute right-[-12px] bottom-[-373px] flex flex-row items-end justify-end py-5 px-3 box-border text-right text-lg font-ibm-plex-mono">
            <Image
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src={backgroundImage}
            />
            <Image
              className="h-[101.9px] w-[265.2px] absolute !m-[0] top-[163px] left-[-43.6px] z-[1]"
              alt=""
              src={diagramImage}
            />
            <div className="text-right uppercase relative tracking-[0.1em] leading-[150%] font-medium flex items-center shrink-0 z-[1]">
              {duration}
            </div>
          </div>
        </div>
      </div>
      <Image
        className="w-[179px] h-[78px] relative"
        loading="lazy"
        alt=""
        src={doodleImage}
      />
    </section>
  );
};

export default function DesignSprints() {
  return (
    <Container id="design-sprints" className="overflow-hidden">
      <header
        className={`min-h-[min(85vh,1440px)] flex flex-col justify-center relative py-16 isolate z-10`}
      >
        <h1
          className={`${serifText.className} text-primary sm:text-6xl text-5xl text-center font-serif italic z-10`}
        >
          — Align on vision <span className="inline-block amp">&amp;</span> test
          solutions before touching a line of code
        </h1>
        <p className="flex justify-center">
          <Button className="mt-40 uppercase">
            Get in touch <FiChevronRight />
          </Button>
        </p>
        <Image
          src={TrackAndFieldImage}
          alt="Track & Field"
          className="mx-auto mt-8 md:absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
      </header>
      <section className="pt-20 pb-40 sm:py-80">
        <div
          className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
        >
          <h3 className="italic text-h1 md:text-6xl leading-[1] font-extralight">
            What is a Design Sprint?
          </h3>
          <p className="text-body4 md:text-body1 font-regular">
            Our flavour of Google Ventures Design Sprint. This 8-day workshop
            uses design thinking to produce a realistic prototype that allows us
            to gain insight as an outside contractor, define behavioural
            requirements, and perform User Testing on an early visual prototype
            in order to gather real customer feedback.
          </p>
        </div>
      </section>
      <section className="py-40 sm:py-80">
        <h2
          className={`${condensedHeadings.className} text-6xl sm:text-8xl font-extralight uppercase pb-40`}
        >
          <span className="sm:block">Choose a sprint&nbsp;</span>
          <span className="sm:block">that fits your vision</span>
        </h2>
        <header className="grid grid-cols-3 gap-5 pb-40">
          <div className="text-body4 md:text-body1 col-start-2 col-span-2">
            <p className={`${serifText.className} mb-20 font-regular`}>
              This 8-day process uses design thinking to produce a realistic
              prototype, define behavioural requirements, and perform User
              Testing on a early visual prototype in order to gather real user
              feedback.
            </p>
          </div>
        </header>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          <SprintType
            type="brand sprint"
            duration="1 Week"
            title="creating your unique brand identity"
            backgroundColour="black"
            backgroundImage={PatentImage}
            diagramImage={DiagramImage}
            doodleImage={DoodleImage}
          />
          <SprintType
            type="product design sprint"
            duration="2 Weeks"
            title="Build winning products"
            backgroundColour="primary"
            backgroundImage={PatentImage}
            diagramImage={DiagramImage}
            doodleImage={DoodleImage}
          />
          <SprintType
            type="Vision Sprint"
            duration="2 Days"
            title="Crafting the big picture"
            backgroundColour="primary"
            backgroundImage={PatentImage}
            diagramImage={DiagramImage}
            doodleImage={DoodleImage}
          />
          <SprintType
            type="freedom tech sprint"
            duration="2 Weeks"
            title="decentralised innovation"
            backgroundColour="white"
            backgroundImage={PatentImage}
            diagramImage={DiagramImage}
            doodleImage={DoodleImage}
          />
          <SprintType
            type="ai sprint"
            duration="2 Weeks"
            title="exploring ai for enhanced ux"
            backgroundColour="white"
            backgroundImage={PatentImage}
            diagramImage={DiagramImage}
            doodleImage={DoodleImage}
          />
          <SprintType
            type="process sprint"
            duration="3 Days"
            title="optimising workflow efficiently"
            backgroundColour="white"
            backgroundImage={PatentImage}
            diagramImage={DiagramImage}
            doodleImage={DoodleImage}
          />
        </div>
        <div className="flex justify-center pt-80 pb-0">
          <Image src={RedefineSprintImage} alt="" className="" />
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center mb-24">
              <h4 className="uppercase text-2xl font-light">Alby</h4>
              <p
                className={`${serifText.className} text-2xl italic font-light leading-8 text-gray-900 sm:text-3xl sm:leading-10`}
              >
                The design sprint organised and lead by PEAK SHIFT was
                instrumental in building what now became Alby. It helped us to
                define the initial product scope, understand user needs and turn
                vague ideas into actionable product goals plus an initial design
                prototype
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image
                className="mx-auto h-80 w-80 border border-dotted border-black block p-0.5 mb-12"
                src={QuoteBumi}
                alt="Photo of Bumi"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-xl">
                <div className="text-gray-900 uppercase">Michael Bumann</div>
                <svg
                  viewBox="0 0 2 2"
                  width="3"
                  height="3"
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="text-gray-600 uppercase font-light">
                  Founder & CTO
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="text-center mb-24">
            <h4
              className={`${serifText.className} text-6xl font-light leading-loose italic text-primary`}
            >
              Get your vision out fast
            </h4>
            <p
              className={`text- uppercase font-light leading-8 text-gray-900 sm:text-2xl sm:leading-9`}
            >
              We have worked with founders and startups at early stages helping
              them prepare for fundraising, setup project and product management
              procedures, align executives and product teams, and helped tech
              and design teams ship better quality work faster
            </p>
            <p className="flex justify-center">
              <Image src={ClientLogos} alt="" height={120} />
            </p>
            <p className="flex justify-center">
              <Button className="mt-40 max-lg:w-full uppercase">
                Launch with the best <FiChevronRight />
              </Button>
            </p>
          </div>
        </div>
      </section>
      <ClientList data={clients} />
      <section className="pt-80">
        <div
          className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
        >
          <h3 className={`${condensedHeadings.className} text-h2 uppercase`}>
            How It Works?
          </h3>
          <div className="text-body4 md:text-body1">
            <p className="mb-20">
              This 8-day process uses design thinking to produce a realistic
              prototype, define behavioural requirements, and perform User
              Testing on a early visual prototype in order to gather real user
              feedback.
            </p>
            <p className="mb-20">
              The first three days require a couple hours of your involvement
              and focus — it is mandatory to the process and we’ve seen this
              upfront time investment gets everyone in alignment early with the
              project goals and avoids issues during the implementation phase.
            </p>
            <p className="mb-20">
              ‌To preserve time when coming to a decision we will utilise voting
              on suggestions offered by individuals, over lengthy discussions so
              you will have to select a single person on your team as “The
              Decider”. This person is able to veto certain decisions made by
              the group.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-80">
        <article
          itemScope
          itemType="http://schema.org/CreativeWork"
          className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
        >
          <header className="text-2xl font-bold mb-4">
            <h3
              className={`${condensedHeadings.className} text-h2 uppercase`}
              itemProp="name"
            >
              Timeline
            </h3>
          </header>
          <div>
            <meta
              itemProp="about"
              content="Design Sprint Activities Schedule"
            />
            <ol className="relative border-l border-gray-200 border-dotted">
              {sprintSchedule.map((event, index) => (
                <li
                  key={index}
                  itemProp="event"
                  itemScope
                  itemType="http://schema.org/Event"
                  className="mb-10 ml-4"
                >
                  <span className="flex absolute -left-8 justify-center items-center px-2 bg-white border border-gray-400 rounded text-xs font-mono uppercase">
                    Day {event.day}
                  </span>
                  <div className="ml-12">
                    <h3
                      itemProp="name"
                      className={`${condensedHeadings.className} uppercase text-lg font-normal text-gray-900`}
                    >
                      {event.name}
                    </h3>
                    {event.duration && (
                      <time
                        itemProp="duration"
                        dateTime={event.durationISO}
                        className={`${condensedHeadings.className} uppercase block text-sm font-normal text-gray-500`}
                      >
                        {event.duration}
                      </time>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </section>
    </Container>
  );
}
