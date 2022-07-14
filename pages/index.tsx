import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../src/components/navbar/Navbar";
import HomePage from "./HomePage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Walcart</title>
        <meta name="description" content="shopping app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;
