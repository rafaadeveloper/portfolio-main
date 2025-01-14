"use client";

import useLanguage from "@/state/useLanguage";
import { Mail, Phone, Store } from "lucide-react";

export function ContactMe() {
  const { texts } = useLanguage();
  return (
    <div className="flex flex-col items-start gap-3">
      <h1>{texts.findMeUsing}</h1>
      <div className="flex flex-row items-start gap-3">
        <a
          target="_blank"
          href="https://wa.me/5511990076153"
          className="w-auto h-auto p-1.5 rounded-md flex items-center justify-center border border-solid border-white/10 hover:border-white hover:transition-all hover:duration-300"
        >
          <Phone size={24} />
        </a>
        <a
          target="_blank"
          href="mailto:rafadevcontatos@gmail.com"
          className="w-auto h-auto p-1.5 rounded-md flex items-center justify-center border border-solid border-white/10 hover:border-white hover:transition-all hover:duration-300"
        >
          <Mail size={24} />
        </a>
        <a
          target="_blank"
          href="https://discord.gg/DYXYzrfgGy"
          className="w-auto h-auto p-1.5 rounded-md flex items-center justify-center border border-solid border-white/10 hover:border-white hover:transition-all hover:duration-300"
        >
          <Store size={24} />
        </a>
      </div>
    </div>
  );
}
