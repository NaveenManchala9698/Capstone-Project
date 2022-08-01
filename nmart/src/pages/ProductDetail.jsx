/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import porductsJson from "../data/products.json";
import "../css/ProductDetails.css";
import { Cart3, CircleFill, Heart } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const [productDetails, setProductDetails] = useState([]);
  const [productImageUrl, setProductImageUrl] = useState("");

  const params = useParams();
  const productID = params.productID;

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
            "503fe8739dmshb9c258d9eca40e5p172587jsn6bfa1094ea07",
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
      <div style={{ marginTop: "6rem", backgroundColor: "lightgray" }}>
        <Container className="mx-auto">
          <Row>
            {productDetails && (
              <>
                <Col md={6} className="mt-5 ">
                  <img
                    src={productImageUrl}
                    alt={porductsJson.results[0].name}
                    height="600px"
                    width="400px"
                  />
                </Col>
                <Col md={6} className="mt-5 text-left">
                  <h1>
                    <b>{porductsJson.results[0].brandName}</b>
                  </h1>
                  <div className="d-flex">
                    <h4>{productDetails.name}</h4>
                    <h4 className="text-warning ml-2">
                      <b>(New Arrival)</b>
                    </h4>
                  </div>
                  <hr />

                  <div className="d-flex">
                    <h3 className="mr-3">
                      <b>Price: </b>$ {/* {productDetails.whitePrice.price} */}
                    </h3>
                    <a href="#" className="cart_btn mx-1">
                      <Cart3 className="mx-2" />
                      ADD TO CART
                    </a>
                    <a href="#" class="wishlist_btn mx-1">
                      <Heart className="mx-2" />
                      WISHLIST
                    </a>
                  </div>
                  <div className="mt-3">
                    <div class="dropdown">
                      <button
                        class="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        More Colors
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
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
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <h5>
                      <b>SELECT SIZE: </b>
                    </h5>
                    <a href="#" class="size-buttons">
                      S
                    </a>
                    <a href="#" class="size-buttons">
                      M
                    </a>
                    <a href="#" class="size-buttons">
                      L
                    </a>
                    <a href="#" class="size-buttons">
                      XL
                    </a>
                  </div>
                  <div className="mt-3">
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
    </>
  );
};

export default ProductDetail;
