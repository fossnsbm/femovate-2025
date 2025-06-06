import Image from "next/image";
import Hero from "@/app/sections/hero";
import Femovate from "@/app/sections/femovate";
import FAQSection from "./sections/faq-section";

import Navbar from "./sections/navbar";
import Form from "@/app/sections/form";
import ContactUs from "./sections/contact-us";
import FAQ from "./sections/faq";
import Footer from "./sections/footer";

export default function Home() {
  return (
 <div>
  <Navbar/>
    <Hero/>
    <Femovate/>
    <Form/>
     <ContactUs/>
    <FAQ/>
    <Footer/>  


 </div> 
  );
}
