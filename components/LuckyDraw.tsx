import { FC, useContext, useState } from "react";
import { observer } from "mobx-react";

import LuckyDrawChoice from "./LuckyDrawChoice";
import LuckyDrawControls from "./LuckyDrawControls";
import { UserContext } from "../provider/context";

const LuckyDraw: FC<{ items: string[] }> = ({ items }) => {
  const user = useContext(UserContext)!;
  const [isRunning, setIsRunning] = useState(false);
  const [currentChoice, setCurrentChoice] = useState<string>("");
  const [_interval, _setInterval] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const intervalDuration = 25;

  const random = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  const setChoice = () => {
    setCurrentChoice(random()!);
  };

  const stop = () => {
    clearInterval(_interval);
    setIsRunning(false);
  };

  const start = () => {
    clearInterval(_interval);
    _setInterval(setInterval(setChoice, intervalDuration));
    setIsRunning(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 h-[75vh]">
      <LuckyDrawChoice choice={currentChoice} />
      <LuckyDrawControls isRunning={isRunning} start={start} stop={stop} />
      <p className="text-black">
        You have{" "}
        {user.isHasLuckyDraw()
          ? user.account.luckyDraw
          : Math.floor(user.account.totalSpent / 50000) * 3}{" "}
        chance
      </p>
    </div>
  );
};

export default observer(LuckyDraw);
