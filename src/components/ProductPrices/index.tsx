import React from "react";
import { Container, PriceMember, PriceNonMember } from "./styles";

interface Iprops {
  priceMember: number;
  priceNonMember: number;
}

const ProductPrices: React.FC<Iprops> = ({ priceMember, priceNonMember }) => {
  const [int, dec] = priceMember.toFixed(2).toString().split(".");

  return (
    <Container>
      <PriceMember>
        R$<span>{int},</span>
        {dec}
      </PriceMember>

      <PriceNonMember>
        NÃO SÓCIO R$
        {priceNonMember.toFixed(2).toString().replace(".", ",")}
        /UN.
      </PriceNonMember>
    </Container>
  );
};

export default ProductPrices;
