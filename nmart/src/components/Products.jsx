import { Col, Container, Row } from "react-bootstrap";
import SingleProduct from "./SingleProduct";

const Products = ({ products }) => {
  return (
    <Container className="mx-auto mt-5">
      <Row>
        <div className="col-12 text-center ">
          <h1 className="mb-5 all-products">ALL PRODUCTS</h1>
        </div>
        {products &&
          products.map((eachProduct) => (
            <Col key={eachProduct.code} xs={12} sm={6} md={3}>
              <SingleProduct eachProduct={eachProduct} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Products;
