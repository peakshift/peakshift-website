"use client";
import React from "react";
import { projects } from "./projects";
import Link from "next/link";
import { serifText } from "@/assets/fonts";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface Props {
  excludeProjects?: string[];
}

export default function ProjectsSelect({ excludeProjects }: Props) {
  const [emblaRef] = useEmblaCarousel();

  const options = projects.filter(
    (project) => !excludeProjects?.includes(project.slug)
  );

  return (
    <div className="" ref={emblaRef}>
      <ul className="flex gap-24">
        {options.map((option, idx) => (
          <li key={idx} className="shrink-0 grow-0 basis-[min(80%,600px)]">
            <Link
              href={option.externalLink ?? `/project/${option.slug}`}
              {...(option.externalLink && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className={`p-24 flex flex-col uppercase border border-gray-900 max-w-[600px] h-full`}
              style={{
                ...(option.backgroundColor && {
                  backgroundColor: option.backgroundColor,
                }),
              }}
            >
              <div className="flex flex-wrap justify-between gap-x-36 gap-y-16 font-medium">
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
              <div className="mt-auto">
                <Image
                  src={option.image}
                  alt=""
                  className="max-w-[450px] w-full mx-auto my-42 shadow-2xl"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
