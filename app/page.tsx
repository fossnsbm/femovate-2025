import Image from "next/image";
import Navbar from "@/app/sections/navbar";
import Hero from "@/app/sections/hero";
import Femovate from "@/app/sections/femovate";

export default function Home() {
  return (
 <div>
  <Navbar/>
    <Hero/>
    <Femovate/>

 </div> 
  );
}
