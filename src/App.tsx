import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import TopNavbar from "./components/Navbar";
import AboutMe from "./components/Bio";
import Experience from "./components/Experience";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <TopNavbar />
        <main className="main-content">
          <AboutMe />
          <Experience />
        </main>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
