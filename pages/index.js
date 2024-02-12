import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import Information from "@/components/home/Information";

export default function Home() {
  return (
    <>
      <main className="md:mx-20 mx-2 ">
        <Header />
        <HeroSection />
        <Information />
      </main>
      <Footer />
    </>
  );
}
