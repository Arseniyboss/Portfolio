import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 160px 0;
  background: ${({ theme }) =>
    theme === "dark" ? "var(--dark-theme)" : "var(--light-theme)"};
  color: ${({ theme }) =>
    theme === "dark" ? "var(--light-theme)" : "var(--dark-theme)"};
  @media screen and (max-width: 897px) {
    padding: 70px 0;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 897px) {
    justify-content: center;
  }
`;

export const AboutSubHeading = styled.div`
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

export const AboutHeading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 1.1;
`;

export const AboutDescription = styled.p`
  max-width: 440px;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 50%;
  @media screen and (max-width: 897px) {
    margin-top: 3rem;
  }
`;
