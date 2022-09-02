import Image from "next/image";
import React from "react";
import EmptyImg from "../../assets/empty.svg";
import { Container, Figure, Title } from "./styles";

const EmptyShowcase: React.FC = () => {
  return (
    <Container>
      <Title>Nenhum produto foi encontrado</Title>
      <Figure>
        <Image src={EmptyImg} alt="empty" />
      </Figure>
    </Container>
  );
};

export default EmptyShowcase;
