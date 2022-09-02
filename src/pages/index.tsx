import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import { Body } from "../styles/Pages/Home/styles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wine</title>
      </Head>
      <Header />
      <Body>
        <Main />
      </Body>
    </>
  );
};

export default Home;
