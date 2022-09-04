import { Button, Image } from "@nextui-org/react";
import React from "react";
import { IProducts } from "../../../interface/products";

import ArrowInfos from "../../ArrowInfos";
import SpanRating from "../../SpanRating";
import ProductPrices from "../../ProductPrices";

import {
  ButtonContainer,
  CommentContaine,
  Container,
  ContainerInfos,
  DiscointPrice,
  Footer,
  Price,
  PricesContainer,
  Title,
} from "./styles";
import { useState } from "react";
import ModalQuantaty from "../../ModalQuantaty";

const MainProductMobile: React.FC<{ product: IProducts }> = ({ product }) => {
  const [show, setShow] = useState(false);

  const handleMenu = () => setShow(!show);

  return (
    <>
      <ModalQuantaty open={show} close={handleMenu} />
      <Container className="Mobile">
        <ContainerInfos>
          <ArrowInfos country={product.country} region={product.region} />
          <Title>{product.name}</Title>
          <SpanRating
            classification={product.classification}
            country={product.country}
            flag={product.flag}
            rating={product.rating}
            type={product.type}
            volume={product.volume}
            avaliations={product.avaliations}
          />
        </ContainerInfos>
        <Image src={product.image} alt={product.name} />

        <CommentContaine>
          <h3>Comentário do Sommelier</h3>
          <p>{product.sommelierComment}</p>
        </CommentContaine>

        <Footer>
          <PricesContainer>
            <DiscointPrice>{product.discount}% OFF</DiscointPrice>
            <Price>
              R${product.price.toFixed(2).toString().replace(".", ",")}
            </Price>
            <ProductPrices
              priceMember={product.priceMember}
              priceNonMember={product.priceNonMember}
            />
          </PricesContainer>
          <ButtonContainer>
            <Button onClick={handleMenu}>Adicionar</Button>
          </ButtonContainer>
        </Footer>
      </Container>
    </>
  );
};

export default MainProductMobile;
