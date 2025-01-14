"use client";

import useLanguage from "@/state/useLanguage";
import React from "react";
import { Dot } from "./ui/Dot";

export function ProfissionalExperiences() {
  const { texts } = useLanguage();
  const experiences = ["Code Studio", "Black Network", "Lado Leste RP"];
  return (
    <div className="flex flex-col gap-2">
      <h2>{texts.experiences}</h2>

      <ul className="flex flex-wrap gap-3 items-center text-secondary">
        {experiences.map((experience, index) => (
          <React.Fragment key={experience}>
            <li>{experience}</li>
            {index < experiences.length - 1 && <Dot />}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
