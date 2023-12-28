"use client";
import React, { useState } from "react";
import { projects } from "./projects";
import { serifText } from "@/assets/fonts";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/navigation";
import Portal from "../Portal/Portal";
import { motion } from "framer-motion";

interface Props {
  excludeProjects?: string[];
}

export default function ProjectsSelect({ excludeProjects }: Props) {
  const [emblaRef] = useEmblaCarousel();
  const router = useRouter();

  const [openProject, setOpenProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const options = projects.filter(
    (project) => !excludeProjects?.includes(project.slug)
  );

  const onSelectProject = (idx: number) => {
    const project = options[idx];

    if (project.externalLink) {
      window.open(project.externalLink, "_blank");
      return;
    }

    setOpenProject(project);
    router.prefetch(`/project/${project.slug}`);
    setTimeout(() => {
      router.push(`/project/${project.slug}`);
    }, 400);
  };
  return (
    <>
      <div className="" ref={emblaRef}>
        <ul className="flex gap-24">
          {options.map((option, idx) => (
            <motion.li
              initial={false}
              layout
              layoutId={`project-${option.slug}`}
              key={idx}
              className="shrink-0 grow-0 basis-[80%] md:basis-[min(40%,500px)] 2xl:basis-[min(40%,600px)]"
            >
              <button
                className={`p-24 w-full flex flex-col items-stretch uppercase border-2 max-w-[600px] h-full text-left`}
                style={{
                  ...(option.backgroundColor && {
                    backgroundColor: option.backgroundColor,
                  }),
                  borderColor: option.frameColor,
                }}
                onClick={() => onSelectProject(idx)}
              >
                <div className="flex flex-wrap md:flex-nowrap justify-between gap-x-36 gap-y-16 font-medium">
                  <div>
                    <p className="md:text-body1">{option.tagline} </p>
                    <p className={`${serifText.className} text-body5`}>
                      {option.title}
                    </p>
                  </div>
                  <div>
                    {option.tags.map((tag) => (
                      <p key={tag} className="whitespace-nowrap">
                        / {tag}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="mt-auto mx-auto lg:max-w-[80%]">
                  <Image
                    src={option.image}
                    alt=""
                    className="w-full my-42 shadow-2xl"
                    placeholder="blur"
                  />
                </div>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
      <Portal id="frame-overlay">
        {openProject && (
          <motion.div
            className="fixed inset-0 border-[10px] z-50"
            layoutId={`project-${openProject.slug}`}
            layout
            style={{
              backgroundColor: openProject.backgroundColor,
              borderColor: openProject.frameColor,
            }}
          ></motion.div>
        )}
      </Portal>
    </>
  );
}
