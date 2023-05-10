import { FC } from "react";

type BuyButtonProps = {
  onOrderClick: () => void;
};

const BtnBuy: FC<BuyButtonProps> = ({ onOrderClick }) => {
  return (
    <div className="flex justify-center fixed bottom-8 right-8 sm:static">
      <button
        type="button"
        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        onClick={onOrderClick}
      >
        Buy this article
      </button>
    </div>
  );
};

export default BtnBuy;
