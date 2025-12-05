import Header from "./components/header";
import Hero from "./components/hero";
import Clients from "./components/clients";
import Features from "./components/features";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        <Hero />
        <Clients />
        <Features />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
