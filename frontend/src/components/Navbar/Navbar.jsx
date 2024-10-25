import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as ReactNavbar } from "react-bootstrap";
import { Link as RouterNavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <ReactNavbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <ReactNavbar.Brand href="/">App</ReactNavbar.Brand>
          <Nav className="md-right">
            <RouterNavLink to="/signin">Вход</RouterNavLink>
            <RouterNavLink to="/signup">Регистрация</RouterNavLink>
          </Nav>
        </Container>
    </ReactNavbar>
  );
};
