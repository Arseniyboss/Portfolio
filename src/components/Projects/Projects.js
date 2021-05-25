import { useThemeContext } from "../../contexts/ThemeContext";
import projects from "../../data/projects";
import Project from "./Project";
import { CardHeading, CardsContainer } from "../../styles/Card";

const Projects = () => {
  const { theme } = useThemeContext();
  return (
    <div id="projects">
      <CardHeading theme={theme}>My Projects</CardHeading>
      <CardsContainer theme={theme}>
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </CardsContainer>
    </div>
  );
};

export default Projects;
