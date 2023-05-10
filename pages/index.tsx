import Head from "next/head";
import { FC, useState } from "react";

import ArticleAll from "@/components/ArticleAll";
import Container from "@/components/Container";
import FilterArticle from "@/components/FilterArticle";
import SearchBar from "@/components/SearchBar";
import { OptionContext } from "../provider/context";
import { Option } from "../types/type";
import Layout from "@/components/Layout";

const Home: FC = () => {
  const [option, setOption] = useState<Option>("emailed");
  const [search, setSearch] = useState("");

  return (
    <Layout>
      <Head>
        <title>Home &mdash; DelosNews</title>
      </Head>
      <OptionContext.Provider value={{ option: option, setOption: setOption }}>
        <Container>
          <div className="flex">
            <SearchBar search={search} setSearch={setSearch} />
            <FilterArticle />
          </div>
          <ArticleAll search={search} />
        </Container>
      </OptionContext.Provider>
    </Layout>
  );
};

export default Home;
