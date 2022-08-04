import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

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
              "d5ba9e1f02msha6b0efd73d5dbdbp13095bjsn50fc3413fc7d",
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
      <Navbar search={fetchProducts} />
      <Hero />
      <Products products={products} />
    </>
  );
};

export default Home;
