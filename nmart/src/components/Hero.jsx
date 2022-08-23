import "../css/Home.css";
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
              <Col xs={4}>
                <div className="carousel-description">
                  <div>
                    <h1>Travel Essentials</h1>
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
              <Col xs={8}>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Second slide"
                />
              </Col>
              <Col xs={4}>
                <div className="carousel-description">
                  <div>
                    <h1>Ladies Fashion</h1>
                  </div>
                  <div>
                    <h4>Min. 30% Off</h4>
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
              <Col xs={8}>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Third slide"
                />
              </Col>
              <Col xs={4}>
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
              <Col xs={8}>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Third slide"
                />
              </Col>
              <Col xs={4}>
                <div className="carousel-description">
                  <div>
                    <h1>ActiveWear</h1>
                  </div>
                  <div>
                    <h4>40-70% Off</h4>
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
        <div className="categories-to-bag">
          <h1>CATEGORIES TO BAG</h1>
          <Row className="mt-3">
            <Col xs={6} md={3} lg={2}>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/9047344/pexels-photo-9047344.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="handbags"
                ></img>
                <div className="category-text">Handbags</div>
              </div>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/356252/pexels-photo-356252.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Shirts"
                ></img>
                <div className="category-text">Shirts</div>
              </div>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Jeans"
                ></img>
                <div className="category-text">Jeans</div>
              </div>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                ></img>
                <div className="category-text">Sports Shoes</div>
              </div>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/1362724/pexels-photo-1362724.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dresses"
                ></img>
                <div className="category-text">Dresses</div>
              </div>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Heels"
                ></img>
                <div className="category-text">Heels</div>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6} md={3} lg={2}>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/1470677/pexels-photo-1470677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shirts"
                ></img>
                <div className="category-text">Infant Essentials</div>
              </div>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shirts"
                ></img>
                <div className="category-text">Kids Wear</div>
              </div>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Shirts"
                ></img>
                <div className="category-text">Casual Shoes</div>
              </div>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shirts"
                ></img>
                <div className="category-text">T-Shirts</div>
              </div>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/8886948/pexels-photo-8886948.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Shirts"
                ></img>
                <div className="category-text">Sarees</div>
              </div>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/6914302/pexels-photo-6914302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shirts"
                ></img>
                <div className="category-text">Kurtas</div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
