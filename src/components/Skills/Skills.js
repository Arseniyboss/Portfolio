import { useThemeContext } from "../../contexts/ThemeContext";
import skills from "../../data/skills";
import Skill from "./Skill";
import { CardHeading, CardsContainer } from "../../styles/Card";

const Skills = () => {
  const { theme } = useThemeContext();
  return (
    <div id="skills">
      <CardHeading theme={theme}>My Skills</CardHeading>
      <CardsContainer theme={theme}>
        {skills.map((skill) => {
          return <Skill key={skill.id} {...skill} />;
        })}
      </CardsContainer>
    </div>
  );
};

export default Skills;
