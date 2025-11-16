import type { FC } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; 
import { Link } from 'react-router-dom';

const logoStyle = {
  fontSize: '1.75rem',
  fontWeight: 700,
  textDecoration: 'none',
};

export const AppNavbar: FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/mainPage" style={logoStyle}>
          <span style={{ color: '#FFE600' }}>Cash</span>
          <span style={{ color: '#FFFFFF' }}>Flow</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/mainPage">
              <Nav.Link>Главная</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/accounts">
              <Nav.Link>Счета</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};