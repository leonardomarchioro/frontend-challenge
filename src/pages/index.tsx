import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import PriceFilter from "../components/PriceFilter";
import Showcase from "../components/Showcase";
import { Main } from "../styles/Pages/Home/styles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wine</title>
      </Head>
      <Header />
      <Main>
        <PriceFilter />
        <Showcase />
      </Main>
      <></>
    </>
  );
};

export default Home;
