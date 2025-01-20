import ProdHeader from "@/components/prodHead";
import Navbar from "@/components/navbar";
import ProdSec from "@/components/prodsec";
import Footer from "@/components/footer";
import { products } from "@/app/type";
import { client } from "@/sanity/lib/client";

export default async function ProductDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type == 'product' && slug.current == "${slug}"] | order(_updatedAt asc){productName,category,price,inventory,colors,status,image,description}[0]`;
  const data: products = await client.fetch(query);

  return (
    <>
      <ProdHeader />
      <Navbar />
      <main>
        <ProdSec {...data} />
      </main>
      <Footer />
    </>
  );
}
