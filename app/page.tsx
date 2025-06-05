import Image from "next/image";
import Hero from "@/app/sections/hero";
import Femovate from "@/app/sections/femovate";
import Form from "@/app/sections/form";
import ContactUs from "./sections/contactUs";

export default function Home() {
  return (
 <div>
    <Hero/>
    <Femovate/>
    <Form/>
    <ContactUs/>
    

 </div> 
  );
}
