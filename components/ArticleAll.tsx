import React, { FC, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import apiArticle from "@/api";
import { ApiResponseProps, OptionContextType } from "../types/type";
import { OptionContext } from "../provider/context";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

type ArticleListProps = {
  search: string;
};

const ArticleAll: FC<ArticleListProps> = ({ search }) => {
  const { option } = useContext(OptionContext) as OptionContextType;
  const { data, error } = apiArticle(option);

  return (
    <div className="flex -mx-4 flex-wrap mt-6">
      {error && toast.error("Error loading articles")}
      {!data && !error ? (
        <Loading />
      ) : (
        data.results
          .filter((article: ApiResponseProps) => {
            if (search.length === 0) return true;
            return article.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((item: ApiResponseProps) => (
            <ArticleCard key={item.id} data={item} />
          ))
      )}

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ArticleAll;
