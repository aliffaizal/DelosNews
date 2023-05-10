import { FC } from "react";

type LuckyDrawChoiceProps = {
  choice: string;
};

const LuckyDrawChoice: FC<LuckyDrawChoiceProps> = ({ choice }) => {
  const content = choice.trim().length > 0 ? choice : "?";

  return (
    <div className="flex content-center m-0 mb-4 text-6xl text-center font-bold whitespace-nowrap text-black">
      <span>{content}</span>
    </div>
  );
};

export default LuckyDrawChoice;
