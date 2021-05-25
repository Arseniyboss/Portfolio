import { CardContainer, Img } from "../../styles/Card";

const Skill = ({ img, name }) => {
  return (
    <CardContainer>
      <Img src={img} alt={name} />
    </CardContainer>
  );
};

export default Skill;
