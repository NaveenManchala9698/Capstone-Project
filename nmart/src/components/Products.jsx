import { Col, Container, Row } from "react-bootstrap";
import SingleProduct from "./SingleProduct";

const Products = ({ products }) => {
  return (
    <Container className="mx-auto mt-3">
      <Row>
        <div className="col-12 text-center ">
          <h1>All Products</h1>
          <hr />
        </div>
        {products &&
          products.map((eachProduct) => (
            <Col key={eachProduct.code} md={3}>
              <SingleProduct eachProduct={eachProduct} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Products;
