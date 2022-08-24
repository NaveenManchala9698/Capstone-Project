import { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import {
  BookmarkStarFill,
  ChevronRight,
  Tag,
  XLg,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/CartPage.css";
import { removeFromCart } from "../redux/actions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.content);

  const dispatch = useDispatch();

  const itemsPrice = cartItems.reduce((a, c) => a + c.price.value, 0);
  const taxPrice = itemsPrice * 0.15;
  const shippingPrice = itemsPrice > 49.99 ? 0 : 10;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <Container
      className="mx-auto shopping-bag-container"
      style={{ marginTop: "7rem" }}
    >
      <h1>SHOPPING BAG</h1>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      <div>
        <Row>
          <Col md={8}>
            {cartItems &&
              cartItems.map((eachCartItem, i) => (
                <Row className="cart-item-container">
                  <Col md={3} key={i} className="cart-item-img-container">
                    <img
                      className="d-block w-100"
                      src={eachCartItem.defaultArticle.normalPicture[0].url}
                      alt="First slide"
                      style={{ height: "180px" }}
                    />
                  </Col>
                  <Col md={8} className="px-0">
                    <div className="cart-details text-left">
                      <div className="cart-details-brandName mb-2">
                        <h5>
                          <b>{eachCartItem.brandName}</b>
                        </h5>
                      </div>
                      <div
                        className="cart-details-name mb-2"
                        style={{ fontSize: "22px" }}
                      >
                        {eachCartItem.name}
                      </div>
                      <div className="cart-details-size-and-qty d-flex flex-row mb-3">
                        <div className="cart-details-size-dropdown">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              Size: S
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                XL
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="cart-details-qty-dropdown">
                          <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                              Qty: 1
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <div className="mt-2" style={{ fontSize: "20px" }}>
                        <b>{eachCartItem.price.formattedValue}</b>
                      </div>
                    </div>
                  </Col>
                  <Col md={1}>
                    <XLg
                      onClick={() => {
                        dispatch(removeFromCart(i));
                      }}
                    />
                  </Col>
                </Row>
              ))}
            <Link to="/favourites">
              <Row md={12} className="add-from-wishlist">
                <Col md={1}>
                  <BookmarkStarFill style={{ fontSize: "22px" }} />
                </Col>
                <Col md={10} className="text-left">
                  <b>Add More From Wishlist</b>
                </Col>
                <Col md={1}>
                  <ChevronRight style={{ fontSize: "22px" }} />
                </Col>
              </Row>
            </Link>
          </Col>
          <Col md={4} className="checkout-container">
            <h3>PRICE DETAILS</h3>
            <hr></hr>
            <Row className="item-price">
              <Col md={9} className="text-left">
                Items Price
              </Col>
              <Col md={2} className="text-right">
                ${itemsPrice.toFixed(2)}
              </Col>
            </Row>

            <Row className="tax-price">
              <Col md={9} className="text-left">
                Tax Price
              </Col>
              <Col md={2} className="text-right">
                ${taxPrice.toFixed(2)}
              </Col>
            </Row>
            <Row className="shipping-price">
              <Col md={9} className="text-left">
                Shipping Price
              </Col>
              <Col md={2} className="text-right">
                ${shippingPrice.toFixed(2)}
              </Col>
            </Row>
            <hr></hr>
            <Row className="px-3">
              <h6>
                <b>COUPONS</b>
              </h6>
            </Row>
            <div>
              <Row>
                <Col md={1}>
                  <Tag />
                </Col>
                <Col md={7} className="text-left">
                  <b>Apply Coupons</b>
                </Col>
                <Col md={2}>
                  <button className="coupon-button">APPLY</button>
                </Col>
              </Row>
            </div>

            <hr></hr>
            <Row className="total-price mt-2">
              <Col md={9} className="text-left">
                <b>Total Price</b>
              </Col>
              <Col md={2} className="text-right">
                <b>${totalPrice.toFixed(2)}</b>
              </Col>
            </Row>
            <div>
              <Link to="/payment">
                <button className="order-button">PLACE ORDER</button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Cart;
