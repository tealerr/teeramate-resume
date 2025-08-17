import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import { ThemeProvider } from "./contexts";
import TopNavbar from "./components/Navbar";
import AboutMe from "./components/Bio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <TopNavbar />
        <main className="main-content">
          <AboutMe />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
