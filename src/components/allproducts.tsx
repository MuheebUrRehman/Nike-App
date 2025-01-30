"use client";
import { client } from "@/sanity/lib/client";
import { products } from "@/app/type";
import ProductCard from "./productcard";
import { useState, useEffect } from "react";
import { useProductContext } from "@/app/context/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "next/navigation";

export default function AllProducts() {
  const searchParams = useSearchParams();
  const initialSearchQuery = searchParams.get("search") || "";
  const [data, setData] = useState<products[]>([]);
  const [filteredData, setFilteredData] = useState<products[]>([]);
  const { searchQuery, setSearchQuery } = useProductContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedProducts = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const query = `*[_type == 'product'] | order(_updatedAt asc){productName,category,price,inventory,colors,status,image,description,"slug": slug.current}`;
    const fetchData = async () => {
      const result: products[] = await client.fetch(query);
      setData(result);
      setFilteredData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = data;
    if (!searchQuery && initialSearchQuery) {
      setSearchQuery(initialSearchQuery);
    }
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.productName
          .toLowerCase()
          .includes(searchQuery.toLowerCase().trim())
      );
    }
    if (selectedCategory && selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedPriceRanges.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return product.price >= min && (!max || product.price <= max);
        });
      });
    }
    if (sortOrder === "lowToHigh") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortOrder, selectedPriceRanges, data]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedPriceRanges([]);
    setSortOrder("");
  };

  return (
    <section className="w-screen">
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-2xl">New ({data.length})</h1>
          <div className="flex gap-5">
            <div className="flex items-center gap-1">
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300"
              >
                Clear Filters
                <FontAwesomeIcon
                  icon={faSliders}
                  className="text-black text-2xl"
                />
              </button>
            </div>
            <div className="flex items-center gap-1">
              <h3 className="font-medium">Sort by Price</h3>
              <select
                className="p-2 border rounded-md"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">Select</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex ">
          <aside className="md:w-[25%] ">
            <div>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium">Filter by Category</h3>
                <ul className="space-y-2">
                  {[
                    "All",
                    "Men's Training Shoes",
                    "Women's Shoes",
                    "Women's Basketball Jersey",
                  ].map((category) => (
                    <li
                      key={category}
                      className={`cursor-pointer p-2 rounded ${
                        selectedCategory === category
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-5 border-t-[1px]">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Gender</h3>
                </div>
                <div className="flex gap-1 mt-3 ">
                  <input type="checkbox" name="" id="" placeholder="" />
                  <label htmlFor="">Men</label>
                </div>
                <div className="flex gap-1 ">
                  <input type="checkbox" name="" id="" placeholder="" />
                  <label htmlFor="">Women</label>
                </div>
                <div className="flex gap-1 ">
                  <input type="checkbox" name="" id="" placeholder="" />
                  <label htmlFor="">Unisex</label>
                </div>
              </div>
              <div className="py-5 border-t-[1px]">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Kids</h3>
                </div>
                <div className="flex gap-1 mt-3 ">
                  <input type="checkbox" name="" id="" placeholder="" />
                  <label htmlFor="">Boys</label>
                </div>
                <div className="flex gap-1 ">
                  <input type="checkbox" name="" id="" placeholder="" />
                  <label htmlFor="">Girls</label>
                </div>
              </div>
              <div className="py-5 border-t-[1px]">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Shop By Price</h3>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                  {[
                    { label: "Under ₹2500", value: "0-2500" },
                    { label: "₹2501 - ₹5000", value: "2501-5000" },
                    { label: "₹5001 - ₹10000", value: "5001-10000" },
                    { label: "Above ₹13000", value: "13000-" },
                  ].map(({ label, value }) => (
                    <div key={value} className="flex gap-2">
                      <input
                        type="checkbox"
                        value={value}
                        checked={selectedPriceRanges.includes(value)}
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          setSelectedPriceRanges((prev) =>
                            checked
                              ? [...prev, value]
                              : prev.filter((v) => v !== value)
                          );
                        }}
                      />
                      <label>{label}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <div className="grid grid-cols-2 md:grid-cols-3 w-[100%] place-content-center gap-3 ml-9 mt-6 pb-10">
            {paginatedProducts.map((product) => (
              <ProductCard {...product} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-4 py-2 bg-gray-100 rounded">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div className=" w-[78%] flex flex-col ml-auto my-10 border-t-2 border-[#E5E5E5]">
          <h2 className="font-medium text-xl">Related Categories</h2>
          <div className="flex gap-2 mt-6 flex-wrap ">
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              Best Selling Products
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              Best Shoes
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              New Basketball Shoes
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              New Football Shoes
            </button>
            <button className="w-[139px] h-[34px] rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              New Men's Shoes
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              New Running Shoes
            </button>
            <button className="px-5 py-2 rounded-[20px] border-[#CCCCCC] border-[0.5px] text-xs">
              Best Men's Shoes
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              New Jordan Shoes
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              Best Women's Shoes
            </button>
            <button className="px-5 py-2 rounded-3xl border-[#CCCCCC] border-[0.5px] text-xs">
              Best Training & Gym
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
