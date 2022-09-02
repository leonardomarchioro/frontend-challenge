import { Button, Spacer } from "@nextui-org/react";

import React from "react";
import { IProducts } from "../../interface/products";
import {
  ButtonRoot,
  CardBody,
  CardRoot,
  Container,
  DiscointRoot,
  NoPartherSpan,
  PartnerRoot,
  SImage,
  Title,
} from "./styles";

const CardProduct: React.FC<{ product: IProducts }> = ({ product }) => {
  const replacePrice = (price: number) =>
    price.toFixed(2).toString().replace(".", ",");

  return (
    <Container>
      <CardRoot isHoverable>
        <CardBody>
          <SImage src={product.image} alt={product.name} />

          <Title>{product.name}</Title>
          <DiscointRoot>
            <span>R${replacePrice(product.price)}</span>
            <h6>{product.discount}% OFF</h6>
          </DiscointRoot>
          <PartnerRoot>
            <span>SÓCIO WINE</span>
            <PartherPrice price={product.priceMember} />
          </PartnerRoot>
          <NoPartherSpan>
            NÃO SÓCIO R${replacePrice(product.priceNonMember)}
          </NoPartherSpan>
        </CardBody>
      </CardRoot>
      <Spacer />
      <ButtonRoot>
        <Button>Adicionar</Button>
      </ButtonRoot>
    </Container>
  );
};

export default CardProduct;

const PartherPrice: React.FC<{ price: number }> = ({ price }) => {
  const [int, dec] = price.toFixed(2).toString().split(".");

  return (
    <h3>
      R$<span>{int},</span>
      {dec}
    </h3>
  );
};
