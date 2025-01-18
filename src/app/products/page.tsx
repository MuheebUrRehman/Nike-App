import Header from "@/components/header";
import Navbar from "@/components/navbar";
import AllProducts from "@/components/allproducts";
import Footer from "@/components/footer";
import { client } from "@/sanity/lib/client";

export default async function Products() {
  const query = `*[_type == 'product'] | order(_updatedAt asc){productName,category,price,inventory,colors,status,image,description}`;
  const data:products[] = await client.fetch(query);
  return (
    <>
      <Header />
      <Navbar />
      {data.map((data) => (
        <AllProducts data={data} />
      ))}
        
     
      <Footer/> 
    </>
  );
}
