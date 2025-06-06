import Image from "next/image";
import Hero from "@/app/sections/hero";
import Femovate from "@/app/sections/femovate";

import Navbar from "./sections/navbar";
import Form from "@/app/sections/form";
import ContactUs from "./sections/contactUs";
import FAQ from "./sections/faq";

export default function Home() {
  return (
 <div>
  <Navbar/>
    <Hero/>
    <Femovate/>
    <Form/>
    <br/> <br/>
    <ContactUs/>
    <FAQ/>
    

 </div> 
  );
}
