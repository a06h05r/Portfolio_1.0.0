import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledNevbar } from "./HeaderStyle";
import Container from "../../common/Container";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledNevbar>
          <Link to="/">Resume</Link>
          <Link to="/portfolio">Portflio</Link>
          <Link to="/contact">Contact</Link>
        </StyledNevbar>
      </Container>
    </StyledHeader>
  );
};

export default Header;
