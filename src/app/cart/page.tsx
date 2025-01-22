import CartSec from "@/components/cartsec";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Cart() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <CartSec />
      </main>
      <Footer />
    </>
  );
}
