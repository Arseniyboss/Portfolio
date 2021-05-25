import {
  CardContainer,
  ProjectContainer,
  CardLink,
  Img,
  CardFooter,
  CardText,
} from "../../styles/Card";

const Project = ({ img, url, name }) => {
  return (
    <CardContainer>
      <ProjectContainer>
        <CardLink href={url} target="_blank" rel="noreferrer">
          <Img src={img} alt={name} />
          <CardFooter>
            <CardText>{name}</CardText>
          </CardFooter>
        </CardLink>
      </ProjectContainer>
    </CardContainer>
  );
};

export default Project;
