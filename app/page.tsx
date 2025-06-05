import Image from "next/image";
import Hero from "@/app/sections/hero";
import Femovate from "@/app/sections/femovate";
import ContactUs from "./sections/contactUs";

export default function Home() {
  return (
 <div>
    <Hero/>
    <Femovate/>
   
      <ContactUs />
    
    

 </div> 
  );
}
