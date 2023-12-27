import Hero from "./Hero";
import Projects from "./Projects";
import ResearchLab from "./ResearchLab";
import WorkWithUs from "./WorkWithUs";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <Projects />
        <ResearchLab />
        <WorkWithUs />
      </main>
    </>
  );
}
