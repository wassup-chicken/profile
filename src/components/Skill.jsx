import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skill = () => {
  return (
    <section className="py-15 align-element" id="skills">
      <SectionTitle text={"my skills"} />
      <div className="py-16 grid gap-8 sm:grid-cols-3 justify-center lg:grid-cols-4">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skill;
