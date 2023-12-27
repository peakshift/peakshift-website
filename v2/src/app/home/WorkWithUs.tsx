import Container from "@/Components/Container/Container";
import { condensedHeadings, serifText } from "@/assets/fonts";
import React from "react";
import ToolImg from "@/assets/images/research-tool-horizontal.svg";
import Image from "next/image";

export default function WorkWithUs() {
  return (
    <section className="bg-primary text-white relative">
      <div className="flex justify-end py-40">
        <p
          className={`text-body1 relative flex items-center gap-16 uppercase ${condensedHeadings.className}`}
        >
          Work with us
          <span className="bg-white h-2 w-64 md:w-[100px]"></span>
        </p>
      </div>
      <Container>
        <p
          className={`text-body1 md:text-h1 ${serifText.className} italic mt-[120px] lowercase max-w-[30ch]`}
        >
          HELPING founders <b className="amp">&</b> STARTUP teams launch
          engaging experiences <b className="amp">&</b> communities.
        </p>
      </Container>
      <Image src={ToolImg} alt="" className="w-full" />
      <ul
        className={`mt-36 md:mt-[120px] ${condensedHeadings.className} font-light text-body2 md:text-[48px]`}
      >
        {services.map((service, i) => (
          <li
            key={service}
            className={`flex items-center gap-12 border-b py-24 md:py-36 border-dashed border-white last-of-type:border-0 ${
              i % 2 === 0 ? "pl-16" : "pl-32 md:pl-48"
            }`}
          >
            <p>{service}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const services = [
  "Branding",
  "Design Sprints",
  "Hackathon Management",
  "Full Stack Design",
  "Design Maintainance",
  "Development",
];
