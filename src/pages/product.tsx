import React from "react";
import Head from "next/head";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { IResponse } from "../interface/products";

import Header from "../components/Header";

import { Body, SLink, Title } from "../styles/Pages/Product/styles";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import MainProduct from "../components/MainProduct";
import { Link } from "@nextui-org/react";

const Product: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { items } = useSelector(
    (state: { products: IResponse }) => state.products
  );

  const product = items.find((ele) => ele.id.toString() === id);

  return (
    <>
      <Head>
        <title>Wine - {product?.name}</title>
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
        {product ? (
          <MainProduct product={product} />
        ) : (
          <Title>Produto não encontrado</Title>
        )}
      </Body>
    </>
  );
};

export default Product;
