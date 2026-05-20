import { Offcanvas, Container, Image, Nav, Badge } from "react-bootstrap";
import { Bag, Heart, Person, Gear } from "react-bootstrap-icons";
import { Link } from "react-router";

export const AccountPage = ({ show, onHide }) => {
  return (
    <>
      <Offcanvas show={show} onHide={onHide} placement="end" className="my-acc">
        <Offcanvas.Body className="p-0 d-flex flex-column justify-content-between">
          <Container className="text-white p-0">
            <div className="text-center my-3">
              <div className="d-flex gap-5">
                <Image
                  roundedCircle
                  width={150}
                  height={150}
                  src="/images/profile.jpg"
                />

                <div className="d-flex gap-3">
                  <p className="text-primary">Upload</p>
                  <p className="text-primary">Edit</p>
                </div>
              </div>
              <h5>Samuel Adeolu</h5>
              <p className="text-muted small"> @samklefBoy </p>
            </div>

            {/* Navigation Links */}
            <Nav className="flex-column gap-2">
              <Nav.Link as={Link} to="/orders">
                <span>
                  <Bag className="me-2" /> My Orders{" "}
                </span>
                <Badge bg="primary" pill>
                  1 Active
                </Badge>
              </Nav.Link>

              <Nav.Link as={Link} to="/wishlist" className="tet-dark">
                <span>
                  <Heart className="me-2" />
                  Wishlist
                </span>
              </Nav.Link>

              <Nav.Link as={Link} to="/private-store" className="tet-dark">
                <span>
                  <Person className="me-2" />
                  creator Studio (My Store)
                </span>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/settings"
                className="tet-dark border-top pt-3 mt-2"
              >
                <span>
                  <Gear className="me-2" /> Account Settings{" "}
                </span>
              </Nav.Link>
            </Nav>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
