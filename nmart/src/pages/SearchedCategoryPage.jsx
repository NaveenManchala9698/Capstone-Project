import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import SingleProduct from "../components/SingleProduct";
import { SpinnerDotted } from "spinners-react";
import Footer from "../components/Footer";

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
              "fe1f236124msh1767e0572a8242fp16034djsn23e3142518a1",
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
      <Navbar />
      <Container style={{ marginTop: "10rem" }}>
        <Row className="justify-content-center">
          {isLoading && (
            <SpinnerDotted
              size={87}
              thickness={180}
              speed={100}
              color="rgba(57, 172, 111, 1)"
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
