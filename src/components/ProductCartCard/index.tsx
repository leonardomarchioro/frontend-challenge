import { Card, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartThunk, {
  CartThunkStatus,
  ICart,
} from "../../store/modules/cart/thunk";
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardRoot,
  Infos,
  SImage,
} from "./styles";

const ProductCartCard: React.FC<{ product: ICart }> = ({ product }) => {
  const { cart } = useSelector(
    (state: { cart: { quantaty: number; cart: ICart[] } }) => state.cart
  );

  const [quantatyProd, setQuantatyProd] = useState(0);

  useEffect(() => {
    setQuantatyProd(product.quantaty!);
  }, [product]);

  const dispatch = useDispatch();

  const upQuantaty = () => {
    dispatch(cartThunk(CartThunkStatus.ADD, cart, product) as any);
    setQuantatyProd(quantatyProd + 1);
  };
  const downQuantaty = () => {
    dispatch(cartThunk(CartThunkStatus.REMOVE, cart, product) as any);
    quantatyProd === 0
      ? setQuantatyProd(quantatyProd)
      : setQuantatyProd(quantatyProd - 1);
  };

  return (
    <CardRoot isHoverable variant="shadow">
      <CardHeader>{product.name}</CardHeader>
      <CardBody>
        <>
          <SImage width={35} src={product.image} alt={product.name} />
          <Infos>
            <span>
              Preço: R$
              {product.priceMember.toFixed(2).toString().replace(".", ",")}
            </span>
            <span>Quantidade: {quantatyProd}/UN</span>
          </Infos>
        </>
      </CardBody>
      <CardFooter>
        <button onClick={downQuantaty}> - </button>
        <button onClick={upQuantaty}> + </button>
      </CardFooter>
    </CardRoot>
  );
};

export default ProductCartCard;
