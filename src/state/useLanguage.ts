import { create } from "zustand";

const translations = {
  pt: {
    header: {
      first: "Olá, eu sou o Rafael",
      second: "mas você pode me chamar de ",
      name: "Rafa7",
    },
    default: {
      first: 'Sou um desenvolvedor ',
      role: 'front-end',
      second: 'Sou um jovem que vive mergulhado no mundo da tecnologia. Desde criança, descobri a minha paixão pelos computadores.'
    },
    experiences: 'Minhas experiências profissionais',
    skills: "Minhas habilidades",
    findMeUsing: "Me encontre usando:",
  },
  es: {
    header: {
      first: "Hola, soy Rafael",
      second: "pero tú puedes llamarme ",
      name: "Rafa7",
    },
    default: {
      first: 'Soy desarrollador ',
      role: 'front-end',
      second: 'Soy un joven que vive inmerso en el mundo de la tecnología. Desde pequeño descubrí mi pasión por los ordenadores.'
    },
    experiences: 'Mis experiencias profesionales',
    skills: "Mis habilidades",
    findMeUsing: "Me encontré usando:",
  },
  us: {
    header: {
      first: "Hi, Im Rafael",
      second: "but you can call me ",
      name: "Rafa7",
    },
    default: {
      first: 'Im a ',
      role: 'Front-end developer',
      second: 'I am a young man who lives immersed in the world of technology. Since I was a child, I discovered my passion for computers.'
    },
    experiences: 'My professional experiences',
    skills: "My skills",
    findMeUsing: "Find me using:",
  },
};

type TranslationKeys = keyof typeof translations;
type TranslationValues = (typeof translations)[TranslationKeys];

const useLanguage = create<{
  language: TranslationKeys;
  texts: TranslationValues;
  setLanguage: (lang: TranslationKeys) => void;
}>((set) => ({
  language: "pt",
  texts: translations["pt"],
  setLanguage: (lang) =>
    set({
      language: lang,
      texts: translations[lang],
    }),
}));

export default useLanguage;
