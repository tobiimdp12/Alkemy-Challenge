import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";

export default function NavBar() {
  const deleteKey = (key) => {
    localStorage.removeItem(key);
  };


  return (
    <section>
      <Navbar bg="dark" variant="dark" fixed="top" expand={false}>
        <Container fluid>
          <Navbar.Brand>HEROAPP</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar"/>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="bg-body"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="text-info">
                HEROAPP
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <Nav.Link as={Link} to={"/"} className="nav-link active">
                  My Team
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/searchheroes"}
                  className="nav-link active"
                >
                  Select a Hero
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/login"}
                  onClick={() => deleteKey("JWToken")}
                  className={"btn btn-danger text-light"}
                >
                  Logout
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </section>
  );
}
