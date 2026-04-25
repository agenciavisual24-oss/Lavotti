import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Process from "./components/Process";
import Cases from "./components/Cases";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Cases />
      <Works />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
    </>
  );
}
