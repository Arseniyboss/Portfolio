import { useState } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import { ImSun } from "react-icons/im";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenuContainer,
  NavMenu,
  NavMenuLink,
  NavItem,
  ThemeIcons,
} from "./Styles";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const { theme, toggleTheme } = useThemeContext();

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <IconContext.Provider
        value={{ color: theme === "dark" ? "#fff" : "#101522" }}
      >
        <Nav theme={theme}>
          <NavbarContainer>
            <NavLogo
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
              theme={theme}
            >
              Arseniy
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenuContainer>
              <NavMenu click={click} theme={theme}>
                <NavMenuLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleClick}
                >
                  <NavItem
                    theme={theme}
                    click={click}
                    style={{ animationDelay: "var(--animation-delay)" }}
                  >
                    About
                  </NavItem>
                </NavMenuLink>
                <NavMenuLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleClick}
                >
                  <NavItem
                    theme={theme}
                    click={click}
                    style={{
                      animationDelay: "calc(var(--animation-delay) * 2)",
                    }}
                  >
                    Skills
                  </NavItem>
                </NavMenuLink>
                <NavMenuLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleClick}
                >
                  <NavItem
                    theme={theme}
                    click={click}
                    style={{
                      animationDelay: "calc(var(--animation-delay) * 3)",
                    }}
                  >
                    Projects
                  </NavItem>
                </NavMenuLink>
                <NavMenuLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleClick}
                >
                  <NavItem
                    theme={theme}
                    click={click}
                    style={{
                      animationDelay: "calc(var(--animation-delay) * 4)",
                    }}
                  >
                    Contact
                  </NavItem>
                </NavMenuLink>
              </NavMenu>
              <ThemeIcons onClick={toggleTheme}>
                {theme === "dark" ? <ImSun /> : <FaMoon />}
              </ThemeIcons>
            </NavMenuContainer>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
