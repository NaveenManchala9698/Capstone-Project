import { useEffect, useState } from "react";
import Chatbot1 from "../components/ChatBot1";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
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
              "d5a66367cfmsh80d30c00612e90ep1cb66ejsna929d5aabc69",
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
      {/* <Navbar search={fetchProducts} /> */}
      <Navbar2 />
      <Hero />
      <Products products={products} />
      <Chatbot1 />
      <Footer />
    </>
  );
};

export default Home;
