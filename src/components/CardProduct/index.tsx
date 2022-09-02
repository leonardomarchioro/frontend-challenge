import { Button, Card, Spacer } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { IProducts } from "../../interface/products";

// import { Container } from './styles';

const CardProduct: React.FC<{ product: IProducts }> = ({ product }) => {
  return (
    <div>
      <Card>
        <Image width={60} height={100} src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
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
      </Card>
      <Spacer />
      <Button>Adicionar</Button>
    </div>
  );
};

export default CardProduct;
