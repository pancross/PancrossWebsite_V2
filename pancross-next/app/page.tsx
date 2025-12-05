import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Clients />
        <Services />
        <Portfolio />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
