"use client";

import clsx from "clsx";
import { useVisibility } from "@/state/useVisibility";
import { FlagEn, FlagEs, FlagPt } from "../Flags";
import useLanguage from "@/state/useLanguage";

export function SelectButton() {
  const { visibility, setVisibility } = useVisibility();
  const { language } = useLanguage();
  const renderFlag = () => {
    switch (language) {
      case "pt":
        return <FlagPt />;
      case "es":
        return <FlagEs />;
      case "us":
      default:
        return <FlagEn />;
    }
  };
  return (
    <div
      onClick={() => setVisibility(!visibility)}
      className={clsx(
        "w-fit p-2.5 rounded-md hover:bg-blue-200/5 cursor-pointer",
        visibility ? "bg-blue-200/10" : "bg-transparent"
      )}
    >
      {renderFlag()}
    </div>
  );
}
