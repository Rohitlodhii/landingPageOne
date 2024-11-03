import CalltoAction from "@/components/CalltoAction";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import LogoMarquee from "@/components/logoMarquee";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <LogoMarquee/>
    <Features/>
    <Testimonial/>
    <CalltoAction/>
    <Footer/>
    </>
  );
}
