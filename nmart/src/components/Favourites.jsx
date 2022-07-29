import { Container, Row, Col, Card } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourite } from "../redux/actions";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);

  const dispatch = useDispatch();
  return (
    <Container className="mx-auto" style={{ marginTop: "7rem" }}>
      <Row>
        {favourites &&
          favourites.map((eachProduct, i) => (
            <Col md={4} key={i}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={eachProduct.images[0].url} />
                <Card.Body>
                  <Card.Title>{eachProduct.name}</Card.Title>
                  <Card.Text>
                    <HeartFill
                      color="red"
                      onClick={() => dispatch(removeFavourite(eachProduct))}
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}

        {/* <ListGroup>
            {favourites &&
              favourites.map((eachProduct, i) => (
                <ListGroupItem key={i}>
                  <HeartFill
                    color="red"
                    onClick={() => dispatch(removeFavourite(eachProduct))}
                  />
                  <img src={eachProduct.images.url} alt="#" />
                  <span>{eachProduct.name}</span>
                </ListGroupItem>
              ))}
          </ListGroup> */}
      </Row>
    </Container>
  );
};

export default Favourites;
