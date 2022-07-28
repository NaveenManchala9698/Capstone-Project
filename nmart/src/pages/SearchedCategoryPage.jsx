import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";

const SearchedCategoryPage = () => {
  // GET PRODUCTS

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async (query) => {
    try {
      const response = await fetch(
        `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=${query}`,
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
      <Container>
        <Row>
          {searchResults &&
            searchResults.map((eachResult) => (
              <Col md={4}>
                <img
                  className="d-block w-100"
                  src={eachResult.defaultArticle.normalPicture[0].url}
                  alt="First slide"
                />
                {eachResult.name}
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default SearchedCategoryPage;
