import { ContactMe } from "./ContactMe";
import { Description } from "./Description";
import { ProfissionalExperiences } from "./ProfessionalExperiences";
import { Skills } from "./Skills";
import { Title } from "./Title";

export function Index() {
  return (
    <section className="flex-1 flex items-center justify-center">
      <div className="max-w-2xl w-full flex flex-col items-start gap-8">
        <Title />
        <Description />
        <ProfissionalExperiences />
        <Skills />
        <ContactMe />
      </div>
    </section>
  );
}
