import { useState } from "react";
import CartPageHeader from "../../components/CartPageHeader";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const CartPage = () => {
  const [qty, setQty] = useState(1);
  const [checkout, setCheckout] = useState(false);
  const [cart, setCart] = useState(true);
  // const [deleteCart, setDeleteCart] = useState(null);

  return (
    <>
      <CartPageHeader />

      {cart && (
        <div className="cart-items-section">
          <Container>
            <Row className="px-3">
              <Col className="col-12 col-md-7">
                <div className="cart-col">
                  <Row className="py-5 px-3 ">
                    <Col className="col-3 col-sm-2 me-3">
                      <Image
                        roundedCircle
                        width={70}
                        height={80}
                        src="/images/profile.jpg"
                      />
                    </Col>
                    <Col>
                      <h5>Black and Gray Athletic Cotton Socks - 6 Pairs</h5>
                      <p
                        style={{
                          marginTop: "28px",
                          color: "rgb(21, 255, 0)",
                          fontSize: "20px",
                          fontWeight: "500",
                        }}
                      >
                        $10,900
                      </p>

                      <Row className="align-items-center mt-4">
                        <Col className="">
                          <button
                            onClick={() => {
                              setQty(Math.max(1, qty - 1));
                            }}
                            className="increment-button"
                          >
                            -
                          </button>
                          <button className="qty-button">{qty}</button>
                          <button
                            onClick={() => {
                              setQty(qty + 1);
                            }}
                            className="increment-button"
                          >
                            +
                          </button>
                        </Col>
                        <Col className="col-auto">
                          <div className="delete-btn">Delete</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>

                <div className="cart-col">
                  <Row className="py-5 px-3 ">
                    <Col className="col-3 col-sm-2 me-3">
                      <Image
                        roundedCircle
                        width={70}
                        height={80}
                        src="/images/profile.jpg"
                      />
                    </Col>
                    <Col>
                      <h5>Black and Gray Athletic Cotton Socks - 6 Pairs</h5>
                      <p
                        style={{
                          marginTop: "28px",
                          color: "rgb(21, 255, 0)",
                          fontSize: "20px",
                          fontWeight: "500",
                        }}
                      >
                        $10,900
                      </p>

                      <Row className="align-items-center mt-4">
                        <Col className="">
                          <button
                            onClick={() => {
                              setQty(Math.max(1, qty - 1));
                            }}
                            className="increment-button"
                          >
                            -
                          </button>
                          <button className="qty-button">{qty}</button>
                          <button
                            onClick={() => {
                              setQty(qty + 1);
                            }}
                            className="increment-button"
                          >
                            +
                          </button>
                        </Col>
                        <Col onClick={() => {}} className="col-auto">
                          <div className="delete-btn">Delete</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="col-12 col-md-5">
                <div className="summary-section p-4">
                  <h6
                    style={{
                      fontSize: "25px",
                      fontWeight: 600,
                    }}
                  >
                    Order Summary
                  </h6>

                  <Row
                    className="pt-4"
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    <Col className="col-8">
                      <p>Items</p>
                    </Col>
                    <Col className="me-auto">2</Col>
                  </Row>

                  <Row
                    className="pt-2"
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    <Col className="col-8 col-md-7">
                      <p>Total</p>
                    </Col>
                    <Col className="me-auto">$21,800</Col>
                  </Row>

                  <Row
                    className="pt-2"
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    <Col className="col-8 col-md-7">
                      <p>Delivery fee:</p>
                    </Col>
                    <Col className="me-auto">$1,000</Col>
                  </Row>

                  <Row>
                    <Col className="col-8 col-md-7"></Col>
                    <Col className="me-auto col-3">
                      <div className="order-border"></div>
                    </Col>
                  </Row>

                  <Row
                    className="pt-4"
                    style={{
                      fontSize: "18px",
                      color: "rgb(241, 0, 0)",
                    }}
                  >
                    <Col className="col-8 col-md-7">
                      <p>Total Price</p>
                    </Col>
                    <Col className="me-auto">$22,800</Col>
                  </Row>

                  <div className="d-flex justify-content-end">
                    <button
                      onClick={() => {
                        setCheckout(!false);
                        setCart(!true);
                      }}
                      className="checkout-btn mt-5 "
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      {checkout && (
        <div className="checkout-pgn">
          <div className="checkout-form">
            <h6
              style={{
                fontSize: "23px",
                fontWeight: 600,
                padding: "35px 0px",
              }}
            >
              Shipping Information
            </h6>

            <Form className="px-3">
              <FloatingLabel controlId="floatingName" label=" FULL NAME">
                <Form.Control type="Name" placeholder="NAME" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label=" ADDRESS"
                className="my-4"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPhone" label="PHONE">
                <Form.Control type="Phone" placeholder="Phone" />
              </FloatingLabel>

              <Row className="pt-4">
                <Col>
                  <FloatingLabel controlId="floatingPhone" label="CITY">
                    <Form.Control type="City" placeholder="City" />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId="floatingPhone" label="STATE">
                    <Form.Control type="State" placeholder="State" />
                  </FloatingLabel>
                </Col>
              </Row>

              <Button
                type="submit"
                variant="outline-warning"
                className="my-4 d-block ms-auto"
              >
                Place Order
              </Button>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
