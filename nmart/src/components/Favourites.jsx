import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import "../css/Favourites.css";

const Favourites = () => {
  const favourites = useSelector((state) => state.favouritesReducer.favourites);

  return (
    <Container
      className="mx-auto favourites-container"
      style={{ marginTop: "8rem" }}
    >
      <h1 className="mb-5">YOUR WISHLIST</h1>
      <Row>
        {favourites &&
          favourites.map((eachFavourite, i) => (
            <>
              <Col md={3} key={i}>
                <SingleProduct eachProduct={eachFavourite} />
              </Col>
            </>
          ))}
      </Row>
    </Container>
  );
};

export default Favourites;
