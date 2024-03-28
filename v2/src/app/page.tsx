import Hero from "../Components/Home/Hero";
import Projects from "../Components/Home/Projects";
import ResearchLab from "../Components/Home/ResearchLab";
import DesignSprints from "../Components/Home/DesignSprints";
import WorkWithUs from "../Components/Home/WorkWithUs";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <Projects />
        <DesignSprints />
        {/*<ResearchLab />*/}
        {/*<WorkWithUs />*/}
      </main>
    </>
  );
}
