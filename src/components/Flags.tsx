import pt from "../../public/pt-br.png";
import en from "../../public/en.png";
import es from "../../public/es.png";

import Image from "next/image";

export function FlagPt() {
  return (
    <Image
      width={24}
      height={24}
      src={pt}
      alt="Brazil Flag"
      draggable={false}
    />
  );
}

export function FlagEn() {
  return (
    <Image width={24} height={24} src={en} alt="EUA Flag" draggable={false} />
  );
}

export function FlagEs() {
  return (
    <Image
      width={24}
      height={24}
      src={es}
      alt="Spanish Flag"
      draggable={false}
    />
  );
}
