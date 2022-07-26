import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import productsJson from "../data/products.json";

const Products = () => {
  /* const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);

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
        setLoading(false);
      } else {
        console.log("Errrrror!!");
      }
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <Container className="mx-auto">
      <Row>
        <div className="col-12 text-center ">
          <h1>All Products</h1>
          <hr />
        </div>
        {productsJson.results &&
          productsJson.results.map((eachProduct) => (
            <Col key={eachProduct.code} md={3}>
              <SingleProduct eachProduct={eachProduct} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Products;
