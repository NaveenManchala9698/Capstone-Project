import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Navbar2 from "./Navbar2";

const Home = ({ products }) => {
  // GET PRODUCTS

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async (categoryName) => {
    try {
      const response = await fetch(
        "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=" +
          categoryName,
        {
          headers: {
            "X-RapidAPI-Key":
              "fe1f236124msh1767e0572a8242fp16034djsn23e3142518a1",
            "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const allProducts = data.results;
        console.log("Hey!", allProducts);
        setSearchResults(allProducts);
      } else {
        console.log("Errrrror!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Navbar2 search={fetchProducts} /> */}
      <Navbar search={fetchProducts} />
      <Hero />
      <Products products={products} />
    </>
  );
};

export default Home;
