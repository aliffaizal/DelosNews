import "react-toastify/dist/ReactToastify.min.css";
import Head from "next/head";
import { observer } from "mobx-react";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import ArticleDetail from "@/components/ArticleDetail";
import BtnBuy from "@/components/BtnBuy";
import Container from "@/components/Container";
// import Layout from "@components/Layout"
import { ArticleContextType } from "../types/type";
import { ArticleContext, UserContext } from "../provider/context";
import { order } from "../services/order";
import Layout from "@/components/Layout";

const Detail = () => {
  const { article } = useContext(ArticleContext) as ArticleContextType;
  const user = useContext(UserContext)!;
  const router = useRouter();

  useEffect(() => {
    if (!article) {
      router.push("/");
    }
  }, []);

  const onOrderClick = async () => {
    await order(user, article!);
    setTimeout(() => {
      router.push("/");
    }, 2500);
  };

  return (
    <Layout>
      <Head>
        <title>Detail &mdash; DelosNews</title>
      </Head>
      <Container>
        <ArticleDetail />
        <BtnBuy onOrderClick={onOrderClick} />
        <ToastContainer
          position="bottom-center"
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

export default observer(Detail);
