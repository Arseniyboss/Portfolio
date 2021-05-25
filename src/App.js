import { Navbar, About, Skills, Projects, Contact } from "./components";
import ThemeContextProvider from "./contexts/ThemeContext";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </ThemeContextProvider>
  );
};

export default App;
