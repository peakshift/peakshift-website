"use client";
import React, { useState, useEffect } from "react";

import Container from "@/Components/Container/Container";

import { serifText } from "@/assets/fonts";
import PapersImage from "@/assets/images/footer-papers.png";
import Image from "next/image";

export default function Footer() {
  const [sayHiText, setSayHiText] = useState("Say Hi");

  useEffect(() => {
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

    const interval = setInterval(() => {
      setSayHiText((current) => {
        const currentIndex = sayHiVariants.indexOf(current);
        const nextIndex =
          currentIndex + 1 === sayHiVariants.length ? 0 : currentIndex + 1;
        return sayHiVariants[nextIndex];
      });
    }, 600);
    return () => clearInterval(interval);
  }, [sayHiText]);

  return (
    <footer>
      <div className="flex justify-end my-40">
        <p className="text-body1 relative flex items-center gap-16">
          Talk to Us
          <span className="bg-white h-2 w-[100px]"></span>
        </p>
      </div>
      <Container>
        <div className="grid grid-cols-2">
          <div>
            <p className="text-[4em] uppercase py-20">{sayHiText}</p>
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

        <div className="grid grid-cols-2 mt-40">
          <div className="">
            <Image src={PapersImage} alt="" className="" />
          </div>
          <p
            className={`${serifText.className} italic text-body5 text-right self-center`}
          >
            All Rights Reserved.Copyright © Peak Shift Ltd. 2012 - 2020
          </p>
        </div>
      </Container>
    </footer>
  );
}
