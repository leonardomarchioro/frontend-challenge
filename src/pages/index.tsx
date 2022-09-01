import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Showcase from "../components/Showcase";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wine</title>
      </Head>
      <Header />
      <Showcase />
      <></>
    </>
  );
};

export default Home;
