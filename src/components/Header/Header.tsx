import type { FC } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

export const Header: FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/" className="d-none d-lg-block">
          <Navbar.Brand>
            <span className="logo-cash">Cash</span>
            <span className="logo-flow">Flow</span>
          </Navbar.Brand>
        </LinkContainer>
        <div className="d-flex justify-content-between align-items-center w-100 d-lg-none">
          <Navbar.Toggle aria-controls="offcanvas-navbar" />
          <LinkContainer to="/">
            <Navbar.Brand>
              <span className="logo-cash">Cash</span>
              <span className="logo-flow">Flow</span>
            </Navbar.Brand>
          </LinkContainer>
        </div>
        <Navbar.Offcanvas
          id="offcanvas-navbar"
          aria-labelledby="offcanvas-navbar-label"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvas-navbar-label">
              Меню
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Главная</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/accounts">
                <Nav.Link>Счета</Nav.Link>
              </LinkContainer>
            </Nav>
          </Offcanvas.Body>

        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};