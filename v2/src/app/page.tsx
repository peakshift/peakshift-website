import Hero from "../Components/Home/Hero";
import Projects from "../Components/Home/Projects";
import ResearchLab from "../Components/Home/ResearchLab";
import DesignSprints from "../Components/Home/DesignSprints";
import WorkWithUs from "../Components/Home/WorkWithUs";
import Quote from "@/Components/Quote/Quote";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <Projects />
        <DesignSprints />
        <Quote />
        {/*<ResearchLab />*/}
        {/*<WorkWithUs />*/}
      </main>
    </>
  );
}
