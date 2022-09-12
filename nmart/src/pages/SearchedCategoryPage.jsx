import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import SingleProduct from "../components/SingleProduct";
import { SpinnerDotted, SpinnerRoundOutlined } from "spinners-react";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

const SearchedCategoryPage = ({ categoryName }) => {
  // GET PRODUCTS

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts(categoryName);
  }, []);

  const fetchProducts = async (categoryName) => {
    try {
      const response = await fetch(
        `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=${categoryName}`,
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
        setSearchResults(allProducts);
        console.log(searchResults);
        setIsLoading(false);
      } else {
        console.log("Errrrror!!");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Navbar2 />
      <Container style={{ marginTop: "10rem" }}>
        <Row className="justify-content-center">
          {isLoading && (
            <SpinnerRoundOutlined
              size={79}
              thickness={134}
              speed={91}
              color="rgb(255, 63, 108)"
            />
          )}
          {searchResults &&
            searchResults.map((eachResult) => (
              <Col key={eachResult.code} md={3}>
                <SingleProduct eachProduct={eachResult} />
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SearchedCategoryPage;
