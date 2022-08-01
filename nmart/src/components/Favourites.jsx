import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);

  return (
    <Container className="mx-auto" style={{ marginTop: "7rem" }}>
      <Row>
        {favourites &&
          favourites.map((eachFavourite, i) => (
            <Col md={3} key={i}>
              <SingleProduct eachProduct={eachFavourite} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Favourites;
