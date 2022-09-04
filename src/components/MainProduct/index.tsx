import React from "react";
import { IProducts } from "../../interface/products";
import MainProductDesktop from "./MainProductDesktop";
import MainProductMobile from "./MainProductMobile";
import { Container } from "./styles";

const MainProduct: React.FC<{ product: IProducts }> = ({ product }) => {
  return (
    <Container>
      <MainProductDesktop product={product} />
      <MainProductMobile product={product} />
    </Container>
  );
};

export default MainProduct;
