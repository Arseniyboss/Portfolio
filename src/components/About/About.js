import { Link } from "react-scroll";
import { Container, Button } from "../../globalStyles";
import { useThemeContext } from "../../contexts/ThemeContext";
import {
  AboutContainer,
  InfoRow,
  AboutSubHeading,
  AboutHeading,
  AboutDescription,
  Img,
} from "./Styles";

const About = () => {
  const { theme } = useThemeContext();
  return (
    <>
      <AboutContainer theme={theme} id="about">
        <Container>
          <InfoRow>
            <div>
              <AboutSubHeading>Hi! I'm Arseniy Zakharchenko</AboutSubHeading>
              <AboutHeading>Frontend Developer</AboutHeading>
              <AboutDescription>
                I enjoy creating modern and appealing UI using React. Also I
                provide high quality web development services with clean and
                manageable code
              </AboutDescription>
              <Link to="contact">
                <Button>Contact Me</Button>
              </Link>
            </div>
            <Img src="/portfolio.jpeg" alt="" />
          </InfoRow>
        </Container>
      </AboutContainer>
    </>
  );
};

export default About;
