import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import TheConcept from "@/components/TheConcept";
import StatsBar from "@/components/StatsBar";
import DesignApproach from "@/components/DesignApproach";
import AboutDesigner from "@/components/AboutDesigner";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemStatement />
        <TheConcept />
        <StatsBar />
        <DesignApproach />
        <AboutDesigner />
        <FooterCTA />
      </main>
    </>
  );
}
