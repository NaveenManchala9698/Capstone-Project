import "../css/Home.css";
import Card from "react-bootstrap/Card";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";

const Hero = () => {
  return (
    <div className="hero mt-5">
      <Container fluid>
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col md={8}>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="First slide"
                />
              </Col>
              <Col md={4}>
                <div className="carousel-description">
                  <div>
                    <h1>HANDBAGS</h1>
                  </div>
                  <div>
                    <h4>Min. 60% Off</h4>
                  </div>
                  <hr />
                  <span style={{ cursor: "pointer" }}>
                    <Plus /> Explore
                  </span>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={8}>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Second slide"
                />
              </Col>
              <Col md={4}>
                <div className="carousel-description">
                  <div>
                    <h1>HANDBAGS</h1>
                  </div>
                  <div>
                    <h4>Min. 60% Off</h4>
                  </div>
                  <hr />
                  <span style={{ cursor: "pointer" }}>
                    <Plus /> Explore
                  </span>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={8}>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Third slide"
                />
              </Col>
              <Col md={4}>
                <div className="carousel-description">
                  <div>
                    <h1>HANDBAGS</h1>
                  </div>
                  <div>
                    <h4>Min. 60% Off</h4>
                  </div>
                  <hr />
                  <span style={{ cursor: "pointer" }}>
                    <Plus /> Explore
                  </span>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
        <div className="categories-to-bag mt-4">
          <h1>CATEGORIES TO BAG</h1>
        </div>
        <div className="deal-of-day mt-4">
          <h1>DEAL OF THE DAY</h1>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
