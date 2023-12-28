"use client";
import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { useScroll, motion, useTransform } from "framer-motion";
import FocusLock from "react-focus-lock";

import Container from "../Container/Container";
import NavLink from "../NavLink/NavLink";

const links = [
  {
    text: "Projects",
    href: "/#projects",
  },
  {
    text: "Twitter",
    href: "https://twitter.com/peakshift",
    isExternal: true,
  },
  {
    text: "BOLT.FUN",
    href: "https://bolt.fun",
    isExternal: true,
  },
  {
    text: "Contact",
    href: "mailto:team@peakshift.com",
    isExternal: true,
  },
  {
    text: "Book Consultation",
    href: "https://calendly.com/johnsbeharry",
    isExternal: true,
  },
];

const itemVariants = {
  hide: {
    opacity: 0,
    x: -4,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

const sideNavVariants = {
  hide: {
    clipPath: "circle(1% at 9% 12%)",
    transitionEnd: {
      display: "none",
    },
  },
  show: {
    display: "block",
    clipPath: "circle(150% at 9% 12%)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const overlayVariants = {
  hide: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
  show: {
    display: "block",
    opacity: 1,
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav
        className="sticky w-full top-10 left-10 z-30 bg-inherit border-b-2 md:border-b-0 border-gray-500 border-opacity-20"
        initial="hide"
        animate="show"
        variants={{
          hide: {
            opacity: 0,
            x: -4,
          },
          show: {
            opacity: 1,
            x: 0,
          },
        }}
        transition={{ staggerChildren: 0.1, delay: 0, when: "beforeChildren" }}
      >
        <Container wide>
          <div className="py-16 flex flex-wrap justify-between items-center">
            <ul className="hidden md:flex text-body6 md:text-body4 gap-8">
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  className="md:border-l border-gray-100 border-opacity-10"
                  variants={itemVariants}
                >
                  <NavLink
                    className={`md:pr-20 block font-normal uppercase hover:text-primary`}
                    activeClassName="text-primary"
                    href={link.href}
                    isExternal={link.isExternal}
                  >
                    <span className="">/</span> {link.text}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <button
              className="md:hidden min-w-[40px] aspect-square text-body1 flex flex-col justify-center items-center active:scale-75 transition-transform"
              onClick={toggleNav}
              aria-label="Open Side Nav Menu"
            >
              / <span className="text-body4"></span>
            </button>
            <motion.p
              variants={itemVariants}
              className="text-[10px] md:text-body6 font-normal whitespace-break-spaces max-md:basis-1/2"
            >
              PGP A815 2601 F001 645B 5269 2258 6004 5CFE 793B 59AD
            </motion.p>
          </div>
        </Container>
      </motion.nav>

      <motion.div
        className="bg-black bg-opacity-40 fixed inset-0 z-20"
        variants={overlayVariants}
        initial={isOpen ? "show" : "hide"}
        animate={isOpen ? "show" : "hide"}
        onClick={toggleNav}
      ></motion.div>

      <FocusLock disabled={!isOpen}>
        <motion.nav
          variants={sideNavVariants}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
          }}
          initial={isOpen ? "show" : "hide"}
          animate={isOpen ? "show" : "hide"}
          className="fixed top-[10px] inset-x-[10px] bg-[var(--page-bg-color)] p-16 pb-42 border-b border-gray-200 z-40"
        >
          <div className="flex mb-32">
            <button
              className="min-w-[40px] aspect-square text-body1 flex flex-col justify-center items-center active:scale-75 transition-transform"
              onClick={toggleNav}
              aria-label="Close Side Nav Menu"
            >
              <TfiClose className="text-body1" />
            </button>
          </div>
          <ul className="flex flex-col gap-16 text-body4">
            {links.map((link) => (
              <motion.li
                key={link.href}
                className="md:border-l border-gray-100 border-opacity-10"
                variants={itemVariants}
              >
                <NavLink
                  className={`md:pr-20 block font-normal uppercase hover:text-primary`}
                  activeClassName="text-primary"
                  href={link.href}
                  isExternal={link.isExternal}
                  onClick={toggleNav}
                >
                  <span className="" aria-hidden>
                    /
                  </span>{" "}
                  {link.text}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </FocusLock>
    </>
  );
}
