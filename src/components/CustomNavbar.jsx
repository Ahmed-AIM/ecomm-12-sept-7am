import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartContext } from "../CartContext";


function CustomNavbar() {
  const { cart, wishlist = [] } = useContext(CartContext); // Default to empty array
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
      
        <Navbar.Brand
          as={Link} to="/">
          <img
            src="./img/pngwing.png"
            alt="My Logo"
            style={{ width: '60px' }}
          />
          Ecommerce
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="wishlist">
            Wishlist <Badge bg="danger">{wishlist.length}</Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="cart">
            Cart{" "}
            <Badge bg="warning" text="dark">
              {cart.length}
            </Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
