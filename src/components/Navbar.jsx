import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from 'react';
import { CartContext } from "../CartContext";
// import CartProduct from './CartProduct';

const NavbarComponent = () => {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce((sum, product)=>
  sum + product.quantity, 0);


  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">E-Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}> Card 0 Item</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Body</h1>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarComponent;
