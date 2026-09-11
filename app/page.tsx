import Header from "./components/header";
import Hero from "./components/hero";
import Clients from "./components/clients";
import WhyGoverned from "./components/why-governed";
import Services from "./components/services";
import Features from "./components/features";
import Guardrails from "./components/guardrails";
import CustomModels from "./components/custom-models";
import Compliance from "./components/compliance";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        <Hero />
        <Clients />
        <WhyGoverned />
        <Services />
        <Features />
        <Guardrails />
        <CustomModels />
        <Compliance />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
