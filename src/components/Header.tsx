import { Select } from "./Select/Select";

export function Header() {
  const links = [
    {
      label: "Github",
      link: "https://github.com/rafaadeveloper",
    },
    {
      label: "Discord",
      link: "https://discord.gg/DYXYzrfgGy",
    },
  ];

  return (
    <header className="ml-auto flex items-center gap-8 text-secondary">
      {links.map((link, index) => (
        <a
          className="text-primary underline-offset-4 hover:underline hover:transition-all hover:duration-300"
          href={link.link}
          key={index}
        >
          {link.label}
        </a>
      ))}
      <Select />
    </header>
  );
}
