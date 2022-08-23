import { Card, Carousel } from "react-bootstrap";
import { Cart4, Heart, HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../css/SingleProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, addToCart, removeFavourite } from "../redux/actions";
import { useState } from "react";
import { useEffect } from "react";

const SingleProduct = ({ eachProduct }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(eachProduct);
  }, [eachProduct]);

  const favourites = useSelector((state) => state.favouritesReducer.favourites);

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
            <Card.Title
              className="text-left"
              style={{ height: "1.5rem", fontSize: "17px" }}
            >
              {eachProduct.name}
            </Card.Title>
          </div>

          <div className="d-flex justify-content-between align-items-baseline">
            <Card.Text className="text-left product-price">
              <b>{eachProduct.price.formattedValue}</b>
            </Card.Text>
            <button
              className="add-button"
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              <Cart4 className="mx-2" style={{ fontSize: "25px" }} />
              ADD
            </button>
          </div>
        </Card.Body>
      </div>
    </>
  );
};

export default SingleProduct;
