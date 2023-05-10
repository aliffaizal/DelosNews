import "react-toastify/dist/ReactToastify.min.css";
import Head from "next/head";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import Container from "@/components/Container";
import Layout from "@/components/Layout";
import LuckyDraw from "@/components/LuckyDraw";
import user from "../provider/store/user";

const gatcha = () => {
  const namesList = ["ZONK", "🎁", "💎"];

  useEffect(() => {
    if (user.isHasLuckyDraw() && user.account.totalSpent >= 50000)
      user.setAccount({
        ...user.account,
        luckyDraw: user.account.luckyDraw + 3,
        totalSpent: user.account.totalSpent - 50000,
      });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Lucky Draw &mdash; DelosNews</title>
      </Head>
      <Container>
        <LuckyDraw items={namesList} />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </Container>
    </Layout>
  );
};

export default gatcha;
