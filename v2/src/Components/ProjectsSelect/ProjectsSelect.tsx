"use client";
import React, { useEffect, useRef, useState } from "react";
import { projects } from "./projects";
import { serifText } from "@/assets/fonts";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/navigation";
import Portal from "../Portal/Portal";
import { LayoutGroup, motion } from "framer-motion";

interface Props {
  excludeProjects?: string[];
}

export default function ProjectsSelect({ excludeProjects }: Props) {
  const [emblaRef] = useEmblaCarousel();
  const router = useRouter();
  const projectsContainerRef = useRef<HTMLUListElement>(null);
  const isOnScreen = useOnScreen(projectsContainerRef);

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
    <LayoutGroup>
      <div className="" ref={emblaRef}>
        <ul className="flex gap-24" ref={projectsContainerRef}>
          {options.map((option, idx) => (
            <motion.li
              layout
              layoutId={`project-${option.slug}`}
              transition={{
                layout: {
                  duration: 0,
                },
              }}
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
                    priority={isOnScreen}
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
            layout
            layoutId={`project-${openProject.slug}`}
            style={{
              backgroundColor: openProject.backgroundColor,
              borderColor: openProject.frameColor,
            }}
          ></motion.div>
        )}
      </Portal>
    </LayoutGroup>
  );
}

function useOnScreen(
  ref: React.MutableRefObject<Element | null>,
  rootMargin = "0px"
) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const elementToObserve = ref?.current;

    if (!elementToObserve) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(elementToObserve);

    return () => {
      if (!elementToObserve) return;

      observer.unobserve(elementToObserve);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootMargin]);
  return isVisible;
}
