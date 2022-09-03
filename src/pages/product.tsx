import React from "react";
import Head from "next/head";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { IResponse } from "../interface/products";

import Header from "../components/Header";

import { Body } from "../styles/Pages/Product/styles";
import { Image, Link } from "@nextui-org/react";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import MainProduct from "../components/MainProduct";

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
        <Link href="/">
          <>
            <MdOutlineArrowBackIosNew size={30} />
            Voltar
          </>
        </Link>
        {product ? (
          <MainProduct product={product} />
        ) : (
          <h1>Produto não encontrado</h1>
        )}
      </Body>
    </>
  );
};

export default Product;
