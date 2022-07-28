import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import FavouritesPage from "./pages/FavouritesPage";
import SearchedCategoryPage from "./pages/SearchedCategoryPage";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // GET PRODUCTS

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
        {
          headers: {
            "X-RapidAPI-Key":
              "5d2034d125msh78b9ecc89aef859p194cffjsn00dd4be77fd8",
            "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const allProducts = data.results;
        setProducts(allProducts);
      } else {
        console.log("Errrrror!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="/product/:productID"
            element={<ProductDetail products={products} />}
          />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/category" element={<SearchedCategoryPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
