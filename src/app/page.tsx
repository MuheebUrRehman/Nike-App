import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Promo from "@/components/promo";
import Hero from "@/components/hero";
import Best from "@/components/best";
import Feature from "@/components/feature";
import Gear from "@/components/gear";
import Miss from "@/components/miss";
import Essentials from "@/components/essentials";
import Links from "@/components/links";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Promo />
      <main>
        <Hero />
        <Best />
        <Feature />
        <Gear />
        <Miss />
        <Essentials />
        <Links />
      </main>
      <Footer />
    </>
  );
}
