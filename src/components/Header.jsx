import {
  Container, Nav, Navbar, NavDropdown, Button, NavLink,
} from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 991 })
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate("/")
  }

  const navMenu = (
    <Nav>
      <NavDropdown
        title="Program"
        className={isMobile ? "mb-3" : "mx-3"}
        menuVariant="dark"
      >
        <NavDropdown.Item href="#program/1.1">Online Course</NavDropdown.Item>
        <NavDropdown.Item href="#program/1.2">Mini bootcamp</NavDropdown.Item>
        <NavDropdown.Item href="#program/1.3">Bootcamp</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        title="Bidang Kami"
        className={isMobile ? "mb-3" : "mx-3"}
        menuVariant="dark"
      >
        <NavDropdown.Item href="#bidang/2.1">
          Digital marketing
        </NavDropdown.Item>
        <NavDropdown.Item href="#bidang/2.2">
          Product management
        </NavDropdown.Item>
        <NavDropdown.Item href="#bidang/2.3">English</NavDropdown.Item>
        <NavDropdown.Item href="#bidang/2.3">Programming</NavDropdown.Item>
      </NavDropdown>
      <NavLink href="#about" className={isMobile ? "mb-3" : "mx-3"}>
        Tentang Kami
      </NavLink>
      <Button
        className={
          isMobile ? "rounded-pill mx-3 mb-3 px-3" : "rounded-pill ms-3 px-3"
        }
      >
        Masuk/Daftar
      </Button>
    </Nav>
  );

  const mobileNav = (
    <Navbar expand="lg" fluid className="bg-dark navbar-dark py-3" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleLogoClick} className="fw-bold">
          Edspert.id
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>{navMenu}</Navbar.Collapse>
      </Container>
    </Navbar>
  );

  const defaultNav = (
    <Navbar fluid className="bg-dark navbar-dark py-3" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleLogoClick} className="fw-bold">
          Edspert.id
        </Navbar.Brand>
        {navMenu}
      </Container>
    </Navbar>
  );

  return isMobile ? mobileNav : defaultNav;
}

export default Header;
