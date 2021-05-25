import styled from "styled-components";
import { Link } from "react-scroll";
import { FaMagento } from "react-icons/fa";

export const ContactContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) =>
    theme === "dark" ? "var(--dark-theme)" : "var(--light-theme)"};
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) =>
    theme === "dark" ? "var(--light-theme)" : "var(--dark-theme)"};
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: ${({ theme }) =>
    theme === "dark" ? "var(--light-theme)" : "var(--dark-theme)"};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;

export const SocialIconLink = styled.a`
  color: ${({ theme }) =>
    theme === "dark" ? "var(--light-theme)" : "var(--dark-theme)"};
  font-size: 24px;
`;
