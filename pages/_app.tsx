import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { comparer, reaction, toJS } from "mobx";
import { observer } from "mobx-react";

import user from "../provider/store/user";
import { ApiResponseProps } from "../types/type";
import { ArticleContext, UserContext } from "../provider/context";

function MyApp({ Component, pageProps }: AppProps) {
  const [article, setArticle] = useState<
    ApiResponseProps & { price: number }
  >();

  reaction(
    () => toJS(user.account),
    () => {
      user.save();
    },
    { equals: comparer.structural }
  );

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      user.setAccount(JSON.parse(userStorage));
    }
  }, []);

  return (
    <UserContext.Provider value={user}>
      <ArticleContext.Provider value={{ article, setArticle }}>
        <Component {...pageProps} />
      </ArticleContext.Provider>
    </UserContext.Provider>
  );
}

export default observer(MyApp);
