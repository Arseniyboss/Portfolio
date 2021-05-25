import { useThemeContext } from "../../contexts/ThemeContext";
import { FaInstagram, FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import {
  ContactContainer,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Styles";

const Contact = () => {
  const { theme } = useThemeContext();
  return (
    <ContactContainer theme={theme} id="contact">
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>
            Copyright © {new Date().getFullYear()}. All Rights Reserved
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="mailto:arseniyboss5@gmail.com"
              target="_blank"
              aria-label="Envelope"
              rel="noopener noreferrer"
              theme={theme}
            >
              <MdMail />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com/arseniy_zakharchenko/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
              theme={theme}
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="tel:+380505057150"
              target="_blank"
              aria-label="Phone"
              rel="noopener noreferrer"
              theme={theme}
            >
              <FaPhone />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </ContactContainer>
  );
};

export default Contact;
