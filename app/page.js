import Image from "next/image";
import Hero from "@/app/Hero";
import Snowflake from "@/app/test";
import Social from "@/app/social";

export default function Home() {
  return (
      <div>
          <Snowflake />

          <div className="bg-black flex items-center justify-center">
              <Hero/>
          </div>
      </div>
  );
}
