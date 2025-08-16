import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/Navbar.css";

function TopNavbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${isDarkMode ? "navbar-dark" : "navbar-light"}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          href="#bio"
          className="fw-bold"
          onClick={(e) => handleSmoothScroll(e, "bio")}
        >
          Teeramate Kantima
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#bio" onClick={(e) => handleSmoothScroll(e, "bio")}>
              Bio
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, "skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#experience"
              onClick={(e) => handleSmoothScroll(e, "experience")}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            >
              {isDarkMode ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
