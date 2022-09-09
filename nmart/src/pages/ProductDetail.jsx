/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import porductsJson from "../data/products.json";
import "../css/ProductDetails.css";
import { Cart3, CircleFill, Heart, HeartFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, addToCart, removeFavourite } from "../redux/actions";
import Footer from "../components/Footer";

const ProductDetail = ({ products }) => {
  const [productDetails, setProductDetails] = useState([]);
  const [productImageUrl, setProductImageUrl] = useState("");

  const params = useParams();
  const productID = params.productID;

  /* const favourites = useSelector((state) => state.favouritesReducer.favourites);

  const dispatch = useDispatch();

  console.log(favourites);
  const isFav = favourites.find((p) => p.code === eachProduct.code)
    ? true
    : false;

  const toggleFavourite = () => {
    isFav
      ? dispatch(removeFavourite(eachProduct))
      : dispatch(addFavourite(eachProduct));
  }; */

  useEffect(() => {
    fetchProductDetails();
  }, []);

  useEffect(() => {
    const currentProduct = products.find(
      (p) => p.articles[0].code === productID
    );
    setProductImageUrl(currentProduct.articles[0].normalPicture[0].url);
  }, [productID, products]);

  const fetchProductDetails = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fe1f236124msh1767e0572a8242fp16034djsn23e3142518a1",
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      };

      const response = await fetch(
        "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&country=us&productcode=" +
          productID,
        options
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const final = data.product;
        setProductDetails(final);
      } else {
        console.log("Error!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="product-details" style={{ marginTop: "6rem" }}>
        <Container className="mx-auto mb-4">
          <Row>
            {productDetails && (
              <>
                <Col sm={12} md={6} className="mt-5 ">
                  <img
                    src={productImageUrl}
                    alt={porductsJson.results[0].name}
                    height="600px"
                    width="400px"
                    style={{ position: "relative" }}
                  />
                  {/* <div class="new_tag">
                    New
                    <div class="new_tag block1"></div>
                    <div class="new_tag block2"></div>
                  </div> */}
                  <div className="badge-overlay">
                    <span className="top-right badge red">Sale</span>
                  </div>
                </Col>
                <Col sm={12} md={6} className="mt-5 text-left">
                  <h1>
                    <b>{porductsJson.results[0].brandName}</b>
                  </h1>
                  <div className="d-flex">
                    <h4>{productDetails.name}</h4>
                    {/* <h4 className="text-warning ml-2">
                      <b>(New Arrival)</b>
                    </h4> */}
                    {/* <div class="new_tag">
                      New
                      <div class="new_tag block1"></div>
                      <div class="new_tag block2"></div>
                    </div> */}
                  </div>
                  <hr />

                  <div>
                    {productDetails.whitePrice && (
                      <h3 className="mr-3">
                        <b>Price: </b>$ {productDetails.whitePrice.price}
                      </h3>
                    )}
                  </div>

                  <div className="mt-3">
                    <label className="dropdown">
                      <div className="dd-button">More Colors</div>
                      <input
                        type="checkbox"
                        className="dd-input"
                        id="test"
                      ></input>

                      <ul className="dd-menu">
                        {productDetails.articlesList &&
                          productDetails.articlesList.map((eachColor) => (
                            <li className="px-3 py-1">
                              <span className="mr-2">
                                <CircleFill
                                  style={{
                                    color: `${eachColor.color.rgbColor}`,
                                  }}
                                />
                              </span>
                              {eachColor.color.text}
                            </li>
                          ))}
                      </ul>
                    </label>
                  </div>

                  <div className="mt-3 mb-5">
                    <h5 className="mb-3">
                      <b>SELECT SIZE: </b>
                    </h5>
                    <a href="#" className="size-buttons">
                      <b>S</b>
                    </a>
                    <a href="#" className="size-buttons">
                      <b>M</b>
                    </a>
                    <a href="#" className="size-buttons">
                      <b>L</b>
                    </a>
                    <a href="#" className="size-buttons">
                      <b>XL</b>
                    </a>
                  </div>

                  <div className="mt-3 cartwish-btns">
                    <div>
                      <a href="#" className="cart_btn">
                        <Cart3 className="mx-2" />
                        ADD TO CART
                      </a>
                    </div>
                    <div>
                      <a href="#" className="wishlist_btn">
                        <Heart className="mx-2" />
                        WISHLIST
                      </a>
                    </div>
                  </div>

                  <div className="mt-4">
                    <li>100% Original Products</li>{" "}
                    <li>Pay on delivery available</li>
                    <li>Easy 30 days returns and exchanges</li>
                    <li>Try & Buy available</li>
                  </div>
                  <hr />

                  <div className="mt-3">
                    <h5>
                      <b>PRODUCT DETAILS: </b>
                    </h5>
                    <p>{productDetails.description}</p>
                  </div>
                  <div className="mt-3">
                    <h5>
                      <b>SIZE & FIT: </b>
                    </h5>
                    <p>The model(height 5'5) is wearing size M.</p>
                  </div>
                  <div className="mt-3">
                    <>
                      <h5>
                        <b>MATERIAL: </b>
                      </h5>
                      {productDetails.materialDetails &&
                        productDetails.materialDetails.map((eachMaterial) => (
                          <li className="px-3 py-1">{eachMaterial.name}</li>
                        ))}
                    </>
                  </div>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
