import Image from "next/image";
import Hero from "@/app/Hero";
import SocialBar from "@/app/Social-bar";
import Footer from "@/app/Footer";

export default function Home() {
  return (
      <div>
          <div className="flex items-center justify-center h-screen">
              <Hero/>
          </div>
          <Footer/>
      </div>
  );
}
