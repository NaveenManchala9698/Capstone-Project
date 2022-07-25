import { Card, Carousel } from "react-bootstrap";

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
      <Card.Body>
        <Card.Title className="text-left">{eachProduct.name}</Card.Title>
        <Card.Text className="text-left">
          {eachProduct.price.formattedValue}
        </Card.Text>
      </Card.Body>
    </>
  );
};

export default SingleProduct;
