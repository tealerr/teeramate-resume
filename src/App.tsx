import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/Navbar';
import AboutMe from './components/Bio';
import Experience from './components/Experience';


function App() {
  return (
     <div className="App">
      <TopNavbar />
      <div className="content">
        <AboutMe />
        <Experience />
      </div>
    </div>
  )
}

export default App
