import SectionTitle from "./SectionTitle";
import profileImg from "../assets/profile.png";
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="align-element grid sm:grid-cols-2 items-center gap-8">
        <div className="flex justify-center items-center">
          <img
            src={profileImg}
            className="h-64 w-64 rounded-full object-cover"
          />
        </div>
        <article>
          <SectionTitle text={"About me"} />
          <p className="text-slate-600 mt-8 leading-loose">
            I’m Seung — a software engineer with a strong background in backend
            development, and enterprise systems. I'm currently working on
            finance/accounting-related automation and SaaS integrations, and I
            love building tools that solve real-world workflow pain points.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
