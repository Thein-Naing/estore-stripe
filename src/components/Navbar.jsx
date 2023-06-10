import { Button, Container, Navbar, Modal, } from 'react-bootstrap';


const NavbarComponent = () => {
  return (
    <Navbar expand='sm'>
      <Navbar.Brand href='/'>
        E-Store
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Button> Card 0 Item</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent;
