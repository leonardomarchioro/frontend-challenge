import { Button, Spacer } from "@nextui-org/react";

import Path from "../../assets/path.svg";

import React, { useCallback } from "react";
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
  SPath,
  Title,
} from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";

const CardProduct: React.FC<{ product: IProducts }> = ({ product }) => {
  const router = useRouter();

  const replacePrice = (price: number) =>
    price.toFixed(2).toString().replace(".", ",");

  const handleProductPage = () => {
    router.push(`/product?id=${product.id}`);
  };

  return (
    <Container>
      <CardRoot isHoverable>
        <CardBody>
          <SImage src={product.image} alt={product.name} />
          <SPath>
            <Image src={Path} alt="Path" />
          </SPath>

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
        <Button onClick={handleProductPage}>Adicionar</Button>
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
