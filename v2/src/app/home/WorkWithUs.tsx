import Container from "@/Components/Container/Container";
import { condensedHeadings, serifText } from "@/assets/fonts";
import React from "react";
import ToolImg from "@/assets/images/research-tool-horizontal.svg";
import Image from "next/image";
import Footer from "./Footer";

export default function WorkWithUs() {
  return (
    <section className="bg-primary text-white relative">
      <p className="uppercase text-body3 absolute top-36 right-36 origin-bottom-right -rotate-90">
        Work with us
      </p>
      <Container>
        <p
          className={`text-h1 ${serifText.className} italic mt-[120px] lowercase max-w-[30ch]`}
        >
          HELPING founders <b className="amp">&</b> STARTUP teams launch
          engaging experiences <b className="amp">&</b> communities.
        </p>
      </Container>
      <Image src={ToolImg} alt="" className="w-full" />
      <ul
        className={`mt-[120px] ${condensedHeadings.className} font-light text-[48px]`}
      >
        {services.map((service, i) => (
          <li
            key={service}
            className={`flex items-center gap-12 border-b py-36 border-dashed border-white last-of-type:border-0 ${
              i % 2 === 0 ? "pl-16" : "pl-48"
            }`}
          >
            <p>{service}</p>
          </li>
        ))}
      </ul>
      <Footer />
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
