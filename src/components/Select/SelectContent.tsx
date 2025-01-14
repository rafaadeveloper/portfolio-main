import clsx from "clsx";
import { FlagEn, FlagEs, FlagPt } from "../Flags";
import useLanguage from "@/state/useLanguage";
import { useVisibility } from "@/state/useVisibility";

interface LanguagesSelectData {
  path: "pt" | "es" | "us";
  flag: JSX.Element;
}

export function SelectContent() {
  const { setLanguage } = useLanguage();
  const { setVisibility, visibility } = useVisibility();
  const handleChangeLanguage = (event: "pt" | "es" | "us") => {
    setLanguage(event);
    setVisibility(!visibility);
  };
  const languages: LanguagesSelectData[] = [
    {
      path: "pt",
      flag: <FlagPt />,
    },
    {
      path: "us",
      flag: <FlagEn />,
    },
    {
      path: "es",
      flag: <FlagEs />,
    },
  ];
  return (
    <div className="absolute top-20 rounded-md w-auto p-1 h-auto border border-solid border-white/10">
      {languages.map((language, index) => (
        <div
          key={index}
          onClick={() => handleChangeLanguage(language.path)}
          className={clsx(
            "w-fit p-2.5 rounded-md hover:bg-blue-200/5 cursor-pointer"
          )}
        >
          {language.flag}
        </div>
      ))}
    </div>
  );
}
