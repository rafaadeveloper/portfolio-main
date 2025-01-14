"use client";

import React from "react";
import useLanguage from "@/state/useLanguage";
import { Dot } from "./ui/Dot";

export function Skills() {
  const { texts } = useLanguage();
  const skills: string[] = [
    "TypeScript",
    "React",
    "Tailwindcss",
    "Figma",
    "Git/Github",
  ];
  return (
    <div className="flex flex-col gap-2">
      <h2>{texts.skills}</h2>

      <ul className="flex flex-wrap gap-3 items-center text-secondary">
        {skills.map((skill, index) => (
          <React.Fragment key={skill}>
            <li>{skill}</li>
            {index < skills.length - 1 && <Dot />}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
