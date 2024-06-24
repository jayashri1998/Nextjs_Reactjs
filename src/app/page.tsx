import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import ImagesScrollingCard from "@/components/ImagesScrollingCard";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <h1 className="text-center text-lg">hello  I am jaya</h1>
<HeroSection/>
<FeaturedSection/>
<ImagesScrollingCard/>
    </main>
   </div>

  );
}
