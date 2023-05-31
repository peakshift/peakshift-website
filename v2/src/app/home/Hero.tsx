"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import { motion, useScroll, useTransform } from "framer-motion";

import Container from "@/Components/Container/Container";
import Animation from "@/assets/animations/3.json";
import DottedLinesCircle from "@/assets/images/dotted-lines-circle.svg";

const headTextWords = {
  hide: {
    opacity: 0,
    y: 160,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const scrollPromptOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="min-h-[min(100vh,1200px)] flex justify-center relative py-80 isolate z-10">
      <Container wide>
        <div className="grid h-full w-full grid-cols-2 items-end overflow-hidden relative">
          <motion.div
            initial={{
              clipPath: "circle(0% at 50% 50%)",
              rotate: 60,
              x: "-50%",
              y: "-50%",
              originX: "50%",
              originY: "50%",
            }}
            animate={{ clipPath: "circle(65% at 50% 50%)", rotate: 0 }}
            transition={{
              rotate: {
                duration: 1,
              },
              clipPath: {
                duration: 5,
                ease: "easeInOut",
              },
            }}
            className="absolute w-full h-full top-1/2 left-1/2 z-0 flex flex-col justify-center items-center"
          >
            <Image
              src={DottedLinesCircle}
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.h1
            initial="hide"
            animate="show"
            transition={{
              ease: "easeOut",
              staggerChildren: 0.1,
              delayChildren: 2.5,
            }}
            className="uppercase text-[72px] leading-[1.2]"
          >
            <motion.span className="inline-block" variants={headTextWords}>
              We
            </motion.span>{" "}
            <br />
            <motion.span className="inline-block" variants={headTextWords}>
              Build
            </motion.span>{" "}
            <br />
            <motion.span className="inline-block" variants={headTextWords}>
              Products
            </motion.span>{" "}
            <br />
            <motion.span className="inline-block" variants={headTextWords}>
              Experiences
            </motion.span>{" "}
            <motion.b className="inline-block amp" variants={headTextWords}>
              &
            </motion.b>
            <br />
            <motion.span className="inline-block" variants={headTextWords}>
              Communities
            </motion.span>
          </motion.h1>
          <div className="w-[90vw]">
            <Lottie
              animationData={Animation}
              loop={false}
              className="lottie-hero"
            />
          </div>
        </div>
        <div className="flex justify-center mt-24">
          <div className="flex-1 mr-auto"></div>
          <motion.p
            style={{
              opacity: scrollPromptOpacity,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, type: "spring" }}
            className=""
          >
            SCROLL
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, type: "spring" }}
            className="flex-1 text-body6 font-normal ml-auto text-right uppercase"
          >
            npub1shhm32q4zkunmwd0s20z7e6qlwkju7akku7ezte9feajmyhum3jsvy56zk
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
