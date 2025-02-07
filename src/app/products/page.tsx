import Header from "@/components/header";
import Navbar from "@/components/navbar";
import AllProducts from "@/components/allproducts";
import Footer from "@/components/footer";
import { Suspense } from "react";

export default function Products() {
  return (
    <>
      <Header />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <AllProducts />
      </Suspense>
      <Footer />
    </>
  );
}
