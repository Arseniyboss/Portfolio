import styled from "styled-components";

export const CardHeading = styled.h1`
  text-align: center;
  color: ${({ theme }) =>
    theme === "dark" ? "var(--light-theme)" : "var(--dark-theme)"};
  background: ${({ theme }) =>
    theme === "dark" ? "var(--dark-theme)" : "var(--light-theme)"};
  padding-top: 2rem;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center center;
  background: ${({ theme }) =>
    theme === "dark" ? "var(--dark-theme)" : "var(--light-theme)"};

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: none;
  }
`;

export const CardContainer = styled.div`
  margin: 3rem 0;
`;

export const ProjectContainer = styled.div`
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardLink = styled.a`
  text-decoration: none;
`;

export const Img = styled.img`
  display: block;
  border-radius: 5px 5px 0 0;
  --size: 270px;
  height: var(--size);
  width: var(--size);

  @media screen and (max-width: 600px) {
    width: 60vw;
  }
`;

export const CardFooter = styled.div`
  padding: 1rem;
  background: #fff;
  border-bottom: 1px solid lightgrey;
  border-radius: 0 0 5px 5px;
`;

export const CardText = styled.p`
  text-align: center;
  text-transform: capitalize;
  color: #617c99;
  font-weight: bold;
`;
