import { Link } from "@nextui-org/react";
import Head from "next/head";

import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import MainCart from "../components/MainCart";
import { ICart } from "../store/modules/cart/thunk";
import { Body, SLink } from "../styles/Pages/Cart/styles";

const Cart: React.FC = () => {
  const cart = useSelector(
    (state: { cart: { quantaty: number; cart: ICart[] } }) => state.cart
  );

  return (
    <>
      <Head>
        <title>Wine - Carrinho {cart.quantaty} items</title>
      </Head>
      <Header />
      <Body>
        <SLink>
          <Link href="/">
            <>
              <MdOutlineArrowBackIosNew size={30} />
              Voltar
            </>
          </Link>
        </SLink>
        <MainCart cart={cart} />
      </Body>
    </>
  );
};

export default Cart;
