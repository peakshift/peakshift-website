import React from "react";
import { projects } from "./projects";
import Link from "next/link";
import { serifText } from "@/assets/fonts";
import Image from "next/image";

export default function ProjectsSelect() {
  const options = projects;

  return (
    <ul>
      {options.map((option) => (
        <li key={option.slug}>
          <Link
            href={`/project/${option.slug}`}
            className={`p-24 block uppercase border border-gray-900 max-w-[600px]`}
            style={{
              ...(option.backgroundColor && {
                backgroundColor: option.backgroundColor,
              }),
            }}
          >
            <div className="flex justify-between gap-36 text-body5 md:text-body1 font-medium">
              <div>
                <p>{option.tagline} </p>
                <p className={`${serifText.className}`}>{option.title}</p>
              </div>
              <div>
                {option.tags.map((tag) => (
                  <p key={tag} className="whitespace-nowrap">
                    / {tag}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <Image
                src={option.image}
                alt=""
                className="w-full max-w-[450px] mx-auto my-42"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
