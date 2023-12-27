"use client";
import React, { useEffect, useState } from "react";
import Ticket1Image from "./assets/ticket1.svg";
import Ticket2Image from "./assets/ticket2.svg";
import Ticket3Image from "./assets/ticket3.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const MAX_TICKET_WIDTH = 400;

interface Props {
  direction?: "left" | "right";
  animated?: boolean;
}

export default function TicketsRow({ direction, animated }: Props) {
  const [mounted, setMounted] = useState(false);

  const [shuffledTickets] = useState(
    shuffleArray([Ticket1Image, Ticket2Image, Ticket3Image])
  );
  const [initialPosition] = useState(direction ?? "left");
  const [duration] = useState(30);

  const [numTickets, setNumTickets] = useState(0);
  const [ticketWidth, setTicketWidth] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const ticketWidth = Math.min(MAX_TICKET_WIDTH, windowWidth / 4);
      const numTickets = Math.floor((windowWidth * 2) / ticketWidth);
      setNumTickets(numTickets);
      setTicketWidth(ticketWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="-rotate-[4deg]">
      <motion.div
        initial={{ x: initialPosition === "left" ? "0" : "-48%" }}
        animate={
          animated
            ? { x: initialPosition === "left" ? "-48%" : "0" }
            : undefined
        }
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: duration,
          ease: "linear",
        }}
        className="w-[200%] flex gap-16 px-8  "
      >
        {Array.from({ length: numTickets }).map((_, idx) => (
          <Image
            key={idx}
            src={shuffledTickets[idx % shuffledTickets.length]}
            alt=""
            style={{ width: ticketWidth, height: "auto" }}
          />
        ))}
      </motion.div>
      <div></div>
    </div>
  );
}

function shuffleArray<T>(array: T[]) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
