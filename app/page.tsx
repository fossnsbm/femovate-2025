import Image from "next/image";
import Hero from "@/app/sections/hero";
import Femovate from "@/app/sections/femovate";
import FAQSection from "./sections/faq-section";

export default function Home() {
  return (
 <div>
    <Hero/>
    <Femovate/>
    <FAQSection/>

 </div> 
  );
}
