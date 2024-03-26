import Hero from "./Hero";
import Projects from "./Projects";
import ResearchLab from "./ResearchLab";
import DesignSprints from "./DesignSprints";
import WorkWithUs from "./WorkWithUs";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <Projects />
        <DesignSprints />
        <ResearchLab />
        {/*<WorkWithUs />*/}
      </main>
    </>
  );
}
