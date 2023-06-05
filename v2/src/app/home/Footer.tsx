"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";

import Container from "@/Components/Container/Container";
import { condensedHeadings, serifText } from "@/assets/fonts";
import PapersImage from "@/assets/images/footer-papers.png";

const sayHiVariants = [
  "Say Hi",
  "مرحباً",
  "Здраво",
  "Zdravo",
  "Hola",
  "你好",
  "Olá",
  "Bonjour",
  "Ciao",
];

export default function Footer() {
  const [sayHiTextIndex, setSayHiTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSayHiTextIndex((perv) => perv + 1);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  const sayHiText = sayHiVariants[sayHiTextIndex % sayHiVariants.length];
  const prevText = sayHiVariants[(sayHiTextIndex - 1) % sayHiVariants.length];

  return (
    <footer>
      <div className="flex justify-end my-40">
        <p
          className={`text-body1 relative flex items-center gap-16 uppercase ${condensedHeadings.className}`}
        >
          Talk to Us
          <span className="bg-white h-2 w-64 md:w-[100px]"></span>
        </p>
      </div>
      <Container>
        <div className="grid md:grid-cols-2">
          <div>
            <div className="overflow-hidden relative h-[136px] ">
              {sayHiVariants.map((text, idx) => (
                <motion.p
                  key={idx}
                  style={{ perspective: 900 }}
                  transition={{ duration: 0.7 }}
                  className="text-[4em] uppercase py-20 absolute top-0 left-0"
                  initial={false}
                  animate={
                    sayHiText === text
                      ? { opacity: 1, y: 0, rotateX: 0 }
                      : text === prevText
                      ? { opacity: 0, y: -50, rotateX: -90 }
                      : { opacity: 0, y: 50, rotateX: 90 }
                  }
                >
                  {text}
                </motion.p>
              ))}
            </div>
            <a
              href="mailto:team@peakshift.com"
              className={`text-body1 ${serifText.className} underline`}
            >
              TEAM@PEAKSHIFT.COM
            </a>
          </div>
          <div className="grid grid-cols-2 py-42">
            <div>
              <p className="text-body3">SOCIALS</p>
              <ul className="text-body3 mt-40 flex flex-col gap-12 uppercase">
                <li>
                  <a
                    href="https://t.me/peakshift"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Telegram
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/peakshift"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>

                <li>
                  <a
                    href="https://facebook.com/peakshift"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>

                <li>
                  <a
                    href="https://dribbble.com/peakshift"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Dribble
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-body3 mb-40">PGB</p>
              <p className="text-body3">
                A815 2601 F001 645B 5269 2258 6004 5CFE 793B 59AD
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 mt-40">
          <div className="">
            <Image src={PapersImage} alt="" className="" />
          </div>
          <p
            className={`${serifText.className} hidden md:block italic text-body5 text-right self-center`}
          >
            All Rights Reserved.Copyright © Peak Shift Ltd. 2012 - 2020
          </p>
        </div>
      </Container>
    </footer>
  );
}
