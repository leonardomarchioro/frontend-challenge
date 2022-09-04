import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ICart } from "../../store/modules/cart/thunk";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { Container } from "./styles";

const Header: React.FC = () => {
  const [quantaty, setQuantaty] = useState(0);
  const cart = useSelector(
    (state: { cart: { quantaty: number; cart: ICart[] } }) => state.cart
  );

  useEffect(() => {
    setQuantaty(cart.quantaty);
  }, [cart.quantaty]);

  return (
    <Container>
      <Desktop quantaty={quantaty} />
      <Mobile quantaty={quantaty} />
    </Container>
  );
};

export default Header;
