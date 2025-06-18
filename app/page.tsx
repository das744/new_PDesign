// import ContactForm from "../components/Contact/Contact";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner"
import Footer from "@/components/Footer";
import About from "@/components/About";
import Services from "@/components/Service";
import Navbar from "@/components/Navbar";
import WorkingProcess from "@/components/WorkingProcess/WorkingProcess";
import Contact from '@/components/Contact'
import Features from "@/components/Features";


export default function Home() {
  return (
    <main>
     <Navbar/>
     <Banner/>
     <Features/>
     <WorkingProcess/>
     <About/>
      <Services/>
      <Contact />
      <Footer/>
    </main>
  );
}