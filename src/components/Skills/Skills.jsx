import "./skills.css";
import { DiHtml5, DiCss3, DiJavascript1, DiGithubBadge } from "react-icons/di";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import SkillCards from "./SkillCards";

const Skills = () => {
  const skills = [
    { Name: "HTML", ClassName: "html", Icon: DiHtml5, delay: "0.4" },
    { Name: "CSS", ClassName: "css", Icon: DiCss3, delay: "0.8" },
    { Name: "JavaScript", ClassName: "js", Icon: DiJavascript1, delay: "1.2" },
    { Name: "Github", ClassName: "github", Icon: DiGithubBadge, delay: "1.6" },
    { Name: "React", ClassName: "react", Icon: FaReact, delay: "2.0" },
    { Name: "Tailwind", ClassName: "tailwind", Icon: FaCss3Alt, delay: "2.4" },
    { Name: "SASS", ClassName: "sass", Icon: SiSass, delay: "2.8" },
  ];

  return (
    <section className="skill-flex">
      <h3 className="h3-skills">Skills</h3>
      <article className="skills-container">
        {skills.map((skill) => {
          return (
            <SkillCards
              key={skill.Name}
              Name={skill.Name}
              ClassName={skill.ClassName}
              Icon={skill.Icon}
              delay={skill.delay}
            />
          );
        })}
      </article>
    </section>
  );
};

export default Skills;
