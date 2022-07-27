import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourite } from "../redux/actions";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);

  const dispatch = useDispatch();
  return (
    <Container className="mx-auto" style={{ marginTop: "7rem" }}>
      <Row>
        <Col sm={12}>
          <ListGroup>
            {favourites &&
              favourites.map((f, i) => (
                <ListGroupItem key={i}>
                  <HeartFill
                    color="red"
                    onClick={() => dispatch(removeFavourite(f))}
                  />
                  <span>{f}</span>
                </ListGroupItem>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
