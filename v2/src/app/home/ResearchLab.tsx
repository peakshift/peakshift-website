"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { CgFileDocument } from "react-icons/cg";
import { FiChevronRight, FiUsers, FiEyeOff, FiSettings } from "react-icons/fi";
import { AiOutlineScan, AiOutlineWallet, AiOutlineSwap } from "react-icons/ai";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

import Container from "@/Components/Container/Container";
import { condensedHeadings, serifText } from "@/assets/fonts";
import BgImage from "@/assets/images/research-tool.svg";
import Button from "@/Components/Button/Button";

export default function ResearchLab() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
  });

  return (
    <section
      className="md:min-h-[min(500vh,6000px)] relative py-80 isolate z-10"
      ref={container}
    >
      <div className="relative md:sticky top-0 overflow-hidden">
        <Image
          src={BgImage}
          alt=""
          className="absolute z-0 top-0 
          max-md:right-0 max-md:translate-x-1/2 max-md:opacity-60
          md:left-0 md:-translate-x-1/2 md:h-full"
        />
        <Container className="relative">
          <div className="flex max-md:flex-wrap justify-between gap-40 min-h-[100vh] w-full items-center ">
            <div className="max-w-[480px]">
              <h2
                className={`${condensedHeadings.className} text-primary text-h2 md:text-[48px] font-light`}
              >
                RESEARCH LAB
              </h2>
              <p
                className={`${serifText.className} italic text-body2 md:text-body1`}
              >
                We mix technical knowledge with human centred design in order to
                discover design patterns for bleeding edge technologies. in
                order to make them more accessible to the mass market.
              </p>
              <Button className="mt-40 max-md:w-full">
                <CgFileDocument /> Read our research <FiChevronRight />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-32">
              <ul className="flex flex-col gap-32">
                {researches.slice(0, 3).map((research, i) => (
                  <ResearchCard
                    key={research.title}
                    research={research}
                    index={i}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </ul>
              <ul className="flex flex-col gap-32 md:mt-64">
                {researches.slice(3).map((research, i) => (
                  <ResearchCard
                    key={research.title}
                    research={research}
                    index={i + 3}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function ResearchCard({
  research,
  scrollYProgress,
  index,
}: {
  research: (typeof researches)[0];
  scrollYProgress: MotionValue<number>;
  index: number;
}) {
  const segmentLength = 1 / researches.length;
  const segmentStart = segmentLength * index;
  const segmentEnd = segmentStart + segmentLength;

  const opacity = useTransform(
    scrollYProgress,
    [segmentStart, segmentEnd],
    [0, 1]
  );

  const y = useTransform(scrollYProgress, [segmentStart, segmentEnd], [200, 0]);

  return (
    <motion.li
      initial={{ opacity: 0, y: 200 }}
      style={{ opacity, y }}
      key={research.title}
      className={`p-16 min-w-[192px] border border-gray-800 bg-white border-dashed flex flex-col gap-12`}
    >
      <research.icon />
      <p className="text-body3 text-gray-800 uppercase font-normal">
        {research.title}
      </p>
      <p
        className={`text-body5 text-gray-800 ${serifText.className} italic leading-6`}
      >
        {research.description}
      </p>
    </motion.li>
  );
}

const researches = [
  {
    title: "Contacts",
    icon: FiUsers,
    description:
      "Using contacts as a foundation for private coin selection, channel management, and payment requests.",
  },
  {
    title: "Privacy in bitcoin",
    icon: FiEyeOff,
    description:
      "Exploring coinjoins, payjoins, wabisabi 2.0, and more privacy focused techniques for bitcoin wallets and exchanges.",
  },
  {
    title: "Payment requests",
    icon: AiOutlineScan,
    description:
      "Unifying payment request types to provide quality assurance + private fallbacks in bitcoin transactions.",
  },
  {
    title: "Wallet-to-wallet communication",
    icon: AiOutlineWallet,
    description:
      "Secure P2P messaging between different wallet applications to coordinate multisig, channel ops, payjoins, and more.",
  },
  {
    title: "decentralised social networks",
    icon: AiOutlineSwap,
    description:
      "How distributed storage and key based identity can be leveraged to give ownership back to users.",
  },
  {
    title: "TX builder",
    icon: FiSettings,
    description:
      "Organise payment operations and have the wallet intelegently schedule, batch, and broadcast transactions.",
  },
];
