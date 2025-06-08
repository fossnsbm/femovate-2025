import Image from "next/image";
import Hero from "@/app/sections/hero";
import Femovate from "@/app/sections/femovate";
import FAQSection from "./sections/faq-section";

import Navbar from "../components/ui/navbar";
import Form from "@/app/sections/form";
import ContactUs from "./sections/contact-us";
import FAQ from "./sections/faq";
import Footer from "../components/ui/footer";
import AboutUs from "./sections/about-us";

export default function Home() {
  return (
 <div>
  <Navbar/>
    <Hero/>
    <Femovate/>
    <Form/>
     <ContactUs/>
    <FAQ/>
    <AboutUs/>
    <Footer/>  
    


 </div> 
  );
}
