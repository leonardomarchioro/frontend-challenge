import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { Container } from "./styles";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Desktop />
      <Mobile />
    </Container>
  );
};

export default Header;
