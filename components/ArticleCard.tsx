import Image from "next/image";
import Link from "next/link";
import moment from "moment";
// import { CurrencyEuroIcon } from "@heroicons/react/outline"
import { FC, useContext } from "react";

// import noImage from "@assets/noImage.svg"
import { ApiResponseProps, ArticleContextType } from "../types/type";
import { ArticleContext } from "../provider/context";

type ArticleItemProps = {
  data: ApiResponseProps;
};

const ArticleCard: FC<ArticleItemProps> = ({ data }) => {
  const now = moment().format("YYYY-MM-DD");
  const diff = moment(now).diff(moment(data.published_date), "days");
  const price = diff <= 1 ? 50000 : diff <= 7 ? 20000 : 0;
  const { setArticle } = useContext(ArticleContext) as ArticleContextType;

  const onClickHandler = () => {
    setArticle({
      ...data,
      price: price,
    });
  };

  return (
    <div className="lg:w-4/12 md:w-6/12 w-full px-4 py-5 flex justify-center">
      <Link href="/detail">
        <div className="relative" onClick={onClickHandler}>
          <Image
            alt=""
            width={440}
            height={293}
            src={data.media[0] ? data.media[0]["media-metadata"][2]!.url : ""}
            className="w-full rounded-3xl mb-3"
          />
          <div className="absolute bottom-0 rounded-b-3xl px-3 pb-2 xs:pt-10 md:pt-20 bg-gradient-to-b from-transparent to-zinc-900 w-full">
            <h2 className="lg:text-lg md:text-sm text-gray-200 mb-2">
              {data.title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
