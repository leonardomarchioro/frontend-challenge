import { Image } from "@nextui-org/react";
import React from "react";
import { IProducts } from "../../interface/products";

const MainProduct: React.FC<{ product: IProducts }> = ({ product }) => {
  return (
    <div>
      <Image src={product.image} alt={product.name} />
    </div>
  );
};

export default MainProduct;
