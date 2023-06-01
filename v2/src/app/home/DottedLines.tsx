import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const pathVariants = {
  hidden: {
    strokeDashoffset: 0,
  },
  visible: ({ pathLength, order }: { pathLength: number; order: number }) => ({
    strokeDashoffset: `${pathLength}px`,
    transition: {
      duration: 3,
    },
  }),
};

export default function DottedLines() {
  const horizontalPathLength = calculatePathLength(
    "M 1380 351.066 L 0.283264 351.066"
  );

  const verticalPathLength = calculatePathLength(
    "M 689.641 700.299 L 689.641 0.832764"
  );

  const diagonalPath1Length = calculatePathLength(
    "M 1040.35 701.486 L 339.222 0.353555"
  );

  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.5,
      }}
      width="100%"
      height="100%"
      viewBox="0 0 1380 702"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative overflow-hidden"
    >
      <path
        d="M 1380 351.066 L 0.283264 351.066"
        stroke="black"
        strokeDasharray="2 2"
        fill="none"
      />
      <motion.path
        variants={pathVariants}
        custom={{ pathLength: horizontalPathLength }}
        d="M 1380 351.066 L 0.283264 351.066"
        stroke="white"
        strokeDasharray={horizontalPathLength}
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M 689.641 700.299 L 689.641 0.832764"
        stroke="black"
        strokeDasharray="2 2"
      />
      <motion.path
        variants={pathVariants}
        custom={{ pathLength: verticalPathLength }}
        d="M 689.641 700.299 L 689.641 0.832764"
        stroke="white"
        strokeDasharray={verticalPathLength}
        strokeWidth={2}
      />
      <path
        d="M 1040.35 701.486 L 339.222 0.353555"
        stroke="black"
        stroke-dasharray="2 2"
      />

      <motion.path
        variants={pathVariants}
        custom={{ pathLength: diagonalPath1Length }}
        d="M 1040.35 701.486 L 339.222 0.353555"
        stroke="white"
        strokeDasharray={diagonalPath1Length}
        strokeWidth={2}
      />
      <path
        d="M 0 0 L 991.552 -0.5"
        transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 339.575 701.133)"
        stroke="black"
        strokeDasharray="2 2"
        fill="none"
      />
      <motion.path
        variants={pathVariants}
        custom={{ pathLength: -diagonalPath1Length }}
        d="M 0 0 L 991.552 -0.5"
        transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 339.575 701.133)"
        stroke="white"
        strokeDasharray={diagonalPath1Length}
        strokeWidth={2}
      />
    </motion.svg>
  );
}

function calculatePathLength(path: string) {
  const tempSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const tempPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  tempPath.setAttribute("d", path);
  tempSvg.appendChild(tempPath);
  const length = tempPath.getTotalLength();
  return length;
}
