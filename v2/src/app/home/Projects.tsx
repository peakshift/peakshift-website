import Container from "@/Components/Container/Container";
import ProjectsSelect from "@/Components/ProjectsSelect/ProjectsSelect";
import { condensedHeadings } from "@/assets/fonts";
import React from "react";

export default function Projects() {
  return (
    <section className="min-h-[min(95vh,1440px)]">
      <Container wide>
        <h2
          className={`${condensedHeadings.className} text-primary text-h2 lg:text-[48px] font-light mb-24`}
        >
          PROJECTS
        </h2>
        <ProjectsSelect />
      </Container>
    </section>
  );
}
