"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion, useScroll, useTransform } from "framer-motion";

import Container from "@/Components/Container/Container";
import Animation from "@/assets/animations/3.json";
import DottedLines from "./DottedLines";
import ArrowDown from "@/assets/images/scroll--arrow-down.svg";
import Image from "next/image";

const headTextWords = {
  hide: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const scrollPromptOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="min-h-[min(95vh,1440px)] flex flex-col justify-center relative py-16 isolate z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 flex-grow h-full w-full  items-end overflow-hidden relative">
        <motion.div
          initial={{
            x: "-50%",
            y: "-50%",
            originX: "50%",
            originY: "50%",
          }}
          transition={{
            rotate: {
              duration: 1,
            },
            clipPath: {
              duration: 5,
              ease: "easeInOut",
            },
          }}
          className="hidden md:flex absolute w-full h-full top-1/2 left-1/2 z-0 flex-col justify-center items-center"
        >
          <DottedLines />
        </motion.div>
        <motion.h1
          initial="hide"
          animate="show"
          transition={{
            ease: "easeIn",
            staggerChildren: 0.6,
            delayChildren: 2.5,
          }}
          className="uppercase ps-16 md:ps-42 text-[40px] md:text-[72px] leading-[1.2]"
        >
          <motion.span className="inline-block" variants={headTextWords}>
            We
          </motion.span>{" "}
          <br />
          <motion.span className="inline-block" variants={headTextWords}>
            Launch
          </motion.span>{" "}
          <br />
          <motion.span className="inline-block" variants={headTextWords}>
            Products
          </motion.span>{" "}
          <br />
          <motion.span className="inline-block" variants={headTextWords}>
            Experiences
          </motion.span>{" "}
          <motion.span className="inline-block amp" variants={headTextWords}>
            &amp;
          </motion.span>
          <br />
          <motion.span className="inline-block" variants={headTextWords}>
            Communities
          </motion.span>
        </motion.h1>
        <div className="relative">
          <div className="top-0 left-0">
            <Lottie
              animationData={Animation}
              loop={false}
              className="lottie-hero w-[190vw] md:w-screen"
            />
          </div>
        </div>
      </div>
      <Container wide>
        <div className="flex max-md:flex-row-reverse justify-between mt-36 overflow-hidden items-center gap-24 pb-8">
          <div className="hidden md:block flex-1 mr-auto"></div>
          <motion.p
            style={{
              opacity: scrollPromptOpacity,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, type: "spring" }}
            className="flex flex-col items-center bg-white  shrink-0"
          >
            <span className="justify-self-center mb-10">SCROLL</span>
            <span className="justify-self-center mb-10">
              <Image src={ArrowDown} alt="" />
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, type: "spring" }}
            className="flex-1 text-body6 font-normal md:ml-auto md:text-right uppercase break-words min-w-0 max-w-[50%]"
          >
            npub1shhm32q4zkunmwd0s20z7e6qlwkju7akku7ezte9feajmyhum3jsvy56zk
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
