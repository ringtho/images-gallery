import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const Header = ({ title }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Logo alt={title} style={{ maxWidth: '08rem', maxHeight: '3rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
