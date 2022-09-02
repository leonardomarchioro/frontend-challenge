import React from "react";

import { IProducts, IResponse } from "../../interface/products";

import CardProduct from "../CardProduct";
import LoadProducts from "../LoadProducts";
import { Container, ListProducts, TotalProductsFind } from "./styles";

const Showcase: React.FC<{ products: IResponse }> = ({ products }) => {
  return (
    <Container>
      {products.items && products.items.length ? (
        <>
          <TotalProductsFind>
            <strong>{products.totalItems}</strong>
            produtos encontrados
          </TotalProductsFind>
          {
            <ListProducts>
              {products.items.map((ele: IProducts) => (
                <CardProduct product={ele} key={ele.id} />
              ))}
            </ListProducts>
          }
        </>
      ) : (
        <LoadProducts />
      )}
    </Container>
  );
};

export default Showcase;
