import heroImg from "../assets/hero.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Seung</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Almost Full-Stack Engineer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Curious problem solver
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/wassup-chicken" target="#">
              <FaGithubSquare className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com/in/hongseungnyc" target="#">
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img
            src={heroImg}
            className="mx-auto w-72 h-80 lg:h-96 lg:w-80 rounded-4xl"
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
