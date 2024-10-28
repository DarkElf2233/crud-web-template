import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link as RouterNavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <BootstrapNavbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <BootstrapNavbar.Brand href="/">My Site</BootstrapNavbar.Brand>
          <Nav className="md-right">
            <RouterNavLink to="/signin">Вход</RouterNavLink>
            <RouterNavLink to="/signup">Регистрация</RouterNavLink>
          </Nav>
        </Container>
    </BootstrapNavbar>
  );
};
