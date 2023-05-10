import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArticleContextType } from "../types/type";
import { ArticleContext } from "../provider/context";

const ArticleDetail = () => {
  const { article } = useContext(ArticleContext) as ArticleContextType;
  const router = useRouter();

  useEffect(() => {
    if (!article) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {article && (
        <div>
          <div className="w-full mx-auto flex items-center flex-col text-gray-900">
            <div className="space-x-4 flex items-center text-gray-500 text-xs sm:text-base">
              <p>{article.published_date}</p>
              <span>&bull;</span>
              <p className="inline-flex items-center">
                {article.price > 0
                  ? "Rp. " + article.price.toLocaleString("id-ID")
                  : "Free"}
              </p>
              <span>&bull;</span>
              <p>{article.byline}</p>
            </div>
            <h2 className="text-lg sm:text-2xl mt-4 text-center">
              <Link href="/detail">
                <p>{article.title}</p>
              </Link>
            </h2>
          </div>
          <div className=" mx-auto my-10 flex justify-center">
            <Image
              alt=""
              width={300}
              height={300}
              src={
                article.media[0]
                  ? article.media[0]["media-metadata"][2]!.url
                  : ""
              }
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-8/12 justify-center w-full leading-relaxed text-gray-900">
            <p className="text-base sm:text-xl mb-4">{article.abstract}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleDetail;
