import { Image } from "@nextui-org/react";
import React, { useEffect } from "react";
import { IProducts } from "../../../interface/products";

import ArrowInfos from "../../ArrowInfos";
import SpanRating from "../../SpanRating";
import ProductPrices from "../../ProductPrices";

import {
  ButtonContainer,
  CommentContaine,
  Container,
  ContainerInfos,
  SButtons,
  Spacer,
  Span,
  Title,
} from "./styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartThunk, {
  CartThunkStatus,
  ICart,
} from "../../../store/modules/cart/thunk";

const MainProductDesktop: React.FC<{ product: IProducts }> = ({ product }) => {
  const cart = useSelector((state: { cart: ICart[] }) => state.cart);

  const [quantaty, setQuantaty] = useState(0);

  useEffect(() => {
    const productOnCart = cart.find((ele) => ele.id === product.id);
    productOnCart && setQuantaty(productOnCart?.quantaty!);
  }, [cart, product]);

  const dispatch = useDispatch();

  const upQuantaty = () => {
    dispatch(cartThunk(CartThunkStatus.ADD, cart, product) as any);
    setQuantaty(quantaty + 1);
  };
  const downQuantaty = () => {
    dispatch(cartThunk(CartThunkStatus.REMOVE, cart, product) as any);
    quantaty === 0 ? setQuantaty(quantaty) : setQuantaty(quantaty - 1);
  };

  return (
    <Container className="Desktop">
      <Image src={product.image} alt={product.name} />
      <ContainerInfos>
        <div>
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
        </div>
        <ProductPrices
          priceMember={product.priceMember}
          priceNonMember={product.priceNonMember}
        />
        <CommentContaine>
          <h3>Comentário do Sommelier</h3>
          <p>{product.sommelierComment}</p>
        </CommentContaine>
        <ButtonContainer>
          <SButtons>
            <button
              onClick={downQuantaty}
              className={quantaty > 0 ? "" : "disable"}
            >
              -
            </button>
            <span>{quantaty}</span>
            <button onClick={upQuantaty}>+</button>
          </SButtons>
          <Spacer />
          <Span>Adicionar</Span>
        </ButtonContainer>
      </ContainerInfos>
    </Container>
  );
};

export default MainProductDesktop;
