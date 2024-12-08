import ProdHeader from "@/components/prodHead";
import Navbar from "@/components/navbar";
import ProdSec from "@/components/prodsec";
import Footer from "@/components/footer";

export default function ProductDetail() {
  return (
    <>
      <ProdHeader />
      <Navbar />
      <main>
        <ProdSec />
      </main>
      <Footer />
    </>
  );
}
