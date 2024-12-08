import Header from "@/components/header";
import Navbar from "@/components/navbar";
import AllProducts from "@/components/allproducts";
import Footer from "@/components/footer";

export default function Products() {
  return (
    <>
      <Header />
      <Navbar />
       <main>
        <AllProducts/>
      </main>
      <Footer/> 
    </>
  );
}
