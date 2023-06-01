"use client";
import React from "react";
import Container from "../Container/Container";
import NavLink from "../NavLink/NavLink";
import { useScroll, motion, useTransform } from "framer-motion";

const links = [
  {
    text: "Ventures",
    href: "/ventures",
  },
  {
    text: "Consulting",
    href: "/consulting",
  },
  {
    text: "Journal",
    href: "/journal",
  },
  {
    text: "Hire Us",
    href: "/hire-us",
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

export default function Navbar() {
  return (
    <motion.nav
      className="fixed w-full top-10 left-10 z-30 bg-white border-b border-gray-100"
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
      <Container
        wide
        className="py-16 flex flex-wrap justify-between items-center"
      >
        <ul className="flex text-body6 md:text-body4 gap-8">
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
              >
                <span className="text-gray-300">/</span> {link.text}
              </NavLink>
            </motion.li>
          ))}
        </ul>
        <motion.p variants={itemVariants} className="text-body6 font-normal">
          PGP A815 2601 F001 645B 5269 2258 6004 5CFE 793B 59AD
        </motion.p>
      </Container>
    </motion.nav>
  );
}
