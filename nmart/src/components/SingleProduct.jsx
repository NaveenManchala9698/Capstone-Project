import { Button } from "bootstrap";
import { Card, Carousel } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../css/SingleProduct.css";
import { useSelector, useDispatch } from "react-redux";
import productsJson from "../data/products.json";
import { addFavourite, removeFavourite } from "../redux/actions";

const SingleProduct = ({ eachProduct }) => {
  const favourites = useSelector((state) => state.favourites);

  const dispatch = useDispatch();

  const isFav = favourites.includes(eachProduct.articles[0].code);
  const toggleFavourite = () => {
    isFav
      ? dispatch(removeFavourite(eachProduct.articles[0].code))
      : dispatch(addFavourite(eachProduct.articles[0].code));
  };

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
          <Card.Title className="text-left">
            <b>{eachProduct.brandName}</b>
          </Card.Title>
          {isFav ? (
            <HeartFill
              color="red"
              size={25}
              className="me-4 my-auto"
              onClick={toggleFavourite}
            />
          ) : (
            <Heart
              color="black"
              size={25}
              className="me-4 my-auto"
              onClick={toggleFavourite}
            />
          )}
        </div>

        <div className="d-flex justify-content-between">
          <Card.Title className="text-left">{eachProduct.name}</Card.Title>
        </div>

        <div className="d-flex justify-content-between">
          <Card.Text className="text-left">
            <b>{eachProduct.price.formattedValue}</b>
          </Card.Text>
          {/* <button className="add-btn add">Add to Cart</button> */}
        </div>
      </Card.Body>
    </>
  );
};

export default SingleProduct;
