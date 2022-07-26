import { Button } from "bootstrap";
import { Card, Carousel } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../css/SingleProduct.css";

const SingleProduct = ({ eachProduct }) => {
  return (
    <>
      {/*  <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={eachProduct.defaultArticle.normalPicture[0].url}
        />
        <Card.Body>
          <Card.Title>{eachProduct.name}</Card.Title>
          <Card.Text>{eachProduct.price.formattedValue}</Card.Text>
        </Card.Body>
      </Card>
 */}

      <Link to={`/product/${eachProduct.articles[0].code}`}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={eachProduct.defaultArticle.normalPicture[0].url}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={eachProduct.images[0].url}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Link>

      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title className="text-left">{eachProduct.name}</Card.Title>
          <Heart style={{ fontSize: "20px" }} />
        </div>

        <div className="d-flex justify-content-between">
          <Card.Text className="text-left">
            {eachProduct.price.formattedValue}
          </Card.Text>
          <button className="add-btn add">Add to Cart</button>
        </div>
      </Card.Body>
    </>
  );
};

export default SingleProduct;
