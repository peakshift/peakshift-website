import React from "react";
import Container from "../Container/Container";
import HumanRightsLogo from "@/assets/images/human-rights-foundation.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-80">
      <Container>
        <div className="grid md:grid-cols-2 border-y border-gray-800 items-stretch font-normal">
          <div className="border-b md:border-b-0 md:border-r border-gray-800  py-40">
            <Image
              src={HumanRightsLogo}
              alt="Human Rights Foundation"
              width={210}
            />
            <p className="mt-20 max-w-[30ch]">
              The Human Rights Foundation is a nonpartisan, nonprofit
              organization that promotes and protects human rights globally,
              with a focus on closed societies.
            </p>
          </div>
          <div className=" md:px-16 py-40 self-end">
            <p className="max-w max-w-[30ch] md:mx-auto my-auto">
              The CBDC Tracker is funded by a grant from the Human Rights
              Foundation and created by the CBDC Tracker team. Opinions
              expressed here are those of the CBDC Tracker fellows alone.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-16 text-gray-400 font-normal justify-between mt-40">
          <p className="">©2023, CBDC TRACKER. ALL RIGHTS RESERVED</p>
          <p>
            DESIGNED BY{" "}
            <a
              href="https://peakshift.com/"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              PEAK SHIFT LTD.
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
