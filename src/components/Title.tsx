"use client";

import { Picture } from "@/app/assets/Picture";
import useLanguage from "@/state/useLanguage";

export function Title() {
  const { texts } = useLanguage();
  return (
    <div className="space-y-4">
      <Picture />

      <div className="flex items-start flex-col">
        <h1 className="text-lg font-semibold">{texts.header.first}</h1>
        <p className="text-lg text-primary/70">
          {texts.header.second}
          <span className="text-emerald-400">{texts.header.name}</span>
        </p>
      </div>
    </div>
  );
}
