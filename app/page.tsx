import Image from "next/image";
import Hero from "@/app/sections/hero";
import Femovate from "@/app/sections/femovate";
import Navbar from "./sections/navbar";
export default function Home() {
  return (
 <div>
  <Navbar/>
    <Hero/>
    <Femovate/>
    

 </div> 
  );
}
