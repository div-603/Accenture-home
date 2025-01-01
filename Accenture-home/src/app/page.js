import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ProjectsSection from "./Components/ProjectsSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <main className="flex mr-4 min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
