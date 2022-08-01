import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import SingleProduct from "../components/SingleProduct";

const SearchedCategoryPage = ({ categoryName }) => {
  // GET PRODUCTS

  const [searchResults, setSearchResults] = useState([]);

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
              "503fe8739dmshb9c258d9eca40e5p172587jsn6bfa1094ea07",
            "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const allProducts = data.results;
        setSearchResults(allProducts);
        console.log(searchResults);
      } else {
        console.log("Errrrror!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "10rem" }}>
        <Row>
          {searchResults &&
            searchResults.map((eachResult) => (
              <Col key={eachResult.code} md={3}>
                <SingleProduct eachProduct={eachResult} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default SearchedCategoryPage;
