import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CgFileDocument } from "react-icons/cg";
import { FiChevronRight, FiUsers, FiEyeOff, FiSettings } from "react-icons/fi";
import { AiOutlineScan, AiOutlineWallet, AiOutlineSwap } from "react-icons/ai";

import Container from "@/Components/Container/Container";
import { condensedHeadings, serifText } from "@/assets/fonts";
import BgImage from "@/assets/images/research-tool.png";
import Button from "@/Components/Button/Button";
import Image from "next/image";

export default function ResearchLab() {
  return (
    <section className="min-h-[min(100vh,1200px)] flex justify-center relative py-80 isolate z-10">
      <Image
        src={BgImage}
        alt=""
        className="absolute inset-0 z-0 inset-y-0 left-0 -translate-x-1/2 max-h-full"
      />
      <Container>
        <div className="flex justify-between gap-40 h-full w-full items-center relative">
          <div className="max-w-[480px]">
            <h2
              className={`${condensedHeadings.className} text-primary text-[48px] font-light`}
            >
              RESEARCH LAB
            </h2>
            <p className={`${serifText.className} italic text-body1`}>
              We mix technical knowledge with human centred design in order to
              discover design patterns for bleeding edge technologies. in order
              to make them more accessible to the mass market.
            </p>
            <Button className="mt-40">
              <CgFileDocument /> Read our research <FiChevronRight />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-32">
            <ul className="flex flex-col gap-32">
              {researches.slice(0, 3).map((research, i) => (
                <li
                  key={research.title}
                  className={`p-16 min-w-[192px] border-2 border-gray-800 border-dashed flex flex-col gap-12`}
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
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-32 mt-64">
              {researches.slice(3).map((research, i) => (
                <li
                  key={research.title}
                  className={`p-16 min-w-[192px] border-2 border-gray-800 border-dashed flex flex-col gap-12`}
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
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
