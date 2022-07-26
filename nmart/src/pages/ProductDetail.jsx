import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import porductsJson from "../data/products.json";

const ProductDetail = () => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "5d2034d125msh78b9ecc89aef859p194cffjsn00dd4be77fd8",
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      };

      const response = await fetch(
        "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&productcode=1011909021&country=us",
        options
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProductDetails(data);
      } else {
        console.log("Error!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container>
        <Row>
          {productDetails && (
            <>
              <Col md={6}>
                <img
                  src={
                    porductsJson.results[0].defaultArticle.normalPicture[0].url
                  }
                  alt={porductsJson.results[0].name}
                  height="600px"
                  width="400px"
                />
              </Col>
              <Col md={6}>
                <h1>{productDetails.product.name}</h1>
                <h5>
                  <b>Brand Name: </b>
                  {porductsJson.results[0].brandName}
                </h5>
                <p>{productDetails.product.description}</p>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
