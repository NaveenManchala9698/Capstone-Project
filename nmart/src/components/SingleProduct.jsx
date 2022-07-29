import { Card, Carousel } from "react-bootstrap";
import { Cart4, Heart, HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../css/SingleProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../redux/actions";
import { useEffect } from "react";
import ProductDetail from "../pages/ProductDetail";

const SingleProduct = ({ eachProduct }) => {
  const favourites = useSelector((state) => state.favourites);

  const dispatch = useDispatch();
  console.log(favourites);
  const isFav = favourites.find((p) => p.code === eachProduct.code)
    ? true
    : false;

  const toggleFavourite = () => {
    isFav
      ? dispatch(removeFavourite(eachProduct))
      : dispatch(addFavourite(eachProduct));
  };

  return (
    <>
      <div className="whole-product">
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
            <button className="add-btn add">
              <Cart4 className="mx-2" />
              Add
            </button>
          </div>
        </Card.Body>
      </div>
    </>
  );
};

export default SingleProduct;
