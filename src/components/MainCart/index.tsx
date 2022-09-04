import { Button } from "@nextui-org/react";
import React from "react";
import { useDispatch } from "react-redux";
import { clearCart, finishCart } from "../../store/modules/cart/action";
import { ICart } from "../../store/modules/cart/thunk";
import ProductCartCard from "../ProductCartCard";
import {
  Container,
  ContainerButtons,
  Empty,
  Footer,
  ListCards,
  Title,
} from "./styles";
import { toast } from "react-toastify";

const MainCart: React.FC<{
  cart: { quantaty: number; cart: ICart[] | [] };
}> = ({ cart }) => {
  const totalPrice = [...cart.cart].reduce(
    (acc, cur) => acc + cur.priceMember! * cur.quantaty!,
    0
  );

  const dispatch = useDispatch();

  const finishOrder = () => {
    dispatch(finishCart() as any);
    toast.success("Compra finalizada");
  };

  const clearOrder = () => {
    dispatch(clearCart() as any);
    toast.success("Carrinho limpo");
  };

  return (
    <Container>
      {cart.cart.length > 0 ? (
        <>
          <ListCards>
            {cart.cart.map((ele) => (
              <ProductCartCard key={ele.id} product={ele} />
            ))}
          </ListCards>
          <Footer>
            <Title>Total de produtos: {cart.quantaty}</Title>
            <Title>
              Total: R$ {totalPrice.toFixed(2).toString().replace(".", ",")}
            </Title>
            <ContainerButtons>
              <Button
                onClick={clearOrder}
                size="sm"
                className="clear"
                color="error"
              >
                Limpar Carrinho
              </Button>
              <Button
                onClick={finishOrder}
                size="sm"
                className="finish"
                color="success"
              >
                Finalizar Compra
              </Button>
            </ContainerButtons>
          </Footer>
        </>
      ) : (
        <Empty>Adicione produtos no carrinho</Empty>
      )}
    </Container>
  );
};

export default MainCart;
