import { Button, Card, Image, Spacer } from "@nextui-org/react";

import React from "react";
import { IProducts } from "../../interface/products";
import { CardRoot } from "./styles";

const CardProduct: React.FC<{ product: IProducts }> = ({ product }) => {
  return (
    <div>
      <CardRoot isHoverable>
        <Card.Body>
          <Image src={product.image} alt={product.name} />
          <h6>{product.name}</h6>
          <div>
            <span>{product.price}</span>
            <span>{product.discount}% OFF</span>
          </div>
          <div>
            <span>SÓCIO WINE</span>
            <span>{product.priceMember}</span>
          </div>
          <div>
            <span>NÃO SÓCIO</span>
            <span>{product.priceNonMember}</span>
          </div>
        </Card.Body>
      </CardRoot>
      <Spacer />
      <Button>Adicionar</Button>
    </div>
  );
};

export default CardProduct;
