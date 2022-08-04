import { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import "../css/CartPage.css";
import { removeFromCart } from "../redux/actions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.content);

  const dispatch = useDispatch();

  return (
    <Container className="mx-auto" style={{ marginTop: "7rem" }}>
      <h1>Shopping Bag</h1>

      {cartItems &&
        cartItems.map((eachCartItem, i) => (
          <Row>
            <Col md={7} className="cart-item-container">
              <Row>
                <Col md={3} key={i} className="cart-item-img-container">
                  <img
                    className="d-block w-100"
                    src={eachCartItem.defaultArticle.normalPicture[0].url}
                    alt="First slide"
                    style={{ height: "150px" }}
                  />
                </Col>
                <Col md={8}>
                  <div className="cart-details text-left">
                    <div className="cart-details-brandName">
                      <b>{eachCartItem.brandName}</b>
                    </div>
                    <div className="cart-details-name">{eachCartItem.name}</div>
                    <div className="cart-details-size-and-qty d-flex flex-row">
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
                            <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="cart-details-qty-dropdown">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
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
                    <div className="mt-2">
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
            </Col>
            <Col
              md={4}
              className="checkout-container"
              style={{ backgroundColor: "pink" }}
            ></Col>
          </Row>
        ))}
    </Container>
  );
};

export default Cart;
