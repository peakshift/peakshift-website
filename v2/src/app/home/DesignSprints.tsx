"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { CgFileDocument } from "react-icons/cg";
import { FiChevronRight, FiUsers, FiEyeOff, FiSettings } from "react-icons/fi";
import { AiOutlineScan, AiOutlineWallet, AiOutlineSwap } from "react-icons/ai";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

import Container from "@/Components/Container/Container";
import { condensedHeadings, serifText } from "@/assets/fonts";
import Button from "@/Components/Button/Button";

export default function DesignSprint() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
  });

  return (
    <section
      className="lg:min-h-[min(500vh,6000px)] relative py-80 isolate z-10"
      ref={container}
    >
      <div className="relative lg:sticky top-0 overflow-hidden">
        <Container className="relative">
          <div className="flex max-lg:flex-wrap justify-between gap-40 min-h-[100vh] w-full items-center ">
            <div className="max-w-[480px] p-16 rounded-12">
              <h2
                className={`${condensedHeadings.className} text-primary text-h2 uppercase leading-none lg:text-[48px] font-light`}
              >
                Communicate your Vision, Brand{" "}
                <span className="amp">&amp;</span> Product with Measurable
                Results
              </h2>
              <p
                className={`${serifText.className} italic text-body2 lg:text-body1`}
              >
                Explore our comprehensive range of sprints designed to rapidly
                launch new brands, products and features, to drive rapid
                innovation.
              </p>
              <Button className="mt-40 max-lg:w-full" href="/design-sprints">
                <CgFileDocument /> Learn more <FiChevronRight />
              </Button>
            </div>
            <div className="grid lg:grid-cols-2 lg:pt-64 gap-32">
              <ul className="flex flex-col gap-32">
                {sprints.slice(0, 3).map((sprint, i) => (
                  <ResearchCard
                    key={sprint.title}
                    sprint={sprint}
                    index={i}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </ul>
              <ul className="flex flex-col gap-32 lg:mt-64">
                {sprints.slice(3).map((sprint, i) => (
                  <ResearchCard
                    key={sprint.title}
                    sprint={sprint}
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
  sprint,
  scrollYProgress,
  index,
}: {
  sprint: (typeof sprints)[0];
  scrollYProgress: MotionValue<number>;
  index: number;
}) {
  const segmentLength = 1 / sprints.length;
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
      key={sprint.title}
      className={`p-16 min-w-[192px] border border-gray-200 bg-white flex flex-col gap-12`}
    >
      <sprint.icon />
      <p className="text-body3 text-gray-800 uppercase font-normal">
        {sprint.title}
      </p>
      <p
        className={`text-body5 text-gray-800 ${serifText.className} italic leading-6`}
      >
        {sprint.description}
      </p>
    </motion.li>
  );
}

const sprints = [
  {
    title: "Brand Sprint",
    icon: FiUsers,
    description: "Creating your unique brand identity",
  },
  {
    title: "Product Design Sprint",
    icon: FiEyeOff,
    description: "Build winning products",
  },
  {
    title: "Vision Sprint",
    icon: AiOutlineScan,
    description: "Crafting the big picture",
  },
  {
    title: "Freedom Tech Sprint",
    icon: AiOutlineWallet,
    description: "Decentralised innovation",
  },
  {
    title: "AI Sprint",
    icon: AiOutlineSwap,
    description: "Exploring ai for enhanced ux",
  },
  {
    title: "Process Sprint",
    icon: FiSettings,
    description: "Optimising workflow efficiently",
  },
];
