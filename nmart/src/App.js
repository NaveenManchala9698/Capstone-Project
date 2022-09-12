import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import FavouritesPage from "./pages/FavouritesPage";
import SearchedCategoryPage from "./pages/SearchedCategoryPage";
import { useEffect, useState } from "react";
import CartPage from "./pages/CartPage";
import StripeContainer from "./components/StripeContainer";

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
              "d5a66367cfmsh80d30c00612e90ep1cb66ejsna929d5aabc69",
            "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
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
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home products={products} />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route
            path="/product/:productID"
            element={<ProductDetail products={products} />}
          />
          <Route path="/RandomPage" element={<SearchedCategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<StripeContainer />} />
          <Route
            path="/baby"
            element={
              <SearchedCategoryPage categoryName="kids_newbornbaby_viewall" />
            }
          />
          <Route
            path="/giftGuide"
            element={<SearchedCategoryPage categoryName="giftguide" />}
          />
          <Route
            path="/women"
            element={<SearchedCategoryPage categoryName="ladies_all" />}
          />
          <Route
            path="/divided"
            element={<SearchedCategoryPage categoryName="ladies_divided" />}
          />
          <Route
            path="/men"
            element={<SearchedCategoryPage categoryName="men_all" />}
          />
          <Route
            path="/kids"
            element={<SearchedCategoryPage categoryName="kids_all" />}
          />
          <Route
            path="/home"
            element={<SearchedCategoryPage categoryName="home_all" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
