"use client";

import useLanguage from "@/state/useLanguage";

export function Description() {
  const { texts } = useLanguage();
  return (
    <div className="text-secondary max-w-md">
      <p>
        {texts.default.first}
        <span className="text-primary capitalize">{texts.default.role}</span>
      </p>

      <p>{texts.default.second}</p>
    </div>
  );
}
